import React from 'react'

const About = ({ scrollProgress=scrollProgress }) => {
    const opacity = Math.max(0, scrollProgress * 2 - 1);
    return (
        <div className="about" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none",
            position: "fixed", 
            top: "40%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            fontSize: "2rem", 
            color: "white"
        }}>About

        </div>
  )
}

export default About