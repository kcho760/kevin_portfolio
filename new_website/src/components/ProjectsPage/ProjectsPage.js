import React, { useState, useEffect } from 'react';
import scenery1 from '../../assets/scenery1.jpeg';
import scenery2 from '../../assets/scenery2.jpeg';
import scenery3 from '../../assets/scenery3.jpeg';
import scenery4 from '../../assets/scenery1.jpeg'; // Add images for slides 4-6
import scenery5 from '../../assets/scenery1.jpeg';
import scenery6 from '../../assets/scenery1.jpeg';
import './ProjectsPage.css';

const slides = [
  { id: 1, title: 'BlockBuzzNYC', image: scenery1, link: 'https://appetize.io/app/fabmjpjt7ndnscmhpfcttah4ou?device=pixel7pro&osVersion=14.0&location=40.7128%2C-74.0060' },
  { id: 2, title: 'Famcart', image: scenery2, link: 'https://appetize.io/app/qsiqoj3emdlk2dyckfjoa56ctq?device=pixel7pro&osVersion=13.0' },
  { id: 3, title: 'WelcomeTable', image: scenery3, link: 'https://welcometable.onrender.com/' },
  { id: 4, title: 'My App Academy Heroes', image: scenery1, link: 'https://my-app-academy-heroes-zer2.onrender.com/login' }, // Re-enable slide 4
  { id: 5, title: 'Finish That Lyric', image: scenery2, link: 'https://kcho760.github.io/Finish-that-lyric/' }, // Re-enable slide 5
  { id: 6, title: 'Your New Project', image: scenery3, link: 'https://your-new-project-link.com' }, // Re-enable slide 6
];

const ProjectsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = slides.length;
  const [translateZValue, setTranslateZValue] = useState(0);

  useEffect(() => {
    const angle = (2 * Math.PI) / slideCount;
    const slideWidth = 300; // Example slide width, adjust to your actual size
    const radius = slideWidth / (2 * Math.tan(Math.PI / slideCount));
    setTranslateZValue(-Math.abs(radius));
  }, [slideCount]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideCount);
    // Update the carousel rotation based on the active slide
    const carouselRotation = 360 / slideCount;
    const newTransform = `rotateY(${activeSlide * -carouselRotation}deg)`;
    document.querySelector('.carousel').style.transform = newTransform;
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
    // Update the carousel rotation based on the active slide
    const carouselRotation = 360 / slideCount;
    const newTransform = `rotateY(${activeSlide * -carouselRotation}deg)`;
    document.querySelector('.carousel').style.transform = newTransform;
  };
  
  const carouselRotation = 360 / slideCount;

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `rotateY(${activeSlide * -carouselRotation}deg)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="carousel-slide"
            style={{ transform: `rotateY(${index * carouselRotation}deg) translateZ(${translateZValue}px)` }}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="card-inner">
              <h2>{slide.title}</h2>
              <a href={slide.link}>Check it Out</a>
            </div>
          </div>
        ))}
      </div>
      <button className="control-btn left" onClick={prevSlide}>&lt;</button>
      <button className="control-btn right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default ProjectsPage;
