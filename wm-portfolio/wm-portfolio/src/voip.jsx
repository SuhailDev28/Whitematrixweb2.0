import React from 'react';
import './style.css';
import Header from './header';

const Voip = () => {
    return (
        <div className="v-container">
            <Header />
            <div className="m-content">
                <h1 className="m-heading">
                    <span className="m-custom">WHITE LINE</span> <br />
                    <span className="m-mobile">OFFSHORE CALLCENTRE</span>
                </h1>
                <div className="m-paragraph">
                    <p>Welcome to White Line Call Centre: Your Gateway to Efficient Customer Support. We offer affordable offshore call centre solutions tailored for businesses like yours.</p>

                    <h3>Why Choose White Line Call Centre?</h3>
                    <ul>
                        <li>Cost-Effective: High-quality services at unbeatable prices.</li>
                        <li>Global Reach: Expertise in setting up offshore call centres worldwide.</li>
                        <li>24/7 Support: Round-the-clock assistance across time zones.</li>
                        <li>Tailored Solutions: Customized services to meet your needs.</li>
                    </ul>

                    <h3>Our Services:</h3>
                    <ul>
                        <li>Call Centre Setup: Seamless transition to your new offshore call centre.</li>
                        <li>Multilingual Support: Break language barriers with our diverse language support.</li>
                        <li>24/7 Customer Support: Keep your business running smoothly at all times.</li>
                        <li>Quality Assurance: Ensure consistent, high-quality service delivery.</li>
                    </ul>

                    <div className="m-button-container">
                        <a className="m-know-button" href='https://sweetysara.github.io/whiteline/'>Know More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Voip;
