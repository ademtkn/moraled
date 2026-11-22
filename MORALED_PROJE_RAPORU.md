# MoralEd Proje İnceleme Raporu

**Tarih:** 22 Kasım 2026

**İncelenen sürüm:** `redesign/vite-coming-soon` dalı, `400fc97`

**Çalışma alanı:** `/Users/ademtknmac/Desktop/WEBSITES/Moraled`

**Güncel devir kaydı:** [WORK_LOG.md](./WORK_LOG.md) — sonraki değişiklikler, testler, kalınan nokta ve devam adımı her çalışmada burada güncellenir.

**Kapsam:** `src/` altındaki gerçek MoralEd sitesi. Coming-soon tasarımı değerlendirme dışında; ortak alan adı ve yayın durumu ayrıca kontrol edildi.

**İnceleme sonrası güncelleme — 22 Kasım 2026:** Aşağıdaki 4.1 takvim bulgusu giderildi. Mevcut sınıf konu sırası esas alınarak ana sayfa, ay rozeti, genel müfredat ve dört yaş bandı `src/data/curriculumCalendar.js` üzerinden birleştirildi. KG/RU/EN öğrenme hedeflerindeki eski sabit ay adları kaldırıldı. Build/lint, 36 ilgili sayfa görünümü ve 12 aylık rozet kontrolü başarılı; yerel inceleme adresi `http://localhost:3000`. Diğer bulgular bu düzeltmenin kapsamı dışında ve açık.

**İçerik güncellemesi — 22 Kasım 2026:** 2 ve 3. maddelerdeki konu boşlukları ve kişilere atıflar giderildi. 3. sınıfın Şubat/Nisan aylarına kaynak temelli, etiketli iki MoralEd uyarlaması eklendi. Toplam 248 konu / 99 dolu sınıf-ay hücresi var. Kullanıcı kararıyla kişi profilleri ve öğrenci/yönetici alıntıları yerine kişisiz program içeriği kullanıldı. Kaynak öncelikleri ve sayfa kayıtları [CONTENT_SOURCES.md](CONTENT_SOURCES.md) dosyasında. Formlar, klavye erişimi, gerçek fotoğraflar ve uzman/dil kontrolü ayrı işler olarak açık.

**Sertifika güncellemesi — 22 Kasım 2026:** Kullanıcı isteğiyle numarayla sorgulama, okul listesi ve belge görüntüleme/paylaşma eklendi. Üç tasarım gerçek sitede, ikisi coming-soon'da örnek olarak sunuluyor. Gerçek sertifika listesi henüz sağlanmadığı için kayıt kaynağı boş; örnek ad/tarihler gerçek kayıt sayılmadı. Ekleme ve erişim modeli: [CERTIFICATES.md](./CERTIFICATES.md).

## 1. Projenin bulunduğu aşama

**MoralEd, tasarım ve ön yüz altyapısı tamamlanmış; içerik tutarlılığı, gerçek veri ve operasyon doğrulaması bekleyen bir tanıtım ve eğitim kaynakları sitesi aşamasında.** Claude'un Design System v2 ve Vite geçişi çalışmaları mevcut kodda karşılığını buluyor. Yeniden başlamayı gerektiren bir altyapı sorunu görülmedi.

“Yalnızca gerçek fotoğraflar kaldı” değerlendirmesi eksik kalıyor. Aylık müfredat çelişkisi ve iki ders boşluğu giderildi; kişilere atfedilen içerik program içeriğiyle değiştirildi. Gönderim formları, klavye erişilebilirliği ve gerçek fotoğraflar tamamlanmalı. Tam site henüz kamuya açılmış değil.

Bu sürüm programı tanıtıyor, müfredat başlıklarını gösteriyor, üç etkileşimli örnek ve e-posta formları sunuyor. Öğretmen/öğrenci hesabı, yönetim paneli, materyal deposu, gelişim ölçümü ve otomatik sertifika sorgusu uygulamada bulunmuyor. Bunlar bir tanıtım sitesi için zorunlu kabul edilmemeli; ürünün sonraki kapsamı olarak ayrıca kararlaştırılmalı.

