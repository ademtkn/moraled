import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WaveTop from '../components/WaveTop';
import WaveBottom from '../components/WaveBottom';

const valueKeys = ['Respect', 'Kindness', 'Courage', 'Responsibility', 'Empathy', 'Integrity', 'Gratitude', 'Perseverance', 'Humility', 'Cooperation', 'Justice', 'Self-awareness'];

function Home() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [randomValues, setRandomValues] = useState([]);



  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const updateValues = () => {
      const shuffled = [...valueKeys].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    };
    
    setRandomValues(updateValues());

    const interval = setInterval(() => {
      setRandomValues(updateValues());
    }, 5000);

    return () => clearInterval(interval);
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
              className="cta-button"
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
            {randomValues.map((key) => (
              <div className="value-card" key={key}>
                <i className="fas fa-star fa-2x"></i>
                <h3>{t(`values.${key}`)}</h3>
                <p>{t(`values.${key}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE SECTION 1 */}
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
            <button className="quote-button" onClick={() => setShowModal(true)}>
              {t('home.quote_button')}
            </button>
          </div>
          <WaveBottom />
        </section>
            {/* MODAL */}
            {showModal && (
              <div className="modal-backdrop" onClick={() => setShowModal(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <h3>{t('home.modal_title')}</h3>
                  <p>
                    {t('home.modal_text')}
                  </p>
                  <button onClick={() => setShowModal(false)}>{t('home.modal_close')}</button>
                </div>
              </div>
            )}

        {/* SAMPLE RESOURCES */}
        <section className="samples" data-aos="fade-up">
          <h2>{t('home.resources_title')}</h2>
          <p className="samples-sub">
            {t('home.resources_subtitle')}
          </p>

          <div className="sample-grid">
            <div className="sample-card" data-aos="flip-left">
              <img src="/icons/story.png" alt="Story icon" />
              <h3>{t('home.story_title')}</h3>
              <p>{t('home.story_desc')}</p>
              <button className="sample-button" onClick={() => alert("Opening story: The Honest Fox")}>
                {t('home.story_button')}
              </button>
            </div>

            <div className="sample-card" data-aos="flip-left" data-aos-delay="100">
              <img src="/icons/song.png" alt="Song icon" />
              <h3>{t('home.song_title')}</h3>
              <p>{t('home.song_desc')}</p>
              <button className="sample-button" onClick={() => alert("Playing: Kindness Anthem")}>
                {t('home.song_button')}
              </button>
            </div>

            <div className="sample-card" data-aos="flip-left" data-aos-delay="200">
              <img src="/icons/game.png" alt="Game icon" />
              <h3>{t('home.game_title')}</h3>
              <p>{t('home.game_desc')}</p>
              <button className="sample-button" onClick={() => alert("Launching: Value Quest")}>
                {t('home.game_button')}
              </button>
            </div>
          </div>
        </section>


        {/* WHOLE CHILD SUCCESS */}
        <section className="whole-child" data-aos="fade-up">
          <div className="whole-child-content">
            <h2>{t('home.whole_child_title')}</h2>
            <p>
              {t('home.whole_child_desc')}
            </p>

            <ul className="pillars">
              <li data-aos="fade-right">{t('home.pillar_cognitive')}</li>
              <li data-aos="fade-right" data-aos-delay="100">{t('home.pillar_emotional')}</li>
              <li data-aos="fade-right" data-aos-delay="200">{t('home.pillar_social')}</li>
              <li data-aos="fade-right" data-aos-delay="300">{t('home.pillar_moral')}</li>
            </ul>

            <div className="whole-child-buttons">
              <button
                className="pillars-button"
                onClick={() => alert("Coming soon: Interactive learning paths!")}
              >
                {t('home.whole_child_button_1')}
              </button>
              <button
                className="pillars-button secondary"
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
          <p className="testimonial-sub">
            {t('home.testimonials_subtitle')}
          </p>

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
            <button className="testimonial-button" onClick={() => alert("More stories coming soon!")}>
              {t('home.testimonial_button')}
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default Home;
