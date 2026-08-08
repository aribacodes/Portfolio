import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      className={`project-card ${
        isReversed ? "project-card-reversed" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Image */}

      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-link"
        aria-label={`View ${project.title}`}
      >
        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.title} website`}
          />

          <div className="project-image-overlay">
            <span>View project</span>
            <span className="project-overlay-arrow">
              ↗
            </span>
          </div>
        </div>
      </a>

      {/* Content */}

      <div className="project-content">

        <div className="project-topline">
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="project-category">
            {project.category}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-bottom">

          <div className="project-tech">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-links">

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
            >
              Live site
              <FiExternalLink />
            </a>


          </div>

        </div>

      </div>
    </motion.article>
  );
};

export default ProjectCard;