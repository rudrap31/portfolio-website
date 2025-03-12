import { useEffect, useRef } from "react";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Socials from "./Socials";

const Typing = () => {
    return (
      <TypeAnimation
        sequence={[
          'software engineer', 
          1000, // Waits 1s
          'ubc student', 
          1000, // Waits 1s
          'travel enthusiast',
          1000
          ]}
        speed={10}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className = "typing"
      />
    );
  };

const Landing = ({ scrollProgress }) => {
    const opacity = Math.max(0, Math.min(1, 1 - ((scrollProgress - 0.6) * (1/0.15))));
    return (
        <div className="landing" style={{
            opacity: opacity,
            pointerEvents: opacity > 0 ? "auto" : "none"
        }}>
            <div className="line-container">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="landing-info">
                <h3 className="landing-text">hey, I'm</h3>
                <h1 className="name">
                    RUDRA <span className="lastname">PATEL</span>
                </h1>
                <Typing />
                <Socials />
            </div>
        </div>
    );
};

export default Landing;
