import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {

  // Full safe Google Form link — NOT the short URL
  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfFzCwBdB3vIYKbYZUkwgj3gAY5TR9lb5q8-CyVATRbYsIyRA/viewform?usp=pp_url";

  return (
    <section
      id="home"
      className="hero"
      aria-label="Hero section"
      style={{
        backgroundImage: "url('/image/istockphoto.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container hero-inner">

        {/* Banner image */}
        <img
          src="/image/yapitech-banner.jpg"
          alt="YapiTech Innovations Banner"
          className="hero-banner"
        />

        <h1 className="hero-title">Custom Software, Websites & AI Solutions for Growing Businesses</h1>

        <p className="hero-subtitle">
          We help SMEs, startups, schools and organisations build modern digital solutions that automate processes, improve efficiency and accelerate growth.
        </p>

        <p className="hero-intro">
          From professional business websites and custom software
          development to cloud solutions and AI-powered tools,
          YapiTech helps organisations modernise operations and
          achieve measurable business results.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">

          {/* CTA 1 */}
          <a
            href={FORM_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation
          </a>

          {/* CTA 2 */}
          <a
            href={FORM_URL}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a Quote
          </a>

          {/* Internal Route */}
          <Link to="/contact" className="btn btn-original">
            View Our Services
          </Link>

        </div>

        <div className="hero-trust">
          <span>✓ CIPC Registered</span>
          <span>✓ CSD Registered</span>
          <span>✓ B-BBEE Compliant</span>
          <span>✓ SARS Tax Compliant</span>
        </div>

        <div className="hero-stats">
          <div>
            <strong>4+</strong>
            <span>Core Services</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Responsive Design</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Online Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
}