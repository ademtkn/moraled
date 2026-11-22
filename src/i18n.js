import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationKG from './locales/kg/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  kg: {
    translation: translationKG
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'kg',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    }
  });

// <html lang> için doğru BCP 47 kodu: uygulama içi 'kg' kodu aslında Kongo dilidir,
// Kırgızca 'ky'dır. Çeviri klasörleri ve localStorage 'kg' kullanmaya devam eder.
export const htmlLang = (lng) => {
  const code = (lng || 'kg').split('-')[0];
  return code === 'kg' ? 'ky' : code;
};

// <html lang> etiketini aktif dile göre güncelle (SEO + erişilebilirlik)
const applyHtmlLang = (lng) => {
  document.documentElement.lang = htmlLang(lng);
};

applyHtmlLang(i18n.language || i18n.options.fallbackLng);
i18n.on('languageChanged', applyHtmlLang);

export default i18n;
