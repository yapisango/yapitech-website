
import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <p>
        YapiTech Innovations provides practical digital solutions
        that help businesses streamline operations, improve
        efficiency, and support sustainable growth.
      </p>

      <div className="service-list">
        {/* Web Development */}
        <div className="service-card">
          <img
            src="/image/web-development.jpg"
            alt="Web Development"
            className="service-img"
          />

          <div className="service-card-content">
            <h2>Web Development</h2>

            <p>
              Professional, responsive websites designed to
              strengthen your online presence, showcase your
              services, and help customers connect with your business.
            </p>

            <Link to="/services/web" className="service-link">
              Learn More &rarr;
            </Link>
          </div>
        </div>

        {/* Software Development */}
        <div className="service-card">
          <img
            src="/image/software-development1.avif"
            alt="Custom Software Development"
            className="service-img"
          />

          <div className="service-card-content">
            <h2>Software Development</h2>

            <p>
              Custom software solutions designed to automate
              business processes, improve efficiency, and support
              your operational needs.
            </p>

            <Link to="/services/software" className="service-link">
              Learn More &rarr;
            </Link>
          </div>
        </div>

        {/* Cloud Solutions */}
        <div className="service-card">
          <img
            src="/image/cloud-deployment.jpg"
            alt="Cloud Solutions"
            className="service-img"
          />

          <div className="service-card-content">
            <h2>Cloud Solutions</h2>

            <p>
              Cloud-based solutions that support remote access,
              streamline workflows, and help businesses manage
              their digital systems.
            </p>

            <Link to="/services/cloud" className="service-link">
              Learn More &rarr;
            </Link>
          </div>
        </div>

        {/* AI-Assisted Solutions */}
        <div className="service-card">
          <img
            src="/image/ai-assisted.jpg"
            alt="AI-Assisted Business Solutions"
            className="service-img"
          />

          <div className="service-card-content">
            <h2>AI-Assisted Business Solutions</h2>

            <p>
              AI-assisted tools that can help automate repetitive
              tasks, support data analysis, and improve business
              workflows.
            </p>

            <Link to="/services/ai" className="service-link">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;






