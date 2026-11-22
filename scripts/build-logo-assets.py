#!/usr/bin/env python3
"""MoralEd — web logo variants from the master logo (Pillow only).

Usage (repo root):  python3 scripts/build-logo-assets.py
Source:             src/assets/logo/moraled-logo-source.png (transparent PNG, stacked logo:
                    M-figure + open book, "MoralEd", "CHARACTER EDUCATION")

Outputs
  src/assets/logo/   moraled-horizontal.png       mark + "MoralEd", for light backgrounds (header)
                     moraled-horizontal-dark.png  same, navy turned white — for dark backgrounds
                     moraled-stacked.png          full logo incl. subtitle, light backgrounds
                     moraled-stacked-dark.png     full logo, dark backgrounds (footer)
                     moraled-mark.png             mark only (also in coming-soon/assets)
  coming-soon/assets/  the two *-dark files (that page has a dark background)
  public/            favicon-32.png, favicon-48.png, apple-touch-icon.png (180, white),
                     icon-192.png, icon-512.png (PWA / manifest)

The logo uses two brand colours: navy (#002068) and bright blue (#0078f0). The dark
variants keep the bright blue and turn navy into white, blending anti-aliased edges.
"""
import pathlib
from collections import deque

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'src/assets/logo/moraled-logo-source.png'
OUT_LOGO = ROOT / 'src/assets/logo'
OUT_SOON = ROOT / 'coming-soon/assets'
OUT_PUBLIC = ROOT / 'public'

NAVY = (0, 32, 104)
BLUE = (0, 120, 240)


def trim(im, pad=0):
    box = im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    box = (max(box[0] - pad, 0), max(box[1] - pad, 0), min(box[2] + pad, im.width), min(box[3] + pad, im.height))
    return im.crop(box)


def components(mask, w, h):
    """4-connected components of a binary mask (bytearray, 1 = ink). Returns label list + component info."""
    labels = [0] * (w * h)
    info = []
    for start in range(w * h):
        if not mask[start] or labels[start]:
            continue
        lab = len(info) + 1
        q = deque([start])
        labels[start] = lab
        n = sx = sy = 0
        x0, y0, x1, y1 = w, h, 0, 0
        while q:
            i = q.popleft()
            x, y = i % w, i // w
            n += 1; sx += x; sy += y
            x0, y0, x1, y1 = min(x0, x), min(y0, y), max(x1, x), max(y1, y)
            for j in (i - 1 if x else -1, i + 1 if x < w - 1 else -1, i - w, i + w):
                if 0 <= j < w * h and mask[j] and not labels[j]:
                    labels[j] = lab
                    q.append(j)
        info.append({'n': n, 'cy': sy / n, 'box': (x0, y0, x1 + 1, y1 + 1)})
    return labels, info


def select(im, labels, keep):
    """Copy of im containing only pixels whose (nearest) label is in keep; faint edge pixels follow neighbours."""
    w, h = im.size
    src = im.load()
    out = Image.new('RGBA', im.size, (0, 0, 0, 0))
    dst = out.load()
    for y in range(h):
        for x in range(w):
            lab = labels[y * w + x]
            if not lab:  # faint anti-aliased pixel: borrow a neighbour's label (2 px radius)
                for dy in (-1, 1, -2, 2, 0):
                    for dx in (-1, 1, -2, 2, 0):
                        xx, yy = x + dx, y + dy
                        if 0 <= xx < w and 0 <= yy < h and labels[yy * w + xx]:
                            lab = labels[yy * w + xx]
                            break
                    if lab:
                        break
            if lab in keep:
                dst[x, y] = src[x, y]
    return out


def to_dark(im):
    """Navy → white, bright blue kept; edges interpolated by how 'blue' the pixel is."""
    out = im.copy()
    px = out.load()
    for y in range(out.height):
        for x in range(out.width):
            r, g, b, a = px[x, y]
            if not a:
                continue
            t = (g - NAVY[1]) / (BLUE[1] - NAVY[1])  # 0 = navy, 1 = bright blue
            t = 0.0 if t < 0 else 1.0 if t > 1 else t
            px[x, y] = (round(255 + (BLUE[0] - 255) * t), round(255 + (BLUE[1] - 255) * t), round(255 + (BLUE[2] - 255) * t), a)
    return out


