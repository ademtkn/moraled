import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './NotFound.css';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Seo titleKey="seo.not_found_title" descriptionKey="seo.not_found_desc" noIndex />
      <Header />
      <main className="inner-page" id="main">
        <section className="not-found-section">
          <p className="not-found-code">404</p>
          <h1>{t('notFound.title')}</h1>
          <p>
            {t('notFound.text')}
          </p>
          <Link to="/" className="btn-primary">{t('notFound.button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
