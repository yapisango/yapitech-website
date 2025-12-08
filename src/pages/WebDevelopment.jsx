import React from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";

export default function WebDevelopment() {
  return (
    <div className="service-detail-page">
      <h1>Website Development</h1>

      <img 
        src="images/services/web-dev.jpg"
        alt="Website Development"
        className="service-detail-img"
      />

      <section className="overview">
        <h2>Overview</h2>
        <p>
          Your website is your digital storefront. I build fast, responsive, and
          visually engaging websites tailored to your business needs. Whether you're 
          growing your online presence or refreshing your brand, I create sites 
          that stand out and convert visitors into customers.
        </p>
      </section>

      <section className="features">
        <h2>What’s Included</h2>
        <ul>
          <li>Custom website design</li>
          <li>Responsive layouts for all devices</li>
          <li>SEO-ready structure</li>
          <li>Performance-optimized pages</li>
          <li>Portfolio websites, landing pages, business sites</li>
        </ul>
      </section>

      <Link to="/contact" className="quote-btn">Request a Quote</Link>
    </div>
  );
}