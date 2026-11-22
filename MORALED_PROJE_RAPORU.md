# MoralEd Proje İnceleme Raporu

**Tarih:** 20 Kasım 2026
**İncelenen sürüm:** commit `3ba0241` (aigerim-shuguralieva/moraled-updated_1 → ademtkn/moraled)
**Local yol:** `/Users/ademtknmac/Desktop/WEBSITES/Moraled`

---

## 1. Genel Bakış

| Konu | Durum |
|---|---|
| Amaç | Kırgızistan'daki K-12 okullarına aylık değerler temelli karakter eğitimi sunan tanıtım/eğitim platformu |
| Site | https://moraled.com (şu an aigerim'in reposundan yayınlanıyor — taşıma bekliyor) |
| Teknoloji | React 19.2 + Create React App (react-scripts 5.0.1) + react-router-dom 7 + i18next + react-slick + AOS + EmailJS |
| Diller | İngilizce (EN), Kırgızca (KG), Rusça (RU) — varsayılan: Kırgızca |
| Build | ✅ Başarılı (18.33 kB CSS / 924 kB JS tek bundle) |
| Dev server | ✅ Çalışıyor — `npm start` → http://localhost:3000 |
| Test | ❌ Hiç test dosyası yok |
| Tip güvenliği | JavaScript (TypeScript yok) |

---

## 2. Mimari ve Dosya Yapısı

```
src/
├── App.js                  # 18 route tanımı (BrowserRouter + HelmetProvider)
├── index.js                # Giriş noktası, React 19 createRoot
├── i18n.js                 # i18next yapılandırması (EN/KG/RU)
├── components/
│   ├── Header.js           # Navbar (2 dropdown + dil seçici + mobil menü)
│   ├── Footer.js           # Footer (sosyal linkler, iletişim)
│   ├── Seo.js              # Helmet ile dinamik SEO (title, OG, Twitter, canonical)
│   ├── ScrollToTop.js      # Sayfa geçişinde scroll sıfırlama
│   ├── WaveTop/WaveBottom  # Dekoratif dalga SVG'leri
│   ├── gallery/GallerySlider.js   # react-slick fotoğraf slider'ı
│   ├── partners/PartnersSection.js # Partner okul logoları (sonsuz kaydırma)
│   ├── seminars/SeminarSection.js  # 3 adet gömülü YouTube videosu
│   └── samples/            # Ana sayfa interaktif örnekleri
│       ├── SampleModal.js  # Story / Song / Game seçici
│       ├── StoryHonestFox.js      # İnteraktif hikâye
│       ├── SongKindnessAnthem.js  # Şarkı sözleri
│       └── GameValueQuest.js      # 5 soruluk mini quiz
├── data/ageTopics.js       # Yaş bandı konuları (KAO Kyrgyzstan.xlsx'ten, 1-4. sınıflar)
├── locales/{en,kg,ru}/translation.json  # 523'er çeviri anahtarı
└── pages/                  # 17 sayfa (her biri Header + içerik + Footer kalıbında)
```

## 3. Sayfa / Route Haritası

| Route | Sayfa | Not |
|---|---|---|
| `/` | About (ana sayfa) | Hero video, 9 değer kartı, framework, örnek kaynaklar, testimonial |
| `/our-story` | OurStory | Hikâye, misyon, vizyon, inançlar |
| `/team` | Team | 4 üye; sadece Aigerim'in fotoğrafı var |
| `/features` | Features | "Learn, Practice, Measure" çerçevesi |
| `/scope-and-sequence` | ScopeSequence | 9 ay × değer tablosu + 4 yaş bandı |
| `/scope-and-sequence/:band` | ScopeSequenceAge | early-elementary, upper-elementary, middle-school |
| `/materials` | Materials | Materyal listesi + 2 workshop |
| `/moraled` | MoralEd | Galeri + seminer videoları + partner karuseli |
| `/research` | Research | Araştırma yöntemleri + alıntılar |
| `/about-bullying` | AboutBullying | Zorbalık türleri + önleme |
| `/classroom-climate` | ClassroomClimate | Sınıf iklimi |
| `/student-volunteers` | StudentVolunteers | Gönüllü öğrenci programı |
| `/events` | Events | Oturumlar |
| `/faq` | FAQ | SSS |
| `/contact` | Contact | EmailJS formu |
| `/privacy-policy` | PrivacyPolicy | Gizlilik |
| `/verify-certificate` | VerifyCertificate | Sertifika doğrulama talebi (EmailJS) |
| `*` | NotFound | 404 |
| `/partners`, `/for-schools`, `/partner-with-us` | → `/contact`'a yönlendirir | Eski URL uyumluluğu |

