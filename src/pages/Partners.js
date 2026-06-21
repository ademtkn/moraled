import React from 'react';
import { useTranslation } from 'react-i18next';
import './Partners.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PartnersSection from '../components/partners/PartnersSection';

function Partners() {
  const { t } = useTranslation();
  const partners = [
    {
      name: t('partners.partner_1_name'),
      reason: t('partners.partner_1_reason'),
      logo: '/images/partner-kef.png',
    },
    {
      name: t('partners.partner_2_name'),
      reason: t('partners.partner_2_reason'),
      logo: '/images/partner-gvn.png',
    },
    {
      name: t('partners.partner_3_name'),
      reason: t('partners.partner_3_reason'),
      logo: '/images/partner-yci.png',
    },
  ];

  return (
    <>
      <Header />
      <section className="partners-section">
        <div className="partners-wrapper">
          <h2>{t('partners.title')}</h2>
          <p className="partners-intro">
            {t('partners.intro')}
          </p>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <img src={partner.logo} alt={partner.name} />
                <h3>{partner.name}</h3>
                <p>{partner.reason}</p>
              </div>
            ))}
          </div>

          <div className="partner-values">
            <h3>{t('partners.why_partner_title')}</h3>
            <ul>
              <li>{t('partners.why_1')}</li>
              <li>{t('partners.why_2')}</li>
              <li>{t('partners.why_3')}</li>
              <li>{t('partners.why_4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partner Schools Carousel */}
      <PartnersSection />

      {/* Impact Together */}
      <section className="impact-together">
        <h3>{t('partners.impact_title')}</h3>
        <div className="impact-grid">
          <div className="impact-box">
            <span>🏫</span>
            <h4>{t('partners.impact_schools')}</h4>
            <p>{t('partners.impact_schools_desc')}</p>
          </div>
          <div className="impact-box">
            <span>👨‍🏫</span>
            <h4>{t('partners.impact_educators')}</h4>
            <p>{t('partners.impact_educators_desc')}</p>
          </div>
          <div className="impact-box">
            <span>🧒</span>
            <h4>{t('partners.impact_students')}</h4>
            <p>{t('partners.impact_students_desc')}</p>
          </div>
          <div className="impact-box">
            <span>📍</span>
            <h4>{t('partners.impact_regions')}</h4>
            <p>{t('partners.impact_regions_desc')}</p>
          </div>
        </div>
      </section>

      {/* Partner Voices */}
      <section className="partner-voices">
        <h3>{t('partners.voices_title')}</h3>
        <blockquote>
          {t('partners.voice_1')}
        </blockquote>
        <blockquote>
          {t('partners.voice_2')}
        </blockquote>
      </section>

      {/* How We Collaborate */}
      <section className="collaborate-section">
        <h2>{t('partners.collaborate_title')}</h2>
        <div className="collaborate-steps">
          <div className="collab-card">
            <span>🤝</span>
            <h3>{t('partners.collab_1_title')}</h3>
            <p>{t('partners.collab_1_desc')}</p>
          </div>
          <div className="collab-card">
            <span>🧠</span>
            <h3>{t('partners.collab_2_title')}</h3>
            <p>{t('partners.collab_2_desc')}</p>
          </div>
          <div className="collab-card">
            <span>🎓</span>
            <h3>{t('partners.collab_3_title')}</h3>
            <p>{t('partners.collab_3_desc')}</p>
          </div>
          <div className="collab-card">
            <span>📊</span>
            <h3>{t('partners.collab_4_title')}</h3>
            <p>{t('partners.collab_4_desc')}</p>
          </div>
        </div>
      </section>


      {/* Become a Partner */}
      <section className="become-partner-section">
        <h2>{t('partners.become_title')}</h2>
        <p className="partner-intro">
          {t('partners.become_intro')}
        </p>
        <ul className="partner-benefits">
          <li>{t('partners.benefit_1')}</li>
          <li>{t('partners.benefit_2')}</li>
          <li>{t('partners.benefit_3')}</li>
          <li>{t('partners.benefit_4')}</li>
        </ul>
        <a href="/contact" className="partner-cta">{t('partners.become_cta')}</a>
      </section>



      <Footer />
    </>
  );
}

export default Partners;
