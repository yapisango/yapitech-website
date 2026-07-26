export default function EngineeringHero() {
  return (
    <section className="engineering-hero">
      <div className="container">

        <span className="hero-badge">
          YapiTech Engineering Handbook
        </span>

        <h1 className="hero-title">
          Engineering Software That Evolves With Your Business
        </h1>

        <p className="hero-description">
          At YapiTech, software engineering begins with understanding the
          business—not writing code.
          <br /><br />
          We build flexible, scalable and maintainable software that adapts
          as organisations grow, ensuring today's decisions remain valuable
          tomorrow.
        </p>

        <div className="hero-buttons">

          <a
            href="#engineering-principles"
            className="btn-primary"
          >
            Explore Our Principles
          </a>

          <a
            href="/contact"
            className="btn-secondary"
          >
            Talk to Our Team
          </a>

        </div>

      </div>
    </section>
  );
}