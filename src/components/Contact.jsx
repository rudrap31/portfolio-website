import React from 'react'

const Contact = ({ scrollProgress=scrollProgress }) => {
    const opacity = Math.max(0, scrollProgress * 2 - 3);
    return (
        <div className="contact" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none"
        }}>Contact

        </div>
  )
}

export default Contact