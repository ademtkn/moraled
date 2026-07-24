import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WaveTop from '../components/WaveTop';
import WaveBottom from '../components/WaveBottom';
import SampleModal from '../components/samples/SampleModal';

const pillars = [
  { month: 'September', icon: 'fas fa-heart', name: 'Caring', focus: 'Caring means practicing kindness, compassion, and empathy while helping others in need.' },
  { month: 'October', icon: 'fas fa-handshake', name: 'Responsibility', focus: 'Responsibility means being accountable, reliable, and managing ourselves well.' },
  { month: 'November', icon: 'fas fa-hand-holding-heart', name: 'Respect', focus: 'Respect means honoring ourselves, others, our teachers and parents, and the natural world.' },
  { month: 'December', icon: 'fas fa-star', name: 'Trustworthiness', focus: 'Trustworthiness means being honest, acting with integrity, and keeping our promises.' },
  { month: 'January', icon: 'fas fa-scale-balanced', name: 'Fairness', focus: 'Fairness means upholding justice, inclusion, equality, and good sportsmanship.' },
  { month: 'February', icon: 'fas fa-lightbulb', name: 'Leadership', focus: 'Leadership means taking initiative, working as a team, and serving others.' },
  { month: 'March', icon: 'fas fa-seedling', name: 'Perseverance', focus: 'Perseverance means building resilience, courage, and a growth mindset.' },
  { month: 'April', icon: 'fas fa-globe', name: 'Citizenship', focus: 'Citizenship means caring for our community, our country, and our environment.' },
  { month: 'May', icon: 'fas fa-bullseye', name: 'Self-Discipline', focus: 'Self-Discipline means practicing self-control, setting meaningful goals, and building healthy habits.' },
];

