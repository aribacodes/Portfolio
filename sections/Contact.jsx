import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setError(false);

    try {
      await emailjs.sendForm(
        "service_a37t2tb",
        "template_pqeeo3d",
        event.target,
        "LA_MZSZB2klcU1IsA"
      );

      setSubmitted(true);
      event.target.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Intro */}

        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-label">
            <span />
            Have a project in mind?
          </div>

          <h2>
            Let's make something
            <br />
            <em>worth remembering.</em>
          </h2>
        </motion.div>
        {/* Startup Offer */}

<motion.div
  className="startup-offer"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.7 }}
>
  <div className="startup-offer-content">

    <span className="startup-offer-label">
      FOR NEW BEGINNINGS
    </span>

    <h3>
      New business?
      <em> Start here.</em>
    </h3>

    <p>
      Special pricing for startups, student founders
      and young businesses.
    </p>

    <span className="startup-offer-note">
      Your first website shouldn't be your biggest expense.
    </span>

  </div>

  <a
    href="#contact-form"
    className="startup-offer-link"
  >
    Let's build something
    <span>↗</span>
  </a>

</motion.div>
        {/* Main Contact Area */}

        <div className="contact-content">

          {/* Left */}

          <motion.div
            className="contact-message"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Whether you're starting a new business, refreshing an
              existing website, or simply have an idea you'd like to
              bring to life, I'd love to hear about it.
            </p>

            <a
              href="mailto:ariba.a.work@gmail.com"
              className="contact-email"
            >
              ariba.a.work@gmail.com
              <span>↗</span>
            </a>

            <div className="contact-socials">

  <a
    href="https://github.com/aribacodes"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/ariba-abbasi-cybercodes"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  

</div>

          </motion.div>

          {/* Form */}

          <motion.form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >

            <div className="form-field">
              <label htmlFor="name">
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">
                Tell me about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me a little about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Start a conversation"}

              <span>
                {sending ? "..." : "↗"}
              </span>
            </button>

          </motion.form>

        </div>
      </div>

      {/* Success Notification */}

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="contact-success"
            initial={{
              opacity: 0,
              y: 30,
              x: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <div className="success-dot">
              ✓
            </div>

            <div>
              <strong>
                Thanks for reaching out!
              </strong>

              <p>
                Your message has been sent. I'll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Notification */}

      <AnimatePresence>
        {error && (
          <motion.div
            className="contact-success"
            initial={{
              opacity: 0,
              y: 30,
              x: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <div className="success-dot">
              !
            </div>

            <div>
              <strong>
                Something went wrong.
              </strong>

              <p>
                Please try again or contact me directly by email.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;