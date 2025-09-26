import React from "react";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import ContactPreview from "../components/ContactPreview";
import "../index.css";

function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ContactPreview />
    </div>
  );
}

export default Home;

