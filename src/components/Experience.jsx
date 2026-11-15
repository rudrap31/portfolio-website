import { stageOpacity } from './stages';

const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "yAI",
    companyLink: "https://www.linkedin.com/company/whyaitech/",
    logo: "imgs/whyaitech_logo.jpeg",
    date: "Oct 2025 – Apr 2026",
    location: "Remote",
    bullets: [
      <>Shipped full-stack features (chat, workflows, citations) for an AI-powered financial due diligence platform.</>,
      <>Improved RAG retrieval accuracy by <strong>68%</strong> on a FinanceBench eval harness I built, using hybrid BM25 + vector search, RRF, and cross-encoder reranking.</>,
      <>Wrote <strong>2,000+</strong> automated tests and built an agentic CI/CD Slack bot that opens PRs to fix failing builds.</>,
      <>Built an admin analytics dashboard tracking <strong>50+</strong> user events, plus agentic tools for PowerPoint generation and FRED, PubMed, and OpenFDA research.</>,
    ],
    technologies: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Azure", "Playwright"],
  },
  {
    role: "Software Development Executive",
    company: "UBC Esports",
    logo: "imgs/ubcea.png",
    date: "June 2026 – Present",
    location: "Vancouver, BC",
    bullets: [
      <>Building the Gaming Lounge hub, portal, and scheduler used by <strong>2,000+</strong> students.</>,
      <>Maintaining CI/CD pipelines with Go, Docker, GitHub Actions, and AWS.</>,
    ],
    technologies: ["Go", "Docker", "GitHub Actions", "AWS"],
  },
];

const Experience = ({ scrollProgress, onContainerRef }) => {
  const opacity = stageOpacity(scrollProgress, 'experience');

  return (
    <div className="stage-section" ref={onContainerRef} style={{
      opacity,
      pointerEvents: opacity > 0 ? "auto" : "none"
    }}>
      <div className="stage-container stage-container--narrow">
        <h2 className="section-label">Experience</h2>
        <div className="timeline">
          {experienceData.map((exp) => {
            const logo = <img src={exp.logo} className="exp-logo" alt={exp.company} />;
            return (
              <div className="timeline-item" key={exp.company}>
                <div className="timeline-marker">
                  {exp.companyLink
                    ? <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">{logo}</a>
                    : logo}
                </div>
                <div className="experience-card exp-details">
                  <div className="exp-header">
                    <h3>
                      {exp.role} — {exp.companyLink
                        ? <a href={exp.companyLink} className="exp-company-inline" target="_blank" rel="noopener noreferrer">{exp.company}</a>
                        : <span className="exp-company-inline">{exp.company}</span>}
                    </h3>
                    <span className="exp-date">{exp.date} · {exp.location}</span>
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className="technologies">
                    {exp.technologies.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
