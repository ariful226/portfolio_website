function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built with React."
    },

    {
      title: "Library Management System",
      description:
        "A system designed to manage books, students and library activities."
    },

    {
      title: "ShebaLink",
      description:
        "A local service finding platform for connecting users with service providers."
    }
  ];

  return (
    <section
      id="projects"
      className="projects section"
    >

      <div className="section-title">
        <p>My Recent Work</p>
        <h2>My Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.title}
          >

            <div className="project-icon">
              💻
            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <button
              className="project-btn"
              onClick={() =>
                alert(
                  `${project.title} project selected!`
                )
              }
            >
              View Project
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;