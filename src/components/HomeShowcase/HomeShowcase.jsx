import "./HomeShowcase.css";
import { motion } from "framer-motion";
import {
  Home,
  CheckCircle,
  Sparkles,
} from "lucide-react";

function HomeShowcase() {
  return (
    <section className="homeShowcase" id="homeShowcase">

      <div className="showcaseContainer">

        {/* LEFT CONTENT */}

        <motion.div
          className="showcaseContent"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="sectionLabel">
            HOME WALKTHROUGH
          </span>

          <h2>
            Experience Our
            <br />
            Finished Homes
          </h2>

          <p>
           Take a virtual walkthrough of one of our completed homes and discover the quality, attention to detail, thoughtful planning and premium finishes that define every Nidhi Builders project.
          </p>

          <div className="features">

            <div className="featureItem">
              <Home size={22} />
              <span>Premium Residential Construction</span>
            </div>

            <div className="featureItem">
              <CheckCircle size={22} />
              <span>Complete Turnkey Project Execution</span>
            </div>

            <div className="featureItem">
              <Sparkles size={22} />
              <span>Luxury Finishes & Modern Living Spaces</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT VIDEO */}

        <motion.div
          className="showcaseVideo"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="videoWrapper">

            <iframe
              src="https://www.youtube.com/embed/yie77LrPEZw?autoplay=0&rel=0&modestbranding=1"
              title="Nidhi Builders Home Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <p className="videoCaption">
  Watch a real walkthrough of one of our completed residential projects.
</p>

        </motion.div>

      </div>

    </section>
  );
}

export default HomeShowcase;