function About() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [activeSample, setActiveSample] = useState(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <>
      <Header />

      <main className="home">
        {/* HERO SECTION */}
        <section className="hero">
          <video
            autoPlay
            muted
            loop
            className="hero-video"
            aria-label="Background video showing children learning"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="hero-overlay" data-aos="fade-up">
            <h1>{t('home.hero_title')}</h1>
            <p>{t('home.hero_subtitle')}</p>
            <button
              className="btn-primary btn-hero"
              onClick={() => {
                document.querySelector('.values')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('home.hero_button')}
            </button>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="core-values" data-aos="fade-up">
          <h2>{t('home.core_values_title')}</h2>
          <p className="core-values-sub">{t('home.core_values_subtitle')}</p>
          <div className="core-values-grid">
            {pillars.map((p) => (
              <div className="value-card" key={p.month}>
                <i className={`${p.icon} fa-2x`}></i>
                <span className="value-card__month">{p.month}</span>
                <h3>{p.name}</h3>
                <p>{p.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="quote-section" data-aos="fade-up">
          <WaveTop />
          <div className="quote-background-pattern"
            style={{
              backgroundImage: "url('/patterns/texture-light.svg')",
              backgroundRepeat: "repeat",
              opacity: 0.08,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          ></div>
          <div className="quote-content">
            <h3>
              <span className="quote-highlight">"{t('home.quote_highlight')}"</span><br />
            </h3>
            <h4>
              <span className="quote-sub">{t('home.quote_subtitle')}</span>
            </h4>
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              {t('home.quote_button')}
            </button>
          </div>
          <WaveBottom />
        </section>
        {showModal && (
          <div className="modal-backdrop" onClick={() => setShowModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>{t('home.modal_title')}</h3>
              <p>{t('home.modal_text')}</p>
              <button onClick={() => setShowModal(false)}>{t('home.modal_close')}</button>
            </div>
          </div>
        )}

        {/* SAMPLE RESOURCES */}
        <section className="samples" data-aos="fade-up">
          <h2>{t('home.resources_title')}</h2>
          <p className="samples-sub">{t('home.resources_subtitle')}</p>

          <div className="sample-grid">
            <div className="sample-card" data-aos="flip-left">
              <img src="/icons/story.png" alt="Story icon" />
              <h3>{t('home.story_title')}</h3>
              <p>{t('home.story_desc')}</p>
              <button className="btn-outline" onClick={() => setActiveSample('story')}>
                {t('home.story_button')}
              </button>
            </div>

            <div className="sample-card" data-aos="flip-left" data-aos-delay="100">
              <img src="/icons/song.png" alt="Song icon" />
              <h3>{t('home.song_title')}</h3>
              <p>{t('home.song_desc')}</p>
              <button className="btn-outline" onClick={() => setActiveSample('song')}>
                {t('home.song_button')}
              </button>
            </div>

            <div className="sample-card" data-aos="flip-left" data-aos-delay="200">
              <img src="/icons/game.png" alt="Game icon" />
              <h3>{t('home.game_title')}</h3>
              <p>{t('home.game_desc')}</p>
              <button className="btn-outline" onClick={() => setActiveSample('game')}>
                {t('home.game_button')}
              </button>
            </div>
          </div>
        </section>

        <SampleModal type={activeSample} onClose={() => setActiveSample(null)} />

        {/* WHOLE CHILD SUCCESS */}
        <section className="whole-child" data-aos="fade-up">
          <div className="whole-child-content">
            <h2>{t('home.whole_child_title')}</h2>
            <p>{t('home.whole_child_desc')}</p>

            <ul className="pillars">
              <li data-aos="fade-right"><i className="fas fa-brain"></i> {t('home.pillar_cognitive')}</li>
              <li data-aos="fade-right" data-aos-delay="100"><i className="fas fa-heart"></i> {t('home.pillar_emotional')}</li>
              <li data-aos="fade-right" data-aos-delay="200"><i className="fas fa-people-group"></i> {t('home.pillar_social')}</li>
              <li data-aos="fade-right" data-aos-delay="300"><i className="fas fa-leaf"></i> {t('home.pillar_moral')}</li>
            </ul>

            <div className="whole-child-buttons">
              <button
                className="btn-primary"
                onClick={() => alert("Coming soon: Interactive learning paths!")}
              >
                {t('home.whole_child_button_1')}
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  document.querySelector('.values')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('home.whole_child_button_2')}
              </button>
            </div>
          </div>

          <div className="whole-child-visual" data-aos="zoom-in">
            <img
              src="/images/whole-child-success.svg"
              alt="Whole child success illustration"
              className="animated-illustration"
            />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials" data-aos="fade-up">
          <h2>{t('home.testimonials_title')}</h2>
          <p className="testimonial-sub">{t('home.testimonials_subtitle')}</p>

          <div className="testimonial-grid">
            <div className="testimonial-card" data-aos="zoom-in">
              <p>"{t('home.testimonial_1')}"</p>
              <span>{t('home.testimonial_1_author')}</span>
            </div>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="100">
              <p>"{t('home.testimonial_2')}"</p>
              <span>{t('home.testimonial_2_author')}</span>
            </div>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="200">
              <p>"{t('home.testimonial_3')}"</p>
              <span>{t('home.testimonial_3_author')}</span>
            </div>
          </div>

          <div className="testimonial-actions">
            <button className="btn-outline" onClick={() => alert("More stories coming soon!")}>
              {t('home.testimonial_button')}
            </button>
          </div>
        </section>
      </main>


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
              <span className="framework-icon"><i className="fas fa-child"></i></span>
              <h3>{t('about.framework_1_title')}</h3>
              <p>{t('about.framework_1_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon"><i className="fas fa-lightbulb"></i></span>
              <h3>{t('about.framework_2_title')}</h3>
              <p>{t('about.framework_2_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon"><i className="fas fa-palette"></i></span>
              <h3>{t('about.framework_3_title')}</h3>
              <p>{t('about.framework_3_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon"><i className="fas fa-handshake"></i></span>
              <h3>{t('about.framework_4_title')}</h3>
              <p>{t('about.framework_4_desc')}</p>
            </div>
            <div className="framework-card">
              <span className="framework-icon"><i className="fas fa-chart-line"></i></span>
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
              <div className="timeline-icon"><i className="fas fa-seedling"></i></div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2019_title')}</h3>
                <p>{t('about.timeline_2019_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"><i className="fas fa-book"></i></div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2020_title')}</h3>
                <p>{t('about.timeline_2020_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"><i className="fas fa-school"></i></div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2021_title')}</h3>
                <p>{t('about.timeline_2021_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"><i className="fas fa-globe"></i></div>
              <div className="timeline-content">
                <h3>{t('about.timeline_2023_title')}</h3>
                <p>{t('about.timeline_2023_desc')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"><i className="fas fa-chart-line"></i></div>
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