## 2. Claude'un son çalışmaları

Son beş commit, 22 Kasım'da Claude Opus 5.5 eş yazarlığıyla kaydedilmiş:

- **`f443370` — ana çalışma:** Design System v2, yeniden tasarlanan ana sayfa, ortak iç sayfa görünümleri, mobil menü, modal erişilebilirliği, WebP görseller, CRA → Vite 8 geçişi, sayfa bazlı kod bölme, SEO HTML üretimi. Ortaokul ve lise konu verileri de bu commit içinde eklenmiş.
- **`d3a95ed` — belgeler:** yapım aşaması yayını ve DNS notları.
- **`0ecf4dd` — coming-soon:** şafak tasarımı ve geliştirme sunucusunda görsel yolu düzeltmesi. Gerçek site çalışmasının başlangıç noktası olarak alınmamalı.
- **`84198bb` — marka:** yeni logo, açık/koyu varyantlar, favicon ve paylaşım görseli; gerçek sitenin header/footer'ı da güncellenmiş.
- **`400fc97` — adresler:** `www.moraled.com` canonical/OG/sitemap/CNAME adresleri ve yeni Instagram hesabı.

**Git durumu:** GitHub uçları kontrol edildi. `main` hâlâ `3ba0241`; güncel çalışmalar `redesign/vite-coming-soon` dalında ve `main`'in beş commit ilerisinde. Yerel HEAD uzak daldaki commit ile aynı. Açık PR aramasında sonuç bulunmadı. İncelemeye başlarken çalışma ağacı temizdi.

`gh-pages` dalının HTML'i yapım aşaması sayfasını, CNAME dosyası `www.moraled.com` adresini içeriyor. Gerçek sitenin kaynağı mevcut çalışma dalındaki `src/` klasörü. Geliştirme komutu `npm start`, adresi `http://localhost:3000`.

## 3. Tamamlanan ve doğrulanan işler

### Tasarım ve sayfa yapısı

- Lacivert/mavi ve turuncu palet, Montserrat/Inter yazı sistemi, ortak butonlar ve tasarım tokenları kurulmuş.
- Header, footer, ana sayfa ve iç sayfa düzenleri uygulanmış. Ortak hero, kart, CTA, kişi kartı ve form görünümleri mevcut.
- Ana sayfada değer takvimi, keşif alanları, program çerçevesi, örnekler, alıntılar ve partner okul şeridi çalışıyor.
- Logo dosyaları ve koyu zemin varyantları gerçek siteye uygulanmış.
- Masaüstü ana sayfa/müfredat/ekip/materyal sayfaları ve mobil ana sayfa ekran görüntüleri incelendi. Belirgin yerleşim kırılması görülmedi. Ekip kartlarında fotoğraf/biyografi eksikleri görsel bütünlüğü sınırlıyor.

### Uygulama ve performans altyapısı

- React 19.2, Vite 8, React Router 7 ve i18next kurulumu çalışıyor.
- 18 sayfa bileşeni var. 16 sabit içerik sayfası ve dört yaş bandıyla sitemap'te **20 içerik adresi** bulunuyor; ayrıca 404 ekranı ve üç eski adres yönlendirmesi mevcut.
- Ana sayfa dışındaki 17 sayfa bileşeni lazy yükleniyor; vendor paketi ayrılmış.
- İlk temel JS paketleri yaklaşık **80,07 KB + 101,05 KB gzip**. Bunlar yalnızca JS miktarı; görsel, CSS ve fontlar dahil değil. Core Web Vitals puanı olarak yorumlanmamalı.
- WebP ve telefon varyantları, görsel manifesti ve `Picture` bileşeni çalışıyor.
- Lazy parça hatasında yenileme ve hata ekranı kodu mevcut. Önceki Claude notlarında hata senaryosu testi kayıtlı; bu incelemede parça kesintisi yeniden simüle edilmedi.

