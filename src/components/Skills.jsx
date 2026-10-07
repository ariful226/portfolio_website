function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python"
  ];

  return (
    <section id="skills" className="skills section">

      <div className="section-title">
        <p>What I Know</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <h3>{skill}</h3>
            <p>Learning & practicing</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;