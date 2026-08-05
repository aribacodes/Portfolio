import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Clean Code",
    description:
      "Every project is built using clean, reusable and scalable React code following modern development practices.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    description:
      "Optimized websites with lightning-fast loading speed and smooth user interactions.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that look beautiful on desktops, tablets and smartphones.",
  },
  {
    icon: <FaPalette />,
    title: "Modern UI/UX",
    description:
      "Elegant interfaces with thoughtful spacing, animations and user-friendly experiences.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-violet-400 text-sm font-medium">
            About Me
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Passionate About Building
            <span className="block text-violet-500">
              Beautiful Web Experiences
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8">
            I'm Ariba Abbasi, a freelance web developer focused on building
            modern, responsive and high-performance websites. I love turning
            business ideas into elegant digital experiences that leave a
            lasting impression.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-[#151B2F] p-10 shadow-lg hover:shadow-violet-500/20 transition-all duration-500"
          >

            <h3 className="text-3xl font-bold">
              Why Work With Me?
            </h3>

            <p className="mt-6 text-slate-400 leading-8">
              I create websites that combine modern aesthetics with
              functionality. Every website is designed to be responsive,
              SEO-friendly, fast, and easy to maintain.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h4 className="text-5xl font-bold text-violet-500">
                  4+
                </h4>
                <p className="mt-2 text-slate-400">
                  Projects Completed
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold text-cyan-400">
                  100%
                </h4>
                <p className="mt-2 text-slate-400">
                  Responsive Designs
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold text-pink-400">
                  24/7
                </h4>
                <p className="mt-2 text-slate-400">
                  Support
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold text-emerald-400">
                  5★
                </h4>
                <p className="mt-2 text-slate-400">
                  Quality Focus
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Cards */}

          <div className="grid sm:grid-cols-2 gap-6">

            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-[#151B2F] p-8 shadow-lg hover:shadow-violet-500/20 transition-all duration-500"
              >
                <div className="text-4xl text-violet-400">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {card.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;