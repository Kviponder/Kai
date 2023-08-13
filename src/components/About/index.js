import ProfileImage from "../Profile";

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <ProfileImage />
          </div>
          <div className="col-md-6">
            <p>
              Hello! I'm [Your Name], a passionate and creative web developer
              based in [Your Location]. With a background in [Your Relevant
              Background], I specialize in building modern and user-friendly web
              applications using the latest technologies.
            </p>
            <p>
              I enjoy turning complex problems into simple, beautiful, and
              intuitive designs. When I'm not coding, you can find me exploring
              the outdoors, reading a good book, or experimenting with new
              cooking recipes.
            </p>
            <p>
              Let's work together and bring your ideas to life. Feel free to
              reach out to me through the contact form or connect with me on
              [Your Social Media].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
