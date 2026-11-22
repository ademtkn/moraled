import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import Logo from '../assets/logo.svg?react';

const LANGUAGES = [
  { code: 'kg', name: 'Кыргызча' },
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
];

const CURRICULUM_LINKS = [
  { to: '/features', key: 'nav.features' },
  { to: '/scope-and-sequence', key: 'nav.scope_sequence' },
  { to: '/materials', key: 'nav.materials' },
  { to: '/moraled', key: 'nav.moraled' },
];

const RESOURCE_LINKS = [
  { to: '/research', key: 'nav.research' },
  { to: '/about-bullying', key: 'nav.about_bullying' },
  { to: '/student-volunteers', key: 'nav.student_volunteers' },
  { to: '/classroom-climate', key: 'nav.climate' },
  { to: '/events', key: 'nav.events' },
  { to: '/faq', key: 'nav.faq' },
];

function Chevron() {
  return (
    <svg className="nav-dropdown__chevron" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [navDropdown, setNavDropdown] = useState(null);

  const currentLang = i18n.resolvedLanguage || i18n.language;

  const toggleNavDropdown = (name) => {
    setNavDropdown(navDropdown === name ? null : name);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close dropdowns when clicking anywhere outside them, or on Escape.
  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest('.nav-dropdown')) setNavDropdown(null);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setNavDropdown(null);
        setOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const renderDropdown = (name, labelKey, links) => (
    <div className="nav-dropdown">
      <button
        type="button"
        className="nav-dropdown__button"
        onClick={() => toggleNavDropdown(name)}
        aria-haspopup="true"
        aria-expanded={navDropdown === name}
      >
        {t(labelKey)} <Chevron />
      </button>
      {navDropdown === name && (
        <div className="nav-dropdown__menu">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="nav-dropdown__item"
              onClick={() => setNavDropdown(null)}
            >
              {t(link.key)}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );

  const langSwitch = (extraClass = '') => (
    <div className={`lang-switch ${extraClass}`} role="group" aria-label={t('common.language')}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className="lang-switch__btn"
          aria-pressed={currentLang === lang.code}
          title={lang.name}
          onClick={() => {
            changeLanguage(lang.code);
            setOpen(false);
          }}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const closeMenu = () => setOpen(false);

  const skipToContent = (e) => {
    const main = document.getElementById('main');
    if (!main) return;
    e.preventDefault();
    main.setAttribute('tabindex', '-1');
    main.focus();
  };

  return (
    <>
      <a href="#main" className="skip-link" onClick={skipToContent}>
        {t('common.skip_to_content')}
      </a>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <NavLink to="/" end className="logo" aria-label={t('nav.about')}>
            <Logo className="logo-svg" />
          </NavLink>

          <nav className="nav" aria-label="Main">
            <NavLink to="/" end>{t('nav.about')}</NavLink>
            <NavLink to="/our-story">{t('nav.our_story')}</NavLink>
            <NavLink to="/team">{t('nav.team')}</NavLink>
            {renderDropdown('curriculum', 'nav.curriculum', CURRICULUM_LINKS)}
            {renderDropdown('resources', 'nav.resources', RESOURCE_LINKS)}
          </nav>

          <div className="header__actions">
            {langSwitch()}
            <Link to="/contact" className="btn-sun btn-sm header__cta">
              {t('nav.contact')}
            </Link>
          </div>

          <button
            type="button"
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

          {open && (
            <nav className="mobile-nav" aria-label="Mobile">
              <button type="button" className="close-btn" onClick={closeMenu} aria-label="Close menu">
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <NavLink to="/" end onClick={closeMenu}>{t('nav.about')}</NavLink>
              <NavLink to="/our-story" onClick={closeMenu}>{t('nav.our_story')}</NavLink>
              <NavLink to="/team" onClick={closeMenu}>{t('nav.team')}</NavLink>

              <span className="mobile-nav__label">{t('nav.curriculum')}</span>
              {CURRICULUM_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={closeMenu}>{t(link.key)}</NavLink>
              ))}

              <span className="mobile-nav__label">{t('nav.resources')}</span>
              {RESOURCE_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={closeMenu}>{t(link.key)}</NavLink>
              ))}

              <div className="mobile-nav__footer">
                <Link to="/contact" className="btn-sun" onClick={closeMenu}>
                  {t('nav.contact')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
                <div className="mobile-nav__lang">
                  <span className="mobile-nav__label">{t('common.language')}</span>
                  {langSwitch('lang-switch--block')}
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <div className={`backdrop ${open ? 'backdrop--visible' : ''}`} onClick={closeMenu} />
    </>
  );
}
