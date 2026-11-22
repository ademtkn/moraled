# MoralEd — Moral Education Platform

Değerler temelli bir karakter eğitimi platformu. Kırgızistan'daki K-12 okullarına aylık
değer takvimi (9 değer, Eylül–Mayıs) ile karakter eğitimi sunar.

Canlı site: **https://moraled.com**

## ✨ Özellikler

- 🌍 **3 dil desteği**: İngilizce (EN), Kırgızca (KG), Rusça (RU) — varsayılan: Kırgızca
- 📚 **Sınıf bazlı müfredat**: 1–11. sınıflar için aylık konu planları
  - Early Elementary (1–2), Upper Elementary (3–4), Middle School (5–8), High School (9–11)
- 📱 **Tam responsive** tasarım (telefon / tablet / masaüstü) + kaydırılabilir mobil menü
- 🎯 **İnteraktif örnek kaynaklar**: hikâye (The Honest Fox), şarkı (Kindness Anthem),
  değer quiz'i (Value Quest) — üçü de tamamen üç dilde
- 🎥 Seminer videoları, fotoğraf galerisi, partner okul karuseli
- 🏅 Numara ile sertifika sorgulama, okul belgeleri listesi ve tasarım örnekleri — [kayıt ekleme rehberi](./CERTIFICATES.md)
- ✉️ EmailJS ile iletişim + sertifika yardım formları
- 🔍 Sayfa bazlı SEO (başlık, açıklama, OG/Twitter, canonical) — dile göre değişir
- 🚀 GitHub Pages + moraled.com özel alan adı (SPA derin link desteği)

## 🎨 Tasarım

Site, Kasım 2026'da **Design System v2 — "Асман & Күн"** ile yeniden tasarlandı: logodan türetilen
lacivert/mavi palet + güneş turuncusu vurgu, Montserrat + Inter. Referanslar: qundylyq.kz,
piermontpress.us, kivaprogram.net.

- Tasarım kararları, kurallar, güncel durum ve yol haritası: **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**
- Yapay zekâ ajanları ve yeni geliştiriciler için çalışma rehberi: **[AGENTS.md](./AGENTS.md)**
- Yapılan işler, dosya haritası, doğrulamalar, kalınan nokta ve sonraki adımlar: **[WORK_LOG.md](./WORK_LOG.md)** — her çalışmada güncellenir.

## 🚧 Yapım aşaması modu (Kasım 2026)

Tam site tamamlanana kadar moraled.com'da yalnızca 3 dilli (KG/RU/EN) "yapım aşamasında"
sayfası yayında: `coming-soon/` + `vite.soon.config.js`. Bu build bağımsızdır — tam sitenin
kodu, sayfaları ve metinleri yayın paketinde yoktur; bilinmeyen her adres (örn. `/our-story`)
aynı sayfayı gösterir. Footer'da iletişim bilgileri ve
`© 2026 Moral Education. All rights reserved.` + line.kg bağlantısı var.

Site açılışında: `npm run deploy:full`.

## 🌐 Diller (i18n)

- **Dosyalar:** `src/locales/{en,kg,ru}/translation.json` (her biri 750 anahtar, diziler dahil 787 son değer; tam parite)
- **Yapılandırma:** `src/i18n.js` — `fallbackLng: 'kg'`, dil tercihi `localStorage`'da
- Dil değiştirince `<html lang>` ve SEO başlıkları otomatik güncellenir
- Yeni anahtar ekleme rehberi: [I18N_GUIDE.md](./I18N_GUIDE.md)

## 🚀 Hızlı Başlangıç

Gereksinimler: Node.js 20.19+ veya 22.12+ (Vite 8)

```bash
npm install       # bağımlılıklar
npm start         # geliştirme sunucusu (Vite) → http://localhost:3000
npm run build     # üretim build'i → build/ (+ rota başına HTML, scripts/generate-route-html.js)
npm run preview   # build/ klasörünü yerelde sun → http://localhost:4173
npm run lint      # ESLint (hook kuralları, kullanılmayan değişkenler)
npm run test:certificates  # sertifika şeması, geçerlilik ve Bişkek gün sınırı
npm run deploy    # YALNIZCA "yapım aşamasında" sayfasını yayınlar (build:soon + gh-pages)
npm run deploy:full   # tam siteyi yayınlar — site açılışında kullanılacak
npm run dev:soon  # yapım aşaması sayfası → http://localhost:3001
python3 scripts/optimize-images.py   # görsel ekledikten sonra: WebP + telefon boyu varyantlar (Pillow gerekir)
```

## 🗂️ Yapı

- `src/pages/` — 17 sayfa (rota haritası `src/App.jsx`; ana sayfa dışındakiler ayrı JS parçası olarak yüklenir)
- `src/components/` — Header, Footer, Seo, galeri, partnerler, seminerler, örnek kaynaklar
- `src/data/ageTopics.js` — sınıf bazlı aylık konu planları (kg/ru/en)
- `src/data/curriculumCalendar.js` — ana sayfa, ay rozeti ve tüm müfredat sayfaları için ortak takvim
- `public/certificates/registry.json` — yalnızca yayım onaylı gerçek sertifika kayıtları (şu an boş)
- `CERTIFICATES.md` — sertifika kayıt/dosya ekleme ve açık erişim modeli
- `CONTENT_SOURCES.md` — Kırgızistan referansları ve yeni konuların kaynak/uyarlama kayıtları
- `src/locales/` — çeviri dosyaları
- `src/components/Picture.jsx` + `src/data/imageManifest.json` — WebP/srcset görseller (`scripts/optimize-images.py` üretir)
- `src/styles/page-styles.js` — tüm sayfa CSS'lerinin sabit global sırası (kod bölmeye rağmen kaskad korunur)
- `src/styles/tokens.css` — Design System v2 değişkenleri (renk, font, köşe, gölge)
- `src/responsive-fixes.css` — eski sayfalar için mobil düzeltme katmanı
- `src/polish.css` — iç sayfa hero'ları ve form alanları
- `src/styles/inner.css` — iç sayfa gövdeleri: ortak kart dilleri, ızgaralar, CTA panelleri (en son yüklenir)
- `index.html` — giriş HTML'i + crawler'lar için statik SEO/OG etiketleri
- `public/` — CNAME, sitemap, robots, 404 (SPA), görseller, `og-image.jpg` (paylaşım kartı)
- `scripts/` — `generate-route-html.js` (build sonrası), `optimize-images.py`, `og-image.html` (paylaşım kartı şablonu)

## 📦 Teknoloji

React 19, react-router-dom 7, i18next, react-slick, AOS, EmailJS, react-helmet-async,
**Vite 8** (Kasım 2026'da Create React App'ten geçildi: `npm audit` 46 açık → 0, geliştirme sunucusu
~0.5 sn'de açılır, sayfa başına kod bölme). ESLint 10 (flat config: `eslint.config.js`).

## 🔗 Referans çerçeveler

Müfredat içerikleri şu kaynaklar temel alınarak hazırlandı:

- Kırgız Cumhuriyeti Eğitim Geliştirme Programı 2021–2040 (Hükümet Kararı No. 200,
  04.05.2021) — birleşik terbiye politikası, sosyal-duygusal gelişim, aile/toplum katılımı
- [CASEL — SEL Fundamentals](https://casel.org/fundamentals-of-sel/)
- [Character.org — 11 Principles](https://character.org/11-principles-in-schools/)
- [Piermont Press — Pathways](https://piermontpress.us/) (değer eğitimi materyalleri)
