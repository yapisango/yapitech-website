import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} YapiTech Innovations. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/yapisango" target="_blank" rel="noopener noreferrer">
                <img src="/image/github.png" alt="GitHub Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sango-yapi" target="_blank" rel="noopener noreferrer">
              <img src="/image/linkedIn.png" alt="LinkedIn Icon" />
            </a>
          </li>
          <li>
            <a href="mailto:info@yapitechinnovations.co.za">
              <img src="/image/email.png" alt="Email Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/sango.yapi">
              <img src="/image/Facebook.png" alt="Facebook Icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
