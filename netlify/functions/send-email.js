import nodemailer from "nodemailer";

export async function handler(event) {
  try {
    const { title, name, email, message } = JSON.parse(event.body);

    // Transporter setup using Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === "465", // true for SSL (465), false for TLS (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1️⃣ Send mail to Admin
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission: ${title || "No Subject"}`,
      text: `
        You got a new message from your website contact form:
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      replyTo: email,
    });

    // 2️⃣ Send confirmation email to User
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "We received your message ✅",
      text: `
        Hi ${name},

        Thank you for reaching out to YapiTech Innovations. 
        We have received your message and will get back to you as soon as possible.

        📩 Your Message:
        "${message}"

        Regards,  
        YapiTech Innovations Team
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Emails sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
