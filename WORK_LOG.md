# MoralEd çalışma ve devir kaydı

**Son güncelleme:** 22 Kasım 2026, Bişkek tarihi. **Kaydı tutan:** Codex.

Bu dosya, projeyi devralan kişinin tamamlanan işleri, değişen dosyaları, doğrulamaları ve sıradaki adımı bulacağı çalışma kaydıdır. Yeni bir işe başlarken güncel durumu okuyun; işe başladıktan sonra, önemli bir aşamada ve çalışmayı bırakmadan önce kaydı güncelleyin. Tamamlanan kayıtları koruyun.

## Güncel durum ve kalınan yer

- **Son durum (K12, Claude, 22 Kasım ~23:30):** Açık iş 3 tamamlandı — öğrenci gönüllü başvurusu: gönüllü sayfasındaki düğme `/contact?topic=volunteer`'a gider; form gönüllü moduna geçer (öğrenci/öğretmen/ebeveyn rolleri, zorunlu “öğretmen veya ebeveyn haberdar” onayı, e-postada konu satırı), gizlilik metni güncellendi; mock EmailJS ile 66/66 + genel form 66/66. Kullanıcı onayıyla commit + push. Sonraki açık işler (4–8) kullanıcı girdisi/kararı gerektiriyor (gerçek fotoğraflar, uzman dil kontrolü, materyal/etkinlik verisi, gerçek EmailJS teslim denemesi).
- **K11 (Claude, ~23:00):** Sertifika orijinalleri `design-references/`'e taşındı (`c1a7afb`); açık iş 2 tamamlandı — mobil menü modal (portal + `inert` + Tab döngüsü + odak dönüşü), masaüstü açılır menüler ve SSS ARIA, etiketler 3 dilde; 75/75 test. Kullanıcı onayıyla commit + push. Sıradaki iş: açık iş 3 — öğrenci gönüllü başvuru akışı (`StudentVolunteers.jsx` → `Contact.jsx`).
- **K10 (Claude, ~22:30):** Kullanıcı onayıyla K09 commit'lendi (`3fc3e75`), coming-soon yayımlandı (gh-pages `cb178a2`; canlıda illüstrasyonlar, eski orijinal sertifika adresleri 404). `/verify-certificate` galerisi de metinsiz illüstrasyonlara geçti; kullanılmayan `coming-soon/assets/certificate-*.webp` silindi. K11'de orijinaller `design-references/certificates/`'e taşındı.
- **K09 (Claude, ~22:15):** Contact formu tamamlandı, mock EmailJS ile 66/66.
- **K08 (Claude, ~22:00):** Coming-soon sertifika bölümünde orijinal belgeler yerine metinsiz SVG illüstrasyonlar (`af845f5`).
- **Önceki durum (K07, Claude, 22 Kasım ~21:45):** K06 planının 1–2. adımları tamamlandı ve test edildi: hero düzeltildi; Codex'in işi `72e1f12` + `2bdef07` olarak commit'lenip `redesign/vite-coming-soon`'a push edildi, belgeler ayrı commit. 3. adım (www HTTPS) GitHub tarafında bekliyor: alan adı kaldırılıp yeniden eklendi, sertifika talebi `dns_changed`; arka planda 3 saatlik izleyici onaylanınca HTTPS'i zorunlu yapacak. 21:18'de Claude dışında biri (muhtemelen Codex) `npm run deploy` ile sertifika örnekli coming-soon'u yayımladı.
- **Ürün:** Kırgızistan okullarına yönelik gerçek site, `src/`. Kullanıcının istediği takvim düzeltmesi ile raporun 2 ve 3. içerik işleri tamamlandı; kullanıcının yerel incelemesi bekleniyor.
- **Son tamamlanan iş:** K05 — sertifika numarasıyla sorgu, okul listesi, belge görüntüleme/paylaşma, üç tasarım örneği ve coming-soon üzerinde iki örnek. Kullanıcının yerel incelemesine hazır; yeni aktif geliştirme yok.
- **Dal / başlangıç HEAD:** `redesign/vite-coming-soon` / `400fc97`. Aşağıdaki Codex değişiklikleri çalışma ağacında; henüz commit edilmedi. Git durumu her devralmada yeniden kontrol edilmeli.
- **Yayın:** Commit, merge veya deploy yapılmadı. K05 ile `coming-soon/` yerelde güncellendi; canlı sürüme aktarılmadı. Tam sitenin açılması için kullanıcının açık talimatı gerekiyor.
- **Yerel kontrol:** Gerçek site `http://localhost:3000/verify-certificate`, coming-soon `http://localhost:3001/#cs-certificates`; ikisi de son kontrolde HTTP 200. Gerekirse `npm start` ve `npm run dev:soon` ile açın. Mevcut süreçleri incelemeden durdurmayın.
- **Devam noktası:** Gerçek sertifika kaydı 0; onaylı alıcı/numara/tarih/belge dosyası geldiğinde CERTIFICATES.md adımlarıyla eklenir. Öğretmen/öğrenciye özel şablonlar ve verme koşulları ayrıca netleştirilecek. Genel Contact formu ile mobil menü/SSS işleri açık.

## Kullanıcı kararları ve çalışma sınırları

1. Yazışma Türkçe; hedef kitle ağırlıklı olarak **Kırgızistan**. Site metinleri varsayılan KG, ayrıca RU ve EN olarak birlikte güncellenir.
2. Ana çalışma gerçek proje üzerinde. Kullanıcı K05'te ayrıca coming-soon sayfasına sertifika görselleri ve açıklaması eklenmesini açıkça istedi; bu sınırlı düzenleme yerelde yapılacak.
3. Müfredat takvimi önce düzeltilecek; ardından konu boşlukları ve doğrulanamayan kişi/alıntı içeriği ele alınacak. Bu üç iş tamamlandı.
4. Kullanıcı, **kişilere atfedilmeyen program içeriği** istedi. Gerçek kişi gibi sunulan isim, rol ve alıntılar geri eklenmeyecek; bunların yerine program uygulamaları ve katılım rolleri kullanılacak. Bu karar tanıtım/ekip/alıntı içeriğine aittir; K05 gerçek sertifika kayıtlarında onaylı alıcı adları ayrı bir kapsamdadır.
5. Kullanıcının beş kaynağından öncelik **1: Kırgızistan ulusal eğitim programı** ve **5: Drive kitap klasörü**. Piermont, KiVa ve Character.org'un yerel bağlama uygun yönleri destekleyici. Ayrıntılar ve bağlantılar: [CONTENT_SOURCES.md](./CONTENT_SOURCES.md).
6. Gerçek fotoğraf, kişi referansı, istatistik, saha sonucu veya hizmet garantisi uydurulmayacak. Kitapların tamamı ve görselleri siteye kopyalanmayacak.
7. Dosya silme, commit ve deploy için kullanıcı onayı gerekir. `npm run deploy` yalnızca coming-soon; `npm run deploy:full` yalnızca kullanıcı tam siteyi açmayı açıkça istediğinde kullanılabilir.
8. Kullanıcı, yapılan ve planlanan bütün işlerin sonraki ajanlara aktarılmasını istedi. Bu kayıt ile `DESIGN_SYSTEM.md` §9 her çalışma sonunda güncellenir; duraklama veya limit kesintisinde de kalınan adım yazılır.
9. Okul, öğretmen ve öğrencilere kullanıcının paylaştığı stile uygun sertifikalar verilecek; düzenlenen belgelerin sitede görülebilmesi hedefleniyor. Ekli üç görsel tasarım referansıdır; içindeki ad/tarih/imza ve “One Year” gerçek kayıt veya bütün belgelere uygulanacak kural olarak kabul edilmez.

## Belgelerin görevleri

