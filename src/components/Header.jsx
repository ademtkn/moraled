import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logoUrl from '../assets/logo/moraled-horizontal.png';

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
  const hamburgerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const wasOpen = useRef(false);

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

  // Mobile menu as a modal: the panel is portalled to <body>, so the whole app root can be made
  // inert (unreachable by keyboard / screen readers) while it is open. Focus moves into the panel
  // and returns to the menu button when it closes without navigating away.
  useEffect(() => {
    const root = document.getElementById('root');
    if (open) {
      wasOpen.current = true;
      if (root) root.inert = true;
      mobileNavRef.current?.querySelector('.close-btn')?.focus();
    } else if (wasOpen.current) {
      wasOpen.current = false;
      hamburgerRef.current?.focus();
    }
    return () => {
      if (root) root.inert = false;
    };
  }, [open]);

  // Fallback for browsers without `inert`: keep Tab / Shift+Tab cycling inside the panel.
  const trapFocus = (e) => {
    if (e.key !== 'Tab') return;
    const items = [...mobileNavRef.current.querySelectorAll('a[href], button:not([disabled])')];
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

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

  // Disclosure pattern (a list of links, not an ARIA menu): aria-expanded + aria-controls.
  const renderDropdown = (name, labelKey, links) => (
    <div className="nav-dropdown">
      <button
        type="button"
        className="nav-dropdown__button"
        onClick={() => toggleNavDropdown(name)}
        aria-expanded={navDropdown === name}
        aria-controls={navDropdown === name ? `nav-dropdown-${name}` : undefined}
      >
        {t(labelKey)} <Chevron />
      </button>
      {navDropdown === name && (
        <div className="nav-dropdown__menu" id={`nav-dropdown-${name}`}>
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
            <img className="logo-img" src={logoUrl} alt="MoralEd" width="798" height="240" />
          </NavLink>

          <nav className="nav" aria-label={t('nav.main_label')}>
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
            ref={hamburgerRef}
            type="button"
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label={t('nav.open_menu')}
            aria-expanded={open}
            aria-controls={open ? 'mobile-nav' : undefined}
          >
            <span />
            <span />
            <span />
          </button>

          {open && createPortal(
            <nav className="mobile-nav" id="mobile-nav" aria-label={t('nav.mobile_label')} ref={mobileNavRef} onKeyDown={trapFocus}>
              <button type="button" className="close-btn" onClick={closeMenu} aria-label={t('nav.close_menu')}>
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
            </nav>,
            document.body,
          )}
        </div>
      </header>

      {createPortal(<div className={`backdrop ${open ? 'backdrop--visible' : ''}`} onClick={closeMenu} />, document.body)}
    </>
  );
}
