function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-small-text">
          Welcome to my portfolio
        </p>

        <h1>
          Hello, I'm a
          <span> Computer Science Student</span>
        </h1>

        <p className="hero-description">
          I am passionate about programming, web development
          and learning new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;