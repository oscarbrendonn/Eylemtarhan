import os, re, urllib.parse, subprocess
from pathlib import Path
from bs4 import BeautifulSoup

BASE = Path('/Users/oscarbrendon/.openclaw/workspace/nypt-local-clone')
ASSETS = BASE / 'assets'
ASSETS.mkdir(exist_ok=True)
PAGES = {
    'index.html': 'https://newyorkpersonaltraining.com/',
    'contact.html': 'https://newyorkpersonaltraining.com/contact/',
    'about.html': 'https://newyorkpersonaltraining.com/aboutus/',
    'pricing.html': 'https://newyorkpersonaltraining.com/price/',
    'trainers.html': 'https://newyorkpersonaltraining.com/trainers/',
    'personal-training.html': 'https://newyorkpersonaltraining.com/personal-training/',
    'faq.html': 'https://newyorkpersonaltraining.com/faq/',
    'blog.html': 'https://newyorkpersonaltraining.com/blog/',
    'barre-class.html': 'https://newyorkpersonaltraining.com/barre-class/',
    'buff-bride.html': 'https://newyorkpersonaltraining.com/buff-bride/',
    'corrective-exercise-training.html': 'https://newyorkpersonaltraining.com/corrective-exercise-training/',
    'hiit.html': 'https://newyorkpersonaltraining.com/hiit/',
    'kettlebell-workout.html': 'https://newyorkpersonaltraining.com/kettlebell-workout/',
    'marathon-preparation-training.html': 'https://newyorkpersonaltraining.com/marathon-preparation-training/',
    'massage-therapy.html': 'https://newyorkpersonaltraining.com/massage-therapy/',
    'pre-and-post-natal-training.html': 'https://newyorkpersonaltraining.com/pre-and-post-natal-training/',
    'reformer-pilates-class.html': 'https://newyorkpersonaltraining.com/reformer-pilates-class/',
    'stretch-therapy-class.html': 'https://newyorkpersonaltraining.com/stretch-therapy-class/',
}

page_url_to_file = {v.rstrip('/'):k for k,v in PAGES.items()}
page_url_to_file.update({v:k for k,v in PAGES.items()})

def safe_name(url):
    parsed = urllib.parse.urlparse(url)
    path = parsed.path.strip('/') or 'root'
    name = path.replace('/', '_')
    if parsed.query:
        name += '_' + re.sub(r'[^a-zA-Z0-9]+','_',parsed.query)[:40]
    ext = os.path.splitext(parsed.path)[1]
    if not ext or len(ext) > 6:
        ext = '.bin'
    if name.endswith(ext):
        return name
    return name + ext

def fetch(url, out):
    out.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(['curl','-L','-A','Mozilla/5.0','--silent',url,'-o',str(out)], check=True)

asset_cache = {}
def localize_asset(url):
    if not url or url.startswith('data:') or url.startswith('mailto:') or url.startswith('tel:') or url.startswith('#'):
        return url
    if url in asset_cache:
        return asset_cache[url]
    if url.startswith('//'):
        url = 'https:' + url
    if url.startswith('/'):
        url = 'https://newyorkpersonaltraining.com' + url
    if not url.startswith('http'):
        return url
    if url.rstrip('/') in page_url_to_file:
        return page_url_to_file[url.rstrip('/')]
    name = safe_name(url)
    out = ASSETS / name
    try:
        fetch(url, out)
        rel = 'assets/' + name
        asset_cache[url] = rel
        return rel
    except Exception:
        return url

def fix_html(file):
    text = file.read_text(errors='ignore')
    soup = BeautifulSoup(text, 'html.parser')
    for tag, attr in [('link','href'),('script','src'),('img','src'),('source','src'),('iframe','src'),('a','href')]:
        for el in soup.find_all(tag):
            val = el.get(attr)
            if not val:
                continue
            if tag == 'a':
                full = val
                if full.startswith('/'):
                    full = 'https://newyorkpersonaltraining.com' + full
                if full.startswith('https://newyorkpersonaltraining.com') and full.rstrip('/') in page_url_to_file:
                    el[attr] = page_url_to_file[full.rstrip('/')]
                elif full.startswith('https://newyorkpersonaltraining.com') and '/wp-content/' in full:
                    el[attr] = localize_asset(full)
                else:
                    el[attr] = val
            else:
                el[attr] = localize_asset(val)
    for el in soup.find_all(srcset=True):
        items = []
        for part in el['srcset'].split(','):
            bits = part.strip().split()
            if not bits: continue
            bits[0] = localize_asset(bits[0])
            items.append(' '.join(bits))
        el['srcset'] = ', '.join(items)
    file.write_text(str(soup))

for file in BASE.glob('*.html'):
    print('localize', file.name, flush=True)
    fix_html(file)
print('done')
