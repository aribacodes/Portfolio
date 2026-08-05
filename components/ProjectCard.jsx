import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151B2F] shadow-lg hover:shadow-violet-500/20 transition-all duration-500"
    >
      {/* Project Image */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-8">

        <span className="inline-block rounded-full bg-violet-600/10 px-4 py-1 text-xs font-medium tracking-wide text-violet-400">
          {project.category}
        </span>

        <h2 className="mt-5 text-3xl font-bold">
          {project.title}
        </h2>

        <p className="mt-5 leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex gap-4">

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-500"
          >
            <FiExternalLink />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-500 px-6 py-3 font-medium transition hover:bg-violet-600/10"
          >
            <FiGithub />
            GitHub
          </a>

        </div>

      </div>
    </motion.article>
  );
};

export default ProjectCard;