| Belge | Ne için okunur |
|---|---|
| [AGENTS.md](./AGENTS.md) | Tüm ajanlar için çalışma kuralları ve okuma sırası |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Tasarım kararları, tokenlar, CSS tuzakları; §9 ürün durumu |
| [WORK_LOG.md](./WORK_LOG.md) | Güncel çalışma noktası, geçmiş işler, doğrulamalar ve devam adımı |
| [CERTIFICATES.md](./CERTIFICATES.md) | Sertifika şeması, belge ekleme ve açık erişim modeli |
| [CONTENT_SOURCES.md](./CONTENT_SOURCES.md) | İçeriğin kaynakları, sayfa eşlemeleri ve uyarlama sınırları |
| [MORALED_PROJE_RAPORU.md](./MORALED_PROJE_RAPORU.md) | İlk kapsamlı inceleme ve sonradan düzeltilen bulgular |
| [I18N_GUIDE.md](./I18N_GUIDE.md) | Üç dilin anahtar paritesi ve çeviri kuralları |
| [README.md](./README.md) | Kurulum, komutlar ve depo yapısı |

İlk incelemede depo dışında bir Canvas raporu da oluşturuldu. Bu, `400fc97` incelemesinin tarihsel görüntüsüdür; sonraki düzeltmeleri içermez. Devam ederken bu depodaki güncel kayıtlar esas alınır.

## Tamamlanan çalışmalar

### K00 Claude çalışmalarının başlangıç durumu

**Tarih:** 21–22 Kasım 2026. **Durum:** Önceki çalışmanın incelenen mirası; bu oturumda yapılmış değişiklikler değildir.

- Design System v2: logodan türetilmiş lacivert/mavi ve turuncu, Montserrat/Inter, ana sayfa ve iç sayfa tasarımları.
- CRA'dan React 19 + Vite 8'e geçiş, lazy rotalar, WebP/telefon görselleri, ortak CSS yükleme sırası, rota başına SEO HTML'i.
- Ortaokul/lise konu önerileri, üç dil, hikâye/şarkı/quiz örnekleri ve erişilebilir örnek pencereleri.
- Yeni logo varyantları, favicon/OG, coming-soon yayını, `www.moraled.com` canonical/CNAME ve Instagram güncellemesi.
- İncelenen son commitler: `f443370`, `d3a95ed`, `0ecf4dd`, `84198bb`, `400fc97`. Ayrıntılı açıklamalar [proje raporunda](./MORALED_PROJE_RAPORU.md).

### K01 Gerçek proje incelemesi

**Tarih:** 22 Kasım 2026. **Durum:** Tamamlandı. **Kapsam:** Gerçek sitenin kodu, build'i, sayfaları ve etkileşimleri; ortak yayın altyapısı ayrıca gözlemlendi.

**Yapılan:** Eski rapor güncel sürümle karşılaştırılıp `MORALED_PROJE_RAPORU.md` yenilendi; `DESIGN_SYSTEM.md` §9'a inceleme özeti eklendi. İlk incelemede ürün kodu değiştirilmedi.

**Tespitler:** Beş ayda takvim çelişkisi, 3. sınıfın Şubat/Nisan konu boşlukları, doğrulanamayan kişi/alıntı/hizmet vaatleri, form gönderim sorunları, mobil menü odağı ve SSS durum bilgisi eksikleri. İlk üç başlık K02/K03 ile giderildi. Diğerleri aşağıdaki açık işler listesinde.

**Ürünün mevcut sınırı:** Site program tanıtımı, müfredat ve örnek etkinlikler sunuyor. Hesap/LMS/admin, öğrenci gelişim veritabanı, otomatik sertifika doğrulama, indirilebilir materyal kütüphanesi veya tarihli etkinlik rezervasyonu uygulanmış değil.

**İnceleme doğrulaması:** Build/lint temiz, `npm audit --json` 0 bilinen açık; 126 sayfa görünümü ve 18 örnek pencere kontrolü başarılı. Ek 36 etkileşim kontrolünde 34 geçiş ve iki manuel erişilebilirlik bulgusu kaydedildi. Form API yanıtları taklit edildi; gerçek e-posta gönderilmedi. Ayrıntı ve sınırlar doğrulama bölümünde.

### K02 Müfredat takviminin birleştirilmesi

**Tarih:** 22 Kasım 2026. **Durum:** Tamamlandı; yerel kullanıcı incelemesine sunuldu.

**Sorun:** Ana takvim ile sınıf sayfaları Ekim, Kasım, Aralık, Şubat ve Nisan değerlerinde farklılaşıyordu.

**Karar ve sonuç:** Mevcut sınıf konu dizilerinin sırası esas alındı. Yeni `src/data/curriculumCalendar.js`, ana sayfa takviminin, ay rozetinin, genel müfredatın ve dört yaş bandının ortak kaynağı oldu. Bu karar, ulusal kurum tarafından onaylanmış ayrı bir aylık takvim belgesi anlamına gelmez.

| Ay | Değer | Mevcut çeviri pillar kimliği |
|---|---|---|
| Eylül | Caring / Özen | 1 |
| Ekim | Respect / Saygı | 3 |
| Kasım | Trustworthiness / Güvenilirlik | 4 |
| Aralık | Responsibility / Sorumluluk | 2 |
| Ocak | Fairness / Adalet | 5 |
| Şubat | Citizenship / Vatandaşlık | 8 |
| Mart | Perseverance / Sebat | 7 |
| Nisan | Leadership / Liderlik | 6 |
| Mayıs | Self-Discipline / Öz disiplin | 9 |

`pillar` kimliği ay sırası değildir. Konu ve odak dizilerinin Eylül–Mayıs sırası korunur. `getCurrentCurriculumMonth()` Haziran–Ağustos'ta Eylül'ü gösterir.

**Dosyalar:** `curriculumCalendar.js`, `About.jsx`, `ScopeSequence.jsx`, `ScopeSequenceAge.jsx`, `ageTopics.js`, üç `translation.json`; rapor ve tasarım durum kaydı. Eski `GRADE_ORDER_PILLARS` kaldırıldı; öğrenme hedeflerindeki sabit ay isimleri üç dilde “ayın sonunda” anlamındaki ifadelerle değiştirildi.

**Doğrulama:** Build/lint temiz; 6 ilgili rota × 3 dil × 2 genişlik = 36 görünüm, 12 aylık rozet kontrolü ve 24 tarih sınırı kontrolü başarılı. Bu aşamada mevcut konu başlıkları yeniden yazılmadı; iki boş ay K03'te dolduruldu.

### K03 Kırgızistan odağında konu ve program içeriği

**Tarih:** 22 Kasım 2026. **Durum:** Tamamlandı; yerel kullanıcı incelemesine sunuldu.

**Kaynak incelemesi:** Ulusal programın Adalet Bakanlığı sayfasının gövdesi yüklenmediği için resmî Eğitim Bakanlığı açıklaması ve iki dilli PDF kopyası kullanıldı. Özellikle PDF s.18 / basılı KG s.16, RU s.15 incelendi. Kullanıcının Drive klasöründe anaokulu ve 1–6. sınıflara ait yedi PDF görüldü; 3. sınıf kitabının ilgili bölümleri ayrıntılı, 4–6. sınıfların girişleri bağlam için okundu. Klasördeki `KG`, anaokulu anlamındadır. Kaynak kapsamı ve bağlantılar `CONTENT_SOURCES.md` içinde.

**Konu eklemeleri:** `ageTopics.js` içindeki 3. sınıf Şubat ve Nisan boşluklarına sırasıyla okul/yerel çevreye özen ve birlikte yararlı bir sınıf işi düzenleme konuları KG/RU/EN eklendi. Yalnızca bu iki kayıt `adapted: true` taşır; sınıf sayfasında MoralEd uyarlaması etiketi ve kaynak bağlantısı görünür. Toplam **248 konu**, **99 dolu sınıf-ay hücresi**. Mevcut diğer başlıklar bu işlemde kaynakla yeniden doğrulanmadı.

**Kişisiz içerik:** Ana sayfadaki alıntılar üç sınıf uygulamasıyla, Our Story'deki alıntılar okul/aile/yerel topluluk rolleriyle, Team kişi listesi üç katılım rolüyle, gönüllü kişi listesi üç gönüllülük ilkesiyle değiştirildi. Eski kişi ve alıntı çeviri anahtarları üç dilden çıkarıldı. Fotoğraf dosyaları silinmedi.

