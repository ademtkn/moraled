import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        titleKey="seo.privacy_title"
        descriptionKey="seo.privacy_desc"
        path="/privacy-policy"
      />
      <Header />
      <main className="inner-page" id="main">

        <section className="privacy-hero">
          <h1>{t('privacy.hero_title')}</h1>
          <p>{t('privacy.last_updated')}</p>
        </section>

        <section className="privacy-section">
          <div className="privacy-wrapper">
            <p>
              {t('privacy.intro')}{' '}
              <a href="mailto:linekginfo@gmail.com">linekginfo@gmail.com</a>.
            </p>

            <h2>{t('privacy.info_title')}</h2>
            <p>
              {t('privacy.info_text')}
            </p>

            <h2>{t('privacy.use_title')}</h2>
            <p>
              {t('privacy.use_text')}
            </p>

            <h2>{t('privacy.third_party_title')}</h2>
            <p>
              {t('privacy.third_party_text')}
            </p>

            <h2>{t('privacy.certificates_title')}</h2>
            <p>{t('privacy.certificates_text')}</p>

            <h2>{t('privacy.cookies_title')}</h2>
            <p>
              {t('privacy.cookies_text')}
            </p>

            <h2>{t('privacy.retention_title')}</h2>
            <p>
              {t('privacy.retention_text')}
            </p>

            <h2>{t('privacy.rights_title')}</h2>
            <p>
              {t('privacy.rights_text')}{' '}
              <a href="mailto:linekginfo@gmail.com">linekginfo@gmail.com</a>.
            </p>

            <h2>{t('privacy.changes_title')}</h2>
            <p>
              {t('privacy.changes_text')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