### Çoklu dil ve SEO

- KG/RU/EN dosyalarında **682 çeviri anahtarı** var; dizilerin içindeki son değerler ayrı sayıldığında dil başına **719 değer** bulunuyor. Parite tam, boş değer yok.
- Kontrol edilen sayfa ve üst seviye bileşenlerdeki sabit çeviri çağrılarında eksik anahtar bulunmadı. Tarayıcı taramasında ham çeviri anahtarı görünmedi.
- Dil seçimi saklanıyor, yenilemeden sonra korunuyor; HTML dili Kırgızca için `ky` oluyor.
- Build, 20 rota için 21 HTML dosyası üretiyor. Sitemap adreslerinin tümünde beklenen title ve canonical mevcut.
- Bu HTML'ler sayfa başlığı ve meta etiketlerini içeriyor; sayfa gövdesi React tarafından tarayıcıda oluşturuluyor. Tam sayfa ön üretimi/SSR yapılmıyor.
- Rusça ve İngilizce aynı URL'de tarayıcı içinde değişiyor. JavaScript çalıştırmayan paylaşım botlarına üretilen meta dili Kırgızca; ayrı dil URL'leri ve hreflang altyapısı yok.

## 4. Öncelikli sorunlar ve yarım kalan işler

### 4.1 Aylık değer takvimi tutarsızlığı giderildi

**Durum: tamamlandı; kullanıcı yerelde kontrol edecek.** Ortak takvim, mevcut sınıf konu verilerinin Eylül–Mayıs sırasını kullanıyor. İkon, açıklama, beceri ve hedefler doğru değerle birlikte geliyor. Aşağıdaki fark listesi ilk inceleme sırasında görülen ve artık giderilmiş durumu kaydediyor.

İlk incelemede farklı olan aylar:

- Ekim: ana takvimde **Sorumluluk**, sınıf sayfalarında **Saygı**.
- Kasım: ana takvimde **Saygı**, sınıf sayfalarında **Güvenilirlik**.
- Aralık: ana takvimde **Güvenilirlik**, sınıf sayfalarında **Sorumluluk**.
- Şubat: ana takvimde **Liderlik**, sınıf sayfalarında **Vatandaşlık**.
- Nisan: ana takvimde **Vatandaşlık**, sınıf sayfalarında **Liderlik**.

Bu fark ayın değeri rozetini de etkiliyordu. Kasım ayında ana sayfa “Saygı” gösterirken sınıf planları “Güvenilirlik” işliyordu. Düzeltmeyle bütün görünümler mevcut sınıf planlarının sırasını kullanıyor; konu, odak metni, ikon ve hedefler birlikte hizalandı. Kasım rozeti artık “Güvenilirlik” gösteriyor.

Kaynaklar: [ScopeSequence.jsx](src/pages/ScopeSequence.jsx), [ScopeSequenceAge.jsx](src/pages/ScopeSequenceAge.jsx), [ageTopics.js](src/data/ageTopics.js), [About.jsx](src/pages/About.jsx).

### 4.2 İki konu boşluğu dolduruldu

**Durum: tamamlandı; uzman/dil kontrolü ayrı iş.** Dört yaş bandında 1–11. sınıflar için 248 konu kaydı var; 99 sınıf-ay hücresinin tamamı dolu. 3. sınıf Şubat'a okul ve yerel çevrenin temizliği, Nisan'a birlikte yararlı bir sınıf işi düzenleme konusu eklendi. İkisi de `adapted: true` ile işaretli ve görünür MoralEd uyarlama etiketi taşıyor.

