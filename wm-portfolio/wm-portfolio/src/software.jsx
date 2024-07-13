// src/pages/Software.js
import React from 'react';
import './style.css';
import Header from './header';
import { useNavigate } from 'react-router-dom';

const Software = () => {
    const navigate = useNavigate();

    return (
        <div className="s-container">
            <Header />
            <div className="m-content">
                <h1 className="m-heading">
                    <span className="m-custom">CUSTOM   </span>
                    <span className="m-mobile">SOFTWARE DEVELOPMENT</span>
                </h1>
                <p className="m-paragraph">
                    At WHITE MATRIX, we craft custom software solutions tailored to your needs.
                </p>
                <h2 className="m-subheading">Our Approach</h2>
                <ul className="m-list">
                    <li>Personalized development for unique business needs.</li>
                    <li>Collaboration with startups, SMEs, and enterprises.</li>
                </ul>
                <h2 className="m-subheading">Why Choose Us</h2>
                <ul className="m-list">
                    <li>Customization: Software that fits your business perfectly.</li>
                    <li>Quality Assurance: Rigorous testing for reliability and security.</li>
                    <li>Customer-Centric: Open communication and involvement.</li>
                </ul>
                <h2 className="m-subheading">Our Services</h2>
                <ul className="m-list">
                    <li>Custom Software Development: Web and mobile applications.</li>
                    <li>UI/UX Design: Intuitive, user-friendly interfaces.</li>
                </ul>

                <div className="m-button-container">
                    <button className="m-schedule-button" onClick={() => navigate("/schedule")}>Schedule a Conversation</button>
                </div>
            </div>
        </div>
    );
};

export default Software;
