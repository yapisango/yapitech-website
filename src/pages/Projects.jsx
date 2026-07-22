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

  return (
    <section className="projects-page">
      <div className="container">
        <h1>Our Projects</h1>

        <p className="projects-intro">
          Explore YapiTech's current and upcoming digital solutions.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <span className="project-status">
                {project.status}
              </span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <button className="project-btn">
                Coming Soon →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}