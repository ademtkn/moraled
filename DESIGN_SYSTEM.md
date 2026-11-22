# MoralEd Design System v2 — "Асман & Күн" (Gökyüzü & Güneş)

> **Son güncelleme:** 22 Kasım 2026 · **Durum:** Faz 1–4 tamamlandı (Vite'a geçildi); gerçek fotoğraflar bekleniyor (bkz. §9)
> Bu dosya tasarımın tek kaynağıdır. Siteye dokunan her insan ya da yapay zekâ
> önce bunu okumalı, işini bitirince **§9 Durum** bölümünü güncellemelidir.

---

## 1. Neden yeniden tasarım?

Eski görünümün sorunları:

- Logo **lacivert/mavi** (`#00266D`, `#0045A2`, `#007AE1`), site ise **teal + bej + kahverengi** geçişler kullanıyordu → marka uyumsuzluğu.
- Lora (serif) başlıklar + ortalanmış ikon kartları → hazır şablon hissi.
- Ana sayfa hero videosunda görünür **"iStock by Getty Images" filigranı** vardı.
- Hero butonu var olmayan `.values` öğesine kaydırıyordu (çalışmıyordu).

Hedef: üç referans sitenin en güçlü yanlarını alıp **logoyla uyumlu, MoralEd'e özgü** bir kimlik kurmak.

## 2. Referanslar ve her birinden alınanlar

| Referans | Aldığımız öğeler | Sitede nerede |
|---|---|---|
| [qundylyq.kz](https://qundylyq.kz/) — Kazakistan, değer eğitimi (en yakın emsal: aynı bölge, aynı dil ailesi, aynı kitle) | Büyük harfli kalın başlıklar · turuncu "fosforlu kalem" vurgusu · yaprak/kemer biçimli fotoğraf kolajı · tam genişlik koyu bantlar · beyaz daire ikonlu koyu kartlar ("avantajlar") ve boş hücrede CTA · büyük turuncu rakamlar · hap (pill) butonlar · footer'da "Sertifika doğrula" | Ana sayfa hero + rakam şeridi + tanım bandı + çerçeve kartları · tüm iç sayfa hero'ları · footer |
| [piermontpress.us](https://piermontpress.us/) — değer eğitimi yayıncısı | Fotoğraf karolarının köşesinde koyu etiket blokları · bento ızgara · harf aralıklı büyük harf üst etiketler · fotoğraf ağırlıklı editoryal düzen | "Keşfet" bento ızgarası · `.eyebrow` · `.chip` |
| [kivaprogram.net](https://www.kivaprogram.net/) — Finlandiya, zorbalık önleme | Siyah yerine lacivert mürekkep metin · sakin beyaz alan · sıcak gri panel içinde fotoğraf şeridi + sağda hap CTA · footer'da çerçeveli hap bağlantılar ve yuvarlak sosyal ikonlar · partner logoları dairelerde · ince çizgili liste | CTA paneli · footer · partner şeridi · "Bütüncül gelişim" listesi |

**Bize özgü olanlar (kopya değil):**

- Palet **logodan** türetildi (lacivert/mavi = gökyüzü, Ala-Too dağları) + **güneş turuncusu** (Kırgız bayrağındaki güneş). Qundylyq'in yeşili bilerek alınmadı.
- **Mevsim renkli "takvim yaprağı" değer kartları:** 3×3 ızgaranın her satırı bir mevsim — sonbahar (Eyl–Kas) turuncu, kış (Ara–Şub) lacivert, ilkbahar (Mar–May) açık mavi. Kartların üstünde takvim delikleri var.
- **"Айдын баалуулугу / Ценность месяца / Value of the month" rozeti:** bulunduğumuz aya göre otomatik değişir (yazın Eylül'ü gösterir); takvimde o ayın kartı turuncu halkayla vurgulanır.

## 3. Renkler — `src/styles/tokens.css`

| Token | Hex | Kullanım |
|---|---|---|
| `--c-navy-950` | `#071338` | Footer |
| `--c-navy-900` | `#0B1B4D` | Koyu bantlar, koyu kartlar, başlık metni |
| `--c-navy-800` | `#00266D` | Logo laciverti — başlıklar, menü |
| `--c-blue-700` | `#0045A2` | Logo mavisi — birincil buton |
| `--c-blue-500` | `#007AE1` | Parlak mavi — odak halkası, vurgu |
| `--c-sky-300 / 200 / 100 / 50` | `#7FB8FF` `#C9E0FB` `#E4EFFC` `#F2F7FD` | Açık mavi zeminler, koyu zeminde ikincil metin |
| `--c-sun-700` | `#C2410C` | Beyaz/kâğıt zeminde **küçük** turuncu metin: eyebrow, kart etiketleri, roller (5.2:1) |
| `--c-sun-600` | `#E8620F` | Beyaz zeminde yalnızca **büyük** turuncu rakamlar (adım no., istatistik, 404) |
| `--c-sun-500` | `#FF7A1A` | Turuncu buton/karo zemini |
| `--c-sun-400` | `#FF9A4D` | Fosforlu vurgu, koyu zeminde turuncu metin, çizgiler |
| `--c-sun-300 / 100` | `#FFC28F` `#FFF1E5` | Açık turuncu zeminler |
| `--c-paper` / `--c-paper-2` | `#F7F4EE` / `#EDE9E2` | Sıcak kâğıt bantlar / KiVa paneli |
| `--c-mist` | `#F5F7FB` | Gövde zemini |
| `--c-ink` / `-2` / `-3` | `#141C45` `#464E72` `#646B88` | Metin (saf siyah kullanılmaz); `-3` kâğıt zeminde de AA (4.8:1) |
| `--c-success-600/100`, `--c-danger-600/100` | `#15803D` `#E6F6EC` / sun-700, sun-100 | Yalnızca doğru/yanlış geri bildirimi (oyun) |
| `--c-line` | `#E2E5EE` | Kenarlıklar |

**Kurallar**

- Sabit hex yazmayın; her zaman `var(--c-…)` kullanın. (25 dosyadaki eski hex'ler betikle token'a çevrildi.)
- **Turuncu zemin üzerinde beyaz metin YOK** (kontrast 2.6:1). Turuncu buton = lacivert metin (6.3:1) → `.btn-sun`.
- Beyaz zeminde **küçük** turuncu metin → `--c-sun-700`; `--c-sun-600` (3.4:1) yalnızca 24px+ rakamlar için.
- Tüm sayfalar ve örnek pencereleri axe denetiminden (WCAG 2.1 AA) **sıfır ihlalle** geçiyor — yeni renk eklerken koruyun (§10).
- Koyu bantta turuncu için `--c-sun-400` kullanın.

## 4. Tipografi

- **Montserrat** 600/700/800 → başlıklar, butonlar, menü, etiketler (`--font-display`)
- **Inter** 400–700 → gövde metni (`--font-body`)
- Yükleme: `public/index.html` (Google Fonts). Lora kaldırıldı, yinelenen Inter bağlantısı temizlendi.

**Kırgızca glif testi (zorunlu):** Kırgızcadaki **ң ө ү** harfleri birçok fontta yoktur. Test sonucu:
Unbounded, Sofia Sans, Sofia Sans Semi Condensed, Wix Madefor Display → **BAŞARISIZ** (harfler yedek fonta düşüyor).
Montserrat, Manrope, Golos Text, Nunito, Rubik, Commissioner, Geologica, Inter, Raleway → sorunsuz.
Yeni font eklemeden önce `Жаңы муун үчүн баалуулуктарга негизделген билим` metniyle test edin.

**Ölçek ve kurallar**

- Ölçek değişkenleri `--fs-*`. Ana sayfa h1: `clamp(30px, 3.7vw, 54px)` (tek sütunda `clamp(30px, 6.4vw, 52px)`) — "БААЛУУЛУКТАРГА" gibi uzun kelimeler ortadan bölünmesin diye ayarlandı. Büyütmeden önce KG/RU metinle kontrol edin.
- **Büyük harf** yalnızca: hero h1, `.section-title`, etiketler/chip'ler. Kart başlıkları normal yazım.

## 5. Şekil dili

- **Butonlar (hap):** `.btn-primary` (mavi) · `.btn-outline` (lacivert çerçeve) · `.btn-sun` (turuncu, lacivert metin) · `.btn-light` / `.btn-ghost-light` (koyu bantlar için). Boyut: `.btn-sm`, `.btn-hero`. İçine `<i className="fas fa-arrow-right">` koyulursa hover'da kayar.
- **Köşeler:** `--r-md` 16px · `--r-lg` 24px · `--r-xl` 36px (panel) · `--r-pill`.
- **Yaprak fotoğraflar:** `.petal-arch` (kemer), `.petal-leaf`, `.petal-drop`, `.petal-round` — birer köşesi düz organik biçimler.
- **Gölgeler** lacivert tonlu: `--shadow-sm / md / lg`.

## 6. Bileşenler ve desenler

| Desen | Nasıl kullanılır |
|---|---|
| `.ds-container` | 1200px ortalanmış içerik kabı (yan boşluk `--gutter`) |
| `.eyebrow` (+ `--light`) | Başlık üstü harf aralıklı turuncu etiket |
| `.section-title` (+ `--light`), `.section-lead` | Bölüm başlığı (büyük harf, 800) ve giriş paragrafı |
| `.hl` | Fosforlu kalem vurgusu (çok satırda da çalışır). Ana sayfada başlığın son iki kelimesi otomatik sarılır → `splitForHighlight()` |
| `.chip` | Fotoğraf üstü koyu etiket (Piermont) |
| **Header** (`components/Header.js`) | Logo · menü · `KG RU EN` dil seçici · turuncu "İletişim" CTA. ≤1180px hamburger menü. Esc açılır menüleri kapatır. |
| **Footer** (`components/Footer.js`) | Lacivert; logo CSS ile beyaz/açık maviye boyanır (`.footer__logo .cls-*`); 3 bağlantı sütunu; SSS / Sertifika doğrula / Gizlilik hap bağlantıları; sosyal daireler. İç bağlantılar `<Link>` (tam sayfa yenileme yok). |
| **İç sayfa hero'su** | Sayfanın başına `<section className="ad-hero"><h1/><p/></section>` yazmak yeterli. `polish.css` içindeki `section[class*="-hero"]` kuralı lacivert bant + turuncu çizgi + sağda yaprak fotoğraf + güneş diskini otomatik uygular. Fotoğraf: `polish.css`'e `.ad-hero { --hero-img: url('./assets/heroes/foto.jpg'); }` ekleyin. |
| **Ana sayfa** (`pages/About.js` + `pages/Home.css`) | Bölümler: masthead → tanım bandı → değer takvimi → keşfet bento → çerçeve → örnek kaynaklar → bütüncül gelişim → gençlerin sesi → partnerler → CTA paneli |
| **Partner şeridi** (`components/partners`) | Ana sayfa ve `/moraled`'de; logolar beyaz dairelerde, sonsuz kayar |
| **Görseller** (`components/Picture.jsx`) | `<Picture src="/images/x.jpg" sizes="…" />` → WebP + 640px telefon varyantı, orijinal JPG yedek. Varyantlar `scripts/optimize-images.py` ile üretilir ve `src/data/imageManifest.json`'a yazılır. CSS arka planı için `webpUrl()`. `<picture>` `display: contents` olduğundan mevcut `.ebeveyn img` CSS'i aynen çalışır. Hero'daki görsele `priority` verin. |
| **Örnek pencereleri** (`components/samples`) | Başlık bandı türün rengini taşır (hikâye turuncu, şarkı mavi, oyun lacivert). Gerçek diyalog: `role="dialog"`, açılınca kapat butonuna odak, Esc ile kapanır, Tab içeride döner, kapanınca odak açan butona döner, sayfa kaydırması kilitlenir. Mobilde alttan açılan panel. Header'ın üstünde (z-index 1300). |
| **Erişilebilirlik iskeleti** | Her sayfada `<main id="main">`; Header'da yalnızca klavyeyle görünen "İçeriğe geç" bağlantısı (`common.skip_to_content`). Sayfa geçişinde `ScrollToTop` anında (`behavior: 'instant'`) en üste atlar. |
| **Kod bölme güvenliği** (`RouteFallback`, `RouteErrorBoundary`) | Lazy sayfa ilk kez indirilirken yalnızca header + boş gövde gösterilir (doğrudan ziyarette; gezinmede eski sayfa ekranda kalır). Parça indirilemezse: önce `src/index.jsx` sayfayı **bir kez** yeniler (`vite:preloadError`, yeni yayın sonrası eski parça durumu); yine olmazsa header + "Бет жүктөлгөн жок" + **Tekrar dene** ekranı (noindex, kendi başlığıyla). Başka sayfaya gidince hata temizlenir. |
| **İç sayfa gövdeleri** (`src/styles/inner.css`) | Tüm iç sayfalar `<main className="inner-page">` ile sarılı. Katman, sayfaların mevcut sınıf adlarını 6 ortak kart diline çevirir (aşağıdaki tablo). Bölümler 1200px içerik genişliğinde, beyaz/kâğıt dönüşümlü; başlıklar sola hizalı, büyük harf, üstünde turuncu çizgi. |

### İç sayfa kart dilleri (`src/styles/inner.css`)

| Kart dili | Görünüm | Kullanıldığı sınıflar |
|---|---|---|
| **A · Açık ikon kartı** | Beyaz, 24px köşe, ince çizgi; sol üstte açık mavi ikon dairesi (hover'da turuncuya döner); sola hizalı metin | `.value-card` `.feature-card` `.features-benefit-card` `.age-band-card` `.materials-card` `.research-method-card` `.bullying-tip-card` `.climate-work-card` `.volunteers-role-card` `.events-card` `.info-block` `.seminar-card` |
| **B · Lacivert özellik kartı** | Lacivert zemin, solda beyaz daire ikon, yatay (Qundylyq) | `.bullying-form-card` `.volunteers-benefit-card` |
| **C · Numaralı adım** | A kartı + sağ üstte turuncu "01"; kartlar arasında kesik bağlantı çizgisi | `.how-it-works-step` `.volunteers-step` |
| **D · Alıntı** | Lacivert bantta cam kart (liderler) · turuncu sol çizgili satır (kaynaklar) | `.leader-testimonial-card` · `.research-citation-card` |
| **E · Kişi kartı** | Ortalı, turuncu halkalı avatar, rol turuncu büyük harf | `.team-card` `.volunteers-roster-card` |
| **F · CTA paneli** | Sıcak gri panel (KiVa), solda başlık+metin, sağda buton, köşede turuncu halka | `.our-story-cta` `.join-mission` `.scope-cta` `.materials-cta` `.research-cta` `.bullying-cta` `.climate-cta` `.volunteers-cta` `.events-cta` `.faq-cta` `.moraled-cta` |

Diğer desenler: **editoryal iki sütun** (başlık solda, metin sağda — Climate, Vizyon, Aile bölümü, Sertifika girişi), **mevsim renkli takvim yaprakları** (yaş bandı sayfasındaki aylar; tablo satırlarında mevsim noktaları), **FAQ akordeonu**, **KiVa çizgili liste** (zorbalık belirtileri), **atölye panelleri** (Materials), **form kartı** (Contact, Sertifika).

**Yeni bir kart ızgarası eklerken:** ızgara sınıfını `inner.css`'teki ızgara listesine, kart sınıfını uygun kart dili listesine ekleyin. Sütun sayısı `--cols` ile (varsayılan 3; 4 ve 2 listeleri var). Yetim kart kalmaması için kart sayısını sütun sayısına göre seçin. Kâğıt zeminli bölüm için sınıfı "Sıcak kâğıt bantlar" listesine ekleyin.

### ⚠️ Tuzaklar (öğrenilmiş dersler)

1. **Tüm CSS global çalışır** (sayfalar lazy yüklense de CSS'leri `styles/page-styles.js` ile baştan, sabit sırayla yüklenir). Bir sayfanın CSS'i diğer sayfaları da etkiler. Yeni bileşenlerde benzersiz önek kullanın (ana sayfa: `hx-`).
2. Sınıf adında **`-hero`** geçen her `<section>` iç sayfa hero stilini alır. Ana sayfada bu yüzden "hero" kelimesi kullanılmadı (`hx-masthead`).
3. Hero görselleri `src/assets/heroes/` içinde ve CSS'ten **göreli yolla** (`url('./assets/heroes/x.webp')`) kullanılır; Vite bunları hash'li dosya olarak paketler. (CRA'da `/images/...` mutlak yolu derlemeyi kırıyordu; Vite'ta çalışır ama tutarlılık için göreli yol kullanın.)
4. `responsive-fixes.css` içindeki global `section {… !important}` kuralları yeni tasarımı bozar → yeni bölümlere `hx` sınıfı verin (kurallar `section:not(.hx)` ile sınırlı).
5. `@keyframes fadeInUp` birçok sayfada `opacity:0` + animasyonla kullanılıyor; ortak tanımı `index.css`'te. Silmeyin, yoksa içerik görünmez kalır.
6. `inner.css`'teki genel kurallar `:where()` ile **sıfır özgüllükte** yazıldı; özel durumlar `.inner-page .sinif` ile ezilir. Genel bir `section p` kuralı, özel sınıflı bir `<p>`'yi (ör. 404'teki `.not-found-code`) ezebilir — özel kuralı daha özgül yazın.
7. `.inner-page` **`display: flow-root`** kullanır: aksi hâlde son CTA panelinin alt boşluğu `<main>`'den taşar ve footer üstünde gri şerit görünür.
8. Beyaz zeminli illüstrasyonu renkli yaprak içine almak için zemin rengini **üst öğeye** verin, `<img>`'ye `mix-blend-mode: multiply` uygulayın (Our Story, ana sayfa).
9. Ekran görüntüsü alırken tam sayfa ölçümleri için önce sayfayı kaydırın (AOS/`fadeInUp` animasyonları görünmeyen içerik bırakabilir).
10. Sitede `html { scroll-behavior: smooth }` var: programatik "en üste git" için `window.scrollTo({ top: 0, behavior: 'instant' })` kullanın; aksi hâlde sayfa geçişinde yeni sayfa 800 ms boyunca aşağıdan yukarı kayar.
11. Eski sayfa CSS'lerinde bazı görünümler **`!important`** ile taşınıyordu. Bir sınıfı `inner.css`'e devralırken eski kuralı silmeden önce gerçekten ezildiğini doğrulayın (Faz 3'te hesaplanmış stil karşılaştırmasıyla yapıldı).
12. Görsel ekledikten sonra `python3 scripts/optimize-images.py` çalıştırın; manifestte olmayan görsel `<Picture>` ile sade `<img>` olarak (WebP'siz) gösterilir.
13. **Yeni sayfa/bileşen CSS'ini `src/styles/page-styles.js`'e ekleyin.** Aksi hâlde lazy sayfanın CSS'i `polish.css`/`inner.css`'ten sonra yüklenir ve eşit özgüllükteki kuralları ezer.
14. **`build.cssTarget` içine `es2020` koymayın.** Vite bunu Lightning CSS için eski bir Chrome'a çevirir; o da her `:is()` için `:-webkit-any()` yedeği üretir. Bu yedeğin özgüllüğü farklıdır ve mobil Scope tablosunun başlığını görünür yapmıştı.
15. **CommonJS paketlerinin varsayılan importu** üretim build'inde modül nesnesi olarak gelebilir (react-slick → React hatası #130). `const Slider = SlickSlider.default ?? SlickSlider;` kalıbı kullanılıyor.
16. react-helmet-async v3 (React 19) `index.html`'deki mevcut etiketleri devralmaz, kendi `<title>`/`<meta>`'sını ekler. Statik SEO etiketleri `data-seo-static` ile işaretli: `src/index.jsx` açılışta meta/link'leri siler; statik `<title>` ise ilk `<Seo>` yerleşince `Seo.jsx` tarafından silinir (yükleme anında başlıksız kalmamak için). Sonuç: her durumda tek `<title>`, tek açıklama/OG/canonical.
17. Sayfa `<Seo>` prop'ları (`titleKey`, `descriptionKey`, `path`) **düz metin** olmalı: `scripts/generate-route-html.js` bunları kaynak koddan okuyup rota HTML'ini üretir.

## 7. CSS katmanları ve yükleme sırası (`src/index.jsx`)

```
styles/tokens.css   → değişkenler
index.css           → temel stiller, butonlar, yardımcı sınıflar
styles/page-styles.js → tüm sayfa ve bileşen CSS'leri, sabit sırayla (App.jsx'in ilk importu)
responsive-fixes.css → eski sayfalar için mobil düzeltmeler
polish.css          → iç sayfa hero'ları, form alanları
styles/inner.css    → iç sayfa gövdeleri: kart dilleri, ızgaralar, CTA panelleri (EN SON)
```

Üretimde tek bir `index-*.css` (+ AOS için küçük `vendor-*.css`) çıkar; JS ise sayfa başına bölünür.
Vite → CRA geçişinde 18 sayfa × 2 genişlik piksel karşılaştırmasıyla görünümün değişmediği doğrulandı.

## 8. Bu çalışmada eklenen çeviri anahtarları

`home.hero_eyebrow`, `home.hero_button_2`, `home.hero_badge`, `home.stat_values`, `home.stat_grades`, `home.stat_bands`, `home.stat_languages`, `home.explore_title`, `home.explore_subtitle`, `home.resources_eyebrow`, `home.framework_cta`, `common.skip_to_content` (Faz 3), `common.load_error_title`, `common.load_error_text`, `common.retry` (Faz 4) — üç dilde de var (parite: 682 anahtar). KG/RU metinleri yapay zekâ yazdı; ana dili konuşan biri kontrol etmeli.

Rakam şeridindeki değerler (9 değer · 1–11. sınıflar · 4 yaş bandı · 3 dil) müfredatın kendisinden gelir. **Uydurma istatistik eklemeyin**; gerçek etki rakamları (okul/öğretmen/öğrenci sayısı) kullanıcıdan alınmalıdır.

## 9. Durum ve yol haritası

### Faz 1 — tamamlandı (21 Kasım 2026)

- [x] Token sistemi, temel stiller, hap buton sistemi, yardımcı sınıflar
- [x] Fontlar: Lora → Montserrat (Inter kaldı)
- [x] Yeni Header (dil seçici `KG RU EN`, turuncu CTA, yeni mobil menü)
- [x] Yeni Footer (beyaz logo, 3 sütun, sertifika bağlantısı, `<Link>`)
- [x] Ana sayfa baştan tasarlandı; iStock filigranlı video kaldırıldı; çalışmayan kaydırma butonları düzeltildi
- [x] 25 CSS dosyasında eski palet → token (370 satır)
- [x] Tüm iç sayfa hero'ları tek tip; Scope & Sequence, yaş bandı sayfaları, Team ve Features'a hero eklendi (Team'deki eksik `h1` düzeltildi)
- [x] Partner şeridi ve form alanları yeni stilde
- [x] Doğrulama: `npm run build` uyarısız; 1440/1366/1280/1200/1181/390px; KG/RU/EN; menü, dil, modal etkileşimleri; JS hatası yok

### Faz 2 — iç sayfa gövdeleri: tamamlandı (21 Kasım 2026)

- [x] 17 iç sayfa `<main className="inner-page">` ile sarıldı (erişilebilirlik: sayfalarda `<main>` bölgesi yoktu)
- [x] Yeni katman `src/styles/inner.css`: 6 kart dili (A–F), 1200px bölüm genişliği, beyaz/kâğıt ritmi, sola hizalı büyük harfli başlıklar
- [x] Dar, ortalanmış 4'lü şablon kartlar → açık ikon kartları; Zorbalık türleri ve Gönüllülük faydaları → lacivert özellik kartları
- [x] Features ve Gönüllü başvuru adımları → numaralı adım kartları + bağlantı çizgisi
- [x] Our Story: hikâye/inanç yaprak görseller, lacivert misyon bandı, editoryal vizyon, lacivert liderler bandı
- [x] Scope & Sequence tablosu (mevsim noktaları), yaş bandı kartları, yaş sayfasında mevsim renkli ay kartları (3 sütunlu gövde)
- [x] FAQ akordeonu, Contact bilgi + form kartı, Materials atölye panelleri, Research kaynak satırları, Team/gönüllü kişi kartları, MoralEd galeri + seminer kartları, 404, Gizlilik tipografisi
- [x] 11 sayfa sonu CTA'sı → KiVa paneli (mavi gradyan bantlar kaldırıldı)
- [x] Doğrulama: `npm run build` uyarısız; 17 sayfa 1440px + 390px, KG + RU; mobilde yatay taşma yok; JS hatası yok; yetim kart yok

### Faz 3 — tamamlandı (21 Kasım 2026)

- [x] **Örnek pencereleri** (hikâye/şarkı/oyun) yeniden tasarlandı: tür renkli başlık bandı, sahne kartı, oklu seçimler, şarkıda turuncu karaoke satırı, oyunda A/B/C rozetleri + ✓/✗ ve doğru/yanlış renkleri, mobilde alttan panel. Diyalog erişilebilirliği eklendi (odak tuzağı, Esc, odak iadesi, kaydırma kilidi).
- [x] **21 iç bağlantı** `<a href>` → `<Link>` (13 sayfa): tam sayfa yenileme yok (test edildi). `ScrollToTop` artık anında en üste atlıyor (önceden 800 ms kayıyordu).
- [x] **Görsel optimizasyonu:** `scripts/optimize-images.py` (WebP + 640px varyant + manifest) ve `<Picture>` bileşeni; ana sayfa, Our Story, Team, galeri, partnerler, Materials arka planları ve iç sayfa hero yaprakları WebP. `whole-child-success.svg` 275 KB → 47 KB WebP; görsellerde toplam ~%45 tasarruf, mobilde telefon boyu varyantlar.
- [x] **Erişilebilirlik:** axe (WCAG 2.1 AA + best practice) 18 rota × KG/RU/EN × 1440/390px ve 3 pencere → **0 ihlal**. Düzeltilenler: küçük turuncu metin kontrastı (→ `sun-700`), `--c-ink-3` koyulaştırıldı, başlık sırası (footer h4→h2, kart başlıkları), sertifika formunda etiketsiz gizli alan, "İçeriğe geç" bağlantısı, `<main id="main">`.
- [x] **Ölü CSS temizliği:** 20 sayfa/bileşen CSS'i 3199 → ~1170 satır (`inner.css`'in devraldığı ve hiç kullanılmayan kurallar). Hesaplanmış stil + piksel karşılaştırmasıyla doğrulandı: 18 sayfa × 2 genişlikte görünüm aynı. Bilinçli 2 fark: mobilde adım numaraları ("01–04") artık görünüyor; yaş sayfasında artık gereksiz 28px üst boşluk kalktı.
- [x] **Kullanılmayan dosyaların silinmesi** — kullanıcı `git rm` ile sildi (hero.mp4, Wave*.js, waves/, patterns/, icons/).

### Faz 4 — tamamlandı (22 Kasım 2026)

- [x] **CRA → Vite 8 geçişi:** `react-scripts` kaldırıldı → `npm audit` **46 açık → 0**, paket sayısı ~1500 → 251. Geliştirme sunucusu ~0.5 sn, build ~1 sn. JSX dosyaları `.jsx` oldu; `index.html` köke taşındı; logo `logo.svg?react` (vite-plugin-svgr). Hedef tarayıcılar CRA'ya yakın tutuldu (Chrome/Edge 88+, Firefox 78+, Safari 14+). ESLint 10 eklendi (`npm run lint` → 0 sorun).
- [x] **Sayfa başına kod bölme:** ana sayfa dışındaki 17 sayfa `React.lazy` (her biri 0.4–1 KB gzip; galeri sayfası slick ile 17 KB, yaş sayfası konu verisiyle 12 KB). Çekirdek kütüphaneler ayrı `vendor` parçasında (yayınlar arasında önbellekte kalır). İlk yükleme: tek paket 232 KB → ana 83 KB + vendor 101 KB (gzip). Yeni yayından sonra eski parça bulunamazsa sayfa bir kez yenilenir (`vite:preloadError`).
- [x] **Paylaşım görseli:** `public/og-image.jpg` 1200×630, 101 KB (eski 273 KB stok foto yerine marka kartı; şablon `scripts/og-image.html`).
- [x] **SEO / sosyal önizleme düzeltmesi:** GitHub Pages alt sayfalara HTTP 404 dönüyordu (SPA yönlendirme hilesi) ve `index.html`'de hiç OG etiketi yoktu → Google bu sayfaları atlayabilir, WhatsApp/Telegram önizleme göstermez. Artık `npm run build` her rota için `build/<rota>.html` üretir (20 rota, Kırgızca başlık/açıklama/canonical/OG) → alt sayfalar **200** döner. Yerel GitHub Pages emülatörüyle doğrulandı.
- [x] `<html lang>` artık `ky` (önceden `kg` = Kongo dili kodu).
- [x] **Kod bölme hata güvenliği** (22 Kasım, ikinci oturum): `RouteErrorBoundary` + `RouteFallback`; statik `<title>` yükleme boyunca korunur, sonra tek başlık. Test edildi: parça indirilemezse tam 1 otomatik yenileme → hata ekranı → "Tekrar dene" sayfayı kurtarıyor; gezinme sırasında hata → geri gidince temizleniyor; hata ekranı axe 0 ihlal.
- [x] Doğrulama: 18 sayfa × 1440/390px Vite ↔ CRA piksel karşılaştırması aynı (tek fark: form açılır okunda 2px tarayıcı çizim gürültüsü, stiller birebir aynı); axe 0 ihlal; etkileşimler (SPA geçişi, dil, pencere, içeriğe geç, galeri) hatasız.

> ✅ **Canlı site (22 Kasım 2026):** moraled.com yayında — **yapım aşaması modu** (yalnızca `coming-soon/` sayfası). 21–22 Kasım'da site kapalıydı ("Site not found"): alan adı hiçbir repoya atanmamıştı; yeni gh-pages yayını (`CNAME=moraled.com`) alan adını `ademtkn/moraled`'e bağladı. HTTPS (Let's Encrypt) ve http→https yönlendirmesi çalışıyor.
> ⚠️ **www.moraled.com** için DNS kaydı yok (GoDaddy, `domaincontrol.com`). Kullanıcı GoDaddy DNS'e `CNAME  www → ademtkn.github.io` eklemeli; GitHub sonra www'yi otomatik olarak moraled.com'a yönlendirir.

### Yapım aşaması sayfası — yayında (22 Kasım 2026)

- `coming-soon/` (statik HTML + küçük JS, React yok) + `vite.soon.config.js` → `build/`. Paket: JS 2 KB, CSS 4 KB (gzip); tam siteye ait hiçbir kod/metin içermez (doğrulandı).
- 3 dil (KG varsayılan, HTML'de gömülü → JS'siz crawler'lar da görür), dil tercihi tam siteyle aynı `localStorage.i18nextLng` anahtarında.
- Footer: iletişim (adres, e-posta, telefon, Instagram/YouTube) + `© {yıl} Moral Education. All rights reserved.` + line.kg.
- `404.html` = aynı sayfa → bilinmeyen tüm adresler bu sayfayı gösterir. axe 0 ihlal (3 dil × 2 genişlik).
- `npm run deploy` artık bu sayfayı yayınlar; tam site için `npm run deploy:full`.
- **v2 tasarım "Таң" (Şafak, 22 Kasım 2026):** Ala-Too üzerinde doğan güneş — şafak gradyanı, güneş/gökyüzü parıltıları, yıldızlar, gren dokusu; şeffaf header + beyaz logo + cam dil seçici; altın gradyan başlık; dönen güneş ışınları ve yörünge içinde dairesel fotoğraflar; **ayın değeri** kartı (tarihe göre otomatik, Eyl–May); 9 değerin kayan bandı; dağ silüetinden doğan footer ve cam iletişim kartları. Giriş animasyonları yalnızca JS varken; `prefers-reduced-motion`'da kapalı.
- Sayfanın görselleri `coming-soon/assets/` içinde (kopya). `../src/assets/...` yolları build'de çalışıyor ama **geliştirme sunucusunda (`dev:soon`) kırılıyordu** — Vite kökü `coming-soon/` olduğundan tarayıcı `/src/assets/...` istiyor. Sayfaya görsel eklerken bu klasöre koyun.
- Başlık genişliği ölçülerek ayarlandı: 1024–1440px'te üç dilde de tam 2 satır (sütun 1.16fr, yazı en çok 54px).

### Faz 5 — sıradakiler

1. **Gerçek fotoğraflar** (kullanıcı erteledi): partner okullardan izinli sınıf fotoğrafları. Eklenince `scripts/optimize-images.py` çalıştırılmalı.
2. İsteğe bağlı: çevirileri dile göre ayrı yükleme (3 dil ana pakette ~60 KB gzip; yalnızca aktif dili indirmek ~35–40 KB kazandırır, dil değiştirmede kısa bekleme getirir).
3. İsteğe bağlı: rota HTML'lerini Rusça için de üretmek (`/ru/...` gibi ayrı URL'ler gerekir — şimdilik tek URL, Kırgızca meta).
4. Kullanılmayan kalanlar: `src/App.css`, `src/logo.svg`, `src/assets/hero-bg.jpg`, `public/images/hero-bg.*`, `src/assets/heroes/harmony.jpg` (silmek için onay).

## 10. Nasıl doğrulanır

```bash
npm start                # Vite → http://localhost:3000
npm run build            # uyarısız derlenmeli + "generate-route-html: 20 routes" satırı
npm run preview          # build/ → http://localhost:4173
npm run lint             # 0 sorun
```

- Dil değiştirmek için sağ üstteki `KG RU EN` ya da `localStorage.i18nextLng = 'kg' | 'ru' | 'en'`.
- Her değişiklikten sonra en az: ana sayfa + bir iç sayfa, 1440px ve 390px genişlikte, KG ve RU dillerinde.
- Erişilebilirlik: tarayıcıda axe DevTools eklentisi (veya `axe-core`) ile sayfayı tarayın — hedef 0 ihlal.
- Görseller: `python3 scripts/optimize-images.py` (Pillow gerekir: `pip install pillow`).
