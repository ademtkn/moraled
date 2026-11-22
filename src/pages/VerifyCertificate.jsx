import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Picture from '../components/Picture';
import CertificateArt from '../components/CertificateArt';
import emailjs from '@emailjs/browser';
import { CERTIFICATE_DESIGNS, certificateStatus, isCertificateId, normaliseCertificateId, parseCertificateRegistry } from '../data/certificates';
import './VerifyCertificate.css';

function useCertificateRegistry() {
  const [attempt, setAttempt] = useState(0);
  const [registry, setRegistry] = useState({ phase: 'loading', records: [] });
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch('/certificates/registry.json', { signal: controller.signal, cache: 'no-store' });
        if (!response.ok) throw new Error('Registry unavailable');
        const records = parseCertificateRegistry(await response.json());
        if (!controller.signal.aborted) setRegistry({ phase: 'ready', records });
      } catch {
        if (!controller.signal.aborted) setRegistry({ phase: 'error', records: [] });
      }
    }
    load();
    return () => controller.abort();
  }, [attempt]);
  return { ...registry, retry: () => {
    setRegistry({ phase: 'loading', records: [] });
    setAttempt((value) => value + 1);
  } };
}

function CertificateResult({ id, registry, dateLabel, language }) {
  const { t } = useTranslation();
  const [copyState, setCopyState] = useState('');
  if (!isCertificateId(id)) return <p role="status">{t('certificate.lookup_invalid')}</p>;
  if (registry.phase === 'loading') return <p role="status">{t('certificate.lookup_loading')}</p>;
  if (registry.phase === 'error') return <div role="status"><p>{t('certificate.lookup_error')}</p><button type="button" className="btn-outline" onClick={registry.retry}>{t('common.retry')}</button></div>;
  const record = registry.records.find((item) => item.id === id);
  if (!record) return <div role="status"><h3>{t('certificate.lookup_missing_title')}</h3><p>{t('certificate.lookup_missing')}</p><a href="#cert-request">{t('certificate.lookup_help')}</a></div>;
  const status = certificateStatus(record);
  const canView = status === 'active' || status === 'expired';
  const shareUrl = new URL('/verify-certificate', window.location.origin);
  shareUrl.searchParams.set('id', record.id);
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(shareUrl.href); setCopyState('copied'); }
    catch { setCopyState('copy_fallback'); }
  };
  return <article className="cert-record" aria-labelledby="cert-record-name">
    <div className="cert-record-heading"><span className="cert-kicker">{t('certificate.record_found')}</span><span className={'cert-status cert-status--' + status}>{t('certificate.status_' + status)}</span></div>
    <h3 id="cert-record-name">{record.publicRecipientName}</h3>
    <p className="cert-record-title">{record.title[language] || record.title.kg}</p>
    <dl className="cert-record-details">
      <div><dt>{t('certificate.lookup_label')}</dt><dd>{record.id}</dd></div>
      <div><dt>{t('certificate.recipient_type')}</dt><dd>{t('certificate.audience_' + record.recipientType)}</dd></div>
      {record.publicOrganisation && <div><dt>{t('certificate.organisation')}</dt><dd>{record.publicOrganisation}</dd></div>}
      <div><dt>{t('certificate.issue_date')}</dt><dd>{dateLabel(record.issuedOn)}</dd></div>
      <div><dt>{t('certificate.expiry_date')}</dt><dd>{record.expiresOn ? dateLabel(record.expiresOn) : t('certificate.expiry_unspecified')}</dd></div>
    </dl>
    {canView && record.fileUrl && !/\.pdf$/i.test(record.fileUrl) && <Picture className="cert-issued-image" src={record.fileUrl} alt={t('certificate.issued_alt', { name: record.publicRecipientName })} sizes="(max-width: 800px) 90vw, 720px" />}
    <div className="cert-record-actions">
      {canView && record.fileUrl && <a className="btn-primary" href={record.fileUrl} target="_blank" rel="noopener noreferrer">{t('certificate.view_document')}</a>}
      <button type="button" className="btn-outline" onClick={copyLink}>{t('certificate.copy_link')}</button>
    </div>
    <label className="cert-share-label" htmlFor="cert-share-url">{t('certificate.share_link')}</label>
    <input id="cert-share-url" className="cert-share-url" value={shareUrl.href} readOnly onFocus={(event) => event.target.select()} />
    <p role="status">{copyState ? t('certificate.' + copyState) : ''}</p>
  </article>;
}

