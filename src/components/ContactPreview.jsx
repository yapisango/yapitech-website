import React from "react";
import { Link } from "react-router-dom";

export default function ContactPreview() {
  return (
    <section className="contact-preview">

      <h2>Ready to Start Your Project?</h2>

      <p>
        Whether you need a professional website,
        custom software, cloud solutions, or AI-powered
        business tools, YapiTech can help bring your
        ideas to life.
      </p>

      <div className="contact-preview-features">
        <span>✓ Free Consultation</span>
        <span>✓ Custom Solutions</span>
        <span>✓ Responsive Support</span>
      </div>

      <Link to="/contact" className="btn">
        Book a Consultation
      </Link>

    </section>
  );
}