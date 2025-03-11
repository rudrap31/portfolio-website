import React from 'react'

const About = ({ scrollProgress=scrollProgress }) => {
    const opacity = Math.max(0, 1.5 - Math.abs(scrollProgress - 1) * 2);
    return (
        <div className="about" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none",
           
        }}>
            <div className="about-section">
            <h2>About Me</h2>
            <div className="top-about">
            <p>
                Hello! I'm a first-year student at the University of British Columbia, where I am currently pursuing a Bachelor of Science.  
                Originally from Alberta, I have always played sports such as, basketball, volleyball, and badminton. 
                A fun fact about me— I once got the opportunity to travel to Hawaii for a volleyball 
                tournament, which was an unforgettable experience! I also have done competitve robotices, getting provinical placements and also
                the opportunity to travel to Dallas, TX for the Robotics World Championship.
            </p>
            <img src="imgs/F90FA541-731C-4CA9-82A2-EBB35FEC7B09_4_5005_c.jpeg"></img>
            </div>
            <p>
                Outside of sports, I have a strong passion for traveling. I love exploring new 
                places, experiencing different cultures, and seeing how people live around the world. 
                Whether it's a road trip or an overseas adventure, I find joy in discovering new 
                environments and perspectives.
            </p>
            <p>
                I'm also deeply interested in technology and problem-solving. Coding has become 
                one of my favorite ways to challenge myself, and I enjoy building creative solutions 
                to complex problems. I'm always looking to learn new things and improve my skills.
            </p>
            <p>
                <strong>Languages I've Used:</strong> JavaScript, Python, Java, Racket, HTML, CSS.
            </p>
        </div>

        </div>
  )
}

export default About