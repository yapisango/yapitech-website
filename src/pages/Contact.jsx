import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const form = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlaear1",     
        "template_8509x5u",   
        form.current,        
        "gmryos3FowU41GsbR" 
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("✅ Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("❌ Oops! Something went wrong, please try again.");
        }
      );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below:</p>

        {/* Attach ref to form */}
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"        // must match template field
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"       // must match template field
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"     // must match template field
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}


