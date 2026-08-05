import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-violet-400 text-sm font-medium">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Every project is designed with performance, responsiveness,
            and user experience in mind. These websites demonstrate my
            ability to create modern digital experiences for different
            business industries.
          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;