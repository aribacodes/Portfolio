import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Modern, responsive websites designed to give your business a strong and professional presence online.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused landing pages designed around a clear goal, whether that's generating enquiries, promoting a service, or launching something new.",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Thoughtful online shopping experiences that make it easy for customers to discover products and complete their purchase.",
  },
  {
    number: "04",
    title: "Website Redesigns",
    description:
      "Transform an outdated website into a cleaner, faster, and more engaging experience for your customers.",
  },
  {
    number: "05",
    title: "Startup Websites",
    description:
      "Fast, flexible websites for startups and growing teams that need to launch quickly and build credibility online.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <motion.div
          className="services-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="services-label">
            <span />
            What I Do
          </div>

          <h2 className="services-heading">
            Digital experiences
            <br />
            <em>built with purpose.</em>
          </h2>

          <p className="services-intro-text">
            From a simple business website to a complete online store,
            I create digital experiences around what your business actually
            needs.
          </p>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <span className="service-number">
                {service.number}
              </span>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <span className="service-arrow">↗</span>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;