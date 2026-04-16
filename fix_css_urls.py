#!/usr/bin/env python3
"""
Fix remote url() references inside downloaded CSS files.
Handles:
- Background images in Elementor post CSS files
- Poppins font files from WordPress
- Icon/eicon font files
"""

import re, subprocess
from pathlib import Path

ASSETS = Path('/Users/oscarbrendon/.openclaw/workspace/nypt-local-clone/assets')
SITE = 'https://newyorkpersonaltraining.com'

# Only fix CSS files from the site itself (skip third-party Squarespace/Crisp)
SKIP_PATTERNS = ['squarespace', 'crisp', 'static_versioned', 'universal_styles', 'website-component']

remote_url = re.compile(r"url\(['\"]?(https?://[^)'\"]+|//[^)'\"]+)['\"]?\)")


def safe_filename(url: str) -> str:
    # Strip protocol
    clean = re.sub(r'^https?://', '', url)
    clean = clean.replace('//', '/')
    # Strip query string
    clean = clean.split('?')[0]
    # Flatten
    name = clean.replace('/', '_')
    if len(name) > 200:
        ext = Path(clean).suffix or '.bin'
        name = name[:190] + ext
    return name


def fetch(url: str, out: Path) -> bool:
    if out.exists() and out.stat().st_size > 0:
        return True
    out.parent.mkdir(parents=True, exist_ok=True)
    r = subprocess.run(
        ['curl', '-L', '-A', 'Mozilla/5.0', '--silent', '--fail', '--max-time', '30',
         url, '-o', str(out)],
        capture_output=True
    )
    return r.returncode == 0 and out.exists() and out.stat().st_size > 0


def normalize_url(url: str) -> str:
    if url.startswith('//'):
        url = 'https:' + url
    return url


def fix_css_file(f: Path, cache: dict) -> bool:
    text = f.read_text(errors='ignore')
    changed = False

    def replacer(m):
        nonlocal changed
        full_match = m.group(0)
        url = normalize_url(m.group(1))

        # Skip data URIs, local refs
        if url.startswith('data:') or url.startswith('#'):
            return full_match

        if url in cache:
            changed = True
            return f"url('../assets/{cache[url]}')"

        filename = safe_filename(url)
        out = ASSETS / filename

        if fetch(url, out):
            cache[url] = filename
            changed = True
            return f"url('../assets/{filename}')"
        else:
            # Can't download — leave as-is but print warning
            print(f'  FAIL: {url[:80]}')
            return full_match

    new_text = remote_url.sub(replacer, text)
    if changed:
        f.write_text(new_text)
    return changed


def main():
    cache = {}
    total_fixed = 0

    for f in sorted(ASSETS.iterdir()):
        if f.suffix != '.css':
            continue
        # Skip third-party CSS files
        if any(skip in f.name for skip in SKIP_PATTERNS):
            continue

        text = f.read_text(errors='ignore')
        if not remote_url.search(text):
            continue

        print(f'Fixing {f.name[:70]}...')
        if fix_css_file(f, cache):
            total_fixed += 1
            print(f'  -> fixed')

    print(f'\nFixed {total_fixed} CSS files, cached {len(cache)} assets')


if __name__ == '__main__':
    main()
