import React from "react";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import ContactPreview from "../components/ContactPreview";
import Industries from "../components/Industries";
import FeaturedProjects from "../components/FeaturedProjects"
import Pricing from "../components/Pricing"
import "../index.css";

function Home() {
  return (
    <div>
      <Hero />
      <Industries />
      <FeaturedProjects />
      <Pricing />
      <AboutPreview />
      <ServicesPreview />
      <ContactPreview />
    </div>
  );
}

export default Home;

