import "./About.css";
import { motion } from "framer-motion";
import founder from "../../assets/images/founder.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="aboutContainer">

        {/* LEFT SIDE */}
        <motion.div
          className="aboutImage"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={founder} alt="Mahesh Parihar" />

          <div className="founderInfo">
            <h3>Mahesh Parihar</h3>
            <p>Founder, Nidhi Builders</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="aboutContent"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="sectionTag">
            ABOUT NIDHI BUILDERS
          </span>

          <h2>
            Building Excellence
            <br />
            Since Day One.
          </h2>

          <p>
            Nidhi Builders is committed to delivering premium
            residential, commercial and infrastructure projects
            with unmatched quality, innovation and transparency.
          </p>

          <p>
            Every project reflects our dedication to engineering
            excellence, timely delivery and customer satisfaction.
            We believe every structure should become a landmark.
          </p>

          <div className="aboutNumbers">
            <div>
              <h3>150+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>23+</h3>
              <span>Years</span>
            </div>

            <div>
              <h3>99%</h3>
              <span>Satisfaction</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;