Yeni başlıkların dayanakları, kullanıcının paylaştığı 3. sınıf kitabındaki iş birliği ve doğaya özen bölümleri ile ulusal programın okul eğitimi yönleri. Eski KAO başlıkları yeniden yazılmadı. Kaynak ve sayfa eşleştirmeleri [CONTENT_SOURCES.md](CONTENT_SOURCES.md) içinde kayıtlı. Mevcut 5–11. sınıf önerilerinin pedagojik ve dil kontrolü sürüyor; eklenen başlıklar tamamlanmış ders planı olarak değerlendirilmemeli.

### 4.3 Kişilere atıflar program içeriğiyle değiştirildi

**Durum: kullanıcının istediği kişisiz içerik uygulandı.** Ana sayfa ve Our Story'deki öğrenci/yönetici alıntıları, ekip ve gönüllü adları ile bunların çeviri anahtarları kaldırıldı. Ana sayfada günlük sınıf uygulamaları; Our Story'de okul, aile ve toplum; `/team` sayfasında öğretmen, aile ve öğrenci rolleri; gönüllülerde çalışma ilkeleri anlatılıyor. Fotoğraf dosyası silinmedi.

Materyal paketi, ücretsiz lisans, sabit uygulama süresi, burs/üniversite için hizmet saati ve düzenli etki raporu gibi doğrulanamayan kesin vaatler sadeleştirildi. Kaynaklar sayfası ulusal programı ve paylaşılan kitapları önceliklendiriyor; Piermont, KiVa ve Character.org destekleyici yaklaşım olarak gösteriliyor. Yerel MoralEd saha sonuçları veya dış kurum onayı iddiası kurulmuyor.

Gerçek sınıf fotoğrafları ve kullanım izinleri hâlâ ayrı ihtiyaç. Kişi profili veya referans alıntısı eklemek mevcut kullanıcı kararının parçası değil.

### 4.4 Formların gönderim deneyimi tamamlanmalı

İletişim ve sertifika formu aynı EmailJS servisini/şablonunu kullanıyor. Gerekli alanların tarayıcı doğrulaması çalışıyor. Gerçek e-posta gönderilmeden, API yanıtı taklit edilerek kontrol edildi:

- İlk incelemede iki formda da buton etkin kalıyor ve iki istek çıkıyordu. Sertifika formunda K05 ile kilit/disabled ve gönderiliyor durumu eklendi; Contact formunun düzeltmesi açık.
- İletişim formu başarılı yanıttan sonra dolu kalıyor.
- Sertifika formu başarılı yanıttan sonra temizleniyor; bu davranış yeni yardım formunda korundu.
- İlk incelemede iki form `alert()` kullanıyordu. Sertifika formu K05 ile sayfa içi erişilebilir başarı/hata durumuna geçti; Contact formu eski davranışta.

Gönderim durumu, tekrar gönderim engeli ve iletişim formu temizliği eklenmeli. EmailJS'nin doğru alıcıya teslimi, şablon alanları ve hata akışı yetkili bir gerçek teslim testiyle doğrulanmalı. Tarayıcıya açık EmailJS public key, tek başına gizli anahtar sızıntısı olarak değerlendirilmedi.

Kaynaklar: [Contact.jsx](src/pages/Contact.jsx), [VerifyCertificate.jsx](src/pages/VerifyCertificate.jsx).

### 4.5 Manuel erişilebilirlik eksikleri var

Otomatik axe taramaları sıfır ihlal verdi. Bunun yanında iki davranış eksikliği doğrulandı:

- **Mobil menü:** Menü açıkken Tab ile ilerleyince odak arkadaki ana sayfanın bağlantılarına geçebiliyor. Menü odağı yönetilmeli ve arka içerik açık menü sırasında klavye erişiminden çıkarılmalı. Esc kapanışı çalışıyor.
- **SSS:** Yanıt açılıyor; düğmede `aria-expanded` ve yanıt ilişkisi için `aria-controls` bulunmuyor. Ekran okuyucu açık/kapalı durumunu alamıyor.

