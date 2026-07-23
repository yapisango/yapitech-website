export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "YapiTech Website",
      status: "Live",
      description:
        "Corporate website showcasing YapiTech's software development, cloud solutions, AI services and business offerings.",
    },
    {
      id: 2,
      title: "EduCare Management System",
      status: "Planning",
      description:
        "School and educare management platform for learner registration, attendance, communication and reporting.",
    },
    {
      id: 3,
      title: "Small Business CRM",
      status: "Research",
      description:
        "CRM solution helping SMEs manage leads, quotations, customers and sales activities.",
    },
    {
      id: 4,
      title: "AI Customer Support Assistant",
      status: "Concept",
      description:
        "AI-powered assistant designed to automate customer support and improve response times.",
    },
  ];

  const portfolioProjects = [
  {
    title: "Chef Claude",
    tech: "React + OpenAI",
    link: "https://ai-chefapi-project.netlify.app",
  },
  {
    title: "Van Life",
    tech: "React Router",
    link: "https://thunderous-daffodil-e1ce57.netlify.app",
  },
  {
    title: "Travel Journal",
    tech: "React",
    link: "https://ubiquitous-dango-fdacdf.netlify.app",
  },
  {
    title: "Assembly: Endgame",
    tech: "JavaScript",
    link: "https://endgame-project.netlify.app",
  },
  {
    title: "Shopping Cart App",
    tech: "React",
    link: "https://add-t0-cartsangoyapi.netlify.app",
  },
  {
    title: "Fullstack Sort API",
    tech: "Node.js + Express",
    link: "https://fullstack-sort-api.onrender.com",
  },
  {
    title: "Tenzies",
    tech: "React",
    link: "https://marvelous-rabanadas-9f1670.netlify.app",
  },
];

  return (
    <section className="projects-page">
      <div className="container">
        <h1>Our Projects</h1>

        <p className="projects-intro">
          Explore YapiTech's current products, client solutions,
          and software development portfolio.
        </p>

        <div className="project-stats">
          <div className="stat-card">
            <h3>4</h3>
            <p>Business Solutions</p>
          </div>

          <div className="stat-card">
            <h3>7</h3>
            <p>Portfolio Projects</p>
          </div>

          <div className="stat-card">
            <h3>React</h3>
            <p>Primary Frontend Stack</p>
          </div>
        </div>

        <section className="solutions-section">
          <h2>Business Solutions</h2>

          <p className="portfolio-intro">
            Digital products and platforms currently being developed by YapiTech.
          </p>

          <div className="solutions-grid">
            {projects.map((project) => (
              <div key={project.id} className="solution-card">
                <span className="project-status">
                  {project.status}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <h2>Development Portfolio</h2>

          <p className="portfolio-intro">
            Real-world applications and software projects developed using
            React, JavaScript, Node.js and modern web technologies.
          </p>

          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <h3>{project.title}</h3>

                <span className="portfolio-tech">
                  {project.tech}
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  View Live Project →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}