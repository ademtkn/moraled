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
          <div className="logo">
            <Logo className="logo-svg" />
          </div>

         <nav className="nav">
            <NavLink to="/" end>{t('nav.about')}</NavLink>
            <NavLink to="/team">{t('nav.team')}</NavLink>

            <div className="nav-dropdown">
              <button
                className="nav-dropdown__button"
                onClick={() => toggleNavDropdown('curriculum')}
                onBlur={() => setTimeout(() => setNavDropdown(null), 200)}
              >
                Curriculum <span className="nav-dropdown__arrow">{navDropdown === 'curriculum' ? '▲' : '▼'}</span>
              </button>
              {navDropdown === 'curriculum' && (
                <div className="nav-dropdown__menu">
                  <NavLink to="/features" className="nav-dropdown__item">{t('nav.features')}</NavLink>
                  <NavLink to="/scope-and-sequence" className="nav-dropdown__item">Scope &amp; Sequence</NavLink>
                  <NavLink to="/moralEd" className="nav-dropdown__item">{t('nav.moraled')}</NavLink>
                </div>
              )}
            </div>

            <div className="nav-dropdown">
              <button
                className="nav-dropdown__button"
                onClick={() => toggleNavDropdown('schools')}
                onBlur={() => setTimeout(() => setNavDropdown(null), 200)}
              >
                For Schools <span className="nav-dropdown__arrow">{navDropdown === 'schools' ? '▲' : '▼'}</span>
              </button>
             {navDropdown === 'schools' && (
                <div className="nav-dropdown__menu">
                  <NavLink to="/for-schools" className="nav-dropdown__item">For Schools</NavLink>
                  <NavLink to="/faq" className="nav-dropdown__item">FAQ</NavLink>
                  <NavLink to="/partners" className="nav-dropdown__item">{t('nav.partners')}</NavLink>
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

            <span className="mobile-nav__label">Curriculum</span>
            <NavLink to="/features" onClick={() => setOpen(false)}>{t('nav.features')}</NavLink>
            <NavLink to="/scope-and-sequence" onClick={() => setOpen(false)}>Scope &amp; Sequence</NavLink>
            <NavLink to="/moralEd" onClick={() => setOpen(false)}>{t('nav.moraled')}</NavLink>

            <span className="mobile-nav__label">For Schools</span>
            <NavLink to="/for-schools" onClick={() => setOpen(false)}>For Schools</NavLink>
            <NavLink to="/faq" onClick={() => setOpen(false)}>FAQ</NavLink>
            <NavLink to="/partners" onClick={() => setOpen(false)}>{t('nav.partners')}</NavLink>
            
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
