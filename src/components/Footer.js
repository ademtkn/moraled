import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>{t('footer.brand_name')}</h2>
          <p>{t('footer.brand_tagline')}</p>
          <div className="footer__contact">
            <p><FaMapMarkerAlt /> Bishkek, Kyrgyzstan</p>
            <p><FaEnvelope /> info@moraled.org</p>
          </div>
        </div>

        <div className="footer__links">
          <h4>{t('footer.explore')}</h4>
          <a href="/">{t('nav.about')}</a>
          <a href="/team">{t('nav.team')}</a>
          <a href="/partners">{t('nav.partners')}</a>
          <a href="/contact">{t('nav.contact')}</a>
        </div>

        <div className="footer__social">
          <h4>{t('footer.connect')}</h4>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /> {t('footer.facebook')}</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /> {t('footer.instagram')}</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /> {t('footer.youtube')}</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {t('footer.brand_name')}. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
