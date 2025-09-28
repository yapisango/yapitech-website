// src/components/TestEmail.jsx
import React from "react";
import emailjs from "@emailjs/browser";

export default function TestEmail() {
  if (process.env.NODE_ENV !== "development") {
    // 🔒 Hide in production
    return null;
  }

  const handleTest = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: "Test User",
          from_email: "test@example.com",
          message: "This is a test email from Netlify deployment.",
        },
        publicKey
      )
      .then(
        (response) => {
          alert("✅ Test email sent! Check your inbox.");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("❌ Failed to send test email. Check console for details.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
      <button
        onClick={handleTest}
        style={{
          background: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send Test Email
      </button>
    </div>
  );
}


