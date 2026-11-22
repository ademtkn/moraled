# AGENTS.md — MoralEd için yapay zekâ çalışma rehberi

Bu dosya, bu depoda çalışan tüm yapay zekâ ajanları (Claude, Codex, Cursor, Gemini vb.)
ve yeni geliştiriciler içindir. Kullanıcı **Türkçe** yazışır.

## Proje

- Kırgızistan'daki K-12 okulları için değer temelli karakter eğitimi sitesi — https://moraled.com
- React 19 + **Vite 8** + react-router-dom 7 + i18next (Kasım 2026'ya kadar Create React App'ti)
- Diller: **kg** (varsayılan), ru, en — `src/locales/{kg,ru,en}/translation.json`
- Yayın: GitHub Pages (`npm run deploy`)

## Komutlar

```bash
npm install
npm start          # Vite → http://localhost:3000
npm run build      # uyarısız derlenmeli; sonunda rota başına HTML üretir
npm run lint       # 0 hata / 0 uyarı
npm run dev:soon   # yapım aşaması sayfası → http://localhost:3001
npm run deploy     # DİKKAT: yalnızca yapım aşaması sayfasını yayınlar
npm run deploy:full  # tam site (yalnızca kullanıcı "siteyi aç" dediğinde)
```

## Önce bunları okuyun

1. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** — tasarım kararları, referanslar, tokenlar, tuzaklar, **güncel durum ve yol haritası**
2. **[WORK_LOG.md](./WORK_LOG.md)** — yapılan işler, değişen dosyalar, testler, kalınan nokta ve sonraki adım
3. [I18N_GUIDE.md](./I18N_GUIDE.md) — çeviri kuralları
4. [README.md](./README.md) — genel bakış

İçerik çalışmasında ayrıca [CONTENT_SOURCES.md](./CONTENT_SOURCES.md) okunur; kaynakların kapsamı ve kullanıcının kişilere atfedilmeyen içerik tercihi korunur.

Sertifika çalışmasında [CERTIFICATES.md](./CERTIFICATES.md) okunur; yalnızca yayım onaylı gerçek kayıtlar eklenir, örnek görseller verilmiş belge sayılmaz.

## Kurallar

1. Renk, font, boşluk, köşe ve gölge için yalnızca `src/styles/tokens.css` değişkenlerini kullanın; sabit hex yazmayın.
2. Her yeni metin üç dile birden eklenir (anahtar paritesi korunmalı).
3. Tüm CSS global çalışır: yeni bileşenlerde benzersiz sınıf öneki kullanın (ana sayfa `hx-`). Yeni sayfa/bileşen CSS'i `src/styles/page-styles.js`'e doğru sıraya eklenir (sayfalar lazy yüklense de kaskad sırası buradan gelir).
3a. Yeni sayfa: `src/App.jsx`'te `lazy(() => import(...))` ile eklenir; `<Seo titleKey descriptionKey path>` prop'ları düz metin olmalı — `scripts/generate-route-html.js` bunları okuyup rota HTML'ini üretir. Sitemap'e de ekleyin.
4. İç sayfa başlığı için `<section className="<sayfa>-hero"><h1/><p/></section>` deseni kullanılır — `<sayfa>` gerçek sayfa adıdır (ör. `contact-hero`, `certificate-hero`); `ad-hero` diye harfiyen yazılmaz. Fotoğrafı `src/polish.css`'teki `.<sayfa>-hero { --hero-img: … }` satırı verir; sayfa içeriği `<main className="inner-page">` içinde olmalı. Kart/ızgara/CTA görünümü `src/styles/inner.css`'teki ortak kart dillerinden gelir — yeni kart sınıfını oradaki listeye ekleyin (DESIGN_SYSTEM.md §6).
5. Kırgızca **ң ө ү** glif testi yapılmadan font eklenmez.
5a. Görseller `<Picture>` bileşeniyle eklenir (`src/components/Picture.jsx`); yeni görselden sonra `python3 scripts/optimize-images.py` çalıştırılır. İç bağlantılar `<a href>` değil `<Link to>`.
5c. Logo yalnızca `src/assets/logo/` varyantlarından kullanılır (açık zemin: `moraled-horizontal.png`, koyu zemin: `*-dark.png`); kaynak logo değişirse `python3 scripts/build-logo-assets.py` çalıştırılır.
5b. Erişilebilirlik 0 ihlalde tutulur (axe, WCAG 2.1 AA): beyaz zeminde küçük turuncu metin `--c-sun-700`, başlık seviyeleri atlanmaz, her form alanının etiketi olur.
6. Uydurma istatistik, alıntı, referans ya da fotoğraf eklenmez; gerçek veri kullanıcıdan istenir.
7. Dosya silme, commit ve deploy kullanıcı onayı olmadan yapılmaz. Site şu an **yapım aşaması modunda**: `coming-soon/` dışındaki hiçbir şey yayınlanmaz; `deploy:full` yalnızca kullanıcı açıkça isterse çalıştırılır.
8. **Her çalışmada WORK_LOG.md kaydını ve iş bitince DESIGN_SYSTEM.md §9 "Durum" bölümünü güncelleyin.** Yeni işin talebini/kapsamını/planını başlangıçta; yapılanları, değişen dosyaları, kararları, gerçek doğrulama sonuçlarını ve kalanları anlamlı aşamalarda kaydedin. Bitirirken veya ara/limit kesintisi öncesinde kalınan noktayı ve sonraki ilk somut adımı yazın. Önceki kayıtları koruyun; yapılmamış işi tamamlandı göstermeyin. Geçici `/tmp` dosyaları tek kayıt yeri olamaz. Ayrıntılı yöntem ve şablon WORK_LOG.md içindedir.
