import './NavBar.css'
import React from 'react';
import { motion } from 'framer-motion';
function Navbar() {
  return (
    <motion.nav className="navbar" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Navbar content here */}
      <ul>
        <li className="nav-item home-item"><a href="#home">Home</a></li>
        <li className="nav-item about-item"><a href="#about">About</a></li>
        <li className="nav-item projects-item"><a href="#projects">Projects</a></li>
        <li className="nav-item contact-item"><a href="#contact">Contact</a></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
