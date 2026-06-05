import { motion } from 'framer-motion'
import './App.css'

/* ---------- data ---------- */

// Direct mapping of Jez's strengths to the Technical Support Specialist role
const FIT = [
  {
    n: '01',
    title: 'Customer-facing troubleshooting',
    body: "Two years as the first point of contact for cafe customers — diagnosing hardware, software, and network issues, then explaining the fix in plain language. Resolving problems for real people is where I started.",
  },
  {
    n: '02',
    title: 'The web stack the role needs',
    body: 'Daily, hands-on proficiency in HTML, CSS, and JavaScript (plus React). I can read a front-end issue a customer reports, reproduce it, and trace it to the actual cause rather than guessing.',
  },
  {
    n: '03',
    title: 'Clear, adaptable communication',
    body: 'Fluent written and verbal English, sharpened through client-facing internship work and campus leadership. I tailor the explanation to the person — no canned scripts.',
  },
  {
    n: '04',
    title: 'Already in the support toolchain',
    body: 'Hands-on experience with Jira for ticketing, Shopify and eCommerce platforms, and CRM/helpdesk systems — plus the curiosity to learn a new product fast and grow with it in a startup environment.',
  },
]

const STACK = [
  { group: 'Languages', items: ['C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { group: 'Support & eCommerce', items: ['Jira', 'Shopify', 'CRM / Helpdesk', 'Ticketing Systems'] },
  { group: 'Collaboration & Tools', items: ['Git / GitHub', 'Test Automation', 'Notion', 'Microsoft 365', 'Google Workspace'] },
  { group: 'Backend & Databases', items: ['Node.js', 'Express.js', 'Firebase', 'Appwrite', 'MySQL', 'SQLite'] },
  { group: 'AI & Automation', items: ['OpenAI API', 'Anthropic API', 'Claude Code', 'n8n'] },
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
    role: 'Computer Technician',
    org: 'TOJE Internet Cafe — Kananga',
    period: 'Jun 2020 – Feb 2022',
    relevant: true,
    points: [
      'Served as the first point of contact for customer technical issues — diagnosing and resolving hardware, software, and network problems.',
      'Walked customers through fixes in plain language and handled recurring issues with patience and follow-through.',
      'Kept every workstation and the cafe network online, minimizing downtime and keeping customers productive.',
    ],
  },
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
            Technical Support Specialist · Open to fully remote
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
            Troubleshooting, web technologies, and customer-focused problem solving —
            for people, not scripts.
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
            A fresh-graduate Computer Engineer from Cebu who genuinely enjoys
            untangling technical problems and helping people get unstuck.
          </Reveal>
          <Reveal as="p" i={2}>
            I pair real web-development skills — HTML, CSS, JavaScript, and React —
            with hands-on customer support experience. I'd rather understand a
            customer's actual setup, goals, and frustration than reach for a canned
            reply, and I'm at my best in fast-moving, learn-as-you-go environments.
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
        <Reveal><span className="eyebrow">Why I'm a fit for this role</span></Reveal>
        <Reveal as="h2" className="section-title" i={1}>
          Built for technical support
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
          Ready to help your customers succeed.
        </Reveal>
        <Reveal as="p" className="footer-note" i={2}>
          Available full-time, fully remote · 8 hours/day, 5–6 days/week · Cebu City, Philippines
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
