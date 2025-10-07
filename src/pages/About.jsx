import React from "react";

export default function About() {
  return (
    <section id="about" className="about" aria-label="About YapiTech">
      <div className="container about-inner">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>YapiTech Innovations</strong>, we are passionate about 
            combining science and technology to deliver creative digital solutions. 
            Founded by <strong>Sango Mabhuti Yapi</strong>, a graduate with a 
            <em> BSc in Chemistry and Computer Science</em>, the company bridges 
            technical expertise and innovative problem solving.
          </p>
          <p>
            We focus on empowering businesses and individuals through modern web 
            development, software solutions, and technical consulting tailored 
            for growth in a digital world.
          </p>
        </div>

        <div className="about-photo">
          <img src="public/image/Sango.jpg" alt="Founder Sango Mabhuti Yapi" />
        </div>
      </div>
    </section>
  );
}
