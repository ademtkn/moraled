import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { webpUrl } from '../components/Picture';
import './Materials.css';

function Materials() {
  const { t } = useTranslation();

  const items = [
    { icon: 'fas fa-book', n: 1 },
    { icon: 'fas fa-music', n: 2 },
    { icon: 'fas fa-people-group', n: 3 },
    { icon: 'fas fa-display', n: 4 },
    { icon: 'fas fa-envelope-open-text', n: 5 },
    { icon: 'fas fa-image', n: 6 },
    { icon: 'fas fa-square-poll-vertical', n: 7 },
    { icon: 'fas fa-clipboard-list', n: 8 },
  ].map((item) => ({
    icon: item.icon,
    title: t(`materials.item_${item.n}_title`),
    description: t(`materials.item_${item.n}_desc`),
  }));

  const workshops = [
    {
      n: 1,
      link: '/about-bullying',
      image: '/images/children-classroom-story.jpg',
    },
    {
      n: 2,
      link: '/scope-and-sequence',
      image: '/images/teacher-instructing-students.jpg',
    },
  ].map((w) => ({
    link: w.link,
    image: w.image,
    title: t(`materials.workshop_${w.n}_title`),
    description: t(`materials.workshop_${w.n}_desc`),
    points: [
      t(`materials.workshop_${w.n}_point_1`),
      t(`materials.workshop_${w.n}_point_2`),
      t(`materials.workshop_${w.n}_point_3`),
      t(`materials.workshop_${w.n}_point_4`),
    ],
    linkText: t(`materials.workshop_${w.n}_link`),
    caption: t(`materials.workshop_${w.n}_caption`),
  }));

  return (
    <>
      <Seo
        titleKey="seo.materials_title"
        descriptionKey="seo.materials_desc"
        path="/materials"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="materials-hero">
          <h1>{t('materials.hero_title')}</h1>
          <p>{t('materials.hero_subtitle')}</p>
        </section>

        <section className="materials-section">
          <div className="materials-wrapper">
            <h2>{t('materials.intro_title')}</h2>
            <p className="materials-intro">
              {t('materials.intro_text')}
            </p>
            <p className="materials-related-link">
              {t('materials.related_scope_text')}{' '}
              <Link to="/scope-and-sequence">{t('materials.related_scope_link')} <i className="fas fa-arrow-right"></i></Link>
            </p>
            <div className="materials-grid">
              {items.map((item) => (
                <div className="materials-card" key={item.title}>
                  <div className="materials-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="materials-workshops-section">
          <div className="materials-wrapper">
            <h2>{t('materials.workshops_title')}</h2>
            <p className="materials-intro">
              {t('materials.workshops_subtitle')}
            </p>
            <div className="materials-workshops-list">
              {workshops.map((workshop) => (
                <div className="materials-workshop-card" key={workshop.title}>
                  <div className="materials-workshop-content">
                    <h3>{workshop.title}</h3>
                    <p>{workshop.description}</p>
                    <div className="materials-workshop-points-grid">
                      {workshop.points.map((point) => (
                        <div className="materials-workshop-point" key={point}>
                          <div className="materials-workshop-point-icon">
                            <i className="fas fa-lightbulb"></i>
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={workshop.link} className="materials-workshop-link">
                      {workshop.linkText} <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div
                    className="materials-workshop-visual"
                    style={{ backgroundImage: `url(${webpUrl(workshop.image)})` }}
                  >
                    <div className="materials-workshop-visual-caption">{workshop.caption}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="materials-related-link materials-workshops-events-link">
              {t('materials.workshops_cta_text')}{' '}
              <Link to="/events">{t('materials.workshops_cta_link')} <i className="fas fa-arrow-right"></i></Link>
            </p>
            <div className="materials-workshops-verify">
              <Link to="/verify-certificate" className="btn-verify-certificate">
                <i className="fas fa-graduation-cap"></i> {t('certificate.button_label')}
              </Link>
            </div>
          </div>
        </section>

        <section className="materials-cta">
          <h2>{t('materials.cta_title')}</h2>
          <p>{t('materials.cta_text')}</p>
          <Link to="/contact" className="btn-primary">{t('materials.cta_button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Materials;
