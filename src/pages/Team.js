import React from 'react';
import { useTranslation } from 'react-i18next';
import './Team.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Team() {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: 'Amina Tursunova',
      role: t('team.role_1'),
      image: '/images/team-amina.jpg',
    },
    {
      name: 'Bekzat Karimov',
      role: t('team.role_2'),
      image: '/images/team-bekzat.jpg',
    },
    {
      name: 'Elina Rustamova',
      role: t('team.role_3'),
      image: '/images/team-elina.jpg',
    },
    {
      name: 'Farid Akhmedov',
      role: t('team.role_4'),
      image: '/images/team-farid.jpg',
    },
  ];

  return (
    <>
      <Header />
      <section className="team-section">
        <div className="team-wrapper">
          <h2>{t('team.title')}</h2>
          <p className="team-intro">
            {t('team.intro')}
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-values">
        <h3>{t('team.unite_title')}</h3>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon"><i className="fas fa-book-open"></i></span>
            <h4>{t('team.value_1_title')}</h4>
            <p>{t('team.value_1_desc')}</p>
          </div>
          <div className="value-card">
            <span className="value-icon"><i className="fas fa-heart"></i></span>
            <h4>{t('team.value_2_title')}</h4>
            <p>{t('team.value_2_desc')}</p>
          </div>
          <div className="value-card">
            <span className="value-icon"><i className="fas fa-palette"></i></span>
            <h4>{t('team.value_3_title')}</h4>
            <p>{t('team.value_3_desc')}</p>
          </div>
          <div className="value-card">
            <span className="value-icon"><i className="fas fa-handshake"></i></span>
            <h4>{t('team.value_4_title')}</h4>
            <p>{t('team.value_4_desc')}</p>
          </div>
        </div>
      </section>

      <div className="join-mission">
        <h3>{t('team.join_title')}</h3>
        <a href="/contact" className="btn-primary">{t('team.join_button')}</a>
      </div>



      <Footer />
    </>
  );
}

export default Team;
