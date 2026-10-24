import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import "./styles.css";

const skills = ["Python", "Web development", "UI/UX thinking", "JavaScript", "React", "SQL", "Responsive design", "Problem solving"];
const credentials = [
  ["Tata", "Cybersecurity Analyst Job Simulation"],
  ["Accenture", "Coding: Development & Advanced Engineering"],
  ["Data Science Master", "Virtual Internship · 10-week program"],
  ["CIP · OPSWAT Academy", "Introduction to CIP"]
];
const projects = [
  { no: "01", title: "Medi Predict", type: "Machine learning · Healthcare", desc: "A chest X-ray image classification concept focused on identifying lung abnormalities across pneumonia, tuberculosis, and lung cancer classes.", tags: ["Python", "CNN", "Image processing"] },
  { no: "02", title: "Personal Portfolio", type: "Frontend · Personal brand", desc: "A responsive portfolio designed to present skills, learning, projects, and ways to connect in a clear, thoughtful way.", tags: ["React", "CSS", "Responsive UI"] },
  { no: "03", title: "Web experiments", type: "Frontend · Practice", desc: "A growing collection of small interfaces and coding exercises built while strengthening frontend development fundamentals.", tags: ["HTML", "CSS", "JavaScript"] }
];

function App() {
  const [activeSkill, setActiveSkill] = useState("Python");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#home" aria-label="Sai Varshini home">SV<span>·</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let’s connect <ArrowUpRight size={14}/></a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <p className="eyebrow"><span className="status-dot"></span> PORTFOLIO / 2026</p>
        <h1>Curious by nature.<br/><em>Building with purpose.</em></h1>
        <div className="hero-bottom">
          <p className="hero-copy">Hi, I’m <strong>Sai Varshini</strong> — a computer science graduate exploring the space between thoughtful design and useful technology.</p>
          <a className="round-link" href="#about" aria-label="Scroll to about"><ArrowDownRight size={22}/></a>
        </div>
        <div className="hero-index"><span>01 — INTRODUCTION</span><span>VISAKHAPATNAM · INDIA</span></div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span> A LITTLE ABOUT ME</div>
        <div className="about-content">
          <h2>I like making technology feel <em>human.</em></h2>
          <div className="about-text">
            <p>I’m a 2026 Computer Science graduate interested in web development, Python, and building digital experiences that are both useful and easy to navigate.</p>
            <p>I enjoy learning by making things — turning ideas into interfaces, solving problems one step at a time, and staying curious about what’s possible.</p>
            <a className="text-link" href="#projects">A few things I’ve worked on <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </section>

      <section className="skills-section section" id="skills">
        <div className="shell">
          <div className="section-label"><span>02</span> WHAT I BRING</div>
          <div className="skills-layout">
            <div className="skills-intro">
              <h2>Skills with<br/><em>range.</em></h2>
              <p>I enjoy moving between structured systems and open-ended creative problems.</p>
              <span className="mono-note">ALWAYS LEARNING, ALWAYS BUILDING.</span>
            </div>
            <div className="skills-card">
              <div className="skill-pills" aria-label="Skills">
                {skills.map(skill => <button key={skill} className={`pill ${activeSkill === skill ? "selected" : ""}`} onClick={() => setActiveSkill(skill)}>{skill}</button>)}
              </div>
              <div className="card-rule"></div>
              <div className="credential-heading"><Sparkles size={16}/> <span>Credentials &amp; programs</span></div>
              <div className="credentials">
                {credentials.map(([org, title]) => <div className="credential" key={org}><span className="credential-org">{org}</span><span>{title}</span><ArrowUpRight className="credential-arrow" size={14}/></div>)}
              </div>
              <p className="selected-note"><span className="status-dot"></span> Exploring <strong>{activeSkill}</strong> through practice and projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section shell" id="projects">
        <div className="section-label"><span>03</span> SELECTED WORK</div>
        <div className="projects-heading"><h2>Ideas, made <em>real.</em></h2><p>A few projects and experiments from my learning journey.</p></div>
        <div className="project-list">
          {projects.map(project => <article className="project" key={project.no}>
            <span className="project-no">{project.no}</span>
            <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-desc">{project.desc}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <a className="project-arrow" href="#contact" aria-label={`Ask about ${project.title}`}><ArrowUpRight size={22}/></a>
          </article>)}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner shell">
          <div className="contact-left"><p className="eyebrow">LET’S CONNECT</p><h2>Have an idea?<br/><em>Say hello.</em></h2></div>
          <div className="contact-right"><p>I’m open to entry-level opportunities, collaborations, and conversations about technology, design, and the next interesting problem to solve.</p>
            <div className="contact-actions">
              <a className="linkedin-button" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a>
              <button className="email-button" onClick={copyEmail}>{copied ? "Email copied!" : "Copy email address"}</button>
            </div>
            <p className="contact-note">LinkedIn is the public contact channel. Replace the sample links and email with your own before publishing.</p>
          </div>
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Sai Varshini</span><span className="footer-center">Built with curiosity <span>↘</span></span><a href="#home">Back to top <ArrowUpRight size={13}/></a></footer>
    </main>
  );
}
console.log("Portfolio React entry loaded");
createRoot(document.getElementById("root")).render(<App />);