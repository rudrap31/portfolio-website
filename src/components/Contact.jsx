import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { stageOpacity } from './stages';

const EMAIL = "3rudrap1@gmail.com";

const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/rudrap31", icon: <FaLinkedin /> },
    { label: "GitHub", href: "https://github.com/rudrap31", icon: <FaGithub /> },
    { label: "Resume", href: "/resume.pdf", icon: <FaFileAlt /> },
];

const Contact = ({ scrollProgress }) => {
    const opacity = stageOpacity(scrollProgress, 'contact');
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <div className="contact" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none"
        }}>
            <div className="contact-content">
                <h2>Let's Connect</h2>
                <p className="contact-description">
                    I'm open to internship opportunities and always happy to chat about what you're building.
                </p>

                <div className="contact-email">
                    <a href={`mailto:${EMAIL}`} className="contact-email-link">
                        <span className="contact-email-icon"><FaEnvelope /></span>
                        <span className="contact-email-text">
                            <span className="contact-email-label">Email me</span>
                            <span className="contact-email-address">{EMAIL}</span>
                        </span>
                    </a>
                    <button type="button" className="contact-copy" onClick={copyEmail} aria-label="Copy email address">
                        {copied ? <><FiCheck /> Copied</> : <><FiCopy /> Copy</>}
                    </button>
                </div>

                <div className="contact-links">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} className="contact-tile" target="_blank" rel="noopener noreferrer">
                            <span className="contact-tile-icon">{l.icon}</span>
                            <span>{l.label}</span>
                            <FiArrowUpRight className="contact-tile-arrow" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
