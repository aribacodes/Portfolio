import { motion } from "framer-motion";
import Button from "../components/Button";
import laptop from "../assets/images/laptop.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-8 pt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-violet-400 font-medium tracking-widest uppercase">
            Freelance Web Developer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-5">
            Hi, I'm{" "}
            <span className="text-violet-500">
              Ariba Abbasi
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-6 leading-relaxed">
            I build modern websites that help businesses grow online.
          </h2>

          <p className="text-slate-400 mt-8 leading-8 max-w-xl">
            I specialize in designing fast, responsive, and visually
            appealing websites for cafés, salons, boutiques, gyms,
            restaurants, and local businesses. My goal is to create
            websites that not only look beautiful but also convert
            visitors into customers.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Button primary href="#projects">
              View Projects
            </Button>

            <Button href="#contact">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute w-[420px] h-[420px] rounded-full bg-violet-600/20 blur-[120px]" />

          {/* Laptop */}

          <motion.img
            src={laptop}
            alt="Laptop Mockup"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-xl drop-shadow-2xl"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;