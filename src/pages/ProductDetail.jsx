import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { projectId } = useParams();

  const projects = {
    "yapitech-website": {
      title: "🌐 YapiTech Website",
      status: "Live",
      description:
        "Corporate website showcasing YapiTech's software development, cloud solutions, AI services and business offerings.",
      features: [
        "Responsive Design",
        "Service Showcase",
        "Contact Form Integration",
        "SEO Friendly Structure",
        "Netlify Deployment",
      ],
      technologies: [
        "React",
        "Vite",
        "React Router",
        "CSS",
        "Netlify",
      ],
      buttonText: "Visit Website",
      buttonLink: "https://yapitechinnovations.co.za",
    },

    educare: {
      title: "🎓 EduCare Management System",
      status: "Planning",
      description:
        "School and educare management platform designed to simplify learner administration, attendance tracking, parent communication and reporting.",
      features: [
        "Learner Registration",
        "Attendance Tracking",
        "Parent Communication",
        "Fee Management",
        "Reporting Dashboard",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      buttonText: "Request Information",
      buttonLink: "/contact",
    },

    crm: {
      title: "💼 Small Business CRM",
      status: "Research",
      description:
        "Customer relationship management platform helping SMEs manage leads, quotations, customer interactions and sales activities.",
      features: [
        "Lead Tracking",
        "Quotation Management",
        "Customer Database",
        "Sales Pipeline",
        "Reporting",
      ],
      technologies: [
        "React",
        "Firebase",
        "Cloud Functions",
      ],
      buttonText: "Request Information",
      buttonLink: "/contact",
    },

    "ai-assistant": {
      title: "🤖 AI Customer Support Assistant",
      status: "Concept",
      description:
        "AI-powered assistant designed to automate customer support, answer frequently asked questions and improve response times.",
      features: [
        "24/7 Customer Support",
        "Instant Responses",
        "FAQ Automation",
        "Lead Capture",
        "Business Integration",
      ],
      technologies: [
        "OpenAI",
        "React",
        "Node.js",
      ],
      buttonText: "Discuss Project",
      buttonLink: "/contact",
    },
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <section className="project-detail-page">
        <div className="container">
          <h1>Project Not Found</h1>

          <Link to="/projects" className="btn">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-page">
      <div className="container">

        <span className="project-status">
          {project.status}
        </span>

        <h1>{project.title}</h1>

        <p className="project-description">
          {project.description}
        </p>

        <div className="detail-grid">

          <div className="detail-card">
            <h2>Key Features</h2>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h2>Technologies</h2>

            <ul>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="project-actions">

          <a
            href={project.buttonLink}
            className="btn"
          >
            {project.buttonText}
          </a>

          <Link
            to="/projects"
            className="btn btn-secondary"
          >
            Back to Projects
          </Link>

        </div>

      </div>
    </section>
  );
}