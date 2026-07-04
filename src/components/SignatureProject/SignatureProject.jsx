import "./SignatureProject.css";
import { motion } from "framer-motion";
import { MapPin, Building2, Ruler, Calendar } from "lucide-react";

import projectVideo from "../../assets/videos/signature-project.mp4";

function SignatureProject() {
  return (
    <section className="signature" id="signature">

      <div className="signatureHeading">
        <span>SIGNATURE PROJECT</span>

        <h2>
          One Project.
          <br />
          Countless Memories.
        </h2>

        <p>
          Every project tells a story of dedication, precision and trust.
          Here's one of our featured projects showcasing the quality that
          defines Nidhi Builders.
        </p>
      </div>

      <div className="signatureContainer">

        <motion.div
          className="videoSection"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <video
            autoPlay
            muted
            loop
            controls
            playsInline
          >
            <source
              src={projectVideo}
              type="video/mp4"
            />
          </video>

        </motion.div>

        <motion.div
          className="projectInfo"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h3>Luxury Residential Villa</h3>

          <p>
            Designed with premium architecture, elegant interiors and
            superior craftsmanship, this residence represents the quality
            standards that Nidhi Builders delivers in every project.
          </p>

          <div className="projectDetails">

            <div>
              <MapPin size={20}/>
              <span>Location</span>
              <h4>Jodhpur</h4>
            </div>

            <div>
              <Building2 size={20}/>
              <span>Project Type</span>
              <h4>Residential</h4>
            </div>

            <div>
              <Ruler size={20}/>
              <span>Area</span>
              <h4>3200 sq.ft.</h4>
            </div>

            <div>
              <Calendar size={20}/>
              <span>Status</span>
              <h4>Completed</h4>
            </div>

          </div>

          <button className="signatureBtn">
            Explore More Projects
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default SignatureProject;