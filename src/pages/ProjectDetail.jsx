import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();

  // Define projects grouped by category
  const projects = {
    web: {
      title: "🌐 Web Development Projects",
      description: "Here are some of our real-world projects in web development:",
      items: [
        {
          name: "Portfolio Website",
          desc: "A modern personal portfolio built with React & Vite.",
          link: "https://shimmering-druid-53cb8a.netlify.app"
        },
        {
          name: "VanLife App",
          desc: "Van rental platform built with React Router.",
          link: "https://vanlife-demo.com"
        }
      ]
    },
    software: {
      title: "💻 Software Development Projects",
      description: "Custom desktop and enterprise software solutions:",
      items: [
        {
          name: "Inventory System",
          desc: "Inventory & sales tracking app built with C++ & Qt.",
          link: "#"
        },
        {
          name: "Data Analyzer",
          desc: "Scientific data processing tool built with Python.",
          link: "#"
        }
      ]
    },
    mobile: {
      title: "📱 Mobile Development Projects",
      description: "Cross-platform apps designed for iOS & Android:",
      items: [
        {
          name: "Fitness Tracker",
          desc: "React Native app to track workouts and progress.",
          link: "#"
        },
        {
          name: "E-Learning App",
          desc: "Mobile-first platform for online courses.",
          link: "#"
        }
      ]
    },
    cloud: {
      title: "☁️ Cloud & DevOps Projects",
      description: "Scalable and reliable cloud solutions:",
      items: [
        {
          name: "AWS Infrastructure",
          desc: "Deployed microservices with AWS ECS & Lambda.",
          link: "#"
        },
        {
          name: "CI/CD Pipeline",
          desc: "Automated testing & deployment using GitHub Actions.",
          link: "#"
        }
      ]
    }
  };

  // Grab the right category (default fallback if not found)
  const projectCategory = projects[projectId] || {
    title: "Projects Not Found",
    description: "The requested project category does not exist.",
    items: []
  };

  return (
    <div className="projects-page">
      <h1>{projectCategory.title}</h1>
      <p>{projectCategory.description}</p>

      <div className="project-list">
        {projectCategory.items.length > 0 ? (
          projectCategory.items.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noreferrer">
                View Live
              </a>
            </div>
          ))
        ) : (
          <p>No projects available in this category.</p>
        )}
      </div>

      <Link to="/services" className="back-link">
        ← Back to Services
      </Link>
    </div>
  );
}