**Kaynaklar ve hizmet metinleri:** `/research` beş kaynakla yeniden düzenlendi; ulusal program ve kitap önce geliyor. ABD üniversite başvurusu/burs için hizmet saati, otomatik referans, kesin hazır paket ve rapor vaatleri sadeleştirildi. Materyal, SSS, etkinlik, Features, seminer ve ilgili SEO metinleri gerçek kapsamla eşleştirildi. Menüde `/team` iş birliği, `/research` kaynaklar ve yaklaşım olarak adlandırıldı.

**Dil/tasarım:** Her dilde 694 kaynak anahtarı, diziler dahil 731 son değer; parite sağlandı. Yeni CSS mevcut `Home.css` ve en son yüklenen `inner.css` içine tokenlarla eklendi. Yeni görsel, font veya CSS dosyası eklenmedi.

**Limit kesintisinden dönüş:** Kaydedilmiş kaynak değişiklikleri kontrol edilerek devam edildi. Eski geçici test klasörleri/süreçleri kaybolduğu için QA araçları `/tmp/moraled-qa` altında yeniden kuruldu; build/lint ve tarayıcı kontrolleri yeniden çalıştırıldı. Projenin bağımlılık dosyaları değiştirilmedi. Test preview sunucusu kapatıldı; yerel geliştirme sunucusu bırakıldı.

**Doğrulama:** Build/lint temiz; 11 rota × 3 dil × 2 genişlik = 66 görünüm başarılı. Son metin düzeltmeleri için 18 ek kontrol başarılı. 1181px masaüstü menü üç dilde çakışmıyor. Yerel 3000 portunda iki yeni etiket, kaynak bağlantısı ve RU dil değişimi kontrol edildi. Gerçek fotoğraf/izin ve eğitim uzmanı/ana dil kontrolü açık.

### K04 Kalıcı kayıt ve devir düzeni

**Tarih:** 22 Kasım 2026. **Durum:** Tamamlandı.

**Kullanıcı isteği:** Yapılan ve yapılacak işlerin sonraki ajanlara aktarılması.

**Yapılan:** Bu geçmiş ve güncel durum kaydı oluşturuldu. `AGENTS.md` okuma/güncelleme kuralları, Cursor için her oturumda geçerli `.cursor/rules/work-log.mdc` ve README/tasarım/rapor bağlantıları eklendi. Rapordaki geçici test kanıtı notu ve etkinlik kapsamı güncel durumla eşleştirildi.

**Doğrulama:** Python ile beş belgedeki 33 yerel Markdown dosya bağlantısı kontrol edildi; kırık bağlantı yok. Devirde anılan geliştirme dosyaları mevcut; Cursor kuralında `alwaysApply: true` ve geçerli başlık yapısı var. `git diff --check` temiz. Son içerik testlerinin 66 ve 18 kayıtlık JSON dosyalarının hâlâ mevcut olduğu kontrol edildi. Ürün kodu değişmediği için build/lint tekrar edilmedi; K03 sonuçları önceki doğrulama olarak korunuyor.

**Devir noktası:** Kullanıcının yerel incelemesi bekleniyor. Yeni bir geliştirme yapılacaksa ilk öneri Contact/VerifyCertificate submit işleyicilerini okuyup form durumlarını düzeltmek; ayrıntı açık işler listesinde. Commit ve deploy yapılmadı.

### K05 Sertifika merkezi ve coming-soon örnekleri

**Tarih / çalışan:** 22 Kasım 2026 / Codex. **Durum:** Tamamlandı; yerel incelemeye hazır.

**Kullanıcı talebi:** Okul/öğretmen/öğrenci belgelerini sitede göstermek; paylaşılan üç tasarımı referans almak; coming-soon sayfasına bir iki görsel eklemek.

**Plan:** Mevcut `/verify-certificate` sayfasına üç alıcı grubu, tasarım galerisi ve numarayla belge bulma/görüntüleme eklemek. Onaylı kayıtlar için açıkça belgelenmiş bir veri kaynağı oluşturmak; gerçek kayıt sağlanmadığı için sahte belge düzenlememek. Coming-soon'a iki örnek ve KG/RU/EN açıklama eklemek. Görselleri Picture/optimizasyon akışından geçirmek; iki build'i ayrı klasörlerde, lint ve tarayıcı kontrolleriyle doğrulamak. Commit/deploy yok.

**Kullanıcı yanıtı:** “Sertifika numarasıyla sorgulama; okul belgeleri ayrıca listelenebilir.” Genel listede yalnızca okul kayıtları, öğretmen/öğrenci için numara sorgusu uygulanıyor. Gerçek düzenlenmiş kayıtlar henüz paylaşılmadı. Statik açık kayıt, özel hesap erişimi sağlamaz; yalnızca yayım onaylı alanlar/dosyalar eklenebilir.

**İlk bulgu:** Mevcut sayfa EmailJS ile manuel talep gönderiyor; sertifika kayıt kaynağı ve görüntüleyici yok. Coming-soon bağımsız Vite build'i; yalnızca izin verilen public dosyaları yayımlıyor.

**Değişen yerler:** `VerifyCertificate.jsx/.css`, yeni sertifika verisi/yardımcısı, üç dil, `public/images/certificates/`, `imageManifest.json`, coming-soon HTML/CSS/strings/main ve dört optimize örnek varlığı; package.json build/test komutları, token boşluk ölçeği, gizlilik ve kaynak/devir belgeleri. Vite yayın ayarları değiştirilmedi.

**Ara durum:** Sorgu, okul listesi, üç örnekli galeri ve iyileştirilmiş sertifika yardım formu uygulandı; coming-soon iki örnekle genişletildi. İki build ve lint temiz; kalıcı altı sertifika testi geçti. İlk tarayıcı kontrolünde galeri düğmesinin erişilebilir adında görünür “dizayn örneği” etiketi eksik bulundu; erişilebilir ada eklendi. Etkileşim testinin önceki sonucu beklemeden okuması da URL/kayıt beklemeleriyle düzeltildi. Son tarayıcı doğrulaması da tamamlandı. Son şema incelemesinde sayısal ID yanlışlıkla metne dönüşmesin diye tür şartı eklendi ve kalıcı testle doğrulandı. Gerçek e-posta gönderilmedi; kayıtlar ağ yanıtı taklidiyle test edildi.

**Son doğrulama:** Tam site build'i uyarısız (20 rota → 21 HTML), ayrı coming-soon build'i başarılı; lint 0 hata/uyarı. Altı kalıcı test geçti. KG/RU/EN × 1440/390px üzerinde **30 sayfa görünümü, 18 galeri penceresi ve 42 davranış kontrolü** başarılı; axe/JS hatası/kırık görsel/taşma yok. Davranışlar: yalnızca okulları listeleme, üç alıcı türü, doğrudan bağlantı, eksik kayıt, aktif/süresi dolmuş/iptal/gelecek tarih, kopyalama, servis hatası/yeniden deneme, bozuk şema ve mock form başarı/hata/çift gönderim. Son tür şartı sonrası build/lint/kalıcı testler ve boş kayıt görünümü yeniden doğrulandı. Gerçek dosyalardaki üç kaynak PNG'nin kullanıcı asıllarıyla SHA-256 eşitliği kontrol edildi.

**Dil ve görsel durumu:** Gerçek site 750 anahtar / diziler dahil 787 son değer, coming-soon her dilde 33 anahtar; tam parite. Font eklenmedi. Tam boy sertifika WebP'leri yaklaşık 98–135 KiB; telefon varyantları 54–72 KiB. Coming-soon ay rozeti ve değer sırası ortak takvim yardımcısına bağlandı.

**Kanıt / devam:** Sonuç özeti ve ekran görüntüleri geçici `/tmp/moraled-certificates-qa/` içinde; kalıcı özet burada, kalıcı şema/tarih testleri `scripts/certificates.test.js` içinde. Ayrıntılı kayıt ekleme yöntemi [CERTIFICATES.md](./CERTIFICATES.md). Öğretmen/öğrenci verileri de açık JSON'da olacağı için yalnızca yayım onaylı alan/dosya eklenebilir; numara gizli erişim anahtarı değildir. Gerçek kayıtlar ve ayrı öğretmen/öğrenci tasarımları bekliyor. Kullanıcı yerel görünümleri inceleyecek. Geçici 4173/4174 QA sunucuları kapatılacak; kullanıcı için 3000/3001 geliştirme sunucuları bırakılıyor. Commit/deploy yapılmadı.

