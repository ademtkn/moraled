import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './About.css';
import './OurStory.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Picture from '../components/Picture';

function OurStory() {
  const { t } = useTranslation();

  const leaderTestimonials = [
    {
      quote: t('forSchools.testimonial_1_quote'),
      name: t('forSchools.testimonial_1_name'),
    },
    {
      quote: t('forSchools.testimonial_2_quote'),
      name: t('forSchools.testimonial_2_name'),
    },
    {
      quote: t('forSchools.testimonial_3_quote'),
      name: t('forSchools.testimonial_3_name'),
    },
  ];

  return (
    <>
      <Seo
        titleKey="seo.our_story_title"
        descriptionKey="seo.our_story_desc"
        path="/our-story"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="our-story-hero">
          <h1>{t('about.hero_title')}</h1>
          <p>{t('about.hero_subtitle')}</p>
        </section>

        {/* OUR STORY */}
        <section className="about-section story-section">
          <div className="story-wrapper">
            <div className="story-text">
              <h2>{t('about.story_title')}</h2>
              <p style={{ whiteSpace: 'pre-line' }}>
                {t('about.story_text')}
              </p>
            </div>
            <div className="story-image">
              <Picture
                src="/images/our-story.jpg"
                alt="Illustration representing research, knowledge, and lifelong learning"
                sizes="(max-width: 980px) 90vw, 460px"
              />
            </div>
          </div>
        </section>

        {/* OUR MISSION */}
        <section className="about-section mission-section">
          <div className="mission-wrapper">
            <h2>{t('about.mission_title')}</h2>
            <p className="mission-lead">
              {t('about.mission_lead')}
            </p>
            <p className="mission-body">
              {t('about.mission_body')}
            </p>
          </div>
        </section>

        {/* OUR VISION */}
        <section className="about-section vision-section">
          <div className="vision-wrapper">
            <h2>{t('about.vision_title')}</h2>
            <p>
              {t('about.vision_text')}
            </p>
          </div>
        </section>

        {/* OUR BELIEFS */}
        <section className="about-section beliefs-section">
          <div className="beliefs-wrapper">
            <div className="beliefs-text">
              <h2>{t('about.beliefs_title')}</h2>
              <p>
                {t('about.beliefs_text_1')}
              </p>
            </div>
            <div className="beliefs-image">
              <Picture
                src="/images/beliefs-illustration.jpg"
                alt="MoralEd Beliefs Illustration"
                sizes="(max-width: 980px) 90vw, 440px"
              />
              <p className="image-caption">{t('about.beliefs_caption')}</p>
            </div>
          </div>
        </section>

        {/* SCHOOL LEADER TESTIMONIALS */}
        <section className="leader-testimonials">
          <h2>{t('forSchools.testimonials_title')}</h2>
          <div className="leader-testimonials-grid">
            {leaderTestimonials.map((testimonial) => (
              <div className="leader-testimonial-card" key={testimonial.name}>
                <i className="fas fa-quote-left leader-testimonial-quote-icon"></i>
                <p className="leader-testimonial-quote">{testimonial.quote}</p>
                <p className="leader-testimonial-name">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="our-story-cta">
          <h2>{t('about.cta_title')}</h2>
          <p>{t('about.cta_text')}</p>
          <Link to="/contact" className="btn-primary">{t('about.cta_button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default OurStory;
