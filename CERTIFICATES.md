# MoralEd sertifika kayıtları

Son güncelleme: 22 Kasım 2026. Kullanıcı kararı: **sertifika numarasıyla sorgulama; okul belgeleri ayrıca listelenebilir**.

## Mevcut uygulama

- Gerçek site: `/verify-certificate`. Okul, öğretmen ve öğrenci belge türleri; numarayla kayıt sorgusu; okul listesi; belge dosyasını açma ve kaydın bağlantısını paylaşma.
- Doğrudan kayıt bağlantısı: `/verify-certificate?id=SERTIFIKA-NUMARASI`. Aynı bağlantı üç dilde çalışır.
- Genel listede yalnızca `recipientType: "school"` kayıtları yer alır. Öğretmen ve öğrenci kayıtları genel listede gösterilmez.
- Kaynak: `public/certificates/registry.json`. **Şu anda 0 gerçek kayıt** var; kullanıcı henüz verilmiş belge listesi paylaşmadı. Görseldeki Asylkech adı, tarih ve imza kayıt olarak içeri alınmadı.
- Üç tasarım örneği kullanıcı tarafından sağlandı (`public/images/certificates/*.png`). **K10 kararı:** sitede bu orijinaller gösterilmez — üzerlerindeki ad, tarih ve imza görünmesin diye galeri ve büyütme penceresi bunların yerine metinsiz SVG illüstrasyonlar (`src/components/CertificateArt.jsx`: `partner` fildişi, `character` gök mavisi, `distinguished` lacivert) kullanır ve “illüstrasyon, gerçek belge değil” notu taşır. Öğretmen/öğrenci tasarımları henüz ayrıca üretilmedi.
- Coming-soon: iki okul illüstrasyonu (fildişi + lacivert, aynı çizim `coming-soon/index.html` içinde satır içi SVG) ve üç dilde gelecek sertifika özelliği tanıtımı. Tam site kapalıyken belge sorgulama yayımlanmaz.
- Sertifika yardım formu EmailJS ile manuel talep iletir. Yeni belge üretmez; talep gönderilirken tekrar gönderim engellenir, sonuç sayfa içinde gösterilir.

Bu, GitHub Pages üzerinde çalışan **açık, statik bir kayıt sistemidir**. Numara, özel erişim anahtarı değildir. Registry dosyası ve eklenen belge dosyaları herkese açıktır; genel listede görünmemek veriyi gizlemez. Öğretmen/öğrenci verisi eklerken yalnızca yayımlanması onaylanmış bilgiler kullanılmalıdır. Özel hesap ve kişiye özel dosya erişimi istenirse kimlik doğrulama ve sunucu tarafı erişim denetimi gerekir.

## Veri yapısı

Kök nesne `version: 1` ve `certificates: []` içerir. Her kayıt aşağıdaki alanları kullanır; farklı alanlar doğrulamada reddedilir.

| Alan | Tür / kural |
|---|---|
| `id` | Benzersiz, büyük Latin harfleri/rakam/alt çizgi/defis; 6–64 karakter. Kullanıcı sorgusu baş/son boşluklardan ve küçük harften normalize edilir. |
| `recipientType` | `school`, `teacher` veya `student` |
| `publicRecipientName` | Yayımlanmasına onay verilen alıcı adı; boş olamaz |
| `publicOrganisation` | İsteğe bağlı, yayımlanmasına onay verilen okul/kurum adı |
| `title` | `kg`, `ru`, `en` anahtarlarının tamamında boş olmayan belge adı |
| `issuedOn` | Gerçek verilme tarihi, `YYYY-MM-DD` |
| `expiresOn` | Gerçek son geçerlilik tarihi, `YYYY-MM-DD`; süre belirtilmemişse açıkça `null` |
| `status` | `active` veya `revoked` |
| `fileUrl` | `/certificates/documents/` altındaki PDF/PNG/JPG/WebP yolu; dosya henüz yoksa açıkça `null`. Dosya adında Latin harf/rakam/alt çizgi/defis kullanılır. |

Doğum tarihi, adres, telefon, e-posta veya özel başvuru notları bu kayıt dosyasına eklenmez. Yardım formu verisi otomatik olarak bu dosyaya yazılmaz.

## Yeni gerçek belge ekleme