Header'daki “Open menu”, “Close menu”, “Main” ve “Mobile” erişilebilir adları da üç dile taşınmamış. Bu maddeler, otomatik taramanın temiz olmasının tüm kullanım senaryolarını doğrulamadığını gösteriyor.

Kaynaklar: [Header.jsx](src/components/Header.jsx), [FAQ.jsx](src/pages/FAQ.jsx).

### 4.6 Sertifika, materyal, etkinlik ve gönüllülük akışlarının kapsamı netleştirilmeli

- **Sertifika:** K05 ile açık statik kayıt üzerinden numara sorgulama, okul listesi, belge açma ve paylaşma eklendi. Gerçek kayıt kaynağı henüz boş. Yardım formu manuel talep topluyor; otomatik belge üretimi, özel hesap ve kriptografik imza denetimi yok. Gerçek belge kayıtları, verme ölçütleri ve yanıt süreci tanımlanmalı; ayrıntılar CERTIFICATES.md içinde.
- **Materyaller:** Sekiz kaynak türü tanıtılıyor. Sitede bunların indirilebilir kütüphanesi bulunmuyor. Materyaller okul ortaklığı kapsamında dışarıdan veriliyorsa bu erişim yöntemi net anlatılmalı; siteden erişim hedefleniyorsa gerçek dosyalar gerekiyor.
- **Şarkı örneği:** Play düğmesi iki saniyede bir söz satırını vurguluyor. Ses dosyası veya ses oynatma kodu yok. Düğme/sunum buna göre düzenlenmeli veya izinli ses kaydı eklenmeli.
- **Etkinlikler:** İçerik güncellemesiyle sabit tekrar vaatleri yerine önerilen oturum türleri ve okulun koşullarına göre görüşme yaklaşımı anlatılıyor; tarihli takvim veya rezervasyon akışı yok.
- **Gönüllü başvurusu:** Apply Now genel iletişim sayfasına yönlendiriyor; özel başvuru formu veya konu ön seçimi yok. Genel iletişim formu okul ve mesleki rol istediği için öğrenci başvurusu yeterince yönlendirilmiş değil.
- **Ölçüm ve raporlar:** Sitede anket toplama, öğrenci gelişimi kaydı veya okul raporu üretimi uygulanmıyor. Anlatılan hizmet dışarıda yürütülüyorsa operasyonun teyidi yeterli olabilir; uygulamada sunulacaksa ayrı ürün kapsamı gerekir.

### 4.7 Metin ve bakım işleri

- KG/RU yeni metinlerin ana dil kontrolü belgelerde bekliyor. Anahtar paritesi, dil kalitesi onayı anlamına gelmiyor.
- K05 ile gizlilik metnine sertifika yardım alanları ve açık kayıt erişim modeli eklendi. Kullanılan bütün üçüncü tarafların envanteri ve operasyonel saklama süreçlerinin kontrolü ayrıca sürüyor. Bu bir teknik içerik tespitidir; hukuki uygunluk kararı değildir.
- Kaynaklar sayfasında kullanıcının beş referansı hiyerarşik biçimde ele alındı; ulusal program ve kitap önce geliyor. Eski üç akademik künye listesi bu kaynak yapısıyla değiştirildi. Kaynaklar MoralEd etkililik çalışması olarak gösterilmiyor.
- README'deki güncel anahtar sayısı sertifika çalışması sonrası 750; diziler dahil 787 son değer var. Bazı belge yolları hâlâ `.js` uzantılı; kod `.jsx`'e taşınmış.
- `tokens.css` dışında 23 CSS dosyasında 128 sabit hex renk kullanımı var; çoğu beyaz. Hikâye bileşeninde de üç sabit renk mevcut. Tasarım tokenları kurulmuş olsa da depo kuralına tam geçiş bitmemiş.
- Ortak `inner.css` ve global CSS sırası korunmalı. Sonraki değişikliklerde sayfalar arası görünüm etkisi kontrol edilmeli.
- K05 ile `npm run test:certificates` ve altı kalıcı sertifika testi eklendi. Genel rota/etkileşim testlerinin kalıcı paketi ve `.github` kontrol akışı henüz yok. Kritik gezinme, takvim, dil, modal ve form davranışları için küçük bir kalıcı doğrulama seti yararlı olur.
- Kullanılmayan dosyalar önceki yol haritasında listelenmiş. Temizlik düşük öncelikli; dosya silme ayrıca kullanıcı onayı gerektiriyor.

