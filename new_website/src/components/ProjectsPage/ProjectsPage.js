import React, { useState } from 'react';
import scenery1 from '../../assets/scenery1.jpeg';
import scenery2 from '../../assets/scenery2.jpeg';
import scenery3 from '../../assets/scenery3.jpeg';
import './ProjectsPage.css';

const slides = [
  { id: 1, title: 'Project 1', image: scenery1, link: '#project1' },
  { id: 2, title: 'Project 2', image: scenery2, link: '#project2' },
  { id: 3, title: 'Project 3', image: scenery3, link: '#project3' },
];

const ProjectsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="project-page">
      <div className="slide-box">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`project-card stripe-${index + 1}`}>
            <img src={slide.image} alt={slide.title} />
            <div className="card-inner">
              <h2>{slide.title}</h2>
              <a href={slide.link}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
