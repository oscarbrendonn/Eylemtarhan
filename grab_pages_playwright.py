import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

BASE = Path('/Users/oscarbrendon/.openclaw/workspace/nypt-local-clone')
PAGES = {
    'index.html': 'https://newyorkpersonaltraining.com/',
    'contact.html': 'https://newyorkpersonaltraining.com/contact/',
    'about.html': 'https://newyorkpersonaltraining.com/aboutus/',
    'pricing.html': 'https://newyorkpersonaltraining.com/price/',
    'trainers.html': 'https://newyorkpersonaltraining.com/trainers/',
    'personal-training.html': 'https://newyorkpersonaltraining.com/personal-training/',
    'faq.html': 'https://newyorkpersonaltraining.com/faq/',
    'blog.html': 'https://newyorkpersonaltraining.com/blog/',
}
SERVICE_PAGES = {
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
ALL = {**PAGES, **SERVICE_PAGES}


def relink(html: str):
    mapping = {v: k for k, v in ALL.items()}
    mapping.update({v.rstrip('/'): k for k, v in ALL.items()})
    for src, dest in sorted(mapping.items(), key=lambda x: -len(x[0])):
        html = html.replace(src, dest)
    return html

async def main():
    async with async_playwright() as p:
        browser = await p.firefox.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1440, 'height': 2400})
        for filename, url in ALL.items():
            print('fetch', url, flush=True)
            await page.goto(url, wait_until='networkidle', timeout=90000)
            await page.wait_for_timeout(2500)
            html = await page.content()
            html = relink(html)
            (BASE / filename).write_text(html)
        await browser.close()

asyncio.run(main())
