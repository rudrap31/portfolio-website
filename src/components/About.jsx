import React from 'react'

const About = ({ scrollProgress=scrollProgress }) => {
    const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.75) * (1/0.15))) * 
                   Math.min(1, Math.max(0, (1.5 - scrollProgress) * (1/0.15)));
                   // Fade in: 0.75 to 0.9 
                   // Full opacity: 0.9 to 1.35
                   // Fade out: 1.35 to 1.5
    return (
        <div className="about" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none",
        }}>
            <div className="about-content">
                <h2 className="about-title">About Me</h2>
                
                <div className="about-grid">
                    <div className="about-text">
                        <div className="about-section">
                            <p>
                                Hello! I'm a first-year student at the University of British Columbia, where I am currently pursuing a Bachelor of Science.  
                                Originally from Alberta, I have always played sports such as basketball, volleyball, and badminton.
                            </p>
                            <p>
                                A fun fact about me— I once got the opportunity to travel to Hawaii for a volleyball 
                                tournament, which was an unforgettable experience! I also have done competitive robotics, getting provincial placements and also
                                the opportunity to travel to Dallas, TX for the Robotics World Championship.
                            </p>
                        </div>

                        <div className="about-section">
                            <p>
                                I'm also deeply interested in technology and problem-solving. Coding has become 
                                one of my favorite ways to challenge myself, and I enjoy building creative solutions 
                                to complex problems. I'm always looking to learn new things and improve my skills.
                            </p>
                        </div>

                        <div className="skills-section">
                            <h3>Technical Skills</h3>
                            <div className="skills-container">
                                {["JavaScript", "Python", "Java", "Racket", "HTML", "CSS"].map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-image">
                        <img src="imgs/my_photo.jpg" alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About