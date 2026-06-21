import React from 'react';
import './SeminarSection.css';

const seminars = [
  {
    title: 'Designing Values-Based Lessons',
    video: 'https://www.youtube.com/embed/yiKeLOKc1tw?si=EJTmwCxBpDP8YfdT',
    description: 'Learn how to embed character into daily lesson plans with practical strategies.',
  },
  {
    title: 'Facilitating Character Dialogues',
    video: 'https://www.youtube.com/embed/JTl211YlFzc?si=laAo2JWcsyFnOGdF',
    description: 'Explore techniques for leading meaningful conversations around values and empathy.',
  },
  {
    title: 'Measuring Moral Growth',
    video: 'https://www.youtube.com/embed/Twael58dL1s?si=9U_i9LBT-7vSL8y1',
    description: 'Discover tools to assess student development in ethical thinking and behavior.',
  },
];

const SeminarSection = () => {
  return (
    <section className="seminar-section">
      <h2>Educator Seminars</h2>
      <div className="seminar-grid">
        {seminars.map((seminar, index) => (
          <div className="seminar-card" key={index}>
            <div className="video-wrapper">
              <iframe
                src={seminar.video}
                title={seminar.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{seminar.title}</h3>
            <p>{seminar.description}</p>
          </div>
        ))}
      </div>
      <div className="seminar-actions">
        <a href="/seminars/register" className="seminar-btn">📋 Register</a>
        <a href="/seminars/verify" className="seminar-btn">🎓 Verify Certificate</a>
      </div>
    </section>
  );
};

export default SeminarSection;
