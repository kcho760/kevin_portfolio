import './NavBar.css';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <motion.nav className="navbar" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ul>
        <li className="nav-item home-item">
          <Link to="/">Home</Link> {/* Use Link component to navigate to the Home page */}
        </li>
        <li className="nav-item about-item">
          <Link to="/about">About</Link> {/* Use Link component to navigate to the About page */}
        </li>
        <li className="nav-item projects-item">
          <Link to="/projects">Projects</Link> {/* Use Link component to navigate to the Projects page */}
        </li>
        <li className="nav-item contact-item">
          <Link to="/contact">Contact</Link> {/* Use Link component to navigate to the Contact page */}
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
