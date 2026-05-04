import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ scrollProgress=scrollProgress }) => {
    const opacity = Math.min(1, Math.max(0, (scrollProgress - 2.25) * (1/0.15)));

    return (
        <div className="contact" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none"
        }}>
            <div className="contact-content">
                <h2>Let's Connect</h2>
                <p className="contact-description">
                    I'm always open to new opportunities and conversations.
                </p>

                <div className="contact-links">
                    <a href="mailto:3rudrap1@gmail.com" className="contact-link-card">
                        <FaEnvelope />
                        <span>3rudrap1@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com/in/rudrap31" className="contact-link-card" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/rudrap31" className="contact-link-card" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
