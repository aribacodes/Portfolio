import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              ARIBA<span>.</span>
            </a>

            <p>
              Web designer & developer creating thoughtful digital
              experiences for modern businesses.
            </p>
          </div>

          <div className="footer-links">
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ariba Abbasi</span>

          <span>
            Designed & built with intention.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;