import React, { useState } from 'react';
import scenery1 from '../../assets/scenery1.jpeg';
import scenery2 from '../../assets/scenery2.jpeg';
import scenery3 from '../../assets/scenery3.jpeg';
import './ProjectsPage.css';

const slides = [
  {
    id: 1,
    title: 'Project 1',
    image: scenery1,
    link: 'project1link',
  },
  {
    id: 2,
    title: 'Project 2',
    image: scenery2,
    link: 'project2link',
  },
  {
    id: 3,
    title: 'Project 3',
    image: scenery3,
    link: 'project3link',
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === activeIndex ? 'active' : 'inactive'}`}
          onClick={() => handleClick(index)}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <h2>{slide.title}</h2>
          <a href={slide.link}>Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
