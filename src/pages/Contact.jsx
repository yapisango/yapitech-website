import React, { useState, useRef } from "react";

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
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below:</p>

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
        {/* <TestEmail /> */}
      </div>
    </section>
  );
}





