import React from 'react';
import SlickSlider from 'react-slick';
import { useTranslation } from 'react-i18next';
import Picture from '../Picture';
import './GallerySlider.css';

const galleryItems = [
  { image: '/images/gallery1.jpg', captionKey: 'gallery.caption_1' },
  { image: '/images/gallery2.jpg', captionKey: 'gallery.caption_2' },
  { image: '/images/gallery3.jpg', captionKey: 'gallery.caption_3' },
  { image: '/images/gallery4.jpg', captionKey: 'gallery.caption_4' },
  { image: '/images/gallery5.jpg', captionKey: 'gallery.caption_5' },
];

// react-slick is CommonJS: in the production bundle the default import is its module object.
const Slider = SlickSlider.default ?? SlickSlider;

const GallerySlider = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="gallery-slider">
      <h2>{t('gallery.title')}</h2>
      <Slider {...settings}>
        {galleryItems.map((item, index) => (
          <div className="gallery-slide" key={index}>
            <Picture
              src={item.image}
              alt={t(item.captionKey)}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 300px"
            />
            <p>{t(item.captionKey)}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default GallerySlider;