1. Alıcı, belge türü, numara, imzalayan, tarihler ve yayım kapsamı gerçek bilgilerle kesinleştirilir. Kullanıcının örneklerindeki “One Year” bütün belgelere otomatik uygulanmaz. Ödül seviyeleri/koşulları da görsellerden çıkarılmaz.
2. Onaylı belge PDF veya görseli `public/certificates/documents/` altına eklenir. Dosya ve kayıt aynı alıcı/numara/tarihleri taşımalıdır. Bu uygulama belge tasarlamaz, imzalamaz veya otomatik sertifika düzenlemez.
3. Yukarıdaki alanlarla gerçek kayıt `public/certificates/registry.json` içindeki listeye eklenir. Deneme kayıtları bu listeye konulmaz.
4. Aşağıdaki kontroller çalıştırılır:

   ```bash
   node scripts/validate-certificates.js
   npm run test:certificates
   npm run build
   npm run lint
   ```

5. Yerelde kayıt numarası ve doğrudan bağlantı açılır; üç dilde ad/tarih/durum ve dosya kontrol edilir. Okul listesi yalnızca okul kayıtlarını göstermelidir.
6. `WORK_LOG.md` ile `DESIGN_SYSTEM.md` §9 güncellenir. Commit ve yayın için proje kuralları uygulanır. Coming-soon yayını gerçek kayıtları açmaz.

Dosya hazır değilse `fileUrl: null` kayıt bilgilerini göstermeye izin verir; belge açma düğmesi çıkmaz. Sonradan dosya eklenebilir.

## Geçerlilik durumu

- `revoked`: geri alınmış/iptal edilmiş; tarihlere üstün gelir.
- Verilme tarihi Bişkek'te henüz gelmediyse: “henüz verilmedi”.
- Son geçerlilik gününün **tamamı** Bişkek saatine göre dahildir; ertesi gün “süresi doldu” olur.
- `expiresOn: null`: arayüz “süre belirtilmemiş” der; kendi kendine bir yıl veya süresiz hak tanımlamaz.
- İptal edilmiş ve henüz verilmemiş kayıtların belge açma düğmesi gösterilmez. Statik dosyalar gizli hale gelmez; gerekiyorsa yayım kapsamı ayrıca yönetilir.
- “Geçerli” etiketi yayımlanmış kayıt ve tarihlerden hesaplanır; PDF üzerinde kriptografik imza veya sonradan değiştirme denetimi yapılmaz.

## Dosyalar ve bakım

| Yer | İşlev |
|---|---|
| `src/pages/VerifyCertificate.jsx/.css` | Sorgu, sonuç, okul listesi, örnek galeri ve yardım formu |
| `src/data/certificates.js` | Şema, numara/dosya doğrulaması, Bişkek tarih durumu ve örnek tasarım listesi (`variant`) |
| `src/components/CertificateArt.jsx` | Metinsiz sertifika illüstrasyonları; gradyan kimlikleri `useId` ile benzersiz |
| `public/certificates/registry.json` | Yalnızca gerçek ve yayım onaylı kayıtlar |
| `scripts/validate-certificates.js` | Build öncesi şema, benzersiz numara ve belge dosyası varlığı kontrolü |
| `scripts/certificates.test.js` | Numara, şema, tarihler, dosya yolları, iptal ve Bişkek gün sınırı için altı kalıcı test |
| `public/images/certificates/` | Kullanıcının üç orijinal tasarım PNG'si + WebP/640px varyantları — **sitede kullanılmıyor** (yalnızca referans). `public/` içinde olduğu için tam site yayınında adresle erişilebilir kalır; taşınması/silinmesi kullanıcı kararı. |
| `src/locales/{kg,ru,en}/translation.json` | Gerçek site ve gizlilik metinleri |
| `coming-soon/strings.js` | Bağımsız tanıtım sayfasının üç dilde metinleri |

Örnek tasarım değişirse `CertificateArt.jsx` içindeki varyant güncellenir (coming-soon'daki iki satır içi SVG ile uyumlu tutulur); gerçek belge görüntüsü örnek olarak kullanılmaz. Verilmiş belge dosyaları (registry `fileUrl`) React'ta `Picture` ile gösterilir; yeni görselde `python3 scripts/optimize-images.py` çalıştırılır.

Şema doğrulaması gerçek belge veya kimlik onayı yerine geçmez. Gerçek kayıt, sertifika verme ölçütü, belge dili ve öğretmen/öğrenci şablonları kullanıcı girdisiyle tamamlanacak işlerdir.
