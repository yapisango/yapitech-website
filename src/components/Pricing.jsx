export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">

        <h2>Pricing Packages</h2>

        <p className="section-intro">
          Flexible solutions designed to help businesses establish,
          grow and automate their operations.
        </p>

        <div className="pricing-grid">

          {/* Starter Website */}
          <div className="pricing-card">

            <h3>Starter Website</h3>

            <div className="price">
              Starting From
              <span>R3,500</span>
            </div>

            <p>
              Perfect for small businesses, consultants and startups
              looking to establish a professional online presence.
            </p>

            <ul>
              <li>✓ Up to 5 Pages</li>
              <li>✓ Mobile Responsive Design</li>
              <li>✓ Contact Form</li>
              <li>✓ Basic SEO Setup</li>
              <li>✓ Google Maps Integration</li>
            </ul>

            <button className="btn btn-primary">
              Request Quote
            </button>

          </div>

          {/* Business Growth */}
          <div className="pricing-card featured">

            <div className="popular-badge">
              Most Popular
            </div>

            <h3>Business Growth</h3>

            <div className="price">
              Starting From
              <span>R7,500</span>
            </div>

            <p>
              Designed for growing businesses that need more visibility,
              stronger branding and lead generation.
            </p>

            <ul>
              <li>✓ Everything in Starter</li>
              <li>✓ Custom Design</li>
              <li>✓ Advanced SEO</li>
              <li>✓ Google Analytics</li>
              <li>✓ Lead Generation Forms</li>
              <li>✓ Performance Optimisation</li>
            </ul>

            <button className="btn btn-primary">
              Book Consultation
            </button>

          </div>

          {/* Custom Software */}
          <div className="pricing-card">

            <h3>Custom Software & School Systems</h3>

            <div className="price">
              Custom
              <span>Quote</span>
            </div>

            <p>
              Tailored software solutions for schools, educare centres,
              SMEs and organisations requiring automation and digital transformation.
            </p>

            <ul>
              <li>✓ Custom Web Applications</li>
              <li>✓ Database Integration</li>
              <li>✓ User Management</li>
              <li>✓ Reporting Dashboards</li>
              <li>✓ Process Automation</li>
              <li>✓ Cloud Deployment</li>
            </ul>

            <button className="btn btn-primary">
              Discuss Project
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}