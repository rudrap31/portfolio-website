import React, { useState, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = ({ scrollProgress=scrollProgress }) => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const opacity = Math.min(1, Math.max(0, (scrollProgress - 2.25) * (1/0.15)));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await emailjs.sendForm(
                'service_j5w2i7a', // Replace with your EmailJS service ID
                'template_7wza81s', // Replace with your EmailJS template ID
                form.current,
                'j0lyTj2kzFvhL6d2I' // Replace with your EmailJS public key
            );
            
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            // Reset form status after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            
            // Reset error status after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const getSubmitButtonText = () => {
        switch (status) {
            case 'loading':
                return 'Sending...';
            case 'success':
                return 'Message Sent!';
            case 'error':
                return 'Failed to Send';
            default:
                return 'Send Message';
        }
    };

    return (
        <div className="contact" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none"
        }}>
            <div className="contact-content">
                <h2>Get In Touch</h2>
                <p className="contact-description">
                    Feel free to reach out! Whether you want to discuss a project, ask a question, 
                    or just say hello, I'd love to hear from you.
                </p>

                <div className="contact-grid">
                    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className={`submit-btn ${status}`}
                            disabled={status === 'loading'}
                        >
                            {getSubmitButtonText()}
                        </button>
                    </form>

                    <div className="contact-info">
                        <div className="contact-methods">
                            <a href="mailto:3rudrap1@gmail.com" className="contact-method">
                                <FaEnvelope />
                                <span>3rudrap1@gmail.com</span>
                            </a>
                            <a href="https://linkedin.com/in/rudrap31" className="contact-method" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/rudrap31" className="contact-method" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;