import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      <Header />
      <section className="contact-hero">
        <h1>{t('contact.hero_title')}</h1>
        <p>{t('contact.hero_subtitle')}</p>
      </section>

      <section className="contact-info">
        <div className="info-block">
          <i className="fas fa-map-marker-alt"></i>
          <h3>{t('contact.location_title')}</h3>
          <p>{t('contact.location_text')}</p>
        </div>
        <div className="info-block">
          <i className="fas fa-envelope"></i>
          <h3>{t('contact.email_title')}</h3>
          <p>{t('contact.email_text')}</p>
        </div>
        <div className="info-block">
          <i className="fas fa-phone"></i>
          <h3>{t('contact.phone_title')}</h3>
          <p>{t('contact.phone_text')}</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>{t('contact.form_title')}</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder={t('contact.form_name')} required />
          <input type="email" name="user_email" placeholder={t('contact.form_email')} required />
          <input type="text" name="school_name" placeholder={t('contact.form_school_name')} required />
          <select name="role" defaultValue="" required>
            <option value="" disabled>{t('contact.form_role_placeholder')}</option>
            <option value="Teacher">{t('contact.form_role_teacher')}</option>
            <option value="Administrator">{t('contact.form_role_administrator')}</option>
            <option value="Principal">{t('contact.form_role_principal')}</option>
            <option value="Other">{t('contact.form_role_other')}</option>
          </select>
          <textarea name="message" placeholder={t('contact.form_message')} rows="5" required></textarea>
          <button type="submit" className="btn-primary">{t('contact.form_button')}</button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
