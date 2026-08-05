import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
    level: "Intermediate",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    color: "text-sky-400",
    level: "Advanced",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-600",
    level: "Intermediate",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
    level: "Intermediate",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-violet-400 text-sm font-medium">
            Skills
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Technologies
            <span className="block text-violet-500">
              I Work With
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            I use modern frontend technologies to create responsive,
            beautiful and high-performance websites with clean code and
            smooth user experiences.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-[#151B2F] p-8 text-center shadow-lg transition-all duration-500 hover:shadow-violet-500/20"
            >

              <div
                className={`text-6xl ${skill.color} transition-transform duration-500 group-hover:scale-110`}
              >
                {skill.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {skill.name}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {skill.level}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;