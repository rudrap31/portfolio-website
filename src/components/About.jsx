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
                            I’m a second-year Computer Science student at UBC, currently interning at yAI, a financial due diligence AI startup, where I’ve shipped full-stack features across the entire product.
                        </p>
                        <p>
                            I grew up in Alberta playing basketball, volleyball, and badminton. I once traveled to Hawaii for a volleyball tournament, and led a robotics team to the World Championship in Dallas, TX. These days I channel that same competitive drive into building software that actually gets used.
                        </p>
                        </div>


                        <div className="skills-section">
                            <h3>Technical Skills</h3>
                            <div className="skills-container">
                                {["TypeScript", "JavaScript", "Python", "Java", "C++", "React", "React Native", "Node.js", "FastAPI", "Flask", "PostgreSQL", "Supabase", "AWS", "Azure"].map((skill, index) => (
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