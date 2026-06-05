import { motion } from 'framer-motion'
import './App.css'

/* ---------- data ---------- */

// Mapping of Jez's strengths to AI / LLM and fullstack development work
const FIT = [
  {
    n: '01',
    title: 'Fullstack across the stack',
    body: 'Comfortable in JavaScript, TypeScript, and Python, building and auditing both frontend and backend — React, Next.js, Node/Express, Firebase. I move through a codebase end to end rather than staying in one layer.',
  },
  {
    n: '02',
    title: 'I work with AI every day',
    body: 'Claude Code is part of my daily workflow, alongside the OpenAI and Anthropic APIs and n8n automation. I am comfortable reading, evaluating, and improving AI-generated code instead of just accepting it.',
  },
  {
    n: '03',
    title: 'Debugging & test automation',
    body: 'I investigate problems to root cause and write automated tests to validate behavior — including on my thesis system — so changes hold up before they ship rather than breaking quietly.',
  },
  {
    n: '04',
    title: 'I understand model behavior',
    body: 'My thesis involved evaluating a YOLOv8n detection model and documenting where it succeeded and failed. I am genuinely curious about why a model passes or fails a task, which is the core of LLM-training work.',
  },
]

const STACK = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'C#', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { group: 'Backend & Databases', items: ['Node.js', 'Express.js', 'Firebase', 'Appwrite', 'MySQL', 'SQLite'] },
  { group: 'AI & Automation', items: ['Claude Code', 'Anthropic API', 'OpenAI API', 'n8n'] },
  { group: 'Testing & Tools', items: ['Test Automation', 'Git / GitHub', 'VS Code', 'Notion'] },
  { group: 'Support & eCommerce', items: ['Jira', 'Shopify', 'CRM / Helpdesk', 'Ticketing Systems'] },
  { group: 'Embedded & IoT', items: ['Arduino', 'Logic Gates', 'Mixed Signal Systems', 'VHDL (learning)'] },
  { group: 'Design & Prototyping', items: ['Figma', 'Canva', 'AutoCAD', 'SketchUp', 'Packet Tracer'] },
]

