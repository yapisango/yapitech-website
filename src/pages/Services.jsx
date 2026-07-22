import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>
        YapiTech Innovations provides modern digital solutions that help 
        businesses grow, operate smarter, and stay competitive.
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
            <h2>🌐 Web Development</h2>
            <p>
              Fast, secure, and responsive websites designed to give your 
              business a professional and modern online presence.
            </p>
            <Link to="/services/web" className="service-link">
              Learn More →
            </Link>
          </div>
        </div>

        {/* Software Development */}
        <div className="service-card">
          <img
            src="/image/software-development1.avif"
            alt="Software Development"
            className="service-img"
          />

          <div className="service-card-content">
            <h2>⚙️ Software Development</h2>

            <p>
              Custom software solutions designed to automate business
              processes, improve efficiency, and support long-term growth.
            </p>

            <Link to="/services/software" className="service-link">
              Learn More →
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
            <h2>☁️ Cloud Solutions</h2>
            <p>
              We set up cloud-based systems that improve reliability, enable 
              remote access, and streamline your business operations.
            </p>
            <Link to="/services/cloud" className="service-link">
              Learn More →
            </Link>
          </div>
        </div>

        {/* AI-Assisted Solutions */}
        <div className="service-card">
          <img
            src="/image/ai-assisted.jpg"
            alt="AI Services"
            className="service-img"
          />
          <div className="service-card-content">
            <h2>🤖 AI-Assisted Business Solutions</h2>
            <p>
              Custom AI tools that automate tasks, improve decision-making, 
              and enhance your business efficiency.
            </p>
            <Link to="/services/ai" className="service-link">
              Learn More →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;







