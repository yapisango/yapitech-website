import React from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";

export default function CloudSolutions() {
  return (
    <div className="service-detail-page">
      <h1>Cloud Solutions</h1>

      <img 
        src="images/services/cloud-solutions.jpg"
        alt="Cloud Solutions"
        className="service-detail-img"
      />

      <section className="overview">
        <h2>Overview</h2>
        <p>
          I help businesses move to the cloud smoothly and safely. Whether you're 
          adopting new tools or optimizing existing infrastructure, I ensure your 
          operations run efficiently, securely, and with minimal downtime.
        </p>
      </section>

      <section className="features">
        <h2>What’s Included</h2>
        <ul>
          <li>Cloud setup and integration</li>
          <li>Security and access control</li>
          <li>Cloud storage management</li>
          <li>Workflow & team collaboration tools</li>
          <li>Ongoing system maintenance</li>
        </ul>
      </section>

      <Link to="/contact" className="quote-btn">Request a Quote</Link>
    </div>
  );
}