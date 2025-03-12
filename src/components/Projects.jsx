import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const projectData = [
  {
    title: "Sentiment Based Trading Bot",
    description: "This bot automates trading decisions by analyzing financial news headlines. Using a combination of web scraping, sentiment analysis, and real-time data APIs, it determines whether to buy or short stocks. The backend is built with Flask, while the React-based frontend visualizes portfolio performance and trade history. Automation is handled via GitHub Actions to ensure continuous updates",
    image: "imgs/portfolio-screenshot.png",
    technologies: ["React", "Flask", "Python"],
    link: "https://github.com/rudrap31/sentiment-trading"
  },
  {
    title: "Real Time Chat App",
    description: "A chat application built using MongoDB, Express.js, React, Node.js and Socket.io. Users can sign up / log in using JWT for authentication, send/receive messages in real-time, search for users and see which users are currently online. The frontend is styled using Tailwind CSS and DaisyUI.",
    image: "imgs/chat-screenshot.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    link: "https://github.com/rudrap31/chat-app"
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "/project3.jpg",
    technologies: ["Vue.js", "Firebase"],
    link: "https://github.com/yourusername/project3"
  }
];

const Projects = ({ scrollProgress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 1.5) * (1/0.15))) *
                 Math.min(1, Math.max(0, (2.25 - scrollProgress) * (1/0.15)));
                // Fade in: 1.5 to 1.65
                // Full opacity: 1.65 to 2.1
                // Fade out: 2.1 to 2.25

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-section" style={{
      opacity: opacity,
      pointerEvents: opacity > 0 ? "auto" : "none"
    }}>
      <h2>Projects</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <div className="carousel">
          <div className="carousel-track" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
            {projectData.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <a href={project.link} >{project.title}</a>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Projects;