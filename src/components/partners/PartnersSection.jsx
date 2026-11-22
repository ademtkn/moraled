import React from 'react';
import { useTranslation } from 'react-i18next';
import Picture from '../Picture';
import './PartnersSection.css';

const schoolPartners = [
  { name: 'Indigo Prime Academy', logo: '/logos/indigo-prime.jpg' },
  { name: 'Indigo Sapat', logo: '/logos/indigo-sapat.jpg' },
  { name: "Indigo Asylkech Girls' School", logo: '/logos/indigo-asylkech.jpg' },
  { name: 'Indigo Academy', logo: '/logos/indigo-academy.jpg' },
];

// The track is two identical halves and scrolls by exactly one half for a seamless loop.
// Each half must be wider than the screen, so repeat the list until it holds enough cards.
const MIN_CARDS_PER_HALF = 9;
const SECONDS_PER_CARD = 5;

function PartnersSection() {
  const { t } = useTranslation();
  const setsPerHalf = Math.max(1, Math.ceil(MIN_CARDS_PER_HALF / schoolPartners.length));
  const track = Array.from({ length: setsPerHalf * 2 }, () => schoolPartners).flat();
  const duration = setsPerHalf * schoolPartners.length * SECONDS_PER_CARD;

  return (
    <section className="partners-carousel-section hx">
      <h2>{t('partners.title')}</h2>
      <p className="carousel-subtitle">
        {t('partners.subtitle')}
      </p>
      <div className="partners-carousel-container">
        <div className="partners-carousel" style={{ animationDuration: `${duration}s` }}>
          {track.map((partner, index) => (
            <div className="partner-logo-card" key={index}>
              <Picture src={partner.logo} alt={partner.name} sizes="160px" loading="eager" />
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
