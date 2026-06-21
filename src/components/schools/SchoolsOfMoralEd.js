import React from 'react';
import './SchoolsOfMoralEd.css';

const schools = [
  {
    name: 'Cambridge Elementary, TX',
    summary: 'Implemented empathy circles and values-based classroom rituals.',
    image: '/images/cambridge.jpg',
    video: 'https://www.youtube.com/embed/LlCwHnp3kL4?si=eIrq6kRrinidvork',
  },
  {
    name: 'Sunrise Middle School, CA',
    summary: 'Led a student-led kindness campaign across the district.',
    image: '/images/sunrise.jpg',
    video: '',
  },
  {
    name: 'Harmony Science Academy, TX',
    summary: 'Integrated MoralEd modules into science and literature classes.',
    image: '/images/harmony.jpg',
    video: 'https://www.youtube.com/embed/r7R8ewU1Wqc?si=SuNNAvlH77IJWw6S',
  },
];

function SchoolsOfMoralEd() {
  return (
    <section className="schools-moraled">
      <h2>Schools of MoralEd</h2>
      <p>We proudly collaborate with schools that embed character into every aspect of learning.</p>
      <div className="school-grid">
        {schools.map((school, index) => (
          <div className="school-card" key={index}>
            <img src={school.image} alt={school.name} />
            <h3>{school.name}</h3>
            <p>{school.summary}</p>
            {school.video && (
              <div className="video-wrapper">
                <iframe src={school.video} title={school.name} frameBorder="0" allowFullScreen></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SchoolsOfMoralEd;
