import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      {/* OUR STORY */}
      <section className="about-section story-section">
        <div className="story-wrapper">
          <div className="story-text">
            <h2>{t('about.story_title')}</h2>
            <p style={{whiteSpace: 'pre-line'}}>
              {t('about.story_text')}
            </p>
          </div>
          <div className="story-image">
            <img src="/images/our-story.jpg" alt="Founding of MoralEd" />
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


      {/* OUR FRAMEWORK */}
      <section className="about-section framework-section">
        <div className="framework-wrapper">
          <h2>{t('about.framework_title')}</h2>
          <div className="framework-grid">
            <div className="framework-card">
              <span className="framework-icon">🌱</span>
              <h3>{t('about.framework_1_title')}</h3>
              <p>{t('about.framework_1_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon">💡</span>
              <h3>{t('about.framework_2_title')}</h3>
              <p>{t('about.framework_2_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon">🎨</span>
              <h3>{t('about.framework_3_title')}</h3>
              <p>{t('about.framework_3_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon">🤝</span>
              <h3>{t('about.framework_4_title')}</h3>
              <p>{t('about.framework_4_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon">📊</span>
              <h3>{t('about.framework_5_title')}</h3>
              <p>{t('about.framework_5_desc')}</p>
            </div>
          </div>
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
            <p>
              {t('about.beliefs_text_2')}
            </p>
          </div>
          <div className="beliefs-image">
            <img src="/images/beliefs-illustration.png" alt="MoralEd Beliefs Illustration" />
            <p className="image-caption">{t('about.beliefs_caption')}</p>
          </div>
        </div>
      </section>

      <section className="about-section timeline-section">
        <div className="timeline-wrapper">
          <h2>{t('about.timeline_title')}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">🌱</div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2019_title')}</h3>
                <p>{t('about.timeline_2019_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">📚</div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2020_title')}</h3>
                <p>{t('about.timeline_2020_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">🏫</div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2021_title')}</h3>
                <p>{t('about.timeline_2021_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">🌍</div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2023_title')}</h3>
                <p>{t('about.timeline_2023_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">📊</div>
              <div className="timeline-content">
                <h3>2025 – Measuring Impact</h3>
                <p>We begin tracking growth in empathy, responsibility, and ethical decision-making across schools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
