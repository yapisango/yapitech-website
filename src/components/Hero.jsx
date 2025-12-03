import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
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

        {/* Main title */}
        <h1 className="hero-title">Build. Innovate. Transform.</h1>

        {/* Sub-title */}
        <p className="hero-subtitle">
          Modern, scalable digital solutions for businesses that want to grow.
        </p>

        {/* Intro paragraph */}
        <p className="hero-intro">
          YapiTech Innovations specializes in creating fast, responsive, and 
          user-focused digital experiences. From websites to cloud systems and 
          AI-powered tools, we help businesses modernize and operate smarter.
        </p>

        {/* --- CTA Buttons --- */}
        <div className="hero-buttons">

          {/* New CTA 1 (External Form) */}
          <a
            href="https://forms.gle/tY7Frt1ei2CMUNf49"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Project
          </a>

          {/* New CTA 2 (External Form) */}
          <a
            href="https://forms.gle/tY7Frt1ei2CMUNf49"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a Quote
          </a>

          {/* Your original button (internal route) */}
          <Link to="/contact" className="btn btn-original">
            Get in Touch
          </Link>

        </div>
      </div>
    </section>
  );
}



