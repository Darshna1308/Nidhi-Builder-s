import "./Stats.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      number: 150,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      number: 148,
      suffix: "+",
      title: "Happy Families",
    },
    {
      number: 23,
      suffix: "+",
      title: "Years of Excellence",
    },
    {
      number: 100,
      suffix: "%",
      title: "Quality Commitment",
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
            Building Trust,
            <br />
          </h2>

          <p>
            Every milestone reflects our commitment to quality,
            transparency, engineering excellence and customer
            satisfaction.
          </p>
        </motion.div>

        <div className="statsGrid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="statCard"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >
              <h3>
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />
              </h3>

              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;