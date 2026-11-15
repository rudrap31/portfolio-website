import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { stageOpacity } from './stages';

const featuredProjects = [
  {
    title: "SimplySkin",
    badge: "100+ users",
    description: "AI skincare app on the App Store. Face scans run through a Faster R-CNN + MediaPipe pipeline; barcode scans rate products.",
    technologies: ["React Native", "Expo", "Supabase", "Express.js"],
    link: "https://apps.apple.com/ca/app/simplyskin-ai-skincare/id6751350480",
    image: "imgs/SimplySkinScreenshot.png",
  },
  {
    title: "Trendl",
    badge: "Live · trendl.dev",
    description: "Daily web game: guess the Google Trends topic from its search-interest chart. Redis caching cut puzzle-fetch latency 82%.",
    technologies: ["Next.js", "TypeScript", "Redis", "Docker", "AWS"],
    link: "https://trendl.dev",
    image: "imgs/trendl.png",
  },
  {
    title: "PingPond",
    badge: "50+ downloads",
    description: "macOS menu bar app that turns live system activity into a pixel-art aquarium with boids flocking at 30 FPS.",
    technologies: ["Swift", "SwiftUI", "SpriteKit"],
    link: "https://pingpond.vercel.app/",
    image: "imgs/pingpond.png",
  },
  {
    title: "Bookmarked",
    badge: "nwHacks 2026",
    description: "Share BookTok videos to build a reading list. Extracts every book mentioned and checks nearby library availability.",
    technologies: ["React Native", "Python", "Supabase", "Gemini API"],
    link: "https://devpost.com/software/bookmarked-7srimw",
    image: "imgs/bookmarked.png",
  },
];

const earlierProjects = [
  {
    title: "Sentiment Trading Bot",
    description: "Trades on news-headline sentiment, with a React dashboard for portfolio analytics.",
    technologies: ["Python", "Flask", "React"],
    link: "https://github.com/rudrap31/sentiment-trading",
    image: "imgs/portfolio-screenshot.png",
  },
  {
    title: "Real-Time Chat App",
    description: "MERN + Socket.io chat with JWT auth, user search, and online presence.",
    technologies: ["MongoDB", "Express.js", "React", "Socket.io"],
    link: "https://github.com/rudrap31/chat-app",
    image: "imgs/chat-screenshot.png",
  },
  {
    title: "This Website",
    description: "3D scroll-driven portfolio built with React Three Fiber.",
    technologies: ["React", "Three.js"],
    link: "https://github.com/rudrap31/portfolio-website",
    image: "imgs/portfolio-website-screenshot.png",
  },
];

const LinkIcon = ({ link }) =>
  link.includes('github.com') ? <FiGithub size={14} /> : <FiExternalLink size={14} />;

const Projects = ({ scrollProgress, onContainerRef }) => {
  const opacity = stageOpacity(scrollProgress, 'projects');

  return (
    <div className="stage-section" ref={onContainerRef} style={{
      opacity,
      pointerEvents: opacity > 0 ? "auto" : "none"
    }}>
      <div className="stage-container">
        <div className="section-label-row">
          <h2 className="section-label">Projects</h2>
          <a href="https://github.com/rudrap31" className="section-more-link" target="_blank" rel="noopener noreferrer">
            more on GitHub <FiArrowUpRight size={14} />
          </a>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((p) => (
            <a href={p.link} key={p.title} className="project-card" target="_blank" rel="noopener noreferrer">
              <div className="project-image-wrapper">
                <img src={p.image} alt={p.title} className="project-card-image" />
              </div>
              <div className="project-card-body">
                <div className="project-card-header">
                  <h4>{p.title}</h4>
                  <LinkIcon link={p.link} />
                </div>
                <span className="project-badge">{p.badge}</span>
                <p>{p.description}</p>
                <div className="technologies">
                  {p.technologies.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>

        <h3 className="subsection-label">Earlier work</h3>
        <div className="earlier-grid">
          {earlierProjects.map((p) => (
            <a href={p.link} key={p.title} className="earlier-card" target="_blank" rel="noopener noreferrer">
              <img src={p.image} alt="" className="earlier-thumb" />
              <div className="earlier-body">
                <div className="project-card-header">
                  <h4>{p.title}</h4>
                  <LinkIcon link={p.link} />
                </div>
                <p>{p.description}</p>
                <div className="technologies">
                  {p.technologies.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
