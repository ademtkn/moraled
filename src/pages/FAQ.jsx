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
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              // Accordion (disclosure) pattern: the answer stays in the DOM so aria-controls always
              // points at a real element; `hidden` removes it from view and from screen readers.
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                  <button
                    type="button"
                    className="faq-question"
                    id={`faq-question-${index + 1}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index + 1}`}
                    onClick={() => toggle(index)}
                  >
                    {faq.question}
                    <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true"></i>
                  </button>
                  <div className="faq-answer" id={`faq-answer-${index + 1}`} hidden={!isOpen}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
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