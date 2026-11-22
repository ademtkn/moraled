#!/usr/bin/env python3
"""MoralEd — görsel optimizasyonu (WebP + küçük varyant + manifest).

Kullanım (depo kökünden):
    python3 scripts/optimize-images.py

Gereksinim: Python 3 + Pillow  (pip install pillow)

Ne yapar (orijinal dosyalara DOKUNMAZ, çıktıları her seferinde yeniden üretir):
  1) public/images/** ve public/logos/* içindeki .jpg/.jpeg/.png dosyaları için
       ad.webp       — aynı boyut (en fazla 1600px genişlik), kalite 78
       ad-640.webp   — yalnızca orijinal 800px'ten genişse, 640px genişlik
     ve src/data/imageManifest.json dosyasını yazar. <Picture> bileşeni
     (src/components/Picture.js) bu manifesti okuyup <picture> + srcset üretir.
  2) public/images içindeki bir .svg'nin yanında aynı adlı .webp varsa
     (tarayıcıda önceden render edilmiş), manifeste o da eklenir.
  3) src/assets/heroes/*.jpg için ad.webp (en fazla 800px) üretir —
     iç sayfa hero yaprakları (src/polish.css) bunları kullanır.

Yeni görsel ekledikten sonra betiği yeniden çalıştırın.
"""
import json
import pathlib

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
MANIFEST = ROOT / 'src' / 'data' / 'imageManifest.json'
HEROES = ROOT / 'src' / 'assets' / 'heroes'

QUALITY = 78
MAX_W = 1600
SMALL_W = 640
SMALL_IF_WIDER_THAN = 800
HERO_MAX_W = 800
RASTER = {'.jpg', '.jpeg', '.png'}


def save_webp(img, dest, max_w):
    im = img
    if im.width > max_w:
        h = round(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.LANCZOS)
    im.save(dest, 'WEBP', quality=QUALITY, method=6)
    return im.size


def open_rgb(path):
    im = Image.open(path)
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA')
    else:
        im = im.convert('RGB')
    return im


def public_url(path):
    return '/' + path.relative_to(PUBLIC).as_posix()


def main():
    manifest = {}
    saved = 0
    for folder in ('images', 'logos'):
        for src in sorted((PUBLIC / folder).rglob('*')):
            ext = src.suffix.lower()
            if ext in RASTER and not src.stem.endswith('-640'):
                img = open_rgb(src)
                webp = src.with_suffix('.webp')
                w, h = save_webp(img, webp, MAX_W)
                entry = {'w': w, 'h': h, 'webp': public_url(webp)}
                if img.width > SMALL_IF_WIDER_THAN:
                    small = src.with_name(src.stem + '-640.webp')
                    save_webp(img, small, SMALL_W)
                    entry['small'] = public_url(small)
                manifest[public_url(src)] = entry
                before = src.stat().st_size
                after = webp.stat().st_size
                saved += max(0, before - after)
                print(f'{public_url(src):48} {before // 1024:>5} KB -> {after // 1024:>4} KB webp'
                      + (f'  (+640w {small.stat().st_size // 1024} KB)' if 'small' in entry else ''))
            elif ext == '.svg':
                companion = src.with_suffix('.webp')
                if companion.exists():
                    with Image.open(companion) as c:
                        manifest[public_url(src)] = {'w': c.width, 'h': c.height, 'webp': public_url(companion)}
                    print(f'{public_url(src):48} svg -> pre-rendered {companion.stat().st_size // 1024} KB webp')

    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + '\n', encoding='utf-8')
    print(f'\nmanifest: {MANIFEST.relative_to(ROOT)} ({len(manifest)} entries), ~{saved // 1024} KB saved vs originals')

    for src in sorted(HEROES.glob('*.jpg')):
        dest = src.with_suffix('.webp')
        save_webp(open_rgb(src), dest, HERO_MAX_W)
        print(f'hero {src.name:34} {src.stat().st_size // 1024:>5} KB -> {dest.stat().st_size // 1024:>4} KB')


if __name__ == '__main__':
    main()
