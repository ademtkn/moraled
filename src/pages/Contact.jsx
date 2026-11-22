import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import emailjs from '@emailjs/browser';

// Option values go into the e-mail as-is (English, for the team); labels are translated.
const ROLES = {
  general: [
    ['Teacher', 'contact.form_role_teacher'],
    ['Administrator', 'contact.form_role_administrator'],
    ['Principal', 'contact.form_role_principal'],
    ['Other', 'contact.form_role_other'],
  ],
  volunteer: [
    ['Student', 'contact.form_role_student'],
    ['Teacher', 'contact.form_role_teacher'],
    ['Parent or caregiver', 'contact.form_role_parent'],
    ['Other', 'contact.form_role_other'],
  ],
};

function ContactPage({ volunteer }) {
  const { t } = useTranslation();
  const form = useRef(null);
  // Lock in a ref: state updates are async, so a fast double click / Enter could pass a state check twice.
  const sending = useRef(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // Coming from the Student Volunteers page: start at the application form, not the page top.
  // (Runs after ScrollToTop, because the page is lazy-loaded after the route change.)
  useEffect(() => {
    if (!volunteer) return;
    const section = document.getElementById('contact-form');
    try {
      section?.scrollIntoView({ block: 'start', behavior: 'instant' });
    } catch {
      section?.scrollIntoView(true);
    }
  }, [volunteer]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus('sending');
    if (volunteer) {
      // The EmailJS template only shows the standard fields, so the topic and the adult-consent
      // confirmation are written into the hidden `message` (same pattern as the certificate form).
      const fields = form.current.elements;
      fields.message.value = [
        'Topic: Student volunteer application',
        'A teacher or parent/caregiver knows about this application: Yes',
        '',
        fields.details.value.trim(),
      ].join('\n');
    }
    try {
      // EmailJS service, template and public key (from the EmailJS dashboard).
      await emailjs.sendForm('service_jyu0j3s', 'template_fanurrp', form.current, 'TX7gtshANTTyGan6u');
      form.current.reset();
      setStatus('success');
    } catch {
      setStatus('error'); // keep what the user typed so they can retry
    } finally {
      sending.current = false;
    }
  };

  // A new message after a successful send: hide the old confirmation once the user edits again.
  const clearSuccess = () => {
    if (status === 'success') setStatus('idle');
  };

  const isSending = status === 'sending';
  const statusText =
    status === 'success' ? t('contact.alert_success')
      : status === 'error' ? t('contact.alert_error', { email: t('contact.email_text') })
        : '';
  const messageLabel = t(volunteer ? 'contact.volunteer_message' : 'contact.form_message');
  const buttonLabel = volunteer ? 'contact.volunteer_button' : 'contact.form_button';

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

        <section className="contact-form" id="contact-form">
          <h2>{t(volunteer ? 'contact.volunteer_title' : 'contact.form_title')}</h2>
          {volunteer && (
            <p className="contact-form-intro">
              {t('contact.volunteer_intro')}{' '}
              <Link to="/student-volunteers">{t('contact.volunteer_steps_link')}</Link>
            </p>
          )}
          <form ref={form} onSubmit={sendEmail} onInput={clearSuccess} aria-busy={isSending}>
            <label htmlFor="contact-name" className="sr-only">{t('contact.form_name')}</label>
            <input id="contact-name" type="text" name="user_name" placeholder={t('contact.form_name')} autoComplete="name" required />

            <label htmlFor="contact-email" className="sr-only">{t('contact.form_email')}</label>
            <input id="contact-email" type="email" name="user_email" placeholder={t('contact.form_email')} autoComplete="email" required />

            <label htmlFor="contact-school" className="sr-only">{t('contact.form_school_name')}</label>
            <input id="contact-school" type="text" name="school_name" placeholder={t('contact.form_school_name')} required />

            <label htmlFor="contact-role" className="sr-only">{t('contact.form_role_placeholder')}</label>
            <select id="contact-role" name="role" defaultValue="" required>
              <option value="" disabled>{t('contact.form_role_placeholder')}</option>
              {ROLES[volunteer ? 'volunteer' : 'general'].map(([value, key]) => (
                <option key={value} value={value}>{t(key)}</option>
              ))}
            </select>

            <label htmlFor="contact-message" className="sr-only">{messageLabel}</label>
            <textarea id="contact-message" name={volunteer ? 'details' : 'message'} placeholder={messageLabel} rows="5" required></textarea>

            {volunteer && (
              <>
                <textarea name="message" hidden readOnly />
                <label className="contact-consent">
                  <input type="checkbox" name="adult_informed" value="Yes" required />
                  <span>{t('contact.volunteer_consent')}</span>
                </label>
              </>
            )}

            {/* aria-disabled (not disabled) keeps keyboard focus on the button while sending; the ref lock blocks resubmits. */}
            <button type="submit" className="btn-primary" aria-disabled={isSending}>
              {t(isSending ? 'contact.form_sending' : buttonLabel)}
            </button>
            <p className="contact-status" data-state={status} role="status">{statusText}</p>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

// /contact?topic=volunteer (linked from the Student Volunteers page) turns the form into a student
// volunteer application. Keyed by topic so switching modes starts with a fresh form and status.
export default function Contact() {
  const [searchParams] = useSearchParams();
  const volunteer = searchParams.get('topic') === 'volunteer';
  return <ContactPage key={volunteer ? 'volunteer' : 'general'} volunteer={volunteer} />;
}
