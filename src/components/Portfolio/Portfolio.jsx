import "./Portfolio.css";
import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  CheckCircle,
  Ruler,
} from "lucide-react";

import signatureVideo from "../../assets/videos/signature-project.mp4";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

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
            src={signatureVideo}
            autoPlay
            muted
            loop
            playsInline
            className="portfolioVideo"
          />

        </div>

        {/* ================= INFO CARD ================= */}

        <motion.div
          className="projectCard"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >

          <span className="projectLabel">
            SIGNATURE PROJECT
          </span>

          <h2>
            Luxurious Residential Home
          </h2>

          <p>
            Built as the personal residence of our founder,
            this home reflects the craftsmanship,
            luxury and engineering excellence that define
            every Nidhi Builders project.
          </p>

          <div className="projectGrid">

            <div className="infoBox">

              <MapPin size={20} />

              <div>

                <span>Location</span>

                <h4>Jodhpur, Rajasthan</h4>

              </div>

            </div>

            <div className="infoBox">

              <Home size={20} />

              <div>

                <span>Owner</span>

                <h4>Mahesh Parihar</h4>

              </div>

            </div>

            <div className="infoBox">

              <Ruler size={20} />

              <div>

                <span>Construction Area</span>

                <h4>5140 sq. ft.</h4>

              </div>

            </div>

            <div className="infoBox">

              <CheckCircle size={20} />

              <div>

                <span>Status</span>

                <h4>Completed</h4>

              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default Portfolio;