def fit_height(im, h):
    return im.resize((round(im.width * h / im.height), h), Image.LANCZOS)


def main():
    src = trim(Image.open(SRC).convert('RGBA'))
    w, h = src.size
    alpha = src.getchannel('A').tobytes()
    mask = bytearray(1 if a > 20 else 0 for a in alpha)
    labels, info = components(mask, w, h)

    # Rows: the subtitle sits below the only blank horizontal gap; the mark ends above the wordmark.
    wordmark_top = min(c['box'][1] for c in info if c['n'] > 200 and c['box'][2] - c['box'][0] < w * 0.25 and c['cy'] > h * 0.6)
    # The open book dips slightly below the wordmark's top, so classify by centre, not by bottom edge.
    mark_ids = {i + 1 for i, c in enumerate(info) if c['cy'] < wordmark_top and c['n'] > 30}
    sub_top = min(c['box'][1] for c in info if c['cy'] > h * 0.93)
    word_ids = {i + 1 for i, c in enumerate(info) if (i + 1) not in mark_ids and c['box'][1] < sub_top - 4 and c['n'] > 30}

    mark = trim(select(src, labels, mark_ids))
    word = trim(select(src, labels, word_ids))
    print(f'source {w}x{h}: mark {mark.size}, wordmark {word.size}, wordmark top y={wordmark_top}, subtitle y={sub_top}')

    # Horizontal lockup: mark | "MoralEd" (subtitle omitted — unreadable at header size).
    H = 240
    m = fit_height(mark, H)
    wd = fit_height(word, round(H * 0.42))
    gap = round(H * 0.12)
    horiz = Image.new('RGBA', (m.width + gap + wd.width, H), (0, 0, 0, 0))
    horiz.alpha_composite(m, (0, 0))
    horiz.alpha_composite(wd, (m.width + gap, round(H * 0.58) - wd.height // 2))

    stacked = fit_height(src, 720)

    OUT_LOGO.mkdir(parents=True, exist_ok=True)
    OUT_SOON.mkdir(parents=True, exist_ok=True)
    files = {
        OUT_LOGO / 'moraled-horizontal.png': horiz,
        OUT_LOGO / 'moraled-horizontal-dark.png': to_dark(horiz),
        OUT_LOGO / 'moraled-stacked.png': stacked,
        OUT_LOGO / 'moraled-stacked-dark.png': to_dark(stacked),
    }
    files[OUT_SOON / 'moraled-horizontal-dark.png'] = files[OUT_LOGO / 'moraled-horizontal-dark.png']
    files[OUT_SOON / 'moraled-stacked-dark.png'] = files[OUT_LOGO / 'moraled-stacked-dark.png']
    for path, img in files.items():
        img.save(path, optimize=True)
        print(f'{path.relative_to(ROOT)}  {img.size[0]}x{img.size[1]}  {path.stat().st_size // 1024} KB')

    # Mark only (M-figure + book), transparent — used inside the certificate illustrations.
    mark_img = fit_height(mark, 200)
    for path in (OUT_LOGO / 'moraled-mark.png', OUT_SOON / 'moraled-mark.png'):
        mark_img.save(path, optimize=True)
        print(f'{path.relative_to(ROOT)}  {mark_img.size[0]}x{mark_img.size[1]}')

    # Icons: the mark alone, centred on a square (transparent; apple-touch on white).
    def square(size, pad, bg=(0, 0, 0, 0)):
        canvas = Image.new('RGBA', (size, size), bg)
        inner = size - 2 * pad
        mk = mark.copy()
        mk.thumbnail((inner, inner), Image.LANCZOS)
        canvas.alpha_composite(mk, ((size - mk.width) // 2, (size - mk.height) // 2))
        return canvas

    icons = {
        'favicon-32.png': square(32, 1), 'favicon-48.png': square(48, 2),
        'apple-touch-icon.png': square(180, 22, (255, 255, 255, 255)),
        'icon-192.png': square(192, 16, (255, 255, 255, 255)), 'icon-512.png': square(512, 44, (255, 255, 255, 255)),
    }
    for name, img in icons.items():
        img.save(OUT_PUBLIC / name, optimize=True)
        print(f'public/{name}  {img.size[0]}x{img.size[1]}')


if __name__ == '__main__':
    main()
