// src/pages/MobileApp.js
import React from 'react';
import './style.css';
import Header from './header';
import { useNavigate } from 'react-router-dom';

const MobileApp = () => {
    const navigate = useNavigate();
    return (
        <div className="m-container">
            <Header />
            <div className="m-content">
                <h1 className="m-heading">
                    <span className="m-custom">CUSTOM</span> <br />
                    <span className="m-mobile">MOBILE APPLICATION DEVELOPMENT</span>
                </h1>
                <p className="m-paragraph">
                    At WHITE MATRIX, we specialize in developing custom mobile applications tailored to your needs. With a skilled team, we deliver:
                </p>
                <ul className="m-list">
                    <li>Customized Solutions: Tailored apps aligned with your goals.</li>
                    <li>Expertise: Experienced professionals for exceptional results.</li>
                    <li>Quality Assurance: Rigorous testing ensures reliability.</li>
                    <li>Client-Centric Approach: Your satisfaction is our priority.</li>
                </ul>
                <h2 className="m-subheading">Our Services</h2>
                <ul className="m-list">
                    <li>Mobile App Development: iOS, Android, or cross-platform solutions.</li>
                    <li>UI/UX Design: Visually appealing and intuitive interfaces.</li>
                    <li>Backend Development: Robust systems for scalability and security.</li>
                    <li>Maintenance and Support: Ongoing assistance post-launch.</li>
                </ul>

                <div className="m-button-container">
                    <button className="m-schedule-button" onClick={() => navigate("/schedule")}>Schedule a Conversation</button>
                </div>
            </div>
        </div>
    );
};

export default MobileApp;
