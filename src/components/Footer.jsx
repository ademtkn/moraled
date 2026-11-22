import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import logoUrl from '../assets/logo/moraled-stacked-dark.png';

const COLUMNS = [
  {
    titleKey: 'footer.explore',
    links: [
      ['/', 'nav.about'],
      ['/our-story', 'nav.our_story'],
      ['/team', 'nav.team'],
      ['/contact', 'nav.contact'],
    ],
  },
  {
    titleKey: 'nav.curriculum',
    links: [
      ['/features', 'nav.features'],
      ['/scope-and-sequence', 'nav.scope_sequence'],
      ['/materials', 'nav.materials'],
      ['/moraled', 'nav.moraled'],
    ],
  },
  {
    titleKey: 'nav.resources',
    links: [
      ['/research', 'nav.research'],
      ['/about-bullying', 'nav.about_bullying'],
      ['/student-volunteers', 'nav.student_volunteers'],
      ['/classroom-climate', 'nav.climate'],
      ['/events', 'nav.events'],
    ],
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label={t('footer.brand_name')}>
              <img src={logoUrl} alt="MoralEd — Character Education" width="937" height="720" loading="lazy" />
            </Link>
            <p className="footer__tagline">{t('footer.brand_tagline')}</p>
            <ul className="footer__contact">
              <li>
                <FaMapMarkerAlt aria-hidden="true" /> {t('contact.location_text')}
              </li>
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href="mailto:linekginfo@gmail.com">linekginfo@gmail.com</a>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href="tel:+996502001903">{t('contact.phone_text')}</a>
              </li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav className="footer__col" key={col.titleKey} aria-label={t(col.titleKey)}>
              <h2 className="footer__title">{t(col.titleKey)}</h2>
              {col.links.map(([to, key]) => (
                <Link key={to} to={to}>
                  {t(key)}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="footer__actions">
          <div className="footer__pills">
            <Link to="/faq" className="footer__pill">
              {t('nav.faq')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/verify-certificate" className="footer__pill">
              {t('certificate.hero_title')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/privacy-policy" className="footer__pill">
              {t('privacy.hero_title')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/moraled.kg/"
              target="_blank"
              rel="noreferrer"
              aria-label={t('footer.instagram')}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@moral-ed"
              target="_blank"
              rel="noreferrer"
              aria-label={t('footer.youtube')}
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {t('footer.brand_name')}. {t('footer.rights')}
          </p>
          <a href="https://line.kg" target="_blank" rel="noreferrer">
            line.kg
          </a>
        </div>
      </div>
    </footer>
  );
}
