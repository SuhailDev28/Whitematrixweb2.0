// src/pages/MobileApp.js
import React from 'react';
import './style.css';
import Header from './header';
import { useNavigate } from 'react-router-dom';

const AI = () => {
    const navigate = useNavigate();
    return (
        <div className="a-container">
            <Header />
            <div className="m-content">
                <h1 className="m-heading">
                    <span className="m-mobile">ARTIFICIAL INTELLIGENCE</span>
                </h1>
                <p className="a-paragraph">
                Introducing G Matrix, the cutting-edge generative AI developed by WHITE MATRIX, poised to revolutionize content creation. Built upon advanced generative algorithms, G Matrix autonomously crafts exclusive graphics and verbal content tailored to each user's preferences, making each piece unique and copyrightable. Currently in its development stage, G Matrix is continuously refined to ensure optimal performance. This groundbreaking technology offers investors a chance to shape the future of content generation, with its innovative approach, vast market potential, and the promise of a first-mover advantage. With an expert team driving its development, investing in G Matrix presents an unparalleled opportunity to tap into the burgeoning demand for personalized and original content. Join us today in unlocking the potential of AI-driven content creation. Contact us to learn more about this exciting investment opportunity.
                </p>
                <div className="a-button-container">
                    <div
                        className="a-gmatrix-text"
                        onClick={() => navigate("/schedule")}
                    >
                        <span className="a-gmatrix-g">G</span>MATRIX
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AI;
