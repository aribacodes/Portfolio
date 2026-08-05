import { motion } from "framer-motion";

const Button = ({
  children,
  primary = false,
  href,
  onClick,
  target = "_self",
}) => {
  const classes = `
    inline-flex items-center justify-center
    px-7 py-3.5
    rounded-xl
    font-medium
    text-sm
    transition-all
    duration-300
    ${
      primary
        ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/20"
        : "border border-violet-500 text-white hover:bg-violet-600/10"
    }
  `;

  const animation = {
    whileHover: {
      scale: 1.05,
      y: -3,
    },
    whileTap: {
      scale: 0.96,
    },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        {...animation}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      {...animation}
    >
      {children}
    </motion.button>
  );
};

export default Button;