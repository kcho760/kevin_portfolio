import React, { useState } from 'react';
import { motion } from 'framer-motion';
import coffeeIdle from '../../assets/Coffee_Idle.png'; // Adjust the import path as needed
import coffeeFilling from '../../assets/Coffee_Filling.gif'; // Adjust the import path as needed

function WelcomePage() {
    const [coffeeImage, setCoffeeImage] = useState(coffeeIdle); // Start with the idle image

    const handleClick = () => {
        setCoffeeImage(coffeeFilling); // Change to the filling gif on click

        // Revert back to the idle image after 2 seconds
        setTimeout(() => {
            setCoffeeImage(coffeeIdle);
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="welcome-content"
        >
            <div className="welcome-content">
                <h1>Welcome to Kevin's Portfolio</h1>
                <p>Android/Web Developer</p>
                <div className="coffee_pot" >
                    <img src={coffeeImage} alt="Coffee Cup" onClick={handleClick} className="coffee-image" />
                    <p>Click to get me more Coffee!</p>
                </div>
            </div>
        </motion.div>
    );
}

export default WelcomePage;
