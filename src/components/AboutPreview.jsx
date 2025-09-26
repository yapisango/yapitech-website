import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <h2>About Us</h2>
      <p>
        At YapiTech Innovations, we are passionate about combining science and
        technology to deliver creative digital solutions. Founded by Sango
        Mabhuti Yapi, the company bridges technical expertise and innovative
        problem solving.
      </p>
      <Link to="/about" className="btn">Learn More</Link>
    </section>
  );
}
