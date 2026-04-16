#!/usr/bin/env python3
"""
Fix broken asset paths in the NYPT local clone.

The grab_pages_playwright.py relink() did a global string replace of
  https://newyorkpersonaltraining.com/ → index.html
which corrupted paths like:
  href="https://newyork.../wp-content/..." → href="index.htmlwp-content/..."

This script:
1. Finds all index.htmlwp-content/... and index.htmlwp-includes/... paths
2. Downloads them from the original site
3. Replaces all occurrences in all HTML files with local assets/ paths
"""

import os, re, subprocess, urllib.parse
from pathlib import Path

BASE = Path('/Users/oscarbrendon/.openclaw/workspace/nypt-local-clone')
ASSETS = BASE / 'assets'
SITE = 'https://newyorkpersonaltraining.com'

# Pattern: index.html followed by wp-content or wp-includes path
BROKEN_PATTERN = re.compile(r'index\.html(wp-(?:content|includes)/[^"\'>\s\)]+)')


def safe_filename(wp_path: str) -> str:
    """Convert a wp-content/... path to a flat safe filename."""
    # Strip query string for filename
    clean = wp_path.split('?')[0]
    # Flatten slashes to underscores
    name = clean.replace('/', '_')
    # Limit length
    if len(name) > 200:
        ext = Path(clean).suffix or '.bin'
        name = name[:190] + ext
    return name


def fetch(url: str, out: Path) -> bool:
    """Download a URL to a file. Returns True on success."""
    if out.exists() and out.stat().st_size > 0:
        return True
    out.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        ['curl', '-L', '-A', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
         '--silent', '--fail', '--max-time', '30', url, '-o', str(out)],
        capture_output=True
    )
    return result.returncode == 0 and out.exists() and out.stat().st_size > 0


def collect_broken_paths(html_files):
    """Collect all unique broken wp-* paths across all HTML files."""
    broken = set()
    for f in html_files:
        text = f.read_text(errors='ignore')
        for m in BROKEN_PATTERN.finditer(text):
            broken.add(m.group(1))
    return broken


def build_path_map(broken_paths):
    """Download each broken path and return {wp_path: local_rel_path}."""
    path_map = {}
    total = len(broken_paths)
    for i, wp_path in enumerate(sorted(broken_paths), 1):
        # Strip query string from path for URL (keep for display)
        url_path = wp_path.split('?')[0]
        url = f"{SITE}/{url_path}"
        filename = safe_filename(wp_path)
        out = ASSETS / filename
        local_rel = f'assets/{filename}'

        print(f'[{i}/{total}] ', end='', flush=True)
        if fetch(url, out):
            print(f'OK   {filename[:80]}')
        else:
            print(f'FAIL {url_path[:80]}')
            # Still map it (file may be 0 bytes or missing — browser will skip)

        path_map[wp_path] = local_rel

        # Also map the version without query string (some references may lack it)
        bare = wp_path.split('?')[0]
        if bare not in path_map:
            path_map[bare] = local_rel

    return path_map


def fix_html(html_file: Path, path_map: dict):
    """Replace all broken index.html{wp_path} references in one HTML file."""
    text = html_file.read_text(errors='ignore')

    def replacer(m):
        wp_path = m.group(1)
        # Try exact match first, then try without query string
        if wp_path in path_map:
            return path_map[wp_path]
        bare = wp_path.split('?')[0]
        if bare in path_map:
            return path_map[bare]
        # fallback: reconstruct absolute URL so browser can at least try
        return f'{SITE}/{wp_path}'

    new_text = BROKEN_PATTERN.sub(replacer, text)
    if new_text != text:
        html_file.write_text(new_text)
        return True
    return False


def main():
    html_files = list(BASE.glob('*.html'))
    print(f'Found {len(html_files)} HTML files')

    print('\n=== Collecting broken paths ===')
    broken = collect_broken_paths(html_files)
    print(f'Unique broken wp-* paths: {len(broken)}')

    print('\n=== Downloading assets ===')
    path_map = build_path_map(broken)

    print('\n=== Fixing HTML files ===')
    for f in html_files:
        changed = fix_html(f, path_map)
        print(f'  {"FIXED" if changed else "skip"} {f.name}')

    print('\nDone!')


if __name__ == '__main__':
    main()