## 5. Sayfaların hazır olma durumu

- **Ana sayfa `/`:** Tasarım ve etkileşimler hazır; takvim birleştirildi. Referans alıntıları sınıf uygulamalarıyla değiştirildi. Gerçek fotoğraflar ve şarkı sunumu ayrı işler.
- **Our Story `/our-story`:** Düzen hazır. Kırgızistan bağlamı ve okul–aile–toplum içeriği güncellendi; lider alıntıları kaldırıldı. Görsel izinleri ayrı iş.
- **İş birliği `/team`:** Kişi profilleri yerine öğretmen, aile ve öğrenci rolleri sunuluyor.
- **Program `/features`:** Tanıtım sayfası hazır. Ölçüm ve ortaklık vaatlerinin gerçek süreçlerle eşleşmesi gerekli.
- **Müfredat `/scope-and-sequence`:** Tablo ve dört yaş bandı bağlantısı hazır. Aylık sıralama ortak takvime bağlandı.
- **Dört yaş bandı:** Tamamı açılıyor; 1–11. sınıf konu verisi mevcut ve takvim ortak. İki 3. sınıf hücresi etiketli uyarlamalarla dolduruldu. Pedagojik/dil kontrolü ayrı iş.
- **Materyaller `/materials`:** Tanıtım ve atölye panelleri hazır. Gerçek kaynakların teslim/erişim yöntemi tamamlanmalı.
- **MoralEd `/moraled`:** Galeri, dört okul logosu ve üç üçüncü taraf YouTube gömmesi mevcut. Gerçek içerik ve kullanım izinleri teyit edilmeli; harici videoların kullanılabilirliği ayrıca kontrol edilmeli.
- **Kaynaklar `/research`:** Beş kaynak ve uygulama önerileri sunuluyor; ulusal program ve kitap öncelikli. Gerçek saha sonucu iddiası kaldırıldı.
- **Zorbalık ve sınıf iklimi:** Bilgilendirme sayfaları hazır. Eğitim uzmanı ve dil kontrolüyle tamamlanabilir.
- **Gönüllüler `/student-volunteers`:** Kişi listesi çalışma ilkeleriyle değiştirildi; yerel okul bağlamı ve destek önerileri işlendi. Başvuru yönlendirmesi ayrı iş.
- **Etkinlikler `/events`:** Oturum tanıtımı hazır. Tarihli etkinlik/rezervasyon isteniyorsa içerik ve akış eklenmeli.
- **SSS `/faq`:** Sekiz soru/cevap ve açılma çalışıyor. Erişilebilir durum bilgisi ve operasyonel cevaplar düzeltilmeli.
- **İletişim `/contact`:** Form arayüzü hazır. Gönderim durumu, temizleme, tekrar engeli ve gerçek teslim kontrolü bekliyor.
- **Sertifika `/verify-certificate`:** Numara sorgusu, okul listesi, belge açma/paylaşma ve tasarım galerisi hazır. Yardım formu tekrar engeli ve sayfa içi durumları tamamlandı. Gerçek kayıt/dosya, verme koşulları ve gerçek teslim/sorumlu süreci bekliyor.
- **Gizlilik `/privacy-policy`:** Sertifika formu ve açık kayıt modeli eklendi. Tüm üçüncü taraflar ve gerçek operasyonel saklama süreçlerinin kontrolü açık.
- **404 ve eski adresler:** Görünüm ve istemci yönlendirmeleri çalışıyor.