### K06 Codex çalışmalarının devralma incelemesi

**Tarih / çalışan:** 22 Kasım 2026 ~20:50 / Claude. **Kullanıcı talebi:** “Codex kullanım limitine ulaştı; çalışmalarını kontrol et, nerede kaldı, ne yapması gerek; nasıl devam edeceğini bildir.” **Durum:** İnceleme tamamlandı; ürün kodu değiştirilmedi.

**Kalınan nokta:** Son dosya yazımı 20:45:42 (bu kayıt + dört belge). K05 tamam; yarım kalan tek adım Codex'in “kapatılacak” dediği 4173/4174 QA önizleme sunucuları (hâlâ açık; Claude'un kapatma komutu izin denetimine takıldı, zararsız). `build/` klasöründe tam sitenin 20:43 build'i duruyor — `npm run deploy` önce coming-soon'u yeniden derlediği için güvenli, ama bu klasör doğrudan yayımlanmamalı.

**Bağımsız doğrulama (Claude, gerçekten çalıştırıldı):** `npm run lint` temiz; `npm run test:certificates` 6/6; `git diff --check` temiz; `validate-certificates` 0 kayıt, şema geçerli; tam site build'i (scratch klasörüne) 20 rota → 21 HTML, uyarısız; coming-soon build'i başarılı ve paket tam siteden iz içermiyor; parite 750 anahtar (KG/RU/EN), coming-soon 33. Tarayıcıda 1440/390px: coming-soon (3001) ve `/verify-certificate`, `/`, `/scope-and-sequence`, `/team` (3000) — kırık görsel/taşma/axe ihlali/JS hatası yok.

**Bulunan sorunlar:**
1. 3000 portundaki geliştirme sunucusu “504 Outdated Optimize Dep” veriyordu; `/verify-certificate` “Бет жүктөлгөн жок” hata ekranına düşüyordu (HTML 200 dönüyor, sayfa parçası yüklenmiyordu). Üretim build'i sağlamdı → sunucu durumu. **Düzeltildi:** sunucu `--force` ile yeniden başlatıldı; sayfalar açılıyor.
2. **Regresyon:** `VerifyCertificate.jsx` hero bölümü `certificate-hero` → `ad-hero` yapılmış; `polish.css` fotoğraf eşlemesi koptu, hero'daki yaprak fotoğraf boş. Kök neden Claude'un AGENTS.md/DESIGN_SYSTEM.md'deki belirsiz örneği (`ad-hero` = “<sayfa-adı>-hero” yer tutucusu idi). **Henüz düzeltilmedi** (plan 1).
3. **www HTTPS:** GitHub Pages 12:19'dan beri `dns_changed` (sertifika üretilmedi). Sağlık kontrolü: iki alan adı geçerli, `is_https_eligible: true`, CAA Let's Encrypt'e izinli → GitHub tarafında takılmış iş. Şu an http://www çalışıyor, https://www sertifika hatası veriyor; HTTPS zorunluluğu kapalı.

**Devam planı (kullanıcı onayıyla):** (1) hero sınıfını `certificate-hero`'ya geri al, belgelerdeki örneği netleştir; (2) Codex'in değişikliklerini mantıklı commit'lere bölüp `redesign/vite-coming-soon` dalına push et; (3) www sertifikası için GitHub'da alan adını kaldırıp yeniden ekle, sertifika gelince HTTPS'i zorunlu yap; (4) coming-soon'daki sertifika örneklerini yayımlamak isteyip istemediğini sor, isterse `npm run deploy`; (5) açık işler listesi sırasıyla: Contact formu → mobil menü/SSS erişilebilirliği → gönüllü başvuru akışı.

**Commit / deploy:** Yapılmadı.

### K07 Devralma planının 1–3. adımları

**Tarih / çalışan:** 22 Kasım 2026 ~21:00–21:45 / Claude. **Kullanıcı talebi:** “1, 2 ve 3'ü bitir; test ettikten sonra devam edelim.” **Durum:** 1 ve 2 tamamlandı; 3 GitHub'ın sertifika kuyruğunu bekliyor.

**1 — Hero düzeltmesi:** `VerifyCertificate.jsx` hero sınıfı `certificate-hero`'ya geri alındı; hero butonları başlıkla aynı hizaya alındı (`VerifyCertificate.css`: `justify-content: flex-start`). `AGENTS.md` kural 4 ve `DESIGN_SYSTEM.md` §6'daki örnek `<sayfa>-hero` olarak netleştirildi. **Test:** 3 dil × 1440/390px: hero fotoğrafı (`gallery3.webp`) 200, axe 0, JS hatası yok; buton ve başlık x-konumu eşit (160 / 20).

**2 — Commit/push:** `72e1f12` müfredat takvimi + kişisiz içerik (K02–K03), `2bdef07` sertifika merkezi + coming-soon örnekleri (K05) + hero düzeltmesi; belgeler ayrı commit. **Test:** her iki commit'in anlık görüntüsü (`git archive`) ayrı derlendi: A ve B'de tam site 20 rota → 21 HTML uyarısız; B'de `validate-certificates` geçerli (0 kayıt), 6/6 test, coming-soon build'i başarılı; lint 0. Dal `origin/redesign/vite-coming-soon` ile eşit. `main`'e dokunulmadı.

**3 — www HTTPS:** 21:22'de GitHub Pages özel alan adı API ile kaldırıldı (sertifika kaydı sıfırlandı), 21:24'te `www.moraled.com` yeniden eklendi → yeni talep `dns_changed` (`www.moraled.com`, `moraled.com`). GitHub bunu gh-pages'e `Delete CNAME` / `Create CNAME` commit'leri olarak yazdı; CNAME = `www.moraled.com`. DNS sağlık kontrolü iki ad için geçerli ve HTTPS'e uygun; CAA Let's Encrypt'e izinli. 9 dakikalık izlemede onay gelmedi. Ziyaretçi durumu: http://www 200, http/https apex → www yönlendirmesi; yalnızca https://www sertifika hatası. Arka planda (Claude oturumu) 3 saatlik izleyici çalışıyor: onaylanınca `https_enforced: true` yapıp dört adresi test edecek. **Tekrar kaldırıp eklemeyin** — kuyruğu sıfırlar.

**Beklenmeyen olay:** gh-pages `801c92b Updates` (21:18) — Claude dışında, `npm run deploy` varsayılan mesajıyla; Codex süreçleri bu makinede açık. Canlı coming-soon artık iki sertifika örneğini içeriyor (içerik `2bdef07` ile aynı, CNAME doğru). Yayın kullanıcı onayı kuralı gereği kullanıcıya bildirildi.

**Açık kalan:** 4173/4174 QA önizleme sunucuları (kapatma komutu izin denetimine takıldı). Sonraki iş: www sertifikası onayı → ardından açık işler 1 (Contact formu).

**Commit / deploy:** Commit + push yapıldı (yukarıda). Claude bu adımlarda deploy yapmadı.

### K08 Coming-soon: gerçek sertifika görselleri yerine illüstrasyon

**Tarih / çalışan:** 22 Kasım 2026 ~21:30–22:00 / Claude. **Kullanıcı talebi:** “Yapım aşamasındaki ‘Planned for the new website / Recognising our work together’ kısmındaki orijinal sertifikalar ve üzerindeki yazılar görünmesin; yerine sertifikaya benzeyen estetik bir tasarım olsun.” Ardından Contact formu işine geçiş onaylandı. **Durum:** tamamlandı.

