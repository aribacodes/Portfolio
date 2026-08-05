import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold tracking-wide"
        >
          <span className="text-white">
            A
          </span>

          <span className="text-violet-500">
            .
          </span>
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-10">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm text-slate-300 hover:text-white transition group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </nav>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-[#101826] border-t border-white/10"
          >

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-5 border-b border-white/5 text-slate-300 hover:text-violet-400 transition"
              >
                {item.name}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;