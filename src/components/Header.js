import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [navDropdown, setNavDropdown] = useState(null);

  const toggleNavDropdown = (name) => {
    setNavDropdown(navDropdown === name ? null : name);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'kg', name: 'Kyrgyz', flag: '🇰🇬' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <NavLink to="/" className="logo" aria-label="Home">
              <Logo className="logo-svg" />
          </NavLink>

         <nav className="nav">
            <NavLink to="/" end>{t('nav.about')}</NavLink>
            <NavLink to="/team">{t('nav.team')}</NavLink>

            <div className="nav-dropdown">
              <button
                className="nav-dropdown__button"
                onClick={() => toggleNavDropdown('curriculum')}
                onBlur={() => setTimeout(() => setNavDropdown(null), 200)}
              >
                {t('nav.curriculum')} <span className="nav-dropdown__arrow">{navDropdown === 'curriculum' ? '▲' : '▼'}</span>
              </button>
              {navDropdown === 'curriculum' && (
                <div className="nav-dropdown__menu">
                  <NavLink to="/features" className="nav-dropdown__item">{t('nav.features')}</NavLink>
                  <NavLink to="/scope-and-sequence" className="nav-dropdown__item">{t('nav.scope_sequence')}</NavLink>
                  <NavLink to="/materials" className="nav-dropdown__item">{t('nav.materials')}</NavLink>
                  <NavLink to="/moralEd" className="nav-dropdown__item">{t('nav.moraled')}</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/partner-with-us">{t('nav.partner_with_us')}</NavLink>

            <div className="nav-dropdown">
              <button
                className="nav-dropdown__button"
                onClick={() => toggleNavDropdown('resources')}
                onBlur={() => setTimeout(() => setNavDropdown(null), 200)}
              >
                {t('nav.resources')} <span className="nav-dropdown__arrow">{navDropdown === 'resources' ? '▲' : '▼'}</span>
              </button>
              {navDropdown === 'resources' && (
                <div className="nav-dropdown__menu">
                  <NavLink to="/research" className="nav-dropdown__item">{t('nav.research')}</NavLink>
                  <NavLink to="/about-bullying" className="nav-dropdown__item">{t('nav.about_bullying')}</NavLink>
                  <NavLink to="/student-volunteers" className="nav-dropdown__item">{t('nav.student_volunteers')}</NavLink>
                  <NavLink to="/events" className="nav-dropdown__item">{t('nav.events')}</NavLink>
                  <NavLink to="/faq" className="nav-dropdown__item">{t('nav.faq')}</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/contact">{t('nav.contact')}</NavLink>

            <div className="language-dropdown">
              <button 
                className="language-dropdown__button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                onBlur={() => setTimeout(() => setLangMenuOpen(false), 200)}
              >
                <span className="language-dropdown__flag">{currentLanguage.flag}</span>
                <span className="language-dropdown__code">{currentLanguage.code.toUpperCase()}</span>
                <span className="language-dropdown__arrow">{langMenuOpen ? '▲' : '▼'}</span>
              </button>
              
              {langMenuOpen && (
                <div className="language-dropdown__menu">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={`language-dropdown__item ${i18n.language === lang.code ? 'active' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span className="language-dropdown__flag">{lang.flag}</span>
                      <span className="language-dropdown__name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {open && (
          <nav className="mobile-nav">
            <NavLink to="/" onClick={() => setOpen(false)}>{t('nav.about')}</NavLink>
            <NavLink to="/team" onClick={() => setOpen(false)}>{t('nav.team')}</NavLink>

            <span className="mobile-nav__label">{t('nav.curriculum')}</span>
            <NavLink to="/features" onClick={() => setOpen(false)}>{t('nav.features')}</NavLink>
            <NavLink to="/scope-and-sequence" onClick={() => setOpen(false)}>{t('nav.scope_sequence')}</NavLink>
            <NavLink to="/materials" onClick={() => setOpen(false)}>{t('nav.materials')}</NavLink>
            <NavLink to="/moralEd" onClick={() => setOpen(false)}>{t('nav.moraled')}</NavLink>

            <NavLink to="/partner-with-us" onClick={() => setOpen(false)}>{t('nav.partner_with_us')}</NavLink>

            <span className="mobile-nav__label">{t('nav.resources')}</span>
            <NavLink to="/research" onClick={() => setOpen(false)}>{t('nav.research')}</NavLink>
            <NavLink to="/about-bullying" onClick={() => setOpen(false)}>{t('nav.about_bullying')}</NavLink>
            <NavLink to="/student-volunteers" onClick={() => setOpen(false)}>{t('nav.student_volunteers')}</NavLink>
            <NavLink to="/events" onClick={() => setOpen(false)}>{t('nav.events')}</NavLink>
            <NavLink to="/faq" onClick={() => setOpen(false)}>{t('nav.faq')}</NavLink>

            <div className="language-dropdown mobile">
              <div className="language-dropdown__title">{t('common.language')}</div>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`language-dropdown__item ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => { changeLanguage(lang.code); setOpen(false); }}
                >
                  <span className="language-dropdown__flag">{lang.flag}</span>
                  <span className="language-dropdown__name">{lang.name}</span>
                  {i18n.language === lang.code && <span className="language-dropdown__check">✓</span>}
                </button>
              ))}
            </div>
            
            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
          </nav>
        )}

          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">☰</button>
        </div>
      </header>

      <div className={`backdrop ${open ? 'backdrop--visible' : ''}`} onClick={() => setOpen(false)} />
    </>
  );
}
