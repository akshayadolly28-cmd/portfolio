
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  Menu,
  X,
  Terminal,
  Database,
  Globe,
  Brain,
  Layers,
} from "lucide-react";

/* =========================
   PROFILE LINKS
========================= */

const github = "https://github.com/akshayadolly28-cmd";

const hackerrank =
  "https://www.hackerrank.com/profile/akshayadolly28";

/* Replace with your real email */
const email = "your-email@example.com";

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    title: "Smart Exam Seating Arrangement",
    category: "Python Application",
    image: "/projects/exam-seating.png",
    description:
      "A smart system designed to automate examination seating arrangements and reduce the effort involved in manually assigning students to classrooms.",
    tech: ["Python", "Algorithms", "Automation"],
    github:
      "https://github.com/akshayadolly28-cmd/Smart-Exam-Seating-Arrangement",
  },

  {
    title: "Full-Stack User Management",
    category: "Full Stack",
    image: "/projects/user-management.png",
    description:
      "A full-stack application featuring user registration, login, password management and database-backed user operations.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: github,
  },

  {
    title: "Smart Task Manager",
    category: "Web Application",
    image: "/projects/task-manager.png",
    description:
      "A task management application designed to help users create, organize and track tasks through a clean web interface.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    github: github,
  },

  {
    title: "Student Data Management",
    category: "CRUD Application",
    image: "/projects/student-management.png",
    description:
      "A database-driven application for efficiently managing student records while demonstrating CRUD operations and structured data management.",
    tech: ["Java", "SQL", "CRUD"],
    github: github,
  },

  {
    title: "Hexagon Blogging Website",
    category: "Frontend",
    image: "/projects/blogging.png",
    description:
      "A responsive blogging website created with modern frontend fundamentals and a focus on clean layouts and user-friendly navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: github,
  },

  {
    title: "AI Urban Health Monitoring",
    category: "Academic Project",
    image: "/projects/urban-health.png",
    description:
      "An academic project concept exploring the use of intelligent systems and data-driven approaches for monitoring urban health.",
    tech: ["Python", "AI", "Data"],
    github: github,
  },
];

/* =========================
   SKILLS
========================= */

const skills = [
  {
    icon: <Terminal size={22} />,
    title: "Programming",
    items: ["Java", "Python", "C", "JavaScript"],
  },

  {
    icon: <Globe size={22} />,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },

  {
    icon: <Layers size={22} />,
    title: "Backend",
    items: ["Java", "Spring Boot", "Django", "Flask", "REST API"],
  },

  {
    icon: <Database size={22} />,
    title: "Database",
    items: ["MySQL", "SQL", "MongoDB", "NoSQL"],
  },

  {
    icon: <Brain size={22} />,
    title: "Computer Science",
    items: ["DSA", "DBMS", "OOP", "Algorithms"],
  },

  {
    icon: <Code2 size={22} />,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

/* =========================
   LEARNING JOURNEY
========================= */

const learningJourney = [
  {
    number: "01",
    title: "Data Structures & Algorithms",
    description:
      "Strengthening problem-solving skills through arrays, trees, AVL trees, hashing, sorting, searching and algorithmic thinking.",
    icon: <Code2 size={23} />,
  },

  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Building applications using React, Java, Spring Boot, REST APIs, HTML, CSS and JavaScript.",
    icon: <Layers size={23} />,
  },

  {
    number: "03",
    title: "Programming",
    description:
      "Developing practical programming skills through Java, Python, C and JavaScript projects.",
    icon: <Terminal size={23} />,
  },

  {
    number: "04",
    title: "Problem Solving",
    description:
      "Practicing coding problems on HackerRank and continuously improving logical thinking.",
    icon: <Brain size={23} />,
  },
];

/* =========================
   ANIMATION
========================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/* =========================
   SECTION TITLE
========================= */

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </motion.div>
  );
}

/* =========================
   NAVBAR
========================= */

