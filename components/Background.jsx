import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[140px]"
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 60, -80, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[130px]"
      />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

    </div>
  );
};

export default Background;