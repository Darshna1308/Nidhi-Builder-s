import "./WhyChoose.css";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
  HardHat,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: <HardHat size={28} />,
    title: "Experienced Team",
    desc: "Highly skilled engineers, architects and construction professionals."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Premium Quality",
    desc: "Top-grade materials and strict quality control at every stage."
  },
  {
    icon: <Clock3 size={28} />,
    title: "On-Time Delivery",
    desc: "Projects completed within committed timelines."
  },
  {
    icon: <BadgeIndianRupee size={28} />,
    title: "Transparent Pricing",
    desc: "No hidden charges. Honest quotations and clear communication."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Modern Design",
    desc: "Elegant architecture blended with functionality."
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Customer Satisfaction",
    desc: "Long-term relationships built on trust and quality."
  }
];

function WhyChoose() {
  return (
    <section className="whyChoose">

      <div className="whyHeading">

        <span>WHY CHOOSE US</span>

        <h2>
          Why Families &
          <br />
          Businesses Trust
          <br />
          Nidhi Builders
        </h2>

      </div>

      <div className="whyGrid">

        {features.map((item, index) => (

          <motion.div
            key={index}
            className="whyCard"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
          >

            <div className="whyIcon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;