function Navbar({ open, setOpen }) {
  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "learning",
    "contact",
  ];

  return (
    <header className="navbar">
      <a
        href="#home"
        className="brand"
        onClick={() => setOpen(false)}
      >
        <span className="brand-mark">AR</span>

        <span>Akshaya Reddy</span>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
          >
            {link === "learning"
              ? "Learning"
              : link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}

        <a
          className="nav-resume"
          href="/resume.pdf"
          download
          onClick={() => setOpen(false)}
        >
          Resume
          <Download size={15} />
        </a>
      </nav>

      <button
        className="menu-button"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-grid">

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="status-pill">
            <span className="status-dot" />
            Open to software development opportunities
          </div>

          <p className="hero-kicker">
            B.Tech CSE • Aspiring Software Developer
          </p>

          <h1>
            Computer Science Student{" "}
            <span>building with code.</span>
          </h1>

          <p className="hero-text">
            I'm Akshaya Reddy, a Computer Science Engineering student
            passionate about software development, problem solving and
            full-stack web technologies.
          </p>

          <div className="hero-actions">

            <a
              className="button primary"
              href="#projects"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              className="button secondary"
              href="/resume.pdf"
              download
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

          {/* GITHUB + HACKERRANK */}

          <div className="quick-links">

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href={hackerrank}
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={18} />
              HackerRank
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-card-wrap"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >

          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="code-card">

            <div className="window-bar">

              <span />
              <span />
              <span />

              <small>
                developer.js
              </small>

            </div>

            <pre>
{`const developer = {
  name: "Akshaya Reddy",
  role: "Aspiring Software Developer",

  skills: [
    "Java",
    "Python",
    "React",
    "Spring Boot",
    "DSA"
  ],

  mindset: "Keep learning."
};`}
            </pre>

            <div className="terminal-line">
              <span>›</span>{" "}
              building_the_next_idea...
            </div>

          </div>

        </motion.div>

      </div>

      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to about"
      >
        <ArrowUpRight size={18} />
      </a>

    </section>
  );
}

/* =========================
   ABOUT
========================= */

