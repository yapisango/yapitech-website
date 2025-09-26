import React from "react";

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
        <img
          src="/image/YapiTech banner.jpg"
          alt="Innovative solutions banner"
          className="hero-banner"
        />
        <h1>YapiTech Innovations</h1>
        <p className="tagline">Innovating Tomorrow, Today</p>
        <a className="btn" href="/contact">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

