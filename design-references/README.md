# design-references — yayınlanmayan tasarım referansları

Bu klasör **site build'ine girmez** (`public/` dışında, hiçbir yerden import edilmez).
Kullanıcının verdiği tasarım örnekleri burada yalnızca referans olarak saklanır.

- `certificates/` — kullanıcının üç orijinal sertifika tasarımı (Partner School, School of Character,
  Distinguished School of Character) ve eski WebP/640px varyantları. Üzerlerinde gerçek okul adı, tarih
  ve imza bulunduğu için **sitede gösterilmez**; sitede bunların yerine metinsiz illüstrasyonlar
  kullanılır (`src/components/CertificateArt.jsx`, coming-soon'da satır içi SVG). Kullanıcı kararı,
  22 Kasım 2026 — bkz. CERTIFICATES.md ve WORK_LOG.md K10/K11.

Buradaki dosyaları `public/` içine geri taşımayın veya sayfalarda kullanmayın. Not: GitHub deposu
herkese açık olduğu için dosyalar depoda ve geçmiş commit'lerde görülebilir; bu klasör yalnızca
web sitesinde yayınlanmamalarını sağlar.
