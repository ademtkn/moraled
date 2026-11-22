import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './ClassroomClimate.css';

function ClassroomClimate() {
  const { t } = useTranslation();

  const workItems = [
    {
      icon: 'fas fa-calendar-check',
      title: t('climate.work_1_title'),
      description: t('climate.work_1_desc'),
      link: '/scope-and-sequence',
      linkLabel: t('climate.work_1_link'),
    },
    {
      icon: 'fas fa-people-group',
      title: t('climate.work_2_title'),
      description: t('climate.work_2_desc'),
      link: '/materials',
      linkLabel: t('climate.work_2_link'),
    },
    {
      icon: 'fas fa-chart-line',
      title: t('climate.work_3_title'),
      description: t('climate.work_3_desc'),
      link: '/research',
      linkLabel: t('climate.work_3_link'),
    },
  ];

  return (
    <>
      <Seo
        titleKey="seo.climate_title"
        descriptionKey="seo.climate_desc"
        path="/classroom-climate"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="climate-hero">
          <h1>{t('climate.hero_title')}</h1>
          <p>{t('climate.hero_subtitle')}</p>
        </section>

        <section className="climate-problem-section">
          <div className="climate-wrapper">
            <h2>{t('climate.problem_title')}</h2>
            <p>{t('climate.problem_text_1')}</p>
            <p>{t('climate.problem_text_2')}</p>
          </div>
        </section>

        <section className="climate-solution-section">
          <div className="climate-wrapper">
            <h2>{t('climate.solution_title')}</h2>
            <p>{t('climate.solution_text_1')}</p>
            <p>{t('climate.solution_text_2')}</p>
            <p className="climate-related-link">
              {t('climate.related_bullying_text')}{' '}
              <Link to="/about-bullying">{t('climate.related_bullying_link')} <i className="fas fa-arrow-right"></i></Link>
            </p>
          </div>
        </section>

        <section className="climate-work-section">
          <div className="climate-wrapper">
            <h2>{t('climate.work_title')}</h2>
            <div className="climate-work-grid">
              {workItems.map((item) => (
                <div className="climate-work-card" key={item.title}>
                  <div className="climate-work-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to={item.link} className="climate-work-link">
                    {item.linkLabel} <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="climate-cta">
          <h2>{t('climate.cta_title')}</h2>
          <p>{t('climate.cta_text')}</p>
          <Link to="/contact" className="btn-primary">{t('climate.cta_button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ClassroomClimate;