function VerifyCertificate() {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedId = normaliseCertificateId(searchParams.get('id'));
  const registry = useCertificateRegistry();
  const [preview, setPreview] = useState(null);
  const previewDialog = useRef(null);
  const resultRef = useRef(null);
  const form = useRef(null);
  const requestLock = useRef(false);
  const [requestState, setRequestState] = useState('idle');
  const language = ['kg', 'ru', 'en'].includes(i18n.language) ? i18n.language : 'kg';
  const dateLabel = (value) => new Intl.DateTimeFormat(language === 'kg' ? 'ky-KG' : language, { dateStyle: 'long', timeZone: 'Asia/Bishkek' }).format(new Date(value + 'T00:00:00Z'));
  const schools = registry.records.filter((record) => record.recipientType === 'school');

  useEffect(() => {
    if (preview && !previewDialog.current.open) previewDialog.current.showModal();
  }, [preview]);
  useEffect(() => {
    if (requestedId) resultRef.current?.scrollIntoView({ behavior: 'instant', block: 'center' });
  }, [requestedId]);

  const lookup = (event) => {
    event.preventDefault();
    const id = normaliseCertificateId(new FormData(event.currentTarget).get('certificate_id'));
    setSearchParams({ id });
  };
  const sendRequest = async (event) => {
    event.preventDefault();
    if (requestLock.current) return;
    requestLock.current = true;
    setRequestState('sending');
    const fields = form.current.elements;
    fields.message.value = [
      'Certificate ID: ' + (fields.certificate_id.value.trim() || '(not provided)'),
      'Details: ' + fields.details.value.trim(),
    ].join('\n\n');
    try {
      await emailjs.sendForm('service_jyu0j3s', 'template_fanurrp', form.current, 'TX7gtshANTTyGan6u');
      form.current.reset();
      setRequestState('success');
    } catch { setRequestState('error'); }
    finally { requestLock.current = false; }
  };

  return <>
    <Seo titleKey="seo.verify_title" descriptionKey="seo.verify_desc" path="/verify-certificate" />
    <Header />
    <main className="inner-page cert-page" id="main">
      <section className="certificate-hero">
        <h1>{t('certificate.hero_title')}</h1>
        <p>{t('certificate.hero_subtitle')}</p>
        <div className="cert-hero-actions"><a className="btn-sun" href="#cert-lookup">{t('certificate.lookup_button')}</a><a className="btn-ghost-light" href="#cert-school-list">{t('certificate.schools_title')}</a></div>
      </section>

      <section className="cert-intro">
        <h2>{t('certificate.intro_title')}</h2>
        <p className="cert-lead">{t('certificate.intro_text')}</p>
        <div className="cert-audience-grid">{[['school', 'fa-school'], ['teacher', 'fa-chalkboard-teacher'], ['student', 'fa-graduation-cap']].map(([type, icon]) => <article className="cert-audience-card" key={type}>
          <i className={'fas ' + icon} aria-hidden="true" /><h3>{t('certificate.audience_' + type)}</h3><p>{t('certificate.audience_' + type + '_text')}</p>
        </article>)}</div>
      </section>

      <section className="cert-lookup-section" id="cert-lookup" aria-labelledby="cert-lookup-title">
        <div className="cert-lookup-copy"><span className="cert-kicker">MoralEd</span><h2 id="cert-lookup-title">{t('certificate.lookup_title')}</h2><p>{t('certificate.lookup_text')}</p><p className="cert-note">{t('certificate.lookup_privacy')}</p></div>
        <div className="cert-lookup-panel">
          <form onSubmit={lookup} className="cert-lookup-form">
            <label htmlFor="cert-lookup-id">{t('certificate.lookup_label')}</label>
            <input key={requestedId} id="cert-lookup-id" name="certificate_id" type="text" defaultValue={requestedId} required minLength="6" maxLength="64" pattern="[A-Za-z0-9_\-]{6,64}" title={t('certificate.lookup_format')} autoComplete="off" autoCapitalize="characters" spellCheck="false" aria-describedby="cert-lookup-format" />
            <p className="cert-note" id="cert-lookup-format">{t('certificate.lookup_format')}</p>
            <button type="submit" className="btn-primary">{t('certificate.lookup_button')}</button>
          </form>
          <div ref={resultRef} id="cert-result" className="cert-result" aria-live="polite" aria-atomic="true">{requestedId && <CertificateResult key={requestedId} id={requestedId} registry={registry} dateLabel={dateLabel} language={language} />}</div>
        </div>
      </section>

      <section className="cert-schools-section" id="cert-school-list">
        <h2>{t('certificate.schools_title')}</h2><p className="cert-lead">{t('certificate.schools_intro')}</p>
        {registry.phase === 'loading' && <p role="status">{t('certificate.lookup_loading')}</p>}
        {registry.phase === 'error' && <div role="status"><p>{t('certificate.lookup_error')}</p><button className="btn-outline" type="button" onClick={registry.retry}>{t('common.retry')}</button></div>}
        {registry.phase === 'ready' && (schools.length ? <div className="cert-school-grid">{schools.map((record) => <article className="cert-school-card" key={record.id}>
          <span className={'cert-status cert-status--' + certificateStatus(record)}>{t('certificate.status_' + certificateStatus(record))}</span>
          <h3>{record.publicRecipientName}</h3><p>{record.title[language] || record.title.kg}</p><p className="cert-note">{record.id} · {dateLabel(record.issuedOn)}</p>
          <Link className="btn-outline" to={'/verify-certificate?id=' + encodeURIComponent(record.id)}>{t('certificate.view_record')}</Link>
        </article>)}</div> : <p className="cert-empty">{t('certificate.schools_empty')}</p>)}
      </section>

      <section className="cert-designs-section">
        <h2>{t('certificate.designs_title')}</h2><p className="cert-lead">{t('certificate.designs_intro')}</p>
        <div className="cert-design-grid">{CERTIFICATE_DESIGNS.map((design) => <figure className="cert-design-card" key={design.id}>
          <button type="button" className="cert-design-button" onClick={() => setPreview(design)} aria-label={t('certificate.design_example') + ': ' + t('certificate.preview_label', { title: t(design.titleKey) })}>
            <CertificateArt variant={design.variant} label={t('certificate.design_alt', { title: t(design.titleKey) })} />
            <span className="cert-example-badge">{t('certificate.design_example')}</span>
          </button>
          <figcaption><h3>{t(design.titleKey)}</h3><p>{t('certificate.preview_hint')}</p></figcaption>
        </figure>)}</div>
        <p className="cert-note">{t('certificate.designs_note')}</p>
      </section>

      <section className="certificate-form-section" id="cert-request">
        <div className="certificate-wrapper">
          <h2>{t('certificate.form_title')}</h2><p className="cert-form-intro">{t('certificate.form_intro')}</p>
          <form ref={form} onSubmit={sendRequest} aria-busy={requestState === 'sending'}>
            <label htmlFor="cert-name">{t('certificate.form_name')}</label><input id="cert-name" type="text" name="user_name" autoComplete="name" required />
            <label htmlFor="cert-email">{t('certificate.form_email')}</label><input id="cert-email" type="email" name="user_email" autoComplete="email" required />
            <label htmlFor="cert-role">{t('certificate.form_role_placeholder')}</label><select id="cert-role" name="role" defaultValue="" required>
              <option value="" disabled>{t('certificate.form_role_placeholder')}</option>
              <option value="School representative">{t('certificate.form_role_school')}</option>
              <option value="Teacher">{t('certificate.form_role_teacher')}</option>
              <option value="Student or guardian">{t('certificate.form_role_student')}</option>
            </select>
            <label htmlFor="cert-id">{t('certificate.form_cert_id')}</label><input id="cert-id" name="certificate_id" type="text" maxLength="64" />
            <label htmlFor="cert-details">{t('certificate.form_message')}</label><textarea id="cert-details" name="details" rows="4" />
            <input type="hidden" name="school_name" value="Certificate Verification Request" readOnly />
            <textarea name="message" hidden readOnly />
            <button type="submit" className="btn-primary" disabled={requestState === 'sending'}>{t(requestState === 'sending' ? 'certificate.form_sending' : 'certificate.form_button')}</button>
            <p role="status" className="cert-request-status">{requestState === 'success' ? t('certificate.alert_success') : requestState === 'error' ? t('certificate.alert_error') : ''}</p>
            <Link className="cert-note" to="/privacy-policy">{t('certificate.form_privacy')}</Link>
          </form>
        </div>
      </section>
    </main>
    <Footer />
    <dialog className="cert-preview-dialog" ref={previewDialog} onClose={() => setPreview(null)} aria-labelledby="cert-preview-title" aria-describedby="cert-preview-note">
      {preview && <><div className="cert-preview-toolbar"><h2 id="cert-preview-title">{t(preview.titleKey)}</h2><button type="button" className="btn-outline" onClick={() => previewDialog.current.close()}>{t('certificate.preview_close')}</button></div>
        <p id="cert-preview-note">{t('certificate.designs_note')}</p><CertificateArt variant={preview.variant} label={t('certificate.design_alt', { title: t(preview.titleKey) })} /></>}
    </dialog>
  </>;
}

export default VerifyCertificate;