## 6. Doğrulama sonuçları

**Son sertifika çalışması:** İki build ve lint temiz; altı kalıcı test, 30 görünüm, 18 galeri penceresi ve 42 davranış kontrolü başarılı. Gerçek site KG/RU/EN paritesi 750 anahtar / 787 son değer; coming-soon 33 anahtar. Gerçek e-posta gönderilmedi; registry boş. Ayrıntılar WORK_LOG.md K05 içinde.

**Önceki K03 içerik güncellemesi:** build/lint temiz. 11 ilgili rota × üç dil × iki genişlikte 66 görünüm kontrol edildi; son metin düzeltmeleri üç rotada 18 ek kontrolden geçti. Axe/JS hatası/kırık görsel/taşma bulunmadı. Üç dilde 694 kaynak anahtarı ve diziler dahil 731 son değer eşleşiyor. Aşağıdaki 126 sayfa ve modal sonuçları ilk incelemenin kayıtlarıdır.

Bu incelemede gerçek sitenin üretim build'i `127.0.0.1:4173` üzerinden Chromium ile çalıştırıldı:

- `npm run build`: **başarılı, uyarısız**. Vite 8.3.8; 20 rota → 21 HTML dosyası.
- `npm run lint`: **0 hata / 0 uyarı**.
- `npm audit --json`: **0 bilinen açık**. Bu sonuç npm bağımlılık denetiminin kapsamıyla sınırlı.
- **126 sayfa kontrolü:** 20 içerik adresi + bir 404 yolu × KG/RU/EN × 1440/390 px. JavaScript hatası, yerel dosya isteği hatası, kırık görsel, yatay taşma ve axe ihlali görülmedi. Her görünümde bir `main`, bir `h1`, bir title ve bir canonical bulundu.
- **18 modal kontrolü:** Üç örnek × üç dil × iki genişlik. Axe temiz; açılış odağı, odak çevrimi, Esc ve odak iadesi çalışıyor.
- Hikâye sonu/yeniden başlama, quiz 5/5 tamamlama/yeniden başlama ve şarkı satır vurgusu çalışıyor.
- Dil seçimi yenilemede korunuyor. Üç eski adres `/contact`'a, geçersiz yaş bandı müfredat sayfasına yönleniyor.
- Form testleri API isteği dışarı gönderilmeden taklit edildi; tekrar gönderim ve form temizliği bulguları bu testte doğrulandı.
- Ek klavye testleri mobil menüde odak kaçağını ve SSS durum bilgisi eksikliğini doğruladı.

Tarama, yerel Vite preview sunucusunda uygulama davranışını kontrol ediyor. GitHub Pages üzerinde gerçek sitenin HTTP durumları henüz bu yeni sürümle ölçülmüş değil. Eski tarayıcılar, gerçek cihazlar, ekran okuyucu kullanımı ve Core Web Vitals ölçümü ayrıca yapılabilir. E-posta teslimi ve içerik doğruluğu bu otomatik sonuçlarla onaylanmış sayılmaz.

İlk incelemenin ham çıktıları `/tmp/moraled-review-2026-11-22/` altında tutulmuştu; limit kesintisinden sonra bu klasör bulunamadı. Son içerik kontrolleri `/tmp/moraled-content-qa/` ve `/tmp/moraled-content-qa-final/` altında yeniden üretildi. Bunlar geçici dosyalardır; kalıcı sonuç özeti ve kanıtların durumu [WORK_LOG.md](./WORK_LOG.md) içinde korunur. Kalıcı test paketi depoya eklenmedi.

## 7. Ortak yayın altyapısında açık kalan konu

