import { motion } from "framer-motion";

import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Section label */}
        <motion.div
          className="about-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span />
          About Me
        </motion.div>

        {/* Main statement */}
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            I don't just build websites.
            <br />
            I build the place where
            <br />
            <em>your customers meet you.</em>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="about-content">

          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-lead">
              I'm Ariba, a web designer and developer focused on creating
              modern digital experiences for businesses and independent
              brands.
            </p>

            <p>
              I combine thoughtful design with clean development to create
              websites that are visually distinctive, responsive, and built
              around the people who will actually use them.
            </p>

            <p>
              Whether you're launching something new or your current website
              needs a fresh start, I care about making the final experience
              feel intentional from the first click to the last.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div
            className="about-approach"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="approach-heading">
              <span>My approach</span>
            </div>

            <div className="approach-list">

              <div className="approach-item">
                <span className="approach-number">01</span>

                <div>
                  <h3>Understand</h3>
                  <p>
                    I start with your business, your audience, and what you
                    actually want the website to achieve.
                  </p>
                </div>
              </div>

              <div className="approach-item">
                <span className="approach-number">02</span>

                <div>
                  <h3>Design</h3>
                  <p>
                    I turn those ideas into a clear visual direction that
                    feels right for your brand.
                  </p>
                </div>
              </div>

              <div className="approach-item">
                <span className="approach-number">03</span>

                <div>
                  <h3>Build</h3>
                  <p>
                    I develop the experience to be responsive, fast, and
                    intuitive across devices.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;