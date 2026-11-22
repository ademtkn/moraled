import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import emailjs from '@emailjs/browser';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jyu0j3s',     // ← EmailJS panelinden alacaksın
      'template_fanurrp',    // ← EmailJS panelinden alacaksın
      form.current,
      'TX7gtshANTTyGan6u'      // ← EmailJS panelinden alacaksın
    )
    .then(() => {
      alert(t('contact.alert_success'));
    })
    .catch(() => {
      alert(t('contact.alert_error'));
    });
  };

  return (
    <>
      <Seo
        titleKey="seo.contact_title"
        descriptionKey="seo.contact_desc"
        path="/contact"
      />
      <Header />
      <main className="inner-page" id="main">
        <section className="contact-hero">
          <h1>{t('contact.hero_title')}</h1>
          <p>{t('contact.hero_subtitle')}</p>
        </section>

        <section className="contact-info">
          <div className="info-block">
            <i className="fas fa-map-marker-alt"></i>
            <h2>{t('contact.location_title')}</h2>
            <p>{t('contact.location_text')}</p>
          </div>
          <div className="info-block">
            <i className="fas fa-envelope"></i>
            <h2>{t('contact.email_title')}</h2>
            <p>{t('contact.email_text')}</p>
          </div>
          <div className="info-block">
            <i className="fas fa-phone"></i>
            <h2>{t('contact.phone_title')}</h2>
            <p>{t('contact.phone_text')}</p>
          </div>
        </section>

        <section className="contact-form">
          <h2>{t('contact.form_title')}</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="contact-name" className="sr-only">{t('contact.form_name')}</label>
            <input id="contact-name" type="text" name="user_name" placeholder={t('contact.form_name')} required />

            <label htmlFor="contact-email" className="sr-only">{t('contact.form_email')}</label>
            <input id="contact-email" type="email" name="user_email" placeholder={t('contact.form_email')} required />

            <label htmlFor="contact-school" className="sr-only">{t('contact.form_school_name')}</label>
            <input id="contact-school" type="text" name="school_name" placeholder={t('contact.form_school_name')} required />

            <label htmlFor="contact-role" className="sr-only">{t('contact.form_role_placeholder')}</label>
            <select id="contact-role" name="role" defaultValue="" required>
              <option value="" disabled>{t('contact.form_role_placeholder')}</option>
              <option value="Teacher">{t('contact.form_role_teacher')}</option>
              <option value="Administrator">{t('contact.form_role_administrator')}</option>
              <option value="Principal">{t('contact.form_role_principal')}</option>
              <option value="Other">{t('contact.form_role_other')}</option>
            </select>

            <label htmlFor="contact-message" className="sr-only">{t('contact.form_message')}</label>
            <textarea id="contact-message" name="message" placeholder={t('contact.form_message')} rows="5" required></textarea>

            <button type="submit" className="btn-primary">{t('contact.form_button')}</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
