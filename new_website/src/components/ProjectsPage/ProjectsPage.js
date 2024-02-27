import React, { useState } from 'react';
import scenery1 from '../../assets/scenery1.jpeg';
import scenery2 from '../../assets/scenery2.jpeg';
import scenery3 from '../../assets/scenery3.jpeg';
import './ProjectsPage.css'; // Ensure this CSS file includes the styles provided below

const slides = [
  { id: 1, title: 'Project 1', image: scenery1, link: '#project1' },
  { id: 2, title: 'Project 2', image: scenery2, link: '#project2' },
  { id: 3, title: 'Project 3', image: scenery3, link: '#project3' },
];

const ProjectsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = slides.length;

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);

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
            style={{ transform: `rotateY(${index * carouselRotation}deg) translateZ(500px)` }}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="card-inner">
              <h2>{slide.title}</h2>
              <a href={slide.link}>Learn More</a>
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