**Yapılan:** `#cs-certificates` bölümündeki iki `<picture>` (kullanıcının PNG örnekleri; alıcı adı/tarih/imza okunuyordu) çıkarıldı. Yerine metinsiz iki satır içi SVG illüstrasyon geldi: fildişi “Partner” (altın çift çerçeve, guilloche halkalar, köşe elmasları, MoralEd işareti, altın başlık çubuğu, mavi alıcı çubuğu, satır/çip yer tutucuları, imza çizgisi, kurdeleli mühür) ve lacivert “Distinguished” (beyaz diskte işaret + defne, üç yıldız, beyaz alıcı çubuğu, turuncu kurdele). İçlerinde hiçbir ad, tarih veya yazı yok; yalnızca logo işareti. Figcaption'lar (“Дизайн үлгүсү” + belge türü) korundu. Not metni üç dilde “Сүрөттөр — сертификаттардын стилин көрсөткөн иллюстрациялар, чыныгы документтер эмес.” olarak güncellendi; `certAlt*` erişilebilir adları “… сертификатынын иллюстрациясы” oldu. Kartlar hafif eğik (−2.5° / 2°), üzerine gelince düzleşiyor.

**Logo işareti:** `scripts/build-logo-assets.py` artık yalnız işaret (`moraled-mark.png`, 222×200, şeffaf) da üretiyor → `src/assets/logo/` ve `coming-soon/assets/`. SVG içindeki `<image href="./assets/moraled-mark.png">` Vite tarafından hash'leniyor.

**Değişen dosyalar:** `coming-soon/index.html`, `coming-soon/coming-soon.css`, `coming-soon/strings.js`, `scripts/build-logo-assets.py`, yeni `coming-soon/assets/moraled-mark.png`, `src/assets/logo/moraled-mark.png`.

**Doğrulama:** `vite build -c vite.soon.config.js` (scratch klasörüne) uyarısız; build içinde `certificate-*` dosyası ve alıcı adı yok, işaret hash'li. Yerel statik sunucuda 3 dil × 1440/390px: her görünümde 2 illüstrasyon, işaret yükleniyor, not güncel, axe 0, 4xx/JS hatası/yatay taşma yok. Atlama bağlantısı odak olmadan gizli (top −64px), Tab ile görünüyor. 33 anahtar × 3 dil paritesi korunuyor.

**Kalan / karar bekleyen:** `coming-soon/assets/certificate-*.webp` artık kullanılmıyor (silme kullanıcı onayına bağlı). Tam sitedeki `/verify-certificate` örnek galerisi hâlâ kullanıcının orijinal PNG'lerini gösteriyor; orada da illüstrasyona geçilip geçilmeyeceği kullanıcıya sorulacak.

**Commit / deploy:** Commit `af845f5` + push yapıldı. İlk deploy denemesi izin denetimine takıldı (kural 7); kullanıcı onayından sonra K10'da yayımlandı (gh-pages `cb178a2`).

### K09 Contact formu: gönderim durumu ve sayfa içi geri bildirim

**Tarih / çalışan:** 22 Kasım 2026 ~22:00–22:15 / Claude. **Kullanıcı talebi:** K08 öncesinde “Evet onaylıyorum” — açık iş 1'e geçiş. **Durum:** tamamlandı.

