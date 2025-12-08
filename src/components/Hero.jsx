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

        <h1 className="hero-title">Build. Innovate. Transform.</h1>

        <p className="hero-subtitle">
          Modern, scalable digital solutions for businesses that want to grow.
        </p>

        <p className="hero-intro">
          YapiTech Innovations specializes in creating fast, responsive, and 
          user-focused digital experiences. From websites to cloud systems and 
          AI-powered tools, we help businesses modernize and operate smarter.
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
            Start Your Project
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
            Get in Touch
          </Link>

        </div>
      </div>
    </section>
  );
}