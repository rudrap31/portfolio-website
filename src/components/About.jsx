import { stageOpacity } from './stages';

const About = ({ scrollProgress }) => {
    const opacity = stageOpacity(scrollProgress, 'about');

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
                            I’m a Computer Science student at UBC. I previously interned at yAI, a financial due diligence AI startup, where I shipped full-stack features across the entire product.
                        </p>
                        <p>
                            I love building software that people actually use, from a skincare app on the App Store to a daily Google Trends guessing game and a macOS aquarium that visualizes your system activity. Right now I’m building infrastructure for UBC Esports.
                        </p>
                        </div>


                        <div className="skills-section">
                            <h3>Technical Skills</h3>
                            <div className="skills-container">
                                {["TypeScript", "Python", "Java", "Swift", "Go", "C++", "SQL", "React", "Next.js", "React Native", "Node.js", "FastAPI", "PyTorch", "PostgreSQL", "Redis", "Docker", "AWS", "Azure"].map((skill, index) => (
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