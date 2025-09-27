import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlaear1",      // Service ID
        "template_azoh6mp",     // Template ID
        form.current,           // Form reference
        "gmryos3FowU41GsbR"     // Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("✅ Thank you for contacting us! We’ll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("❌ Something went wrong. Please try again later.");
        }
      );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below:</p>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </label>

          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </label>

          <label>
            Message:
            <textarea 
              name="message" 
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

