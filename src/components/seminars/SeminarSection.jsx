import React from 'react';
import { useTranslation } from 'react-i18next';
import './SeminarSection.css';

const seminars = [
  {
    titleKey: 'seminars.video_1_title',
    source: 'Smile and Learn',
    watchUrl: 'https://www.youtube.com/watch?v=yiKeLOKc1tw',
    video: 'https://www.youtube.com/embed/yiKeLOKc1tw?si=EJTmwCxBpDP8YfdT',
    descriptionKey: 'seminars.video_1_desc',
  },
  {
    titleKey: 'seminars.video_2_title',
    source: 'Twinkl Teaching Resources',
    watchUrl: 'https://www.youtube.com/watch?v=JTl211YlFzc',
    video: 'https://www.youtube.com/embed/JTl211YlFzc?si=laAo2JWcsyFnOGdF',
    descriptionKey: 'seminars.video_2_desc',
  },
  {
    titleKey: 'seminars.video_3_title',
    source: 'eSafety Office',
    watchUrl: 'https://www.youtube.com/watch?v=Twael58dL1s',
    video: 'https://www.youtube.com/embed/Twael58dL1s?si=9U_i9LBT-7vSL8y1',
    descriptionKey: 'seminars.video_3_desc',
  },
];

const SeminarSection = () => {
  const { t } = useTranslation();
  return (
    <section className="seminar-section">
      <h2>{t('seminars.title')}</h2>
      <p className="seminar-section-intro">
        {t('seminars.intro')}
      </p>
      <div className="seminar-grid">
        {seminars.map((seminar, index) => (
          <div className="seminar-card" key={index}>
            <div className="video-wrapper">
              <iframe
                src={seminar.video}
                title={t(seminar.titleKey)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{t(seminar.titleKey)}</h3>
            <p className="seminar-card-source">{t('seminars.source_label', { name: seminar.source })}</p>
            <p>{t(seminar.descriptionKey)}</p>
            <a href={seminar.watchUrl} className="seminar-watch-link" target="_blank" rel="noreferrer">
              {t('seminars.watch_label')} <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeminarSection;
