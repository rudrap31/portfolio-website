import React from 'react'

const Projects = ({ scrollProgress=scrollProgress }) => {
    const opacity = Math.max(0, scrollProgress * 2 - 2);
    return (
        <div className="projects" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none"
        }}>Projects

        </div>
  )
}

export default Projects