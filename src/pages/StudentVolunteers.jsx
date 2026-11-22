import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './StudentVolunteers.css';

const getInitials = (name) =>
  name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

function StudentVolunteers() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: 'fas fa-users',
      title: t('volunteers.benefit_1_title'),
      description: t('volunteers.benefit_1_desc'),
    },
    {
      icon: 'fas fa-clock',
      title: t('volunteers.benefit_2_title'),
      description: t('volunteers.benefit_2_desc'),
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: t('volunteers.benefit_3_title'),
      description: t('volunteers.benefit_3_desc'),
    },
    {
      icon: 'fas fa-graduation-cap',
      title: t('volunteers.benefit_4_title'),
      description: t('volunteers.benefit_4_desc'),
    },
  ];

  const roles = [
    {
      icon: 'fas fa-chalkboard',
      title: t('volunteers.role_1_title'),
      description: t('volunteers.role_1_desc'),
    },
    {
      icon: 'fas fa-people-arrows',
      title: t('volunteers.role_2_title'),
      description: t('volunteers.role_2_desc'),
    },
    {
      icon: 'fas fa-bullhorn',
      title: t('volunteers.role_3_title'),
      description: t('volunteers.role_3_desc'),
    },
    {
      icon: 'fas fa-camera',
      title: t('volunteers.role_4_title'),
      description: t('volunteers.role_4_desc'),
    },
  ];

  const steps = [
    {
      number: '01',
      icon: 'fas fa-file-signature',
      title: t('volunteers.step_1_title'),
      description: t('volunteers.step_1_desc'),
    },
    {
      number: '02',
      icon: 'fas fa-comments',
      title: t('volunteers.step_2_title'),
      description: t('volunteers.step_2_desc'),
    },
    {
      number: '03',
      icon: 'fas fa-chalkboard-teacher',
      title: t('volunteers.step_3_title'),
      description: t('volunteers.step_3_desc'),
    },
    {
      number: '04',
      icon: 'fas fa-heart',
      title: t('volunteers.step_4_title'),
      description: t('volunteers.step_4_desc'),
    },
  ];

  const volunteers = [
    { name: 'Zarina Abenova', role: t('volunteers.volunteer_1_role') },
    { name: 'Timur Osmonov', role: t('volunteers.volunteer_2_role') },
    { name: 'Aidana Bekova', role: t('volunteers.volunteer_3_role') },
  ];

  return (
    <>
      <Seo
        titleKey="seo.volunteers_title"
        descriptionKey="seo.volunteers_desc"
        path="/student-volunteers"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="volunteers-hero">
          <h1>{t('volunteers.hero_title')}</h1>
          <p>{t('volunteers.hero_subtitle')}</p>
        </section>

        <section className="volunteers-benefits">
          <h2>{t('volunteers.benefits_title')}</h2>
          <div className="volunteers-benefits-grid">
            {benefits.map((benefit) => (
              <div className="volunteers-benefit-card" key={benefit.title}>
                <div className="volunteers-benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="volunteers-roles">
          <h2>{t('volunteers.roles_title')}</h2>
          <div className="volunteers-roles-grid">
            {roles.map((role) => (
              <div className="volunteers-role-card" key={role.title}>
                <div className="volunteers-role-icon">
                  <i className={role.icon}></i>
                </div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="volunteers-steps-section">
          <div className="volunteers-steps-wrapper">
            <h2>{t('volunteers.steps_title')}</h2>
            <div className="volunteers-steps">
              {steps.map((step) => (
                <div className="volunteers-step" key={step.number}>
                  <div className="volunteers-step-number">{step.number}</div>
                  <div className="volunteers-step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="volunteers-roster">
          <h2>{t('volunteers.roster_title')}</h2>
          <p className="volunteers-roster-intro">
            {t('volunteers.roster_intro')}
          </p>
          <div className="volunteers-roster-grid">
            {volunteers.map((volunteer) => (
              <div className="volunteers-roster-card" key={volunteer.name}>
                <div className="volunteers-roster-avatar" aria-hidden="true">{getInitials(volunteer.name)}</div>
                <h3>{volunteer.name}</h3>
                <p>{volunteer.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="volunteers-cta">
          <h2>{t('volunteers.cta_title')}</h2>
          <p>{t('volunteers.cta_text')}</p>
          <Link to="/contact" className="btn-primary">{t('volunteers.cta_button')}</Link>
          <div className="volunteers-verify">
            <Link to="/verify-certificate" className="btn-verify-certificate">
              <i className="fas fa-graduation-cap"></i> {t('certificate.button_label')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default StudentVolunteers;
