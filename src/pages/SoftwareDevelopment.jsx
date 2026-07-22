import React from "react";
import { Link } from "react-router-dom";

export default function SoftwareDevelopment() {
  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <h1>⚙️ Software Development</h1>

        <p>
          We build custom software solutions that streamline operations,
          automate repetitive tasks, and help organisations scale efficiently.
        </p>

        <Link to="/contact" className="btn">
          Discuss Your Project
        </Link>
      </section>

      <section className="service-content">
        <h2>What We Offer</h2>

        <ul>
          <li>Custom Business Applications</li>
          <li>CRM & Client Management Systems</li>
          <li>School & Educare Management Systems</li>
          <li>Workflow Automation</li>
          <li>Database Design & Integration</li>
          <li>Reporting Dashboards</li>
        </ul>

        <h2>Who It's For</h2>

        <p>
          Ideal for schools, SMEs, startups, consultants and organisations
          looking to replace manual processes with efficient digital systems.
        </p>
      </section>
    </div>
  );
}