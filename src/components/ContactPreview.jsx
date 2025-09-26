import React from "react";
import { Link } from "react-router-dom";

export default function ContactPreview() {
  return (
    <section className="contact-preview">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Get in touch with us today.</p>
      <Link to="/contact" className="btn">Go to Contact Page</Link>
    </section>
  );
}
