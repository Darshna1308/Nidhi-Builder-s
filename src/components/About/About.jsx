import "./About.css";
import { motion } from "framer-motion";
import { Award, Building2, ShieldCheck } from "lucide-react";
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

            <p>Founder & Managing Director</p>

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
            Building Trust.
            <br />
            <span>Creating Landmarks.</span>
          </h2>

          <p>
            At Nidhi Builders, we believe that every project is more than just
            bricks and concrete—it's a promise to build spaces where families
            grow, businesses thrive, and communities flourish. Our commitment
            to quality craftsmanship and timely delivery has earned the trust
            of countless clients across Rajasthan.
          </p>

          <p>
            From luxurious residences to commercial developments, we combine
            innovative engineering, premium materials, and meticulous planning
            to deliver projects that stand the test of time.
          </p>

          <div className="aboutHighlights">

            <div className="highlightCard">

              <Award size={26} />

              <div>

                <h4>Premium Quality</h4>

                <p>Superior construction standards with attention to every detail.</p>

              </div>

            </div>

            <div className="highlightCard">

              <Building2 size={26} />

              <div>

                <h4>150+ Projects</h4>

                <p>Successfully completed residential and commercial developments.</p>

              </div>

            </div>

            <div className="highlightCard">

              <ShieldCheck size={26} />

              <div>

                <h4>Trusted Delivery</h4>

                <p>Transparent process, timely completion and lasting relationships.</p>

              </div>

            </div>

          </div>

          <div className="aboutNumbers">

            <div>
              <h3>150+</h3>
              <span>Projects Completed</span>
            </div>

            <div>
              <h3>23+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>99%</h3>
              <span>Client Satisfaction</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;