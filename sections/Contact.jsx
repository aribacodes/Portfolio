import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Let's Build
            <span className="block text-violet-500">
              Something Amazing
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Have a project in mind? Let's connect and create a modern,
            responsive website for your business.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#151B2F] border border-white/10 p-10"
          >

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="text-slate-400 mt-5 leading-8">
              I'm currently available for freelance projects.
              Feel free to reach out through email or social media.
            </p>

            <div className="space-y-6 mt-10">

              <div>
                <p className="text-violet-400 text-sm">
                  Email
                </p>

                <a
                  href="mailto:your@email.com"
                  className="text-lg"
                >
                  your@email.com
                </a>
              </div>

              <div>
                <p className="text-violet-400 text-sm">
                  Location
                </p>

                <p>Kota, Rajasthan, India</p>
              </div>

            </div>

            <div className="flex gap-5 mt-10 text-3xl">

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="mailto:your@email.com">
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#151B2F] border border-white/10 p-10 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-[#101826] outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-[#101826] outline-none"
            />

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="w-full p-4 rounded-xl bg-[#101826] outline-none resize-none"
            />

            <button
              className="w-full bg-violet-600 hover:bg-violet-500 py-4 rounded-xl transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;