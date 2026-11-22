import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Team.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Picture from '../components/Picture';

function Team() {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: 'Amina Tursunova',
      role: t('team.role_1'),
    },
    {
      name: 'Bekzat Karimov',
      role: t('team.role_2'),
    },
    {
      name: 'Elina Rustamova',
      role: t('team.role_3'),
    },
    {
      name: 'Aigerim Shuguralieva',
      role: t('team.role_4'),
      photo: '/images/team/aigerim-shuguralieva.jpg',
      bio: t('team.bio_4'),
    },
  ];

  const getInitials = (name) =>
    name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

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
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  {member.photo ? (
                    <Picture className="team-avatar-photo" src={member.photo} alt={member.name} sizes="112px" />
                  ) : (
                    <div className="team-avatar" aria-hidden="true">{getInitials(member.name)}</div>
                  )}
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                  {member.bio && <p className="team-bio">{member.bio}</p>}
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
