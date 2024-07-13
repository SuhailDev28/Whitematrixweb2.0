import React, { useState } from 'react';
import './style.css';
import Header from './header'; // Adjust the import path as needed
import emailjs from 'emailjs-com';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Schedule = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: ''
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
            date: formData.date,
            time: formData.time,
            notes: formData.notes
        };

        emailjs.send('service_sbuzg5c', 'template_ydj6iyt', emailParams, 'qdNgirAK0VHPX-yQL')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    date: '',
                    time: ''
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
                <h1 className="c-heading">Schedule a Meeting with Us!</h1>
                <p className="c-paragraph">
                    Welcome to WHITE MATRIX! We are excited to connect with you. Please fill out the form below to schedule a meeting. Our team is looking forward to discussing how we can collaborate and achieve great results together.
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
                        className="c-input-field "
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
                        type="date"
                        name="date"
                        className="c-input-field "
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <input
                        type="time"
                        name="time"
                        className="c-input-field"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="c-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Schedule;
