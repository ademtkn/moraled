import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SampleModal from '../components/samples/SampleModal';
import PartnersSection from '../components/partners/PartnersSection';
import Picture from '../components/Picture';

// One icon per monthly pillar (September → May).
const PILLAR_ICONS = [
  'fas fa-heart',
  'fas fa-handshake',
  'fas fa-hand-holding-heart',
  'fas fa-star',
  'fas fa-scale-balanced',
  'fas fa-lightbulb',
  'fas fa-seedling',
  'fas fa-globe',
  'fas fa-bullseye',
];

// Each row of the 3×3 calendar is one season: autumn · winter · spring.
const SEASONS = ['autumn', 'autumn', 'autumn', 'winter', 'winter', 'winter', 'spring', 'spring', 'spring'];

// Language-neutral figures taken from the curriculum itself (no invented statistics).
const STATS = [
  { value: '9', key: 'home.stat_values' },
  { value: '1–11', key: 'home.stat_grades' },
  { value: '4', key: 'home.stat_bands' },
  { value: '3', key: 'home.stat_languages' },
];

const FRAMEWORK = [
  { icon: 'fas fa-child', n: 1 },
  { icon: 'fas fa-lightbulb', n: 2 },
  { icon: 'fas fa-palette', n: 3 },
  { icon: 'fas fa-handshake', n: 4 },
  { icon: 'fas fa-chart-line', n: 5 },
];

// Piermont-style bento: photo tiles with label chips + solid colour tiles.
const EXPLORE_TILES = [
  { area: 'a', to: '/scope-and-sequence', key: 'nav.scope_sequence', img: '/images/gallery3.jpg' },
  { area: 'b', to: '/materials', key: 'nav.materials', icon: 'fas fa-book-open', tone: 'sun' },
  { area: 'c', to: '/research', key: 'nav.research', img: '/images/gallery4.jpg' },
  { area: 'd', to: '/about-bullying', key: 'nav.about_bullying', icon: 'fas fa-shield-heart', tone: 'navy' },
  { area: 'e', to: '/classroom-climate', key: 'nav.climate', img: '/images/gallery5.jpg' },
  { area: 'f', to: '/student-volunteers', key: 'nav.student_volunteers', icon: 'fas fa-hands-holding-child', tone: 'sky' },
  { area: 'g', to: '/events', key: 'nav.events', img: '/images/cambridge.jpg' },
];

const SAMPLES = [
  { type: 'story', icon: 'fas fa-book-open' },
  { type: 'song', icon: 'fas fa-music' },
  { type: 'game', icon: 'fas fa-puzzle-piece' },
];

const WHOLE_CHILD = [
  { icon: 'fas fa-brain', key: 'home.pillar_cognitive' },
  { icon: 'fas fa-heart', key: 'home.pillar_emotional' },
  { icon: 'fas fa-people-group', key: 'home.pillar_social' },
  { icon: 'fas fa-leaf', key: 'home.pillar_moral' },
];

// School months run September (1) → May (9); in summer, show September's pillar.
function currentPillarNumber(date = new Date()) {
  const m = date.getMonth(); // 0 = January
  if (m >= 8) return m - 7;
  if (m <= 4) return m + 5;
  return 1;
}

// Wrap the last two words of the title in the highlighter (works for EN / KG / RU).
function splitForHighlight(title) {
  const words = title.trim().split(/\s+/);
  if (words.length < 3) return { lead: '', tail: title };
  return { lead: words.slice(0, -2).join(' '), tail: words.slice(-2).join(' ') };
}

