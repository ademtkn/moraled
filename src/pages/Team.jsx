import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Team.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

function Team() {
  const { t } = useTranslation();
  const roles = ['fas fa-chalkboard-teacher', 'fas fa-house', 'fas fa-children'].map((icon, i) => ({
    icon,
    title: t(`team.collaboration_${i + 1}_title`),
    text: t(`team.collaboration_${i + 1}_text`),
  }));

  return (
    <>
      <Seo
        titleKey="seo.team_title"
        descriptionKey="seo.team_desc"
        path="/team"
      />
      <Header />
      <main className="inner-page" id="main">
        <section className="team-hero">
          <h1>{t('team.title')}</h1>
          <p>{t('team.intro')}</p>
        </section>

        <section className="team-section">
          <div className="team-wrapper">
            <div className="team-grid team-collaboration-grid">
              {roles.map((role) => (
                <div className="team-card" key={role.title}>
                  <div className="team-avatar" aria-hidden="true"><i className={role.icon}></i></div>
                  <h2>{role.title}</h2>
                  <p className="team-collaboration-copy">{role.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-values">
          <h2>{t('team.unite_title')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon"><i className="fas fa-book-open"></i></span>
              <h3>{t('team.value_1_title')}</h3>
              <p>{t('team.value_1_desc')}</p>
            </div>
            <div className="value-card">
              <span className="value-icon"><i className="fas fa-heart"></i></span>
              <h3>{t('team.value_2_title')}</h3>
              <p>{t('team.value_2_desc')}</p>
            </div>
            <div className="value-card">
              <span className="value-icon"><i className="fas fa-palette"></i></span>
              <h3>{t('team.value_3_title')}</h3>
              <p>{t('team.value_3_desc')}</p>
            </div>
            <div className="value-card">
              <span className="value-icon"><i className="fas fa-handshake"></i></span>
              <h3>{t('team.value_4_title')}</h3>
              <p>{t('team.value_4_desc')}</p>
            </div>
          </div>
        </section>

        <div className="join-mission">
          <h2>{t('team.join_title')}</h2>
          <Link to="/contact" className="btn-primary">{t('team.join_button')}</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Team;