function About() {
  return (
    <section id="about" className="section">

      <SectionTitle
        eyebrow="01 / About"
        title="A student who learns by building."
        text="I enjoy turning concepts into working applications while continuously improving my programming and software development skills."
      />

      <div className="about-layout">

        <motion.div
          className="about-card glass"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <div className="about-icon">
            <Code2 size={28} />
          </div>

          <h3>
            My approach
          </h3>

          <p>
            I believe the best way to learn technology is to build
            something with it.
          </p>

          <p>
            I focus on writing understandable code, developing
            responsive interfaces and understanding the fundamentals
            behind the technologies I use.
          </p>

          <p>
            My current focus is Java, Data Structures and Algorithms,
            React, Spring Boot and full-stack development.
          </p>

        </motion.div>

        <div className="stats-grid">

          {[
            [
              "01",
              "Problem Solving",
              "DSA & logical thinking",
            ],

            [
              "02",
              "Web Development",
              "React & responsive UI",
            ],

            [
              "03",
              "Backend",
              "Java & Spring Boot",
            ],

            [
              "04",
              "Databases",
              "SQL & NoSQL",
            ],
          ].map(
            ([number, title, subtitle], index) => (
              <motion.div
                className="stat-card"
                key={number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <span>
                  {number}
                </span>

                <h3>
                  {title}
                </h3>

                <p>
                  {subtitle}
                </p>

              </motion.div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

/* =========================
   SKILLS
========================= */

function Skills() {
  return (
    <section
      id="skills"
      className="section section-muted"
    >

      <SectionTitle
        eyebrow="02 / Skills"
        title="Technologies I work with."
        text="A growing technical toolkit across programming, frontend, backend, databases and computer science fundamentals."
      />

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <motion.div
            className="skill-card"
            key={skill.title}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06,
            }}
            whileHover={{
              y: -6,
            }}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>
              {skill.title}
            </h3>

            <div className="tag-list">

              {skill.items.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

/* =========================
   PROJECTS
========================= */

function Projects() {
  return (
    <section id="projects" className="section">

      <SectionTitle
        eyebrow="03 / Projects"
        title="Projects I've built."
        text="Practical projects that demonstrate my programming, web development, database and problem-solving skills."
      />

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.article
            className="project-card"
            key={project.title}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: (index % 3) * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                onError={(e) => {
                  e.currentTarget.style.display =
                    "none";
                }}
              />

              <div className="project-image-placeholder">
                <Code2 size={30} />

                <span>
                  Project Preview
                </span>
              </div>

            </div>

            <div className="project-content">

              <div className="project-top">

                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tag-list project-tags">

                {project.tech.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

/* =========================
   LEARNING JOURNEY
========================= */

function LearningJourney() {
  return (
    <section
      id="learning"
      className="section section-muted"
    >

      <SectionTitle
        eyebrow="04 / Learning Journey"
        title="Building skills one project at a time."
        text="I don't just learn technologies — I apply them through projects, coding practice and continuous learning."
      />

      <div className="learning-grid">

        {learningJourney.map(
          (item, index) => (

            <motion.article
              className="learning-card"
              key={item.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <div className="learning-card-top">

                <div className="learning-icon">
                  {item.icon}
                </div>

                <span>
                  {item.number}
                </span>

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <div className="learning-line" />

            </motion.article>

          )
        )}

      </div>

      {/* HACKERRANK + GITHUB */}

      <div className="coding-profiles">

        <div>

          <span className="eyebrow">
            Coding Profiles
          </span>

          <h3>
            Practicing. Solving. Improving.
          </h3>

        </div>

        <div className="profile-buttons">

          <a
            href={hackerrank}
            target="_blank"
            rel="noreferrer"
            className="profile-button"
          >
            <Code2 size={18} />

            HackerRank

            <ArrowUpRight size={15} />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="profile-button"
          >
            <Github size={18} />

            GitHub

            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>

    </section>
  );
}

/* =========================
   EDUCATION
========================= */

function Education() {
  return (
    <section className="section education-section">

      <SectionTitle
        eyebrow="05 / Education"
        title="My academic foundation."
        text="Building strong fundamentals in computer science while developing practical software projects."
      />

      <motion.div
        className="education-card"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="education-icon">
          <GraduationCap size={30} />
        </div>

        <div>

          <span className="eyebrow">
            B.Tech
          </span>

          <h3>
            Computer Science Engineering
          </h3>

          <p>
            Anurag University
          </p>

          <span className="education-status">
            Currently pursuing
          </span>

        </div>

      </motion.div>

    </section>
  );
}

/* =========================
   CONTACT
========================= */

function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
    >

      <motion.div
        className="contact-card"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <span className="eyebrow">
          06 / Contact
        </span>

        <h2>
          Let's build something meaningful.
        </h2>

        <p>
          I'm open to internships, entry-level software
          development opportunities and projects where I can
          learn, contribute and grow.
        </p>

        <div className="contact-actions">

          <a
            className="button primary"
            href={`mailto:${email}`}
          >
            <Mail size={18} />

            Email Me
          </a>

          <a
            className="button secondary"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />

            GitHub
          </a>

          <a
            className="button secondary"
            href={hackerrank}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={18} />

            HackerRank
          </a>

        </div>

      </motion.div>

    </section>
  );
}

/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer className="footer">

      <div>

        <strong>
          Akshaya Reddy
        </strong>

        <span>
          {" "}
          © {new Date().getFullYear()}
        </span>

      </div>

      <div className="footer-links">

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={17} />
        </a>

        <a
          href={hackerrank}
          target="_blank"
          rel="noreferrer"
          aria-label="HackerRank"
        >
          <Code2 size={17} />
        </a>

        <a
          href={`mailto:${email}`}
          aria-label="Email"
        >
          <Mail size={17} />
        </a>

      </div>

    </footer>
  );
}

/* =========================
   APP
========================= */

export default function App() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <div className="app">

      <Navbar
        open={menuOpen}
        setOpen={setMenuOpen}
      />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <LearningJourney />

        <Education />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}