function About() {
  const { t } = useTranslation();
  const [activeSample, setActiveSample] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 40, easing: 'ease-out-cubic' });
  }, []);

  const pillars = PILLAR_ICONS.map((icon, index) => {
    const n = index + 1;
    return {
      n,
      icon,
      season: SEASONS[index],
      month: t(`scopeSequence.month_${n}`),
      name: t(`scopeSequence.pillar_${n}`),
      focus: t(`home.pillar_focus_${n}`),
    };
  });

  const featured = pillars[currentPillarNumber() - 1];
  const { lead, tail } = splitForHighlight(t('home.hero_title'));

  const scrollToValues = () => {
    document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Seo titleKey="seo.about_title" descriptionKey="seo.about_desc" path="/" />
      <Header />

      <main className="hx-page" id="main">
        {/* 1 · MASTHEAD — Qundylyq: büyük harfli başlık + vurgu + yaprak kolaj */}
        <section className="hx hx-masthead">
          <div className="ds-container hx-masthead__inner">
            <div className="hx-masthead__copy" data-aos="fade-up">
              <span className="eyebrow">{t('home.hero_eyebrow')}</span>
              <h1 className="hx-display">
                {lead && <>{lead} </>}
                <span className="hl">{tail}</span>
              </h1>
              <p className="hx-masthead__lead">{t('home.hero_subtitle')}</p>
              <div className="hx-actions">
                <Link to="/contact" className="btn-primary btn-hero">
                  {t('home.hero_button')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
                <Link to="/scope-and-sequence" className="btn-outline btn-hero">
                  {t('home.hero_button_2')}
                </Link>
              </div>
            </div>

            <div className="hx-collage" data-aos="fade-left">
              <span className="hx-collage__sun" aria-hidden="true"></span>
              <span className="hx-collage__ring" aria-hidden="true"></span>
              <div className="hx-collage__img hx-collage__img--tall petal-arch">
                <Picture src="/images/beliefs-illustration.jpg" sizes="(max-width: 1080px) 45vw, 240px" priority />
              </div>
              <div className="hx-collage__img hx-collage__img--top petal-leaf">
                <Picture src="/images/children-classroom-story.jpg" sizes="(max-width: 1080px) 50vw, 280px" loading="eager" />
              </div>
              <div className="hx-collage__img hx-collage__img--bottom petal-drop">
                <Picture src="/images/sunrise.jpg" sizes="(max-width: 1080px) 50vw, 280px" loading="eager" />
              </div>

              <Link to="/scope-and-sequence" className="hx-badge">
                <span className="hx-badge__icon">
                  <i className={featured.icon} aria-hidden="true"></i>
                </span>
                <span className="hx-badge__text">
                  <span className="hx-badge__label">{t('home.hero_badge')}</span>
                  <span className="hx-badge__value">{featured.name}</span>
                  <span className="hx-badge__month">{featured.month}</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="ds-container">
            <ul className="hx-stats" data-aos="fade-up">
              {STATS.map((stat) => (
                <li key={stat.key}>
                  <strong>{stat.value}</strong>
                  <span>{t(stat.key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2 · TANIM — lacivert bant (Qundylyq) */}
        <section className="hx hx-define">
          <div className="ds-container hx-define__inner">
            <figure className="hx-define__media petal-drop" data-aos="fade-right">
              <Picture src="/images/teacher-instructing-students.jpg" sizes="(max-width: 1080px) 90vw, 480px" />
            </figure>
            <div className="hx-define__copy" data-aos="fade-up">
              <span className="eyebrow eyebrow--light">MoralEd</span>
              <h2 className="section-title section-title--light">{t('definition.title')}</h2>
              <p className="hx-define__text">{t('definition.text')}</p>
              <p className="hx-define__quote">{t('definition.followup')}</p>
            </div>
          </div>
        </section>

        {/* 3 · DEĞERLER TAKVİMİ — mevsim renkli takvim yaprakları */}
        <section className="hx hx-calendar" id="values">
          <div className="ds-container">
            <header className="hx-head hx-head--center" data-aos="fade-up">
              <span className="eyebrow">
                {t('scopeSequence.month_1')} — {t('scopeSequence.month_9')}
              </span>
              <h2 className="section-title">{t('home.core_values_title')}</h2>
              <p className="section-lead">{t('home.core_values_subtitle')}</p>
            </header>

            <ol className="hx-calendar__list">
              {pillars.map((p) => (
                <li
                  className={`hx-month hx-month--${p.season} ${p.n === featured.n ? 'is-current' : ''}`}
                  key={p.n}
                  data-aos="fade-up"
                  data-aos-delay={((p.n - 1) % 3) * 80}
                >
                  <div className="hx-month__top">
                    <span className="hx-month__name">{p.month}</span>
                    <span className="hx-month__num">{String(p.n).padStart(2, '0')}</span>
                  </div>
                  <div className="hx-month__body">
                    <span className="hx-month__icon">
                      <i className={p.icon} aria-hidden="true"></i>
                    </span>
                    <h3>{p.name}</h3>
                    <p>{p.focus}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="hx-center">
              <Link to="/scope-and-sequence" className="btn-outline">
                {t('nav.scope_sequence')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* 4 · KEŞFET — Piermont bento ızgarası */}
        <section className="hx hx-explore">
          <div className="ds-container">
            <header className="hx-head hx-head--split" data-aos="fade-up">
              <div>
                <span className="eyebrow">{t('nav.resources')}</span>
                <h2 className="section-title">{t('home.explore_title')}</h2>
              </div>
              <p className="section-lead">{t('home.explore_subtitle')}</p>
            </header>

            <div className="hx-bento" data-aos="fade-up">
              {EXPLORE_TILES.map((tile) => (
                <Link
                  key={tile.to}
                  to={tile.to}
                  className={`hx-tile ${tile.img ? 'hx-tile--photo' : `hx-tile--${tile.tone}`}`}
                  style={{ gridArea: tile.area }}
                >
                  {tile.img && (
                    <Picture
                      src={tile.img}
                      sizes={tile.area === 'a' || tile.area === 'g'
                        ? '(max-width: 640px) 100vw, 560px'
                        : '(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 280px'}
                    />
                  )}
                  {tile.icon && (
                    <>
                      <i className={`${tile.icon} hx-tile__watermark`} aria-hidden="true"></i>
                      <span className="hx-tile__icon">
                        <i className={tile.icon} aria-hidden="true"></i>
                      </span>
                    </>
                  )}
                  <span className="hx-tile__label">
                    <span>{t(tile.key)}</span>
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · ÇERÇEVE — Qundylyq "avantajlar" kartları */}
        <section className="hx hx-framework">
          <div className="ds-container">
            <header className="hx-head" data-aos="fade-up">
              <span className="eyebrow">{t('nav.curriculum')}</span>
              <h2 className="section-title">{t('about.framework_title')}</h2>
            </header>

            <div className="hx-framework__list">
              {FRAMEWORK.map((f, i) => (
                <article className="hx-feature" key={f.n} data-aos="fade-up" data-aos-delay={(i % 2) * 80}>
                  <span className="hx-feature__icon">
                    <i className={f.icon} aria-hidden="true"></i>
                  </span>
                  <div>
                    <h3>{t(`about.framework_${f.n}_title`)}</h3>
                    <p>{t(`about.framework_${f.n}_desc`)}</p>
                  </div>
                </article>
              ))}
              <div className="hx-feature hx-feature--cta" data-aos="fade-up" data-aos-delay="80">
                <p>{t('home.framework_cta')}</p>
                <Link to="/features" className="btn-sun">
                  {t('home.whole_child_button_1')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · ÖRNEK KAYNAKLAR */}
        <section className="hx hx-samples">
          <div className="ds-container">
            <header className="hx-head hx-head--center" data-aos="fade-up">
              <span className="eyebrow">{t('home.resources_eyebrow')}</span>
              <h2 className="section-title">{t('home.resources_title')}</h2>
              <p className="section-lead">{t('home.resources_subtitle')}</p>
            </header>

            <div className="hx-samples__list">
              {SAMPLES.map((s, i) => (
                <article className={`hx-sample hx-sample--${s.type}`} key={s.type} data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="hx-sample__cover">
                    <i className={s.icon} aria-hidden="true"></i>
                  </div>
                  <div className="hx-sample__body">
                    <h3>{t(`home.${s.type}_title`)}</h3>
                    <p>{t(`home.${s.type}_desc`)}</p>
                    <button type="button" className="btn-outline btn-sm" onClick={() => setActiveSample(s.type)}>
                      {t(`home.${s.type}_button`).trim()} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SampleModal type={activeSample} onClose={() => setActiveSample(null)} />

        {/* 7 · BÜTÜNCÜL GELİŞİM — KiVa sakin liste */}
        <section className="hx hx-whole">
          <div className="ds-container hx-whole__inner">
            <div className="hx-whole__copy" data-aos="fade-up">
              <span className="eyebrow">MoralEd</span>
              <h2 className="section-title">{t('home.whole_child_title')}</h2>
              <p className="section-lead">{t('home.whole_child_desc')}</p>

              <ul className="hx-pillars">
                {WHOLE_CHILD.map((item) => (
                  <li key={item.key}>
                    <i className={item.icon} aria-hidden="true"></i>
                    {t(item.key).trim()}
                  </li>
                ))}
              </ul>

              <div className="hx-actions">
                <Link to="/scope-and-sequence" className="btn-primary">
                  {t('home.whole_child_button_1').trim()} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
                <button type="button" className="btn-outline" onClick={scrollToValues}>
                  {t('home.whole_child_button_2')}
                </button>
              </div>
            </div>

            <div className="hx-whole__visual" data-aos="zoom-in">
              <span className="hx-whole__dot" aria-hidden="true"></span>
              <Picture src="/images/whole-child-success.svg" sizes="(max-width: 1080px) 80vw, 420px" />
            </div>
          </div>
        </section>

        {/* 8 · GENÇLERİN SESİ — lacivert bant */}
        <section className="hx hx-voices">
          <div className="ds-container">
            <header className="hx-head" data-aos="fade-up">
              <span className="eyebrow eyebrow--light">MoralEd</span>
              <h2 className="section-title section-title--light">{t('home.testimonials_title')}</h2>
              <p className="section-lead hx-voices__lead">{t('home.testimonials_subtitle')}</p>
            </header>

            <div className="hx-voices__list">
              {[1, 2, 3].map((n) => (
                <figure className="hx-quote" key={n} data-aos="fade-up" data-aos-delay={(n - 1) * 80}>
                  <span className="hx-quote__mark" aria-hidden="true">“</span>
                  <blockquote>{t(`home.testimonial_${n}`)}</blockquote>
                  <figcaption>{t(`home.testimonial_${n}_author`)}</figcaption>
                </figure>
              ))}
            </div>

            <div className="hx-voices__actions">
              <Link to="/contact" className="btn-ghost-light">
                {t('home.testimonial_button').trim()} <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* 9 · PARTNER OKULLAR */}
        <PartnersSection />

        {/* 10 · CTA PANELİ — KiVa sıcak gri panel + fotoğraf şeridi */}
        <section className="hx hx-cta">
          <div className="ds-container">
            <div className="hx-cta__panel" data-aos="fade-up">
              <div className="hx-cta__photo">
                <Picture src="/images/gallery2.jpg" sizes="(max-width: 1240px) 100vw, 1120px" />
              </div>
              <div className="hx-cta__row">
                <div>
                  <h2>{t('home.quote_highlight')}</h2>
                  <p>{t('home.quote_subtitle')}</p>
                </div>
                <Link to="/contact" className="btn-primary btn-hero">
                  {t('home.quote_button')} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
