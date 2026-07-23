import React from 'react';
import { useTranslation } from 'react-i18next';
import './Features.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Features() {
  const { t } = useTranslation();
  const features = [
    {
      icon: 'fas fa-child',
      title: t('features.feature_1_title'),
      description: t('features.feature_1_desc'),
    },
    {
      icon: 'fas fa-palette',
      title: t('features.feature_2_title'),
      description: t('features.feature_2_desc'),
    },
    {
      icon: 'fas fa-chart-line',
      title: t('features.feature_3_title'),
      description: t('features.feature_3_desc'),
    },
    {
      icon: 'fas fa-handshake',
      title: t('features.feature_4_title'),
      description: t('features.feature_4_desc'),
    },
  ];

  return (
    <>
      <Header />
      <section className="features-section">
        <div className="features-wrapper">
          <h2>{t('features.title')}</h2>
          <p className="features-intro">
            {t('features.intro')}
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <span className="feature-icon"><i className={feature.icon}></i></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Features;
