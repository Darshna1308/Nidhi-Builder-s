import "./Hero.css";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";

import heroBg from "../../assets/images/hero-bg.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Image */}
      <img
        src={heroBg}
        alt="Nidhi Builders"
        className="heroBackground"
      />

      {/* Dark Overlay */}
      <div className="heroOverlay"></div>

      {/* Main Content */}
      <div className="heroContainer">

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="heroTag">
            NIDHI BUILDERS • JODHPUR
          </span>

          <h1>
            Building
            <br />
            Tomorrow's
            <span> Landmarks.</span>
          </h1>

          <p>
            We specialize in luxury residential homes,
            commercial buildings and turnkey construction
            with uncompromising quality, engineering
            excellence and timely delivery.
          </p>

          <div className="heroButtons">

            <a href="#contact" className="primaryBtn">
              Get Free Consultation
              <ArrowRight size={18} />
            </a>

            <a href="#portfolio" className="secondaryBtn">
              View Our Projects
            </a>

          </div>

          {/* Statistics */}

          <div className="heroStats">

            <div>
              <h2>150+</h2>
              <span>Projects Completed</span>
            </div>

            <div>
              <h2>23+</h2>
              <span>Years Experience</span>
            </div>

            <div>
              <h2>99%</h2>
              <span>Client Satisfaction</span>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}

      <a href="#about" className="scrollDown">

        <ChevronDown size={30} />

      </a>

    </section>
  );
}

export default Hero;