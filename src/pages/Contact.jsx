import React, { useState, useRef } from "react";

const FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLSfFzCwBdB3vIYKbYZUkwgj3gAY5TR9lb5q8-CyVATRbYsIyRA/viewform?usp=pp_url";

// Build Google Forms prefilled link
function buildPrefilledLink({ email, name, message }) {
  const params = new URLSearchParams({
    "entry.1671128960": email || "",
    "entry.1649166049": name || "",
    "entry.1714035567": "YapiTech Innovations",
    "entry.1578812162": "Frontend Web Development",
    "entry.365544706": message || "",
  });

  return `${FORM_BASE}&${params.toString()}`;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const form = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Your message has been sent successfully!");
      setFormData({ title: "", name: "", email: "", message: "" });
    } else {
      alert("❌ Error sending message: " + data.error);
    }
  } catch (err) {
    alert("⚠️ Network error: " + err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1>Let's Build Something Great Together</h1>

        <p className="contact-intro">
          Whether you need a professional website,
          custom software solution, cloud infrastructure,
          or AI-powered business automation, we're ready
          to help bring your ideas to life.
        </p>

        <div className="contact-trust">

          <span>✓ CIPC Registered</span>

          <span>✓ CSD Registered</span>

          <span>✓ B-BBEE Compliant</span>

          <span>✓ SARS Tax Compliant</span>

        </div>

        <div className="contact-info-grid">

          <div className="contact-info-card">
            <h3>📍 Location</h3>
            <p>Johannesburg, South Africa</p>
          </div>

          <div className="contact-info-card">
            <h3>⚡ Response Time</h3>
            <p>Within 24–48 Hours</p>
          </div>

          <div className="contact-info-card">
            <h3>💼 Services</h3>
            <p>Web, Software, AI & Cloud Solutions</p>
          </div>

        </div>

        <div className="why-contact">

          <h2>Why Work With YapiTech?</h2>

          <div className="why-grid">

            <div className="why-card">
              <h3>⚡ Fast Communication</h3>
              <p>
                Clear communication and quick responses
                throughout every project.
              </p>
            </div>

            <div className="why-card">
              <h3>💡 Tailored Solutions</h3>
              <p>
                Every solution is customised to your
                business requirements.
              </p>
            </div>

            <div className="why-card">
              <h3>🤝 Long-Term Partnership</h3>
              <p>
                We focus on building technology that
                supports sustainable growth.
              </p>
            </div>

          </div>

        </div>

        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <label>
            Subject:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </label>

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
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
              placeholder="Your Email"
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </label>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? (
              <span className="loading-spinner">
                <span className="spinner" /> Sending…
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        <a
          className="btn google-form-btn"
          href={buildPrefilledLink(formData)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Prefilled Google Form
        </a>

        {/* <TestEmail /> */}

      </div>
    </section>
  );
}





