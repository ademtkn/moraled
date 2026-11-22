import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import emailjs from '@emailjs/browser';
import './VerifyCertificate.css';

function VerifyCertificate() {
  const { t } = useTranslation();
  const form = useRef();
  const certIdRef = useRef();
  const detailsRef = useRef();
  const messageRef = useRef();

  const sendRequest = (e) => {
    e.preventDefault();

    const certId = certIdRef.current.value.trim();
    const details = detailsRef.current.value.trim();
    messageRef.current.value = [
      certId ? `Certificate ID: ${certId}` : 'Certificate ID: (not provided)',
      details ? `Details: ${details}` : '',
    ].filter(Boolean).join('\n\n');

    emailjs.sendForm(
      'service_jyu0j3s',
      'template_fanurrp',
      form.current,
      'TX7gtshANTTyGan6u'
    )
      .then(() => {
        alert(t('certificate.alert_success'));
        form.current.reset();
      })
      .catch(() => {
        alert(t('certificate.alert_error'));
      });
  };

  return (
    <>
      <Seo
        titleKey="seo.verify_title"
        descriptionKey="seo.verify_desc"
        path="/verify-certificate"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="certificate-hero">
          <h1>{t('certificate.hero_title')}</h1>
          <p>{t('certificate.hero_subtitle')}</p>
        </section>

        <section className="certificate-intro-section">
          <div className="certificate-wrapper">
            <h2>{t('certificate.intro_title')}</h2>
            <p>{t('certificate.intro_text')}</p>
          </div>
        </section>

        <section className="certificate-form-section">
          <div className="certificate-wrapper">
            <h2>{t('certificate.form_title')}</h2>
            <form ref={form} onSubmit={sendRequest}>
              <label htmlFor="cert-name" className="sr-only">{t('certificate.form_name')}</label>
              <input id="cert-name" type="text" name="user_name" placeholder={t('certificate.form_name')} required />

              <label htmlFor="cert-email" className="sr-only">{t('certificate.form_email')}</label>
              <input id="cert-email" type="email" name="user_email" placeholder={t('certificate.form_email')} required />

              <label htmlFor="cert-role" className="sr-only">{t('certificate.form_role_placeholder')}</label>
              <select id="cert-role" name="role" defaultValue="" required>
                <option value="" disabled>{t('certificate.form_role_placeholder')}</option>
                <option value="Teacher (Seminar Leader)">{t('certificate.form_role_teacher')}</option>
                <option value="Student Volunteer">{t('certificate.form_role_volunteer')}</option>
              </select>

              <label htmlFor="cert-id" className="sr-only">{t('certificate.form_cert_id')}</label>
              <input id="cert-id" type="text" ref={certIdRef} placeholder={t('certificate.form_cert_id')} />

              <label htmlFor="cert-details" className="sr-only">{t('certificate.form_message')}</label>
              <textarea id="cert-details" ref={detailsRef} placeholder={t('certificate.form_message')} rows="4"></textarea>

              <input type="hidden" name="school_name" value="Certificate Verification Request" readOnly />
              <textarea ref={messageRef} name="message" hidden readOnly></textarea>

              <button type="submit" className="btn-primary">{t('certificate.form_button')}</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default VerifyCertificate;
