import "./WhyChoose.css";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
  HardHat,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <HardHat size={34} />,
    title: "Experienced Team",
    desc: "Our highly skilled engineers, architects and site professionals ensure every project is executed with precision and excellence.",
  },

  {
    icon: <ShieldCheck size={34} />,
    title: "Premium Quality",
    desc: "We use carefully selected construction materials while maintaining strict quality standards throughout every stage.",
  },

  {
    icon: <Clock3 size={34} />,
    title: "Timely Delivery",
    desc: "Every milestone is carefully planned to ensure projects are completed within the committed timeline.",
  },

  {
    icon: <BadgeIndianRupee size={34} />,
    title: "Transparent Pricing",
    desc: "No hidden costs. Honest quotations, clear communication and complete financial transparency.",
  },

  {
    icon: <Sparkles size={34} />,
    title: "Modern Construction",
    desc: "Elegant architectural execution blended with functionality, durability and long-term value.",
  },

  {
    icon: <CheckCircle2 size={34} />,
    title: "Customer Satisfaction",
    desc: "Building lasting relationships through trust, transparency and exceptional workmanship.",
  },
];

function WhyChoose() {
  return (
    <section className="whyChoose" id="whychoose">

      <motion.div
        className="whyHeading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span>WHY CHOOSE NIDHI BUILDERS</span>

        <h2>
          Building Trust
          <br />
          <span>One Project at a Time</span>
        </h2>

        <p>
          Every project reflects our commitment to quality,
          engineering excellence and customer satisfaction.
          We believe exceptional construction begins with
          transparency, precision and lasting relationships.
        </p>

      </motion.div>

      <div className="whyGrid">

        {features.map((item, index) => (

          <motion.div
            key={index}
            className="whyCard"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
          >

            <div className="whyIcon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <div className="whyFooter">

              <span>Learn More</span>

              <ArrowRight size={18} />

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;