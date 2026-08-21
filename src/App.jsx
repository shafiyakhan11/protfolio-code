const projects = [
  {
    title: 'Modern Landing Page',
    description: 'Responsive landing page built with React, including animations, responsive layout, and clean design.',
    link: '#projects',
  },
  {
    title:'Blog Platform',
    description: 'A blog prototype with reusable components, article previews, and a polished reading experience.',
    link: '#projects',
  },
  {
    title: 'Task Manager',
    description: 'A productivity dashboard with task filters, quick actions, and modern UI patterns.',
    link: '#projects',
  },
]

const skills = ['React', 'JavaScript', 'HTML & CSS', 'Responsive Design', 'Python', 'Vite','MySQL','SQL','PowerBI']

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <strong>Portfolio</strong>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <p className="eyebrow">Hi there, I am</p>
            <h1>Shafiya khan</h1>
            <p className="subtitle">
              A React developer crafting clean, modern interfaces and performant web experiences.
            </p>
             
            <div className="hero-actions">
              <a href="#projects" className="button">View Work</a>
              <a href="#contact" className="button button-secondary">Get in Touch</a>
              <a href="https://www.linkedin.com/in/shafiya-khan786"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >View LinkedIn</a>
              <a href="https://github.com/shafiyakhan11"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                View GitHub
              </a>
              <a href="Shafiya khan Resume.pdf" download className="button button-secondary">Download Resume</a>
            </div>
          </div>
        </section>


        <section className="panel" id="about">
          <h2>About Me</h2>
          <div className="about-card-grid">
            <article className="about-card">
              <h3>Who I Am</h3>
              <p>
                  I am an MCA student passionate about Data Analytics, Python, SQL,
          Power BI, and Web Development. I enjoy learning new technologies and
          solving real-world problems. I build polished single-page applications with React and Vite. I focus on
                clean code, accessibility, and smooth interactions that make digital products feel delightful.
              </p>
            </article>

            <article className="about-card">
              <h3>Education</h3>
              <p>
                Pursuing a Master of Computer Applications (MCA) with a focus on Artificial Intelligence, Data Analytics,
                Python, SQL, and Power BI.
              </p>
              <p>
                I enjoy applying academic learning to build web and data-driven products that help users make informed decisions.
              </p>
            </article>

            <article className="about-card">
              <h3>What I Do</h3>
              <p>
                I combine front-end development with analytics to create clear user experiences,
                interactive dashboards, and projects that solve real-world problems.
              </p>
            </article>
          </div>
        </section>

        <section className="panel" id="skills">
          <h2>Skills</h2>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>Explore</a>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="contact">
          <div className="contact-card">
            <h2>Contact</h2>
            <p>Ready to work together? Send a message and I&apos;ll get back to you soon.</p>
            <a href="mailto:khanshafiya408@gmail.com" className="button">Email Me</a>
          </div>
        </section>
      </main>
        <footer>
        <p>© 2026 Shafiya khan. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
