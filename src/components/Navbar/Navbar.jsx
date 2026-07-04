import "./Navbar.css";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setProjectOpen(false);
  };

  return (

    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <a href="#home" className="logo">

        <div className="logoBox">

          <img src={logo} alt="Nidhi Builders"/>

        </div>

      </a>

      <nav className={menuOpen ? "nav active" : "nav"}>

        <a href="#home" onClick={closeMenu}>Home</a>

        <a href="#about" onClick={closeMenu}>About</a>

        <a href="#services" onClick={closeMenu}>Services</a>

        <div
          className="dropdown"
          onMouseEnter={() => setProjectOpen(true)}
          onMouseLeave={() => setProjectOpen(false)}
        >

          <button className="dropBtn">

            Projects

            <ChevronDown size={16}/>

          </button>

          <div className={projectOpen ? "dropdownMenu active" : "dropdownMenu"}>

            <a href="#portfolio" onClick={closeMenu}>Residential Homes</a>

            <a href="#portfolio" onClick={closeMenu}>Commercial Spaces</a>

            <a href="#portfolio" onClick={closeMenu}>Industrial Projects</a>

            <a href="#portfolio" onClick={closeMenu}>Interior Renovation</a>

            <a href="#portfolio" onClick={closeMenu}>✨ Build My Dream Home</a>

          </div>

        </div>

        <a href="#process" onClick={closeMenu}>Process</a>

        <a href="#contact" onClick={closeMenu}>Contact</a>

      </nav>

      <div
        className="menuIcon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <X size={30}/> : <Menu size={30}/>}

      </div>

    </header>

  );

}

export default Navbar;