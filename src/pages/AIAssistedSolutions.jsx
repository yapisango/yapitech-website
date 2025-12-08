import React from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";

export default function AIAssistedSolutions() {
  return (
    <div className="service-detail-page">
      <h1>AI-Assisted Solutions</h1>

      <img 
        src="images/services/ai-solutions.jpg"
        alt="AI Solutions"
        className="service-detail-img"
      />

      <section className="overview">
        <h2>Overview</h2>
        <p>
          Give your business an edge with AI-powered tools and automation. 
          I build small, practical AI applications that boost productivity, 
          simplify workflows, and help you operate smarter.
        </p>
      </section>

      <section className="features">
        <h2>What’s Included</h2>
        <ul>
          <li>AI-powered chatbots</li>
          <li>Task automation</li>
          <li>Content generation tools</li>
          <li>Data analysis assistants</li>
          <li>Custom lightweight AI apps</li>
        </ul>
      </section>

      <Link to="/contact" className="quote-btn">Request a Quote</Link>
    </div>
  );
}