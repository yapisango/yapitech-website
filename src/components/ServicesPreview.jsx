import React from "react";
import { Link } from "react-router-dom";

export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <h2>Our Services</h2>
      <ul>
        <li>🌐 Web Development</li>
        <li>⚙️ Software Development</li>
        <li> 🤖 AI Assisted BusinessSolutions</li>
        <li>☁️ Cloud Solutions</li>
      </ul>
      <Link to="/services" className="btn">Explore Services</Link>
    </section>
  );
}