22 Kasım 2026 yaklaşık 13.19–13.28, Bişkek saatiyle yapılan HTTPS kontrollerinde **`www.moraled.com` sertifika adı uyuşmazlığı verdi**. Sunulan sertifikanın ortak adı `*.github.io`; alan adını kapsamıyor. `curl` doğrulaması 60 koduyla başarısız oldu. Web aracı da adrese erişemedi. **`moraled.com` sertifikası geçerli; HTTP 301 ile `https://www.moraled.com/` adresine yönlendiriyor.** Yönlendirme takip edilince hata www bağlantısında oluşuyor.

CNAME ve kaynak canonical adreslerinin `www` olması doğrulandı. Ancak sertifika hazırlığının tamamlandığı kabul edilmemeli. Son değişiklikten sonra sertifika sağlama süreci bekliyor olabilir; neden GitHub Pages/domain durumu üzerinden ayrıca incelenmeli. Bu bulgu, gözlem anına ait ve coming-soon tasarımından bağımsız olarak tam sitenin açılışını da ilgilendiriyor.

`npm run deploy` yapım aşaması sayfasını; `npm run deploy:full` gerçek siteyi yayınlıyor. Kullanıcı siteyi açmayı açıkça istemeden tam site yayınlanmamalı.

## 8. Önerilen çalışma sırası

1. **Takvimi birleştir — tamamlandı:** Ana sayfa, genel tablo, sınıf konuları ve ay rozeti ortak veriye bağlandı. 3. sınıfın iki boş ayı sonraki çalışmada kaynak temelli MoralEd uyarlamalarıyla dolduruldu.
2. **Küçük işlev düzeltmelerini yap:** Mobil menü odağı, SSS erişilebilir durum bilgisi, çevrilmeyen erişilebilir adlar, formlarda gönderim durumu/tekrar engeli/temizleme ve gönüllü başvuru yönlendirmesi.
3. **Gerçek görseller ve editoryal kontrol:** Kullanıcı kararıyla kişi profili/alıntı kullanılmıyor. Okul fotoğrafları, kullanım izinleri ve varsa ses kaydı gerekiyor. KG/RU/EN metinlerini eğitim ve dil kontrolünden geçir.
4. **Hizmet kapsamını kesinleştir:** Materyaller nereden teslim edilecek, sertifika talebine kim yanıt verecek, etkinlikler nasıl planlanacak, ölçüm raporları nasıl üretilecek? Metinleri gerçek işleyişle eşleştir.
5. **Yayın hazırlığını tamamla:** HTTPS durumu, gerçek e-posta teslimi, seçilen tarayıcı/cihaz kontrolleri ve dal entegrasyonu. Ayrı dil URL'leri veya dil dosyalarını bölme gibi iyileştirmeler ihtiyaç varsa sonra ele alınabilir.

İlk geliştirme işi olan **müfredat takviminin tek kaynağa bağlanması tamamlandı**. Sertifika formu K05 ile düzeltildi; Contact ve klavye düzeltmeleri sonraki sınırlı iş paketini oluşturuyor. İçerik doğrulaması da kaynak verilerle ilerlemeli.

## 9. Kullanıcıdan gerekecek gerçek girdiler

- Geçerli dokuz aylık değer sırası ve kaynak müfredat dosyası.
- Partner okul fotoğrafları ve kullanım yetkileri.
- Vaat edilen öğretmen kılavuzları, ders planları, sunumlar, anketler, ses dosyaları ve teslim yöntemi.
- Sertifika, gönüllü başvurusu, etkinlik ve okul raporu süreçlerinin sorumluları.

**İlk incelemede ürün kodu değiştirilmedi; ardından kullanıcının istediği takvim düzeltmesi ve Kırgızistan odaklı 2/3 içerik çalışması uygulandı. Coming-soon dosyaları değiştirilmedi; commit, merge ve deploy yapılmadı.** Bu rapor ve `DESIGN_SYSTEM.md` §9 güncellendi. Önceki 20 Kasım raporundaki CRA, 46 npm açığı, boş ortaokul/lise ve eksik çeviri tespitleri güncel sürümü anlatmıyor.
