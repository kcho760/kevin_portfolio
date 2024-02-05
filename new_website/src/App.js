// Import BrowserRouter, Routes, and Route from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AboutPage from './components/AboutPage/AboutPage'; // Import the AboutPage component
import ProjectsPage from './components/ProjectsPage/ProjectsPage'; // Import the ProjectsPage component
import ContactPage from './components/ContactPage/ContactPage'; // Import the ContactPage component
import './App.css';

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <Router>
      <div className="App">
        {!animationCompleted ? (
          <HomePage onAnimationComplete={() => setAnimationCompleted(true)} />
        ) : (
          <>
            <Navbar />
            <div className="main-content">
              {/* Use Routes to define Route components */}
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                {/* Define a route for the About page */}
                <Route path="/about" element={<AboutPage />} />
                {/* Define a route for the Projects page */}
                <Route path="/projects" element={<ProjectsPage />} />
                {/* Define a route for the Contact page */}
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
