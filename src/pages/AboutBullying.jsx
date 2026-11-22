import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './AboutBullying.css';

function AboutBullying() {
  const { t } = useTranslation();

  const forms = [
    {
      icon: 'fas fa-comment-slash',
      title: t('bullying.form_2_title'),
      description: t('bullying.form_2_desc'),
    },
    {
      icon: 'fas fa-hand-fist',
      title: t('bullying.form_1_title'),
      description: t('bullying.form_1_desc'),
    },
    {
      icon: 'fas fa-user-slash',
      title: t('bullying.form_3_title'),
      description: t('bullying.form_3_desc'),
    },
    {
      icon: 'fas fa-mobile-screen',
      title: t('bullying.form_4_title'),
      description: t('bullying.form_4_desc'),
    },
  ];

  const signs = [
    t('bullying.sign_1'),
    t('bullying.sign_2'),
    t('bullying.sign_3'),
    t('bullying.sign_4'),
    t('bullying.sign_5'),
  ];

  const studentTips = [
    {
      icon: 'fas fa-comment-dots',
      title: t('bullying.tip_1_title'),
      description: t('bullying.tip_1_desc'),
    },
    {
      icon: 'fas fa-people-group',
      title: t('bullying.tip_2_title'),
      description: t('bullying.tip_2_desc'),
    },
    {
      icon: 'fas fa-shield-heart',
      title: t('bullying.tip_3_title'),
      description: t('bullying.tip_3_desc'),
    },
  ];

  return (
    <>
      <Seo
        titleKey="seo.bullying_title"
        descriptionKey="seo.bullying_desc"
        path="/about-bullying"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="bullying-hero">
          <h1>{t('bullying.hero_title')}</h1>
          <p>{t('bullying.hero_subtitle')}</p>
        </section>

        <section className="bullying-what-section">
          <h2>{t('bullying.what_title')}</h2>
          <p className="bullying-section-intro">
            {t('bullying.what_intro')}
          </p>
          <div className="bullying-forms-grid">
            {forms.map((form) => (
              <div className="bullying-form-card" key={form.title}>
                <div className="bullying-form-icon">
                  <i className={form.icon}></i>
                </div>
                <h3>{form.title}</h3>
                <p>{form.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bullying-signs-section">
          <h2>{t('bullying.signs_title')}</h2>
          <p className="bullying-section-intro">
            {t('bullying.signs_intro')}
          </p>
          <ul className="bullying-signs-list">
            {signs.map((sign) => (
              <li key={sign}><i className="fas fa-circle-exclamation"></i> {sign}</li>
            ))}
          </ul>
        </section>

        <section className="bullying-tips-section">
          <h2>{t('bullying.tips_title')}</h2>
          <div className="bullying-tips-grid">
            {studentTips.map((tip) => (
              <div className="bullying-tip-card" key={tip.title}>
                <div className="bullying-tip-icon">
                  <i className={tip.icon}></i>
                </div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            ))}
          </div>
          <p className="bullying-tips-note">
            {t('bullying.tips_note')}
          </p>
        </section>

        <section className="bullying-family-section">
          <h2>{t('bullying.family_title')}</h2>
          <p>
            {t('bullying.family_text')}
          </p>
          <p className="bullying-related-link">
            {t('bullying.related_climate_text')}{' '}
            <Link to="/classroom-climate">{t('bullying.related_climate_link')} <i className="fas fa-arrow-right"></i></Link>
          </p>
        </section>

        <section className="bullying-cta">
          <h2>{t('bullying.cta_title')}</h2>
          <p>
            {t('bullying.cta_text')}
          </p>
          <Link to="/contact" className="btn-primary">{t('bullying.cta_button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutBullying;
