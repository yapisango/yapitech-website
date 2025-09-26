import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>
        At YapiTech Innovations, we deliver top-notch tech solutions to help
        your business thrive.
      </p>

      <div className="service-list">
        {/* Web Development */}
        <div className="service-card">
          <img
            src="public/image/Web Development.jpg"
            alt="Web Development"
            className="service-img"
          />
          <div className="service-card-content">
            <h2>🌐 Web Development</h2>
            <p>
              We create modern, responsive, and high-performance websites for
              businesses of all sizes.
            </p>
            <Link to="/services/web" className="service-link">
              View Projects →
            </Link>
          </div>
        </div>

        {/* Software Development */}
        <div className="service-card">
          <img
            src="/image/Software Development1.avif"
            alt="Software Development"
            className="service-img"
          />
          <div className="service-card-content">
            <h2>⚙️ Software Development</h2>
            <p>
              Tailor-made software solutions that automate workflows and boost
              efficiency.
            </p>
            <Link to="/services/software" className="service-link">
              View Projects →
            </Link>
          </div>
        </div>

        {/* Mobile App Development */}
        <div className="service-card">
          <img
            src="/image/Mobile Development.avif"
            alt="Mobile App Development"
            className="service-img"
          />
          <div className="service-card-content">
            <h2>📱 Mobile App Development</h2>
            <p>
              Mobile-first applications that offer seamless user experiences
              across devices.
            </p>
            <Link to="/services/mobile" className="service-link">
              View Projects →
            </Link>
          </div>
        </div>

        {/* Cloud Solutions */}
        <div className="service-card">
          <img
            src="/image/Cloud Solutions.avif"
            alt="Cloud Solutions"
            className="service-img"
          />
          <div className="service-card-content">
            <h2>☁️ Cloud Solutions</h2>
            <p>
              Scalable cloud-based systems to ensure your business is always
              connected and secure.
            </p>
            <Link to="/services/cloud" className="service-link">
              View Projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;







