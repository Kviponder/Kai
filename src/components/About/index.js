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
              Hello! I'm Kai Ponder, a passionate and creative web developer
              who recently moved from Orlando to Marion, Indiana. With a strong
              focus on backend technologies and a fullstack skill set, I specialize
              in building robust and efficient web applications.
            </p>
            <p>
              I enjoy tackling complex challenges and transforming them into
              elegant and user-friendly solutions. When I'm not immersed in code,
              you might find me exploring the outdoors, getting lost in a captivating
              book, or experimenting with new recipes in the kitchen.
            </p>
            <p>
              Let's collaborate to turn your ideas into reality! Don't hesitate to
              get in touch with me through the contact form or connect with me on
              Instagram at <a href="https://www.instagram.com/Kvi_ponder" target="_blank" rel="noopener noreferrer">@Kvi_ponder</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
