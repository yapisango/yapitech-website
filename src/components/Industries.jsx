import { Link } from "react-router-dom";

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="container">

        <h2>Industries We Serve</h2>

        <p className="section-intro">
          We help organisations across multiple industries
          leverage technology to improve efficiency,
          automate processes, and drive growth.
        </p>

        <div className="industries-grid">

          <div className="industry-card">
            <h3>🎓 Schools & Educare Centres</h3>
            <p>
              Digital solutions for learner management,
              attendance tracking, parent communication,
              and reporting.
            </p>
          </div>

          <div className="industry-card">
            <h3>🏢 Small & Medium Businesses</h3>
            <p>
              Business websites, CRM systems,
              automation tools, and cloud solutions
              tailored for growing SMEs.
            </p>
          </div>

          <div className="industry-card">
            <h3>🚀 Startups</h3>
            <p>
              MVP development, web applications,
              product validation, and scalable
              technology foundations.
            </p>
          </div>

          <div className="industry-card">
            <h3>🏛 Government & Public Sector</h3>
            <p>
              Secure, scalable digital systems designed
              to support public service delivery and
              operational efficiency.
            </p>
          </div>

          <div className="industry-card">
            <h3>💼 Professional Services</h3>
            <p>
              Solutions for consultants, legal firms,
              accounting practices, and service-based
              businesses.
            </p>
          </div>

        </div>

        <div className="industry-cta">
          <Link to="/contact" className="btn btn-primary">
            Discuss Your Industry Requirements
          </Link>
        </div>

      </div>
    </section>
  );
}