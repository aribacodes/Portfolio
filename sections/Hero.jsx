import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-eyebrow-line" />
          Freelance Web Designer & Developer
        </motion.div>

      <motion.h1
  className="hero-title"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
>
  <motion.span
    className="hero-word"
    variants={{
      hidden: { opacity: 0, y: 35 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >
    Websites
  </motion.span>{" "}

  <motion.span
    className="hero-word"
    variants={{
      hidden: { opacity: 0, y: 35 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >
    that
  </motion.span>{" "}

  <motion.span
    className="hero-word"
    variants={{
      hidden: { opacity: 0, y: 35 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >
    make
  </motion.span>

  <br />

  <motion.span
    className="hero-word hero-accent"
    variants={{
      hidden: { opacity: 0, y: 35 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >
    your business
  </motion.span>{" "}

  <motion.span
    className="hero-word"
    variants={{
      hidden: { opacity: 0, y: 35 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >
    stand out.
  </motion.span>
</motion.h1>

        <div className="hero-bottom">

          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p>
  I design and develop modern websites for startups, small
  businesses, and growing brands that want a stronger presence
  online.
</p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-button hero-button-primary"
              >
                View my work
                <span>↗</span>
              </a>

              <a href="#contact" className="hero-button">
                Let's talk
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-availability"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="availability-dot" />

            <div>
              <span className="availability-label">
                Available for work
              </span>

              <span className="availability-text">
                Freelance projects · 2026
              </span>
            </div>
          </motion.div>

        </div>

        

      </div>
    </section>
  );
};

export default Hero;