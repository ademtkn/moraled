import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './FAQ.css';

const faqs = [
  {
    question: 'What grade levels is MoralEd designed for?',
    answer: 'MoralEd is built for K-12 classrooms, with activities, stories, and language adapted to fit different age groups within that range.',
  },
  {
    question: 'How long does it take to bring MoralEd to our school?',
    answer: 'Most schools move from an initial conversation to a classroom launch within a few weeks, depending on how much customization and teacher training your school needs. See our "For Schools" page for the full step-by-step process.',
  },
  {
    question: 'Does MoralEd replace our existing curriculum?',
    answer: 'No — MoralEd is designed to complement your existing curriculum, not replace it. The monthly pillar calendar fits alongside regular classroom instruction with dedicated activities, stories, and discussions.',
  },
  {
    question: 'What languages is the program available in?',
    answer: 'MoralEd is currently available in English, Russian, and Kyrgyz, so schools can deliver the program in the language that best fits their students and staff.',
  },
  {
    question: 'What kind of training do our teachers need?',
    answer: 'Before launch, your teachers receive hands-on training covering the curriculum structure, classroom activities, and how to track student progress each month. Ongoing support continues throughout the school year.',
  },
  {
    question: 'How do we measure the program\'s impact?',
    answer: 'We provide regular impact reports so you can see how students are progressing across each monthly pillar, based on teacher feedback and classroom observations.',
  },
  {
    question: 'How much does MoralEd cost?',
    answer: 'Pricing depends on your school\'s size and the level of customization needed. Reach out through our contact page and our team will put together a quote tailored to your school.',
  },
  {
    question: 'Can we customize the pillar calendar to fit our academic year?',
    answer: 'Yes — during onboarding, we work with your school to align the 9-month pillar calendar with your specific academic year and any existing values or themes your school already emphasizes.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Answers to the questions schools ask most before bringing MoralEd on board.</p>
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
        <h2>Still have questions?</h2>
        <a href="/contact" className="btn-primary">Talk to Our Team</a>
      </section>

      <Footer />
    </>
  );
}

export default FAQ;