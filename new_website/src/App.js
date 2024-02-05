import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import './App.css';

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <div className="App">
      {!animationCompleted ? (
        <HomePage onAnimationComplete={() => setAnimationCompleted(true)} />
      ) : (
        <>
          <Navbar />
          <div className="main-content">
            <WelcomePage />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