**Sitemap:** 19 URL içeriyor; high-school bandı henüz yok ("coming soon").

---

## 4. i18n Analizi (✅ Sağlam)

- **523 anahtar × 3 dil = 1.569 çeviri**; üç dosya arasında **sıfır eksik/eksik eşleşme** (script ile doğrulandı).
- Kodda kullanılan tüm statik anahtarlar JSON'da mevcut; dinamik anahtar aralıkları (faq.question_N, events.session_N, materials.item_N, scopeSequence.band_1..4, ageDetail.early/upper.focus ×9) eksiksiz.
- Dil seçimi `localStorage`'da saklanıyor; dropdown (EN/KG/RU) masaüstü + mobilde mevcut.

### i18n eksikleri
| Konu | Detay |
|---|---|
| Tarayıcı dili algılanmıyor | `detection.order: ['localStorage']` — ilk kez gelen ziyaretçiye tarayıcı dili sunulmaz, doğrudan Kırgızca görür |
| `<html lang="en">` sabit | Dil değişince güncellenmiyor (SEO/erişilebilirlik) |
| SEO başlıkları çevrilmiyor | Tüm `Seo title/description` değerleri İngilizce sabit |
| Çevrilmemiş bölümler | PartnersSection, SeminarSection, GallerySlider (başlık + altyazılar), tüm samples modülü (hikâye/şarkı/quiz) ve modal başlıkları İngilizce hardcoded |

---

## 5. Yayın Altyapısı (✅ Kurulu)

| Bileşen | Durum |
|---|---|
| GitHub Pages | `ademtkn/moraled` → `gh-pages` dalından legacy deploy ✅ |
| CNAME | `public/CNAME` = moraled.com → build'e kopyalanıyor ✅ |
| SPA derin link | `404.html` + `index.html` içindeki rafgraph SPA trick ✅ (canlı siteyle aynı davranış) |
| DNS | moraled.com → GitHub Pages IP'leri ✅ (değişiklik gerekmez) |
| Deploy | `npm run deploy` (gh-pages paketi → origin/gh-pages) ✅ |
| robots.txt + sitemap.xml | ✅ |
| HTTPS | `https_enforced: true` ✅ |

> ⚠️ **Bekleyen adım:** Alan adı hâlâ aigerim'in reposuna bağlı. Kaldırıldığında tek API çağrısıyla `ademtkn/moraled`'e bağlanacak.

---

## 6. Tespit Edilen Sorunlar

### 🔴 Yüksek Öncelik

