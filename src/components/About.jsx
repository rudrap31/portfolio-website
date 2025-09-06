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
                            Hello! I'm a second-year Computer Science student at the University of British Columbia, pursuing a Bachelor of Science.  
                            I grew up in Alberta, where I enjoyed playing sports like basketball, volleyball, and badminton.  
                        </p>
                        <p>
                            A fun fact about me, I once had the chance to travel to Hawaii for a volleyball tournament, which was an unforgettable experience!  
                            I’ve also competed in robotics at a provincial level and had the opportunity to represent my team at the Robotics World Championship in Dallas, TX.  
                        </p>
                        </div>

                        <div className="about-section">
                            <p>
                                Beyond sports and robotics, I’m passionate about technology and problem-solving. Coding has become one of my favorite ways to challenge myself, and I love building creative solutions to real-world problems.  
                                I’m always eager to keep learning, improving my skills, and collaborating with others on exciting projects.  
                            </p>
                        </div>


                        <div className="skills-section">
                            <h3>Technical Skills</h3>
                            <div className="skills-container">
                                {["JavaScript", "Python", "Java", "Racket", "HTML", "CSS", "C++"].map((skill, index) => (
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