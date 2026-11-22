import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './ScopeSequence.css';

function ScopeSequence() {
  const { t } = useTranslation();

  const scope = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
    month: t(`scopeSequence.month_${n}`),
    pillar: t(`scopeSequence.pillar_${n}`),
    focus: t(`scopeSequence.skills_${n}`),
    objective: t(`scopeSequence.objective_${n}`),
  }));

  const ageBandIcons = ['fas fa-shapes', 'fas fa-book-reader', 'fas fa-comments', 'fas fa-user-graduate'];
  const ageBandSlugs = ['early-elementary', 'upper-elementary', 'middle-school', 'high-school'];
  const ageBands = [1, 2, 3, 4].map((n, index) => ({
    icon: ageBandIcons[index],
    slug: ageBandSlugs[index],
    title: t(`scopeSequence.band_${n}_title`),
    range: t(`scopeSequence.band_${n}_range`),
    description: t(`scopeSequence.band_${n}_desc`),
  }));

  return (
    <>
      <Seo
        titleKey="seo.scope_title"
        descriptionKey="seo.scope_desc"
        path="/scope-and-sequence"
      />
      <Header />
      <main className="inner-page" id="main">
        <section className="scope-hero">
          <h1>{t('scopeSequence.title')}</h1>
          <p>{t('scopeSequence.intro')}</p>
        </section>

        <section className="scope-section">
          <div className="scope-wrapper">
            <table className="scope-table">
              <thead>
                <tr>
                  <th>{t('scopeSequence.table_month')}</th>
                  <th>{t('scopeSequence.table_pillar')}</th>
                  <th>{t('scopeSequence.table_skills')}</th>
                  <th>{t('scopeSequence.table_objective')}</th>
                </tr>
              </thead>
              <tbody>
                {scope.map((row, index) => (
                  <tr key={row.month} className={index % 2 === 1 ? 'scope-row-shaded' : ''}>
                    <td>{row.month}</td>
                    <td className="scope-pillar">{row.pillar}</td>
                    <td>{row.focus}</td>
                    <td>{row.objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="age-bands-section">
          <div className="age-bands-wrapper">
            <h2>{t('scopeSequence.age_bands_title')}</h2>
            <p className="age-bands-intro">
              {t('scopeSequence.age_bands_intro')}
            </p>
            <div className="age-bands-grid">
              {ageBands.map((band) => (
                <div className="age-band-card" key={band.title}>
                  <div className="age-band-icon">
                    <i className={band.icon}></i>
                  </div>
                  <span className="age-band-range">{band.range}</span>
                  <h3>{band.title}</h3>
                  <p>{band.description}</p>
                  {band.slug ? (
                    <Link className="age-band-link" to={`/scope-and-sequence/${band.slug}`}>
                      {t('ageDetail.link_text')} <i className="fas fa-arrow-right"></i>
                    </Link>
                  ) : (
                    <span className="age-band-soon">{t('ageDetail.coming_soon')}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scope-cta">
          <h2>{t('scopeSequence.cta_title')}</h2>
          <p>{t('scopeSequence.cta_text')}</p>
          <Link to="/materials" className="btn-primary">{t('scopeSequence.cta_button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ScopeSequence;