**Yapılan (`src/pages/Contact.jsx`):** `alert()` kaldırıldı. Durum makinesi `idle | sending | success | error`; çift gönderimi `useRef` kilidi engelliyor (state eşzamansız olduğundan hızlı çift tıklama/Enter'da state kontrolü yetmez). Gönderilirken düğme “Жөнөтүлүүдө… / Отправка… / Sending…” der, `aria-disabled="true"` ve form `aria-busy` olur — `disabled` bilinçli olarak kullanılmadı, çünkü odaklı düğme disabled olunca klavye odağı `body`'ye düşer. Başarıda form temizlenir ve yeşil kenarlı bildirim çıkar; kullanıcı yeniden yazmaya başlayınca eski onay kaybolur. Hatada girilen değerler korunur, mesaj e-posta adresini (`contact.email_text`, `{{email}}`) gösterir. Bildirim her zaman DOM'da olan `<p role="status">` içinde (canlı bölge sonradan eklenirse duyurulmayabilir).

**Metinler:** `contact.form_sending` yeni (3 dil); `contact.alert_success/alert_error` emojisiz ve sayfa içine uygun yeniden yazıldı; RU düğmedeki 📨 ve KG düğmedeki baştaki boşluk kaldırıldı. Parite 751 anahtar × 3 dil.

**Stil (`src/pages/Contact.css`):** `.contact-status` + `[data-state=success|error]` (tokenlar: `--c-success-100/600`, `--c-danger-100/600`; metin `--c-ink`, renk yalnızca zemin ve sol kenarda → kontrast güvenli), `[aria-disabled=true]` düğme için bekleme imleci.

**Doğrulama:** EmailJS `page.route` ile taklit edildi (1,5 sn gecikme; 200 ve 500 yanıtları) — gerçek e-posta gönderilmedi. 3 dil × 1440/390 px × 11 kontrol = **66/66 geçti**: boş başlangıç, gönderilirken etiket/aria, Enter + tıklama + alan içi Enter ile üçlü gönderimde **tek istek**, başarıda mesaj + temiz form + düğmenin geri dönmesi, düzenleyince mesajın kalkması, hatada e-postalı mesaj + korunan değerler, hatadan sonra yeniden deneme, axe 0 (boş/başarı/hata), `alert` 0, JS hatası 0, taşma yok. Ayrıca klavye odağı gönderim sırasında ve sonrasında düğmede kaldı. `npm run lint` 0; `test:certificates` 6/6; `npm run build` uyarısız (20 rota → 21 HTML; `build/` tam site çıktısı — yayımlamayın).

**Kalan:** Gerçek EmailJS teslimi test edilmedi (kullanıcı isterse kendi adresiyle bir deneme). Görünür etiketler hâlâ yalnızca placeholder + `sr-only` label (axe geçiyor; görünür etiket ayrı bir tasarım kararı). Sonraki iş: açık iş 2 (Header mobil menü odak tuzağı, FAQ `aria-expanded`/`aria-controls`).

**Commit / deploy:** İlk commit denemesi izin denetimine takıldı (kural 7); kullanıcı onayından sonra `3fc3e75` olarak commit + push. Deploy yok (tam site yayında değil).

### K10 Yayın, verify-certificate illüstrasyonları ve temizlik

**Tarih / çalışan:** 22 Kasım 2026 ~22:15–22:30 / Claude. **Kullanıcı talebi:** “Evet yayınla ve commit et, verify-certificate'te de illüstrasyon olsun. Evet sil.” **Durum:** tamamlandı.

**Commit + yayın:** K09 `3fc3e75` olarak commit + push. Coming-soon, K08'de test edilen build'den `npx gh-pages -d <build> -m "Coming soon: certificate illustrations (no real documents)"` ile yayımlandı → gh-pages `cb178a2`, CNAME `www.moraled.com`. **Canlı doğrulama:** http://www.moraled.com 200, apex → www 301; sayfada 2 `cs-cert-art`, `moraled-mark-*.png` 200; 21:18 yayınındaki dört `certificate-*.webp` adresi artık 404.

**verify-certificate:** Yeni `src/components/CertificateArt.jsx` — üç metinsiz varyant: `partner` (fildişi/altın, coming-soon ile aynı), `character` (yeni: beyaz–gök mavisi zemin, köşelerde mavi dalgalar, iki yıldızlı rozet, mavi mühür), `distinguished` (lacivert/altın, coming-soon ile aynı). Gradyan/clip kimlikleri `useId` ile önekli (galeri + pencere aynı anda DOM'da). `CERTIFICATE_DESIGNS` artık `image` yerine `variant` taşıyor; galeri ve büyütme penceresi `<Picture>` yerine `<CertificateArt>` kullanıyor. CSS: `.cert-design-button .cert-art`, pencerede `width: min(100%, 50dvh)` (300×420 oranı). Metinler (3 dil): `certificate.designs_note` → “illüstrasyon, gerçek belge değil…”, `certificate.design_alt` → “… — сертификаттын стилинин иллюстрациясы”. `CERTIFICATES.md` güncellendi.

**Silinen (kullanıcı onayıyla):** `coming-soon/assets/certificate-{partner,distinguished}-school{,-640}.webp` (4 dosya, K08'den beri kullanılmıyordu).

**Doğrulama:** `/verify-certificate` 3 dil × 1440/390 = 48/48: galeride 3 illüstrasyon, sayfada orijinal sertifika `<img>`/isteği 0, işaret görseli yükleniyor, yinelenen `id` yok, not metni güncel, axe 0 (sayfa + pencere), her pencerede oran 1,4 ve ekrana sığıyor (1440: 450×630, 390: 352×493), Esc sonrası odak düğmeye dönüyor, JS hatası/4xx/taşma yok. `npm run lint` 0, `test:certificates` 6/6, `npm run build` uyarısız (20 rota → 21 HTML).

**Karar bekleyen:** `public/images/certificates/` içindeki üç orijinal PNG + WebP varyantları artık hiçbir sayfada kullanılmıyor, ancak `public/` her şeyi build'e kopyaladığından tam site yayınında `/images/certificates/partner-school.png` gibi adreslerle açılabilir; `imageManifest.json` da yollarını JS paketinde taşıyor. Öneri: yayımlanmayan bir referans klasörüne taşımak (ör. `design-references/certificates/`) ve manifest girdilerini kaldırmak — kullanıcı onayı gerekir.

**Commit / deploy:** Bu kayıtla birlikte commit + push. Tam site yayınlanmadı.

### K11 Sertifika orijinallerinin taşınması; mobil menü ve SSS erişilebilirliği

**Tarih / çalışan:** 22 Kasım 2026 ~22:35–23:00 / Claude. **Kullanıcı talebi:** “Taşı” (orijinal sertifikalar) ve açık iş 2'ye onay. **Durum:** tamamlandı.

**1 — Taşıma (tamamlandı):** `git mv public/images/certificates design-references/certificates` (3 PNG + 6 WebP; silme yok). `src/data/imageManifest.json`'dan üç girdi kaldırıldı (22 → 19; betiğin yazdığı biçim korunarak). `design-references/README.md` klasörün yayınlanmadığını ve neden ayrı tutulduğunu açıklıyor. **Doğrulama:** `npm run build` uyarısız (20 rota → 21 HTML); `build/images/` içinde `certificates` yok, JS/HTML'de `images/certificates` geçmiyor; lint 0. **Sınır:** GitHub deposu herkese açık; dosyalar depoda ve geçmiş commit'lerde görülebilir — bu taşıma yalnızca web sitesinde yayınlanmamalarını sağlar.

**Taşıma commit'i:** `c1a7afb` (push edildi).

**2 — Mobil menü + SSS (tamamlandı):**
- `src/components/Header.jsx`: mobil panel ve arka plan perdesi `createPortal` ile `<body>`'ye taşındı; menü açıkken `#root` **`inert`** (arka sayfa klavye ve ekran okuyucuya kapalı), odak kapatma düğmesine gider, `inert` desteklemeyen tarayıcılar için Tab/Shift+Tab panel içinde döner. Esc, kapatma düğmesi, perde tıklaması ve menüdeki dil düğmeleri menüyü kapatıp odağı menü düğmesine geri verir; bağlantıyla gezinmede sayfa normal etkileşimli kalır. Menü düğmesine `aria-controls="mobile-nav"` (yalnız açıkken). Masaüstü açılır menülerde yanlış `aria-haspopup="true"` (ARIA menü anlamı) kaldırıldı; disclosure deseni: `aria-expanded` + açıkken `aria-controls`. Header.css değişmedi (seçiciler `.mobile-nav`/`.backdrop` üst düzey olduğu için portal görünümü etkilemedi).
- Yeni metinler (3 dil): `nav.open_menu`, `nav.close_menu`, `nav.main_label`, `nav.mobile_label` — önceki sabit İngilizce “Open menu / Close menu / Main / Mobile” yerine. Parite 755 × 3.
- `src/pages/FAQ.jsx`: soru düğmeleri `type="button"`, `id`, `aria-expanded`, `aria-controls`; yanıtlar her zaman DOM'da, kapalıyken `hidden` (aria-controls hep var olan öğeyi gösterir); +/− ikonları `aria-hidden`. Soruları başlığa sarmak ertelendi: `inner.css`'teki genel `section h2::before` süsü her soruya çizgi ekler, ayrı tasarım işi.

**Doğrulama:** Playwright + axe, 75/75: mobil menü 3 dil × 11 kontrol (yerel etiketler, açılışta odak/inert/kaydırma kilidi, panel `#root` dışında, axe 0 açıkken, 40 Tab + 40 Shift+Tab'da odak hiç dışarı çıkmadı, Esc/kapat/perde ile odak dönüşü, menüdeki dil değişimi, bağlantıyla gezinme sonrası tek perde ve etkileşimli sayfa, JS hatası 0); masaüstü açılır menü 2 dil (aria-controls gerçek öğe, haspopup yok, Esc kapatır, axe 0); SSS 3 dil × 1440/390 × 6 kontrol (8 düğme bağlı, tıklama/Enter/Space, tek açık yanıt, axe 0 açık/kapalı, taşma yok); **21 rota × 1440/390 tarama:** axe 0, JS hatası 0, 390'da her sayfada menü açıkken axe 0 + inert + odak. Animasyon sonrası görsel değişmedi. `npm run lint` 0, `test:certificates` 6/6, `npm run build` uyarısız.

**Commit / deploy:** İlk commit denemesi izin denetimine takıldı; kullanıcı onayıyla (“Evet commit et ve push et”) bu kayıtla birlikte commit + push. Deploy yok (tam site yayında değil).

### K12 Öğrenci gönüllü başvuru akışı

**Tarih / çalışan:** 22 Kasım 2026 ~23:05–23:30 / Claude. **Kullanıcı talebi:** “Evet commit et ve push et, gönüllü başvurusuna başla.” (K11 commit'i: `762e09e`.) **Durum:** tamamlandı.

**Sorun:** “Окуучу-волонтёрлор” sayfasının düğmesi genel iletişim formunu açıyordu; orada roller yalnızca öğretmen/yönetici/müdür/diğer, öğrenci için anlam taşımıyor ve e-postada başvurunun gönüllülükle ilgili olduğu görünmüyordu.

**Karar:** Ayrı form yerine aynı Contact formunun **gönüllü modu** (K09'daki sağlam gönderim mantığı tekrar kullanıldı). Sayfanın kendi adımları (“мектеп менен макулдашуу”, “ата-эне же камкорчу менен сүйлөшүү”) gereği başvuru bir yetişkinin bilgisiyle yapılır; bu nedenle onay kutusu zorunlu. Reşit olmayanlardan ek kişisel veri istenmedi (alanlar genel formla aynı).

**Yapılan:**
- `src/pages/StudentVolunteers.jsx`: CTA → `/contact?topic=volunteer`.
- `src/pages/Contact.jsx`: `Contact` sarmalayıcısı `topic` parametresini okur ve `ContactPage`'i moda göre `key`'ler (modlar arası geçişte form ve durum sıfırlanır). Gönüllü modunda: başlık “Окуучу-волонтёрдун арызы”, açıklama + gönüllü adımlarına bağlantı, roller `Student / Teacher / Parent or caregiver / Other` (değerler e-posta için İngilizce), görünür metin alanı `details`, zorunlu onay kutusu (`adult_informed`), düğme “Арызды жөнөтүү”. Gönderimde gizli `message` alanı “Topic: Student volunteer application / A teacher or parent/caregiver knows about this application: Yes” + fikir olarak birleştirilir (sertifika formuyla aynı desen — EmailJS şablonu yalnız standart alanları gösteriyor). Sayfa açılınca form bölümüne kaydırılır (`scroll-margin-top: var(--header-h)`). Ad/e-posta alanlarına `autoComplete`.
- `src/pages/Contact.css`: giriş metni, onay kutusu (polish.css'in metin alanı stilini geri alır, `accent-color`, görünür odak çizgisi), kaydırma payı.
- Metinler (3 dil, 8 yeni anahtar → 763): `contact.form_role_student`, `form_role_parent`, `volunteer_title`, `volunteer_intro`, `volunteer_steps_link`, `volunteer_message`, `volunteer_consent`, `volunteer_button`. `privacy.info_text`'e gönüllü onayı cümlesi eklendi.

**Doğrulama:** mock EmailJS (istek gövdesi de denetlendi) 3 dil × 1440/390 × 11 = **66/66**: gönüllü sayfasından geçiş ve forma kaydırma, gönüllü rolleri/alanları, onay işaretlenmeden istek gitmemesi, hatada değerlerin ve onayın korunması, başarıda e-posta gövdesinde konu + onay + fikir + rol + okul ve formun sıfırlanması, header'daki Bağlantı ile genel moda temiz dönüş, genel modda e-posta gövdesine önek eklenmemesi, gizlilik metni, axe 0, alert/JS hatası/taşma yok. K09 genel form testi yeniden 66/66, odak testi geçti. Mobil/masaüstü görselde başlık header'ın altında net. `npm run lint` 0, `test:certificates` 6/6, `npm run build` uyarısız (20 rota → 21 HTML).

**Kalan:** Gerçek EmailJS teslimi test edilmedi — kullanıcı kendi adresiyle bir deneme yapmalı (gönüllü e-postasında ilk satırlar konu ve onay). Başvuruların kayıt/yanıt süreci (kim, ne kadar sürede yanıtlar) kullanıcı kararı.

**Commit / deploy:** İlk deneme izin denetimine takıldı; kullanıcı onayıyla (“Evet commit et ve push et, bundan sonrakileri de commit et”) bu kayıtla birlikte commit + push. Deploy yok (tam site yayında değil).

## Değişikliklerin dosya haritası

Dosyalar depo köküne göredir. Aşağıdaki ürün değişiklikleri başlangıç `400fc97` commit'inden sonraki yerel çalışmadır.

| Dosya veya grup | Yapılan değişiklik / nereden devam edilir |
|---|---|
| `src/data/curriculumCalendar.js` | Yeni ortak dokuz aylık takvim ve güncel ay yardımcısı |
| `src/data/ageTopics.js` | Eski ayrı pillar sırası çıkarıldı; iki etiketli 3. sınıf uyarlaması eklendi |
| `src/pages/About.jsx` | Ana sayfa takvimi/rozeti ortak veriden; alıntı yerine sınıf uygulamaları |
| `src/pages/ScopeSequence.jsx` | Genel tablo ay/değer/beceri/hedef eşlemesi ortak veriden |
| `src/pages/ScopeSequenceAge.jsx` | Dört yaş bandında ortak takvim; uyarlama etiketi ve kaynak notu |
| `src/pages/OurStory.jsx` | Alıntı kartlarında okul/aile/topluluk içeriği; eski CSS sınıf adları korunuyor |
| `src/pages/Team.jsx` | Kişi listesi yerine iş birliği rolleri; kişi görseli/baş harfi kullanımı çıkarıldı |
| `src/pages/StudentVolunteers.jsx` | Gönüllü kişi listesi yerine ilkeler; yerel bağlama uygun adımlar |
| `src/pages/Research.jsx` | Beş kaynak ve kullanım yaklaşımı; resmî onay/etki araştırması iddiası yok |
| `src/locales/{kg,ru,en}/translation.json` | Takvim hedefleri, yeni içerikler, menü/SEO ve hizmet kapsamı metinleri |
| `src/pages/Home.css`, `src/styles/inner.css` | Uygulama kartları, rol ızgarası, kaynak/uyarlama etiketleri |
| `src/pages/VerifyCertificate.jsx/.css` | Sertifika merkezi, okul listesi, örnek galeri ve kilitli/erişilebilir yardım formu |
| `src/data/certificates.js`, `public/certificates/registry.json` | Kayıt şeması/durum yardımcısı ve boş gerçek kayıt kaynağı |
| `scripts/validate-certificates.js`, `scripts/certificates.test.js`, `package.json` | Build öncesi kayıt/dosya doğrulaması ve altı kalıcı test |
| `design-references/certificates/` (K11'e kadar `public/images/certificates/`), `src/data/imageManifest.json` | Kullanıcının üç PNG tasarımı ve WebP/640px varyantları — K11'den beri yalnızca referans, manifestte yok |
| `coming-soon/{index.html,main.js,strings.js,coming-soon.css}`, `coming-soon/assets/certificate-*` | İki örnek, üç dilde tanıtım, alt metinler ve ortak ay takvimi |
| `src/styles/tokens.css`, `src/styles/inner.css` | Boşluk tokenları ve ortak sertifika kartı/ızgara kayıtları |
| `src/pages/PrivacyPolicy.jsx`, üç dil | Sertifika formu ve açık kayıt kapsamı |
| `CERTIFICATES.md` | Gerçek kayıt ekleme ve statik açık erişim rehberi |
| `CONTENT_SOURCES.md` | Yeni kaynak ve uyarlama kaydı |
| `MORALED_PROJE_RAPORU.md` | Güncel inceleme; giderilen ve açık bulgular |
| `DESIGN_SYSTEM.md`, `README.md` | Ürün durumu, kaynak/takvim ve çalışma kaydı bağlantıları |
| `WORK_LOG.md`, `AGENTS.md`, `.cursor/rules/work-log.mdc` | Devir kaydı ve gelecekteki kayıt yükümlülüğü |

K01–K04 aşamalarında coming-soon ve bağımlılık dosyaları değiştirilmedi. K05, coming-soon sunumu ile package.json build/test komutlarını genişletti; package-lock.json, yayın yapılandırması ve logo kaynakları değişmedi.

## Doğrulama kaydı ve sınırları

| Aşama | Kontrol | Sonuç |
|---|---|---|
| K01 ilk inceleme | `npm run build`, `npm run lint`, `npm audit --json` | Uyarısız build; lint 0 hata/uyarı; audit 0 bilinen açık, 22 Kasım gözlemi |
| K01 | 20 içerik rotası + 404 × 3 dil × 1440/390px | 126 görünüm; axe/JS hatası/kırık görsel/yatay taşma yok; tek main/h1/title/canonical |
| K01 | 3 örnek pencere × 3 dil × 2 genişlik | 18 görünüm; odak çevrimi, Esc ve açan düğmeye odak dönüşü başarılı |
| K01 | Hikâye, quiz, şarkı vurgusu, dil kalıcılığı, yönlendirmeler | Tamamlama/yeniden başlama ve yönlendirmeler başarılı; şarkı sesi test edilmedi, ses uygulaması yok |
| K01 | Mock form yanıtları ve manuel klavye kontrolü | Çift gönderim, iletişim formu temizliği, menü odağı ve SSS ARIA eksikleri doğrulandı; düzeltmeleri açık |
| K02 | Build/lint + 36 görünüm + 12 ay + 24 tarih sınırı | Takvim, değer, hedef, rozet ve yaz ayı dönüşü başarılı |
| K03 son içerik | `npm run build`, `npm run lint` | Vite 8.3.8; 20 rota → 21 HTML; uyarı/hata yok |
| K03 | 11 ilgili rota × 3 dil × 1440/390px | 66 görünüm; axe/JS hatası/kırık görsel/taşma/ham anahtar yok |
| K03 son metinler | Ana sayfa, Features, genel müfredat × 3 dil × 2 genişlik | 18 ek görünüm temiz; 1181px menü üç dilde çakışmıyor |
| K03 | JSON paritesi / konu verisi | 694 anahtar ve 731 son değer her dilde eşleşiyor; 248 konu, 99 dolu hücre, 2 uyarlama |
| K04 | Yerel sunucu | `localhost:3000` HTTP 200; bu gözlem sonraki oturumda sürecin çalışacağını garanti etmez |
| K04 | Belge/kural doğrulaması ve `git diff --check` | 33 yerel dosya bağlantısı sağlam; kural yapısı uygun; diff temiz. Ürün build/lint testleri tekrar edilmedi. |

K03'ün 11 rotası: `/`, `/our-story`, `/team`, `/research`, `/student-volunteers`, `/scope-and-sequence/upper-elementary`, `/materials`, `/events`, `/faq`, `/features`, `/moraled`.

Otomatik axe sonuçları manuel klavye bulgularını kapatmaz. Eski tarayıcılar, gerçek cihaz/ekran okuyucu, gerçek EmailJS teslimi, yayın ortamı HTTP davranışı, eğitim uzmanı ve ana dil onayı bu kontrollerin kapsamı dışında. İlk audit sonucu bağımlılık güncellemesi sonrası yeniden ölçülmelidir.

**Ham kanıtların durumu:** İlk inceleme ve takvim testlerinin `/tmp/moraled-review-2026-11-22/` ve `/tmp/moraled-calendar-fix-2026-11-22/` dosyaları kesintiden sonra bulunamadı. Son içerik sonuçları kayıt anında `/tmp/moraled-content-qa/results.json` ve `/tmp/moraled-content-qa-final/results.json` içinde mevcut; scriptler `/tmp/moraled-qa/` altında. Bunlar geçicidir, depoda kalıcı test paketi değildir. Sonuç özetleri bu dosyada korunur; sonraki ajan bu klasörlerin varlığına güvenmemeli veya bulunmayan testi çalıştırdığını söylememelidir.

K05 doğrulaması: iki build ve lint temiz; 6 kalıcı test, 30 görünüm, 18 galeri penceresi ve 42 davranış kontrolü başarılı. K03/K04 kayıtlarındaki sayılar o aşamaların sonuçlarıdır. Son içerik paritesi K05 ile 750 / 787; önceki 694 / 731 tarihsel sayıları korunur.

## Açık işler ve önerilen devam sırası

Bu liste planı kaydeder; aşağıdaki geliştirmeler henüz uygulanmadı. Başlangıçta `git status` ve ilgili kaynak dosyalar yeniden okunur.

| Sıra / durum | İş ve ilgili yer | Tamamlanma ölçütü / sonraki adım |
|---|---|---|
| 1 — tamamlandı (K09) | Formlar: `src/pages/Contact.jsx`; sertifika yardım formu K05 ile düzeltildi | Gönderiliyor durumu, ref kilidiyle tek istek, başarıda temizleme, `role="status"` ile sayfa içi başarı/hata (hata e-posta adresini gösterir). Mock EmailJS ile 66/66. Gerçek teslim test edilmedi. |
| 2 — tamamlandı (K11) | Klavye/ARIA: `src/components/Header.jsx`, `src/pages/FAQ.jsx`, üç dil | Mobil menü modal (portal + `inert` + Tab döngüsü + odak dönüşü), açılır menüler disclosure deseni, SSS `aria-expanded`/`aria-controls` + `hidden`, etiketler üç dilde. 75/75 + 21 rota taraması. Ertelenen: SSS sorularını başlık öğesine sarmak (tasarım işi). |
| 3 — tamamlandı (K12) | Gönüllü başvurusu: `StudentVolunteers.jsx` → `Contact.jsx?topic=volunteer` | Gönüllü modu: öğrenci/öğretmen/ebeveyn rolleri, zorunlu yetişkin bilgisi onayı, e-postada konu satırı, gizlilik metni. Mock 66/66. Gerçek EmailJS teslimi kullanıcı denemesi bekliyor. |
| 4 — gerçek girdi gerekli | Görseller ve dil/pedagoji | Kullanıcıdan izinli okul/sınıf fotoğrafları; KG/RU/EN ve özellikle mevcut 5–11. sınıf önerilerinin uzman kontrolü. Yeni görsellerde Picture + optimizasyon. Kişi profili/alıntı istemek varsayılan devam adımı değildir; kullanıcı kişisiz içerik seçti. |
| 5 — kapsam/veri gerekli | Materyal, sertifika, etkinlik, rapor ve şarkı | Gerçek dosya/teslim yöntemi; sertifikalarda onaylı kayıtlar, verme koşulları, öğretmen/öğrenci şablonları ve manuel yardım süreci; tarihli etkinlik ihtiyacı; saha raporunun gerçek işleyişi. Şarkı için izinli ses sağlanacak mı, yalnızca söz etkinliği mi olacak? Mevcut düğme satır vurguluyor, ses çalmıyor. |
| 6 — kısmen tamamlandı | `src/pages/PrivacyPolicy.jsx` ve gerçek veri akışları | K05 ile sertifika alanları ve açık kayıt modeli eklendi; tüm üçüncü taraf hizmetler ve gerçek saklama süreçlerinin envanteri kontrol edilir. Hukuki uygunluk onayı olarak sunulmaz. |
| 7 — yayın öncesi | HTTPS ve entegrasyon | 22 Kasım yaklaşık 13.19–13.28 Bişkek gözleminde www, `*.github.io` sertifikasıyla isim uyuşmazlığı verdi; apex geçerli olup www'ye yönlendi. **K06 (~20:55) doğruladı:** GitHub Pages sertifikası 12:19'dan beri `dns_changed`; DNS sağlık kontrolü iki alan adı için geçerli ve HTTPS'e uygun. **K07 (21:22–21:24):** alan adı kaldırılıp yeniden eklendi; yeni talep bekliyor, arka plan izleyici onayda HTTPS'i zorunlu yapacak. Tekrar kaldırıp eklemeyin. Commit/deploy kullanıcı onayına bağlı. |
| 8 — isteğe bağlı | Bakım/SEO | Dil bazlı URL ve çevirileri ayrı yükleme; kalan sabit renklerin tokenlara taşınması; kritik davranışlar için kalıcı küçük doğrulama seti. Kullanılmayan dosyaları silmek ayrıca kullanıcı onayı gerektirir. |

### Kullanıcının yerelde bakabileceği noktalar

- `http://localhost:3000/verify-certificate` — sorgu, okul listesi, üç tasarım örneği ve yardım formu. Gerçek kayıt listesi henüz boş.
- `http://localhost:3001/#cs-certificates` — coming-soon üzerinde iki örnek ve özellik tanıtımı.

- `http://localhost:3000/` — değer takvimi/ay rozeti ve kişi alıntıları yerine sınıf uygulamaları.
- `http://localhost:3000/scope-and-sequence` — ortak ay/değer sırası.
- `http://localhost:3000/scope-and-sequence/upper-elementary` — 3. sınıf Şubat/Nisan başlıkları ve iki uyarlama etiketi.
- `http://localhost:3000/research` — öncelikli ulusal program/kitap ve destekleyici üç kaynak.
- `http://localhost:3000/team`, `/our-story`, `/student-volunteers` — kişilere atfedilmeyen program içeriği.

## Sonraki çalışmaların kayıt yöntemi

1. **Başlangıç:** Bu dosyanın güncel durumunu ve son kaydı, `DESIGN_SYSTEM.md` §9'u ve git durumunu okuyun. Yeni kayda tarih, kullanıcı talebi, kapsam, ilk adım ve durumu yazın. Önceki yerel değişiklikleri koruyun.
2. **Çalışırken:** Anlamlı aşamalarda değişen dosyaları, kararın nedenini, kaynakları ve kalan adımı kaydedin. Plan değişirse eski planın durumunu “yerine geçti/ertelendi” diye belirtin; geçmişte yapılanı silmeyin.
3. **Doğrulama:** Gerçekte çalıştırılan komutları, kapsamı ve sonucu yazın. Önceki oturum testini yeni test gibi sunmayın; yapılmayan kontrolü “bekliyor” olarak kaydedin. Geçici test dosyalarını tek kayıt yeri yapmayın.
4. **Bitirme veya kesinti:** Güncel durum alanını ve `DESIGN_SYSTEM.md` §9'u güncelleyin. Tamamlanan/yarım kalan işi, hatayı veya eksik girdiyi ve sonraki kişinin atacağı ilk somut adımı belirtin. Limit veya ara verme öncesinde mümkün olan son noktada kaydedin.
5. **Güvenlik ve yayın:** Kayıtlara anahtar/token, kişisel form verisi veya özel kitap içeriği koymayın. Commit/deploy durumunu açıkça yazın; dosyaya kaydetmek ile Git'e commit/yayınlamak ayrı işlemlerdir.

Yeni kayıt için kullanılacak kısa şablon:

```text
### K06 İşin adı
Tarih / çalışan:
Kullanıcı talebi ve kapsam:
Durum: devam ediyor / tamamlandı / bekliyor / ertelendi
Yapılan ve gerekçesi:
Değişen dosyalar:
Doğrulama: komut, kapsam, gerçek sonuç
Kalan iş veya eksik girdi:
Sonraki ilk somut adım:
Commit / deploy durumu:
```
