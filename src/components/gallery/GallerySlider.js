import React from 'react';
import Slider from 'react-slick';
import './GallerySlider.css';

const galleryItems = [
  { image: '/images/gallery1.jpg', caption: 'Educator training in Bishkek' },
  { image: '/images/gallery2.jpg', caption: 'Character circle at partner school' },
  { image: '/images/gallery3.jpg', caption: 'Student-led empathy project' },
  { image: '/images/gallery4.jpg', caption: 'Seminar on values-based teaching' },
  { image: '/images/gallery5.jpg', caption: 'Interactive classroom activity' },
];

const GallerySlider = () => {
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
      <h2>Moments That Matter</h2>
      <Slider {...settings}>
        {galleryItems.map((item, index) => (
          <div className="gallery-slide" key={index}>
            <img src={item.image} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default GallerySlider;