1. **46 npm güvenlik açığı** (27 high, 2 critical) — tamamı react-scripts 5 / webpack-dev-server araç zincirinden kaynaklanıyor. CRA 2025'te resmi olarak bakımsız kaldığı için açıkların CRA içinde temiz çözümü yok. Üretim build'i statik dosya olduğundan canlı site doğrudan etkilenmez; risk dev ortamındadır. **Çözüm: Vite'a geçiş** (bkz. Öneriler).
2. **React 19 + react-scripts 5 uyumsuzluğu** — react-scripts 5 resmi olarak React 18 için tasarlandı; şu an çalışıyor ama bu kombinasyon garanti dışı. Vite geçişiyle birlikte çözülür.
3. **middle-school içeriği boş** — `ageTopics.js`'te `'middle-school': { topics: [] }`. Sayfa açılıyor ama sadece 9 ayın "focus" metinlerini gösteriyor, konu listesi yok. Ayrıca bu boş sayfa sitemap'te yayında (Google'a boş içerik sunuluyor).
4. **High School bandı içeriksiz** — Scope & Sequence sayfasında 4. band "coming soon" (doğru yönetilmiş), veri yok.
5. **Dokümantasyon güncel değil** — `README.md` ve `I18N_GUIDE.md` "İngilizce/Türkçe" yazıyor (gerçek: EN/KG/RU), varsayılan dil EN diyor (gerçek: KG); `structure.txt` silinmiş dosyaları listeliyor (Home.js, Partners.js, SchoolsOfMoralEd vb.).

### 🟡 Orta Öncelik

6. **i18n boşlukları** — Partner/Seminer/Galeri bölümleri ve interaktif örnekler tamamen İngilizce; KG/RU seçilince site yarı çevrili görünüyor.
7. **Tek 924 kB JS bundle** — kod bölme yok; ilk yüklemede tüm sayfalar iniyor.
8. **Görsel optimizasyonu** — `beliefs-illustration.png` 1 MB (PNG → WebP/JPG olmalı), hero video 396 kB, indigo-academy.png 256 kB.
9. **`/moralEd` vs `/moraled` casing tutarsızlığı** — linkler `/moralEd` yazıyor, route `/moraled`. Router büyük/küçük harf duyarsız olduğu için çalışıyor, ancak URL çirkin ve SEO'da çift varyant riski taşır.
10. **Footer linkleri tam sayfa yenileme** — `<a href>` ile; SPA içi `<Link>` kullanılsa daha hızlı olur.
11. **Form bildirimleri `alert()`** — modern toast bildirimi önerilir; ayrıca formlar başarılı gönderimden sonra Contact'ta reset edilmiyor.
12. **PWA ikonları eksik** — manifest.json'da yalnızca SVG ikon var; 192/512 PNG yok (tam PWA kurulumu desteklenmez).
13. **EmailJS kimlikleri kodda** — public key tarayıcıda olması normal, ancak service/template ID'ler + Türkçe yorum satırları ("panelinden alacaksın") temizlenmeli.

### 🟢 Düşük Öncelik

14. Kodda Türkçe yorumlar kalmış (MoralEd.js, Contact.js, index.html).
15. `index.html`'de çift Inter font linki (satır 8 ve 21) — gereksiz tekrar.
16. `Seo.js` her sayfada ayrı import; varsayılan OG görseli 268 kB hero-bg.jpg (optimize edilmeli).
17. Team sayfasında 3 üyenin fotoğrafı yok (baş harf avatarı); sadece Aigerim'in var.
18. AOS animasyonu sadece ana sayfada `AOS.init` ediliyor — diğer sayfalarda kullanılmıyor (tutarlılık için global init önerilir).

---

## 7. Önerilen Yol Haritası

| # | İş | Etki | Zorluk |
|---|---|---|---|
| 1 | Domain'i ademtkn/moraled'e bağla (aigerim kaldırınca) | Yayın sahipliği | Çok kolay (hazır) |
| 2 | middle-school + high-school konularını `ageTopics.js`'e ekle | İçerik bütünlüğü | Orta (kaynak veri gerekir) |
| 3 | Çevrilmemiş bölümleri (partners/seminars/gallery/samples) lokallere taşı | i18n bütünlüğü | Kolay-Orta |
| 4 | `<html lang>` + SEO başlıklarını dile bağla | SEO/erişilebilirlik | Kolay |
| 5 | CRA → Vite geçişi | Güvenlik (46 açık), hız, kod bölme | Orta (tek seferlik) |
| 6 | Görselleri optimize et (1 MB PNG, video poster) | Yükleme hızı | Kolay |
| 7 | README / I18N_GUIDE / structure.txt'i güncelle | Bakım | Kolay |
| 8 | Toast bildirimi + form reset + `<Link>` footer | UX | Kolay |
| 9 | Test ekleme (en azından smoke test) | Kalite güvencesi | Orta |

---

## 8. Git / Repo Durum Özeti

| Remote | URL | Rol |
|---|---|---|
| `origin` | github.com/ademtkn/moraled | **Yayın hedefi** (main + gh-pages) |
| `upstream` | github.com/aigerim-shuguralieva/moraled-updated_1 | Kaynak (son güncellemeler) |
| `moraled-2` | github.com/ademtkn/moraled-2 | Eski repo (referans) |

- Local `main` = `origin/main` = `upstream/main` = `3ba0241` ✅ senkron
- Eski `ademtkn/moraled` main'i `backup-main-before-aigerim-transfer` dalında yedekli ✅
- gh-pages dalı güncel build ile yayında (`main.06a63136.js`) ✅
- Çalışma ağacı temiz ✅
