# Çoklu Dil Desteği Kullanım Kılavuzu

Bu proje, react-i18next kütüphanesi kullanılarak çoklu dil desteği ile geliştirilmiştir.

## 🌍 Mevcut Diller

- **İngilizce (EN)** 🇬🇧 - Ana dil
- **Türkçe (TR)** 🇹🇷

Dil menüsü modern dropdown tasarımıyla sağ üst köşede bulunur. Tıkladığınızda kullanılabilir diller açılır.

## 📁 Dosya Yapısı

```
src/
├── i18n.js                          # i18next yapılandırması
├── locales/
│   ├── en/
│   │   └── translation.json         # İngilizce çeviriler
│   └── tr/
│       └── translation.json         # Türkçe çeviriler
```

## 🚀 Kullanım

### Yeni Bir Bileşende Çeviri Kullanma

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('common.welcome')}</p>
    </div>
  );
}
```

### Dil Değiştirme

Dil menüsü modern bir dropdown olarak tasarlanmıştır:

```jsx
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
];

const currentLanguage = languages.find(lang => lang.code === i18n.language);

// Dropdown butonu
<button onClick={() => setLangMenuOpen(!langMenuOpen)}>
  <span>{currentLanguage.flag}</span>
  <span>{currentLanguage.code.toUpperCase()}</span>
</button>

// Menü açıldığında dil seçenekleri
{langMenuOpen && (
  <div>
    {languages.map(lang => (
      <button onClick={() => i18n.changeLanguage(lang.code)}>
        {lang.flag} {lang.name}
      </button>
    ))}
  </div>
)}
```

## ➕ Yeni Dil Ekleme

### 1. Çeviri Dosyası Oluşturun

`src/locales/[dil-kodu]/translation.json` dosyası oluşturun:

```json
{
  "nav": {
    "home": "Anasayfa",
    "about": "Hakkında"
  }
}
```

### 2. i18n.js Dosyasını Güncelleyin

```javascript
// Yeni dili import edin
import translationDE from './locales/de/translation.json';

// resources objesine ekleyin
const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR },
  de: { translation: translationDE }  // Yeni dil
};
```

### 3. Header.js'de Dil Listesini Güncelleyin

```javascript
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }  // Yeni dil
];
```

Dil otomatik olarak dropdown menüye eklenecektir!

## 📝 Yeni Çeviri Anahtarı Ekleme

1. Her dil dosyasında (`en/translation.json`, `tr/translation.json`) aynı anahtarı ekleyin:

**en/translation.json**
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

**tr/translation.json**
```json
{
  "mySection": {
    "title": "Başlığım",
    "description": "Açıklamam"
  }
}
```

2. Bileşeninizde kullanın:
```jsx
<h1>{t('mySection.title')}</h1>
<p>{t('mySection.description')}</p>
```

## 💡 İpuçları

- Çeviri anahtarları her dil dosyasında aynı yapıya sahip olmalıdır
- Kullanıcının seçtiği dil `localStorage`'da saklanır
- Ana dil İngilizce olarak ayarlanmıştır (fallback)
- Tarayıcının dil ayarları otomatik algılanır
- Dil menüsü modern dropdown tasarımıyla minimum yer kaplar
- Bayrak emoji'leri otomatik olarak desteklenir (🇬🇧 🇹🇷)

## 🎯 Örnek Çeviri Yapısı

```json
{
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "values": {
    "Respect": "Respect",
    "Respect_desc": "Respect means..."
  },
  "footer": {
    "brand_name": "Moral Education",
    "rights": "All rights reserved."
  },
  "common": {
    "language": "Language",
    "welcome": "Welcome"
  }
}
```

## 🔧 Yapılandırma Seçenekleri

`src/i18n.js` dosyasında şu ayarları değiştirebilirsiniz:

- `fallbackLng`: Yedek dil (varsayılan: 'en')
- `lng`: Başlangıç dili (varsayılan: 'en')
- `debug`: Geliştirme modu debug (varsayılan: false)

---

**Not:** Daha fazla bilgi için [react-i18next dokümantasyonunu](https://react.i18next.com/) ziyaret edin.
