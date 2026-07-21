export default function FeaturedProjects() {
  return (
    <section className="projects-section">
      <div className="container">

        <h2 className="section-title">Featured Projects</h2>

        <p className="section-intro">
          Explore YapiTech's current and upcoming digital solutions.
        </p>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <span className="status-badge live">
              Live
            </span>

            <h3>🌐 YapiTech Website</h3>

            <p>
              Corporate website showcasing YapiTech's software
              development, web development, cloud solutions,
              and AI-powered business services.
            </p>

            <a
              href="https://yapitechinnovations.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Website
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <span className="status-badge planning">
              Planning
            </span>

            <h3>🎓 EduCare Management System</h3>

            <p>
              A web-based platform for nursery schools and
              educare centres to manage learner registration,
              attendance, parent communication, fee tracking,
              and reporting.
            </p>

            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <span className="status-badge research">
              Research
            </span>

            <h3>💼 Small Business CRM</h3>

            <p>
              A customer relationship management solution
              helping SMEs manage leads, quotations,
              customer interactions, and business growth.
            </p>

            <button className="btn btn-secondary">
              Coming Soon
            </button>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <span className="status-badge concept">
              Concept
            </span>

            <h3>🤖 AI Customer Support Assistant</h3>

            <p>
              An AI-powered chatbot solution designed to
              automate customer support, answer frequently
              asked questions, and improve response times.
            </p>

            <button className="btn btn-secondary">
              Coming Soon
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}