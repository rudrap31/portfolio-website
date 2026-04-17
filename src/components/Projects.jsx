import { FiExternalLink } from 'react-icons/fi';

const projectData = [
  {
    title: "SimplySkin",
    description: "A mobile skincare app that uses AI to help users understand their skin and make better product choices. Live on the Apple App Store with a real and growing user base.",
    technologies: ["React Native", "Expo", "Supabase", "Express.js"],
    link: "https://apps.apple.com/ca/app/simplyskin-ai-skincare/id6751350480",
    image: "imgs/SimplySkinScreenshot.png"
  },
  {
    title: "Bookmarked — nwHacks 2026",
    description: "A BookTok app where you share TikTok videos to build your reading list. It extracts every book mentioned, finds real-time availability at nearby libraries, and recommends books based on your taste.",
    technologies: ["React Native", "Python", "Supabase", "Gemini API"],
    link: "https://devpost.com/software/bookmarked-7srimw",
    image: "imgs/bookmarked.png"
  },
  {
    title: "Sentiment Trading Bot",
    description: "A bot that reads financial news headlines and makes automated trading decisions based on sentiment analysis, with a React dashboard for portfolio analytics.",
    technologies: ["React", "Flask", "Python"],
    link: "https://github.com/rudrap31/sentiment-trading",
    image: "imgs/portfolio-screenshot.png"
  }
];

const Projects = ({ scrollProgress }) => {
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 1.5) * (1/0.15))) *
                 Math.min(1, Math.max(0, (2.25 - scrollProgress) * (1/0.15)));

  return (
    <div className="projects-section" style={{
      opacity: opacity,
      pointerEvents: opacity > 0 ? "auto" : "none"
    }}>
      <div className="exp-projects-container">

        {/* Experience */}
        <div className="section-block">
          <h2 className="section-label">Experience</h2>
          <div className="experience-card">
            <a href="https://www.linkedin.com/company/whyaitech/" target="_blank" rel="noopener noreferrer">
              <img src="imgs/whyaitech_logo.jpeg" className="exp-logo" alt="yAI" />
            </a>
            <div className="exp-details">
              <div className="exp-header">
                <h3><a href="https://www.linkedin.com/company/whyaitech/" className="exp-company-link" target="_blank" rel="noopener noreferrer">Software Engineering Intern — <span className="exp-company-inline">yAI</span></a></h3>
                <span className="exp-date">Oct 2025 – Present</span>
              </div>
              <p>Building full-stack features for an AI-powered financial due diligence platform, including analytics dashboards, RAG pipelines, document citations, workflows, chat interfaces, CI/CD pipelines, and 2,000+ automated tests.</p>
              <div className="technologies">
                {["TypeScript", "React", "FastAPI", "PostgreSQL", "Azure", "Playwright"].map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="experience-card" style={{ marginTop: '1rem' }}>
            <img src="imgs/motion_logo.png" className="exp-logo" alt="Motion UBC" />
            <div className="exp-details">
              <div className="exp-header">
                <h3>Software Developer — <span className="exp-company-inline">Motion UBC</span></h3>
                <span className="exp-date">Oct 2025 – Present</span>
              </div>
              <p>Member of a student-led initiative dedicated to providing pro-bono services to local nonprofits. Building a web and mobile platform for United We Can, a Vancouver nonprofit, streamlining driver scheduling and request tracking.</p>
              <div className="technologies">
                {["Next.js", "React Native", "PostgreSQL", "Supabase", "Firebase"].map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="section-block">
          <h2 className="section-label">Projects</h2>
          <div className="projects-grid">
            {projectData.map((project, index) => {
              const cardContent = (
                <>
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-card-image" />
                  </div>
                  <div className="project-card-body">
                    <div className="project-mini-header">
                      <h4>{project.title}</h4>
                      {project.link && <FiExternalLink size={15} />}
                    </div>
                    <p>{project.description}</p>
                  </div>
                </>
              );
              return project.link
                ? <a href={project.link} key={index} className="project-mini-card" target="_blank" rel="noopener noreferrer">{cardContent}</a>
                : <div key={index} className="project-mini-card">{cardContent}</div>;
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
