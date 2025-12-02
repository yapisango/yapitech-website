export default function About() {
  return (
    <section id="about" className="about" aria-label="About YapiTech">
      <div className="container about-inner">
        <div className="about-text">
          <h2>About Us</h2>

          <p>
            At <strong>YapiTech Innovations</strong>, we combine science, 
            technology, and creativity to deliver modern digital solutions. 
            Founded by <strong>Sango Mabhuti Yapi</strong> 
            (<em>BSc in Chemistry and Computer Science</em>), the company blends 
            technical expertise with innovative problem-solving to help clients 
            thrive in a rapidly evolving digital world.
          </p>

          <p>
            We empower businesses and individuals through modern web development, 
            custom software solutions, and technical consulting—providing 
            forward-thinking services tailored for sustainable growth.
          </p>
        </div>

        <div className="about-photo">
          <img 
            src="/image/Sango.jpg" 
            alt="Founder and Developer: Sango Mabhuti Yapi" 
          />
        </div>
      </div>
    </section>
  );
}