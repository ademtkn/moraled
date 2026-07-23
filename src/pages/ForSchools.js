import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ForSchools.css';

const steps = [
  {
    number: '01',
    icon: 'fas fa-comments',
    title: 'Discovery Call',
    description: 'We start with a conversation about your school\'s goals, student population, and any existing character education efforts, so the program fits your context from day one.',
  },
  {
    number: '02',
    icon: 'fas fa-sliders-h',
    title: 'Program Customization',
    description: 'We align the 9-month pillar calendar with your academic year and language needs (English, Russian, or Kyrgyz), and adjust materials for your grade levels.',
  },
  {
    number: '03',
    icon: 'fas fa-chalkboard-teacher',
    title: 'Teacher Training',
    description: 'Before launch, your educators receive hands-on training on the curriculum, classroom activities, and how to track student progress each month.',
  },
  {
    number: '04',
    icon: 'fas fa-rocket',
    title: 'Classroom Launch',
    description: 'Your school begins the monthly pillar curriculum, supported by lesson plans, stories, songs, and interactive activities for every classroom.',
  },
  {
    number: '05',
    icon: 'fas fa-chart-line',
    title: 'Ongoing Support & Reporting',
    description: 'We check in regularly throughout the year and provide impact reports so you can see how students are progressing across each pillar.',
  },
];

function ForSchools() {
  return (
    <>
      <Header />
      <section className="for-schools-hero">
        <h1>Bringing MoralEd to Your School</h1>
        <p>
          A clear, supported path from first conversation to a fully running
          character education program in your classrooms.
        </p>
      </section>

      <section className="implementation-section">
        <div className="implementation-wrapper">
          <div className="implementation-steps">
            {steps.map((step) => (
              <div className="implementation-step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="for-schools-cta">
        <h2>Ready to bring MoralEd to your school?</h2>
        <p>Let's start with a conversation about your school's needs.</p>
        <a href="/contact" className="btn-primary">Talk to Our Team</a>
      </section>

      <Footer />
    </>
  );
}

export default ForSchools;