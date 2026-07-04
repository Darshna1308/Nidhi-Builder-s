import "./Portfolio.css";
import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  CheckCircle,
  Ruler,
  ArrowRight,
} from "lucide-react";

import signatureVideo from "../../assets/videos/signature-project.mp4";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      {/* ================= SECTION HEADING ================= */}

      <motion.div
        className="portfolioHeading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>OUR SIGNATURE PROJECT</span>

        <h2>
          Crafting Homes
          <br />
          <span>That Define Luxury</span>
        </h2>

        <p>
          Every landmark begins with a vision. This signature residence
          showcases our commitment to luxury, engineering precision,
          premium materials and timeless architectural excellence.
        </p>
      </motion.div>

      <motion.div
        className="portfolioContainer"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* ================= VIDEO ================= */}

        <div className="videoSection">

          <video
            className="portfolioVideo"
            src={signatureVideo}
            autoPlay
            muted
            loop
            playsInline
          />

        </div>

        {/* ================= GLASS CARD ================= */}

        <motion.div
          className="projectCard"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >

          <span className="projectLabel">
            FEATURED RESIDENCE
          </span>

          <h2>
            A Landmark Residence
            <br />
            Built with Excellence
          </h2>

          <p>
            Constructed as the founder's personal residence, this home
            represents the highest standards of craftsmanship,
            thoughtful planning and architectural elegance that define
            every Nidhi Builders project.
          </p>

          {/* ================= INFO GRID ================= */}

          <div className="projectGrid">

            <div className="infoBox">

              <MapPin size={22} />

              <div>

                <span>Location</span>

                <h4>Jodhpur, Rajasthan</h4>

              </div>

            </div>

            <div className="infoBox">

              <Home size={22} />

              <div>

                <span>Project Type</span>

                <h4>Luxury Residence</h4>

              </div>

            </div>

            <div className="infoBox">

              <Ruler size={22} />

              <div>

                <span>Built-up Area</span>

                <h4>5140 Sq. Ft.</h4>

              </div>

            </div>

            <div className="infoBox">

              <CheckCircle size={22} />

              <div>

                <span>Status</span>

                <h4>Successfully Completed</h4>

              </div>

            </div>

          </div>

          {/* ================= BUTTON ================= */}

          <a
            href="#contact"
            className="portfolioBtn"
          >
            Start Your Dream Project

            <ArrowRight size={18} />
          </a>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default Portfolio;