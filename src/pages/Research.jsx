import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './Research.css';

function Research() {
  const { t } = useTranslation();

  const methods = [
    {
      icon: 'fas fa-clipboard-check',
      title: t('research.method_1_title'),
      description: t('research.method_1_desc'),
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: t('research.method_2_title'),
      description: t('research.method_2_desc'),
    },
    {
      icon: 'fas fa-comments',
      title: t('research.method_3_title'),
      description: t('research.method_3_desc'),
    },
    {
      icon: 'fas fa-file-alt',
      title: t('research.method_4_title'),
      description: t('research.method_4_desc'),
    },
  ];

  const citations = [1, 2, 3].map((n) => ({
    authors: t(`research.citation_${n}_authors`),
    title: t(`research.citation_${n}_title`),
    source: t(`research.citation_${n}_source`),
    finding: t(`research.citation_${n}_finding`),
  }));

  return (
    <>
      <Seo
        titleKey="seo.research_title"
        descriptionKey="seo.research_desc"
        path="/research"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="research-hero">
          <h1>{t('research.hero_title')}</h1>
          <p>{t('research.hero_subtitle')}</p>
        </section>

        <section className="research-methods-section">
          <h2>{t('research.methods_title')}</h2>
          <div className="research-methods-grid">
            {methods.map((method) => (
              <div className="research-method-card" key={method.title}>
                <div className="research-method-icon">
                  <i className={method.icon}></i>
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="research-field-section">
          <div className="research-field-wrapper">
            <h2>{t('research.field_research_title')}</h2>
            <p className="research-field-intro">
              {t('research.field_research_intro')}
            </p>
            <div className="research-citations">
              {citations.map((c) => (
                <div className="research-citation-card" key={c.title}>
                  <p className="research-citation-finding">{c.finding}</p>
                  <p className="research-citation-source">
                    {c.authors}. <em>{c.title}</em>. {c.source}.
                  </p>
                </div>
              ))}
            </div>
            <p className="research-field-disclaimer">
              {t('research.field_research_disclaimer')}
            </p>
          </div>
        </section>

        <section className="research-cta">
          <h2>{t('research.cta_title')}</h2>
          <p>{t('research.cta_text')}</p>
          <Link to="/contact" className="btn-primary">{t('research.cta_button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Research;
