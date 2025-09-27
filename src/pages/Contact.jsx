import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Send to admin
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("✅ Admin email sent");

          // Send confirmation to user
          emailjs
            .sendForm(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
              form.current,
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
              () => {
                console.log("✅ Confirmation email sent");
                alert("Your message has been sent successfully!");
                setFormData({ title: "", name: "", email: "", message: "" });
                setLoading(false);
              },
              (err) => {
                console.error("❌ Failed sending confirmation:", err.text);
                alert("Message sent to admin, but confirmation failed.");
                setLoading(false);
              }
            );
        },
        (err) => {
          console.error("❌ Failed sending to admin:", err.text);
          alert("Oops! Something went wrong.");
          setLoading(false);
        }
      );
  }

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
      </div>
    </section>
  );
}





