// src/components/WelcomePage/WelcomePage.js

import React from 'react';
import { motion } from 'framer-motion';

function WelcomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="welcome-content"
    >
      <h1>Welcome to My Portfolio</h1>
      <p>This content fades in once the homepage animations are done.</p>
    </motion.div>
  );
}

export default WelcomePage;
