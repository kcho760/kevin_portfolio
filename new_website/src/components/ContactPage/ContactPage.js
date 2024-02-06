import React from 'react';

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;
