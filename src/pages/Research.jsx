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

  const sources = [
    { id: 'national', href: 'https://cbd.minjust.gov.kg/158227/edition/1070465/kg' },
    { id: 'book' },
    { id: 'piermont', href: 'https://piermontpress.us/pathways/scope-sequence-objectives-and-outcomes/' },
    { id: 'kiva', href: 'https://www.kivaprogram.net/about-bullying1/' },
    { id: 'character', href: 'https://character.org/11-principles-in-schools/' },
  ];

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
              {sources.map((source) => (
                <article className="research-citation-card" key={source.id}>
                  <h3 className="research-source-title">{t(`research.source_${source.id}_title`)}</h3>
                  <p className="research-citation-finding">{t(`research.source_${source.id}_text`)}</p>
                  <p className="research-citation-source">
                    {t(`research.source_${source.id}_citation`)}
                  </p>
                  {source.href && <a className="research-source-link" href={source.href} target="_blank" rel="noreferrer">{t('research.source_open')}</a>}
                  {source.id === 'national' && <a className="research-source-link" href="https://edu.gov.kg/programs/1/" target="_blank" rel="noreferrer">{t('research.source_ministry')}</a>}
                </article>
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
