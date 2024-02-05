import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';

function HomePage({ onAnimationComplete }) {
  const [triggered, setTriggered] = useState(false);

  // Automatically start the panel animation when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggered(true);
    }, 500); // Delay before starting the animation

    return () => clearTimeout(timer);
  }, []);

  const handleNameAnimationComplete = () => {
    onAnimationComplete();
  };

  return (
    <div className="container">
      <motion.div
        className="triangle top-triangle"
        initial={{ x: 0, y: 0 }}
        animate={{ x: triggered ? '50vw' : '0vw', y: triggered ? '-50vh' : '0vh' }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="triangle bottom-triangle"
        initial={{ x: 0, y: 0 }}
        animate={{ x: triggered ? '-50vw' : '0vw', y: triggered ? '50vh' : '0vh' }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="name"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        onAnimationComplete={handleNameAnimationComplete}
      >
        Kevin Cho
      </motion.div>
    </div>
  );
}

export default HomePage;
