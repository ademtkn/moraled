import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { AGE_PAGES, GRADE_ORDER_PILLARS } from '../data/ageTopics';
import './ScopeSequence.css';
import './ScopeSequenceAge.css';

function ScopeSequenceAge() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'kg').slice(0, 2);
  const { band: slug } = useParams();
  const page = AGE_PAGES[slug];

  if (!page) return <Navigate to="/scope-and-sequence" replace />;

  const focus = t(`ageDetail.${page.key}.focus`, { returnObjects: true });
  const activities = t('ageDetail.activities.items', { returnObjects: true });
  const title = t(`scopeSequence.band_${page.band}_title`);
  const range = t(`scopeSequence.band_${page.band}_range`);
  const grades = t(`ageDetail.${page.key}.grades`);

  const months = GRADE_ORDER_PILLARS.map((pillarNo, i) => ({
    month: t(`scopeSequence.month_${i + 1}`),
    pillar: t(`scopeSequence.pillar_${pillarNo}`),
    focus: focus[i],
    topics: page.topics
      .map((g) => ({ grade: g.grade, items: g.months[i] }))
      .filter((g) => g.items.length > 0),
  }));

  const otherPages = Object.entries(AGE_PAGES).filter(([key]) => key !== slug);

  return (
    <>
      <Seo
        title={`${title} (${range}) – ${t('scopeSequence.title')}`}
        description={t('ageDetail.seo_description', { range })}
        path={`/scope-and-sequence/${slug}`}
      />
      <Header />
      <main className="inner-page" id="main">
        <section className="age-hero">
          <Link to="/scope-and-sequence" className="age-hero__back">
            <i className="fas fa-arrow-left" aria-hidden="true"></i> {t('scopeSequence.title')}
          </Link>
          <span className="age-hero__range">{range} · {grades}</span>
          <h1>{title}</h1>
          <p>{t('ageDetail.intro')}</p>
        </section>

        <section className="age-page">
          <div className="age-page-wrapper">
            <div className="age-month-list">
              {months.map((m, i) => (
                <article className="age-month-card" key={m.month}>
                  <header className="age-month-head">
                    <span className="age-month-name">{m.month}</span>
                    <h2>{m.pillar}</h2>
                  </header>
                  <div className="age-month-body">
                    <div className="age-month-block">
                      <h3>{t('ageDetail.focus_title')}</h3>
                      <p>{m.focus}</p>
                    </div>
                    {m.topics.length > 0 && (
                      <div className="age-month-block">
                        <h3>{t('ageDetail.topics_title')}</h3>
                        {m.topics.map((g) => (
                          <div className="age-topic-group" key={g.grade}>
                            <span className="age-topic-grade">{t('ageDetail.grade_label', { n: g.grade })}</span>
                            <ul>
                              {g.items.map((item) => <li key={item.kg}>{item[lang] || item.kg}</li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {page.activitiesMonth === i && (
                      <div className="age-month-block age-activities">
                        <h3>{t('ageDetail.activities_title')}</h3>
                        <p className="age-activities-topic">{t('ageDetail.activities.topic')}</p>
                        <ol>
                          {activities.map((a) => (
                            <li key={a.name}><strong>{a.name}.</strong> {a.text}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="age-page-other">
              <p>{t('ageDetail.other_ages')}</p>
              <div className="age-page-other-links">
                {otherPages.map(([key, p]) => (
                  <Link key={key} to={`/scope-and-sequence/${key}`}>
                    {t(`scopeSequence.band_${p.band}_title`)} · {t(`scopeSequence.band_${p.band}_range`)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ScopeSequenceAge;