const PROJECTS = [
  {
    title: 'AI-Powered Smart Parking System',
    meta: 'Capstone Thesis · 2025–2026',
    body: 'Camera-based smart parking with a real-time web app for slot availability. Built the React + Vite frontend (Leaflet map, SVG slot view) and a Firebase real-time layer syncing edge detections to drivers and an admin dashboard. Integrated YOLOv8n with DBSCAN auto-mapping on a Raspberry Pi, and wrote automated tests to validate detection and slot-mapping behavior.',
    tags: ['React', 'Vite', 'Firebase', 'YOLOv8n', 'Test Automation'],
  },
  {
    title: 'ANITA-Maxwin',
    meta: 'Collaboration Platform · 2025',
    body: 'Community-driven platform where users create and join events and earn tokens through participation. Designed the architecture, backend, and database for secure entertainment.',
    tags: ['React.js', 'Firebase'],
  },
  {
    title: 'GearFolio',
    meta: 'Academic Portfolio Platform · 2025',
    body: 'AI-powered portfolio and project showcase for CIT-U Computer Engineering students. Contributed to the Next.js + Appwrite frontend and built server-side rendered (SSR) authentication.',
    tags: ['Next.js', 'Appwrite', 'SSR'],
  },
  {
    title: 'EDULINK',
    meta: 'Educational Management Platform · 2024',
    body: 'Web-based platform supporting enrollment, scheduling, and grading. Built with React.js (TypeScript) and Firebase; handled backend services and database design.',
    tags: ['React.js', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Carousell Scraper',
    meta: 'Python · Personal Project',
    body: 'Python web scraper that collects and organizes Carousell marketplace listings for a friend, automating a previously manual lookup process.',
    tags: ['Python', 'Web Scraping'],
  },
]

const EXPERIENCE = [
  {
    role: 'Product Design Intern',
    org: 'Rural Net Inc. — Cebu City',
    period: 'Jun 2025 – Jul 2025',
    relevant: false,
    points: [
      'Designed UI/UX web mockups for client-facing products, working from real user needs.',
      'Collaborated closely with the team to align every deliverable with brand identity guidelines.',
      'Produced marketing materials across multiple channels under tight timelines.',
    ],
  },
  {
    role: 'Computer Technician',
    org: 'TOJE Internet Cafe — Kananga',
    period: 'Jun 2020 – Feb 2022',
    relevant: false,
    points: [
      'Diagnosed and resolved hardware, software, and network problems as the first point of contact.',
      'Handled recurring issues with patience and follow-through, explaining fixes in plain language.',
      'Kept every workstation and the cafe network online, minimizing downtime.',
    ],
  },
]

/* ---------- motion helper ---------- */

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Reveal({ children, i = 0, as = 'div', className = '' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={rise}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </MotionTag>
  )
}

/* ---------- sections ---------- */

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark">JXO</a>
        <div className="nav-links">
          <a href="#fit">Why me</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="/Jez-Olpoc-CV.pdf" target="_blank" rel="noreferrer">CV</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Fullstack Developer · AI &amp; LLM Workflows
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Jez Xyrel K.<br />Olpoc
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            Computer Engineer
          </motion.p>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            I build and audit fullstack web apps and work with AI tools every day —
            JavaScript, TypeScript, and Python.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#fit" className="btn btn-primary">Why I'm a fit</a>
            <a href="/Jez-Olpoc-CV.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">Download CV</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-frame">
            <img src="/jez.jpg" alt="Portrait of Jez Xyrel K. Olpoc" loading="eager" />
          </div>
        </motion.div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap two-col">
        <Reveal className="col-label">
          <span className="eyebrow">About</span>
        </Reveal>
        <div className="col-body">
          <Reveal as="p" className="lede" i={1}>
            A fresh-graduate Computer Engineer from Cebu who builds fullstack web
            applications and uses AI tooling as part of everyday development.
          </Reveal>
          <Reveal as="p" i={2}>
            I work across the stack in JavaScript, TypeScript, and Python — React and
            Next.js on the front, Node and Firebase behind them — and I lean on
            Claude Code and the Anthropic and OpenAI APIs daily. I like investigating
            problems to root cause, writing tests that hold up, and understanding why
            a model or a piece of code behaves the way it does.
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Fit() {
  return (
    <section id="fit" className="section section-tint">
      <div className="wrap">
        <Reveal><span className="eyebrow">What I bring</span></Reveal>
        <Reveal as="h2" className="section-title" i={1}>
          Built for AI &amp; fullstack work
        </Reveal>
        <div className="fit-grid">
          {FIT.map((f, i) => (
            <Reveal key={f.n} className="fit-card" i={i % 2}>
              <span className="fit-n">{f.n}</span>
              <h3 className="fit-title">{f.title}</h3>
              <p className="fit-body">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <Reveal><span className="eyebrow">Technical Stack</span></Reveal>
        <Reveal as="h2" className="section-title" i={1}>What I work with</Reveal>
        <div className="stack-grid">
          {STACK.map((s, i) => (
            <Reveal key={s.group} className="stack-card" i={i % 3}>
              <h3 className="stack-group">{s.group}</h3>
              <ul className="chip-row">
                {s.items.map((it) => (
                  <li key={it} className="chip">{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section section-tint">
      <div className="wrap">
        <Reveal><span className="eyebrow">Selected Work</span></Reveal>
        <Reveal as="h2" className="section-title" i={1}>Projects</Reveal>
        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} className="project" i={Math.min(i, 2)}>
              <div className="project-head">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-meta">{p.meta}</span>
              </div>
              <p className="project-body">{p.body}</p>
              <ul className="tag-row">
                {p.tags.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section">
      <div className="wrap two-col">
        <Reveal className="col-label"><span className="eyebrow">Experience</span></Reveal>
        <div className="col-body timeline">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} className="tl-item" i={i}>
              <div className="tl-dot" />
              <div className="tl-head">
                <h3 className="tl-role">
                  {e.role}
                  {e.relevant && <span className="tl-flag">Most relevant</span>}
                </h3>
                <span className="tl-period">{e.period}</span>
              </div>
              <p className="tl-org">{e.org}</p>
              <ul className="tl-points">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section section-tint">
      <div className="wrap two-col">
        <Reveal className="col-label"><span className="eyebrow">Education</span></Reveal>
        <div className="col-body">
          <Reveal as="h3" className="edu-degree">BS in Computer Engineering</Reveal>
          <Reveal as="p" className="edu-school" i={1}>
            Cebu Institute of Technology – University
          </Reveal>
          <Reveal as="p" className="edu-period" i={2}>Aug 2022 – May 2026</Reveal>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <Reveal><span className="eyebrow">Contact</span></Reveal>
        <Reveal as="h2" className="footer-title" i={1}>
          Let's build something solid.
        </Reveal>
        <Reveal as="p" className="footer-note" i={2}>
          Open to fullstack and AI / LLM project work · Remote · Cebu City, Philippines
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-item" i={0}>
            <span className="contact-label">Email</span>
            <a href="mailto:jezxyrel1@gmail.com">jezxyrel1@gmail.com</a>
          </Reveal>
          <Reveal className="contact-item" i={1}>
            <span className="contact-label">Phone</span>
            <a href="tel:+639618940096">+63 961 894 0096</a>
          </Reveal>
          <Reveal className="contact-item" i={2}>
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/j1nsol" target="_blank" rel="noreferrer">j1nsol</a>
          </Reveal>
          <Reveal className="contact-item" i={3}>
            <span className="contact-label">LinkedIn</span>
            <a href="https://linkedin.com/in/jez-olpoc" target="_blank" rel="noreferrer">jez-olpoc</a>
          </Reveal>
          <Reveal className="contact-item" i={4}>
            <span className="contact-label">Résumé</span>
            <a href="/Jez-Olpoc-CV.pdf" target="_blank" rel="noreferrer">Download CV (PDF)</a>
          </Reveal>
        </div>
        <hr className="rule footer-rule" />
        <Reveal as="p" className="footer-sign">
          Jez Xyrel K. Olpoc © {new Date().getFullYear()}
        </Reveal>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="rule" />
        <About />
        <Fit />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}
