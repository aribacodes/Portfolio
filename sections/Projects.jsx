import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Section heading */}

        <motion.div
          className="projects-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-label">
            <span />
            Selected Work
          </div>

          <h2>
            A few things
            <br />
            <em>I've built.</em>
          </h2>

          <p>
            A selection of websites designed and developed for businesses,
            brands, and digital experiences.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;