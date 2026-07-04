import "./Stats.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  Building2,
  Users,
  Award,
  ShieldCheck,
} from "lucide-react";

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Stats() {

  const stats = [

    {
      icon: <Building2 size={36} />,
      number: 150,
      suffix: "+",
      title: "Projects Completed",
      description:
        "Successfully delivering premium residential and commercial projects with uncompromising quality.",
    },

    {
      icon: <Users size={36} />,
      number: 148,
      suffix: "+",
      title: "Happy Families",
      description:
        "Creating dream homes and long-lasting relationships built on trust and satisfaction.",
    },

    {
      icon: <Award size={36} />,
      number: 23,
      suffix: "+",
      title: "Years of Excellence",
      description:
        "More than two decades of expertise, innovation and construction excellence.",
    },

    {
      icon: <ShieldCheck size={36} />,
      number: 100,
      suffix: "%",
      title: "Quality Commitment",
      description:
        "Every project is executed with strict quality standards and complete transparency.",
    },

  ];

  return (

    <section className="stats" id="stats">

      <div className="statsContainer">

        <motion.div
          className="statsHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="sectionTag">
            OUR ACHIEVEMENTS
          </span>

          <h2>
            Numbers That
            <br />
            <span>Reflect Our Commitment</span>
          </h2>

          <p>
            Every milestone represents years of dedication,
            engineering excellence and the trust our clients
            have placed in Nidhi Builders. These achievements
            inspire us to continue building with passion,
            precision and integrity.
          </p>

        </motion.div>

        <div className="statsGrid">

          {stats.map((item, index) => (

            <motion.div
              className="statCard"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              <div className="statIcon">

                {item.icon}

              </div>

              <h3>

                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />

              </h3>

              <h4>

                {item.title}

              </h4>

              <p>

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Stats;