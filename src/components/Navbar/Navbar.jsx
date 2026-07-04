import "./Navbar.css";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      {/* Logo */}

      <a href="#home" className="logo">
        <div className="logoBox">
          <img src={logo} alt="Nidhi Builders" />
        </div>
      </a>

      {/* Navigation */}

      <nav className={menuOpen ? "nav active" : "nav"}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#portfolio" onClick={closeMenu}>
          Projects
        </a>

        <a href="#process" onClick={closeMenu}>
          Process
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

      {/* Mobile Menu */}

      <div
        className="menuIcon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

    </header>

  );

}

export default Navbar;