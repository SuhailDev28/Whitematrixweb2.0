import React, { useState } from 'react';
import Header from './header'; // Adjust the import path as needed
import emailjs from 'emailjs-com';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Career = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        expert: '',
        link: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            expert: formData.expert,
            link: formData.link
        };

        emailjs.send('service_sbuzg5c', 'template_zf1mnqa', emailParams, 'qdNgirAK0VHPX-yQL')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    expert: '',
                    link: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to submit the form.');
            });
    };

    return (
        <div className="c-container">
            <Header />
            <div className="c-text-content">
                <h1 className="c-heading">Career - Welcome to Our Team!</h1>
                <p className="c-paragraph">
                    Welcome to WHITE MATRIX! Join us in simplifying technology and driving innovation. Enjoy the flexibility of working from home while contributing to cutting-edge projects. Grow your skills in a collaborative environment that celebrates creativity and supports career development. Explore opportunities to be part of our forward-thinking team. Join us and make an impact.
                </p>
            </div>
            <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-form-field-row">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="c-input-field"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="c-input-field"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="c-form-field-row">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="c-input-field"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="c-input-field "
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    
                </div>
                <div className="c-form-field-row">
                    <input
                        type="text"
                        name="expert"
                        placeholder="Area Of Expertise"
                        className="c-input-field"
                        value={formData.expert}
                        onChange={handleChange}
                    />
                    <input
                        type="url"
                        name="link"
                        placeholder="URL to LinkedIn/CV"
                        className="c-input-field "
                        value={formData.link}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="c-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Career;
