import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './FAQ.css';

function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    question: t(`faq.question_${n}`),
    answer: t(`faq.answer_${n}`),
  }));

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Seo
        titleKey="seo.faq_title"
        descriptionKey="seo.faq_desc"
        path="/faq"
      />
      <Header />
      <main className="inner-page" id="main">
        <section className="faq-hero">
          <h1>{t('faq.hero_title')}</h1>
          <p>{t('faq.hero_subtitle')}</p>
        </section>

        <section className="faq-section">
          <div className="faq-wrapper">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
                <button className="faq-question" onClick={() => toggle(index)}>
                  {faq.question}
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="faq-cta">
          <h2>{t('faq.cta_title')}</h2>
          <Link to="/contact" className="btn-primary">{t('faq.cta_button')}</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FAQ;