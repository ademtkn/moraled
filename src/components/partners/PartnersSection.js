import React from 'react';
import './PartnersSection.css';

const schoolPartners = [
  { name: 'Asykech Girls School', logo: '/logos/asykech-girls.svg' },
  { name: 'Indigo Sapat Primary', logo: '/logos/indigo-sapat.svg' },
  { name: 'KEF Foundation', logo: '/logos/kef.png' },
  { name: 'YCI Network', logo: '/logos/yci.png' },
  { name: 'EduBridge', logo: '/logos/edubridge.png' },
  { name: 'Bishkek International School', logo: '/logos/bis.svg' },
  { name: 'Ala-Too Academy', logo: '/logos/ala-too.svg' },
];

function PartnersSection() {
  // Duplicate array for seamless infinite scroll
  const duplicatedPartners = [...schoolPartners, ...schoolPartners];

  return (
    <section className="partners-carousel-section">
      <h2>Partner Schools & Organizations</h2>
      <p className="carousel-subtitle">
        Growing values together across Kyrgyzstan and beyond.
      </p>
      <div className="partners-carousel-container">
        <div className="partners-carousel">
          {duplicatedPartners.map((partner, index) => (
            <div className="partner-logo-card" key={index}>
              <img src={partner.logo} alt={partner.name} />
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
