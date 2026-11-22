# Çoklu Dil Desteği Kullanım Kılavuzu (i18n)

Bu proje `react-i18next` + `i18next-browser-languagedetector` ile 3 dilde çalışır.

## 🌍 Mevcut Diller

| Kod | Dil | Dosya |
|---|---|---|
| `en` | İngilizce | `src/locales/en/translation.json` |
| `kg` | Kırgızca (varsayılan) | `src/locales/kg/translation.json` |
| `ru` | Rusça | `src/locales/ru/translation.json` |

Dil menüsü header'ın sağ üstünde (masaüstü) ve mobil menünün altında bulunur.
Seçim `localStorage`'da saklanır. Dil değişince `<html lang>`, sayfa içerikleri ve
SEO başlıkları/description'ları otomatik güncellenir.

## 📁 Yapı

```
src/
├── i18n.js                     # yapılandırma (fallbackLng: 'kg')
├── locales/{en,kg,ru}/translation.json
└── components/Header.js        # dil değiştirme arayüzü
```

## ➕ Yeni Çeviri Anahtarı Ekleme

1. **Üç dil dosyasına da aynı anahtarı ekleyin** (sıralama önemli değil, anahtar önemli):

```json
"mySection": {
  "title": "My Title",          // en
  "title": "Менин аталышым",     // kg
  "title": "Мой заголовок"       // ru
}
```

2. **Bileşende kullanın:**

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('mySection.title')}</h1>;
}
```

3. **Parametreli metinler** `{{param}}` söz dizimi kullanır:

```json
"game_score": "You scored {{score}} / {{total}}"
```

```jsx
t('samples.game_score', { score: 4, total: 5 });
```

## 📋 Kurallar

- **Üç dosyada anahtar sayısı ve isimleri birebir aynı olmalı** (parite).
  Kontrol için: `src/locales` dosyalarını JSON olarak açıp anahtar listelerini karşılaştırın.
- SEO başlıkları `seo.<sayfa>_title/desc` anahtarlarıyla sayfa bazlı çevrilir
  (`src/components/Seo.js` → `titleKey` / `descriptionKey`).
- Dinamik anahtarlar (ör. `samples.game_value_${valueKey}`) dosyada tam anahtar setiyle
  bulunmalıdır.
- Emoji içeren buton metinlerinde emoji anahtarın içinde tutulur
  (ör. `"song_play": "▶️ Play"`).

## 🔧 Yapılandırma (`src/i18n.js`)

- `fallbackLng: 'kg'` — anahtar bulunamazsa Kırgızca gösterilir
- `detection.order: ['localStorage']` — tarayıcı dili otomatik algılanmaz;
  istenirse `order: ['localStorage', 'navigator']` yapılabilir
- Dil değişince `languageChanged` dinleyicisi `document.documentElement.lang`'ı günceller
