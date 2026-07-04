import "./Process.css";
import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  Hammer,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

function Process() {

  const steps = [

    {
      number: "01",
      icon: <ClipboardList size={38} />,
      title: "Initial Consultation",
      description:
        "We begin by understanding your vision, project requirements, budget and expectations to create a clear construction roadmap tailored to your needs.",
    },

    {
      number: "02",
      icon: <PencilRuler size={38} />,
      title: "Design Coordination",
      description:
        "If architectural planning is required, we coordinate with our trusted architectural partners to facilitate the design process before construction begins, ensuring a seamless transition to execution.",
    },

    {
      number: "03",
      icon: <Hammer size={38} />,
      title: "Construction Execution",
      description:
        "From foundation to finishing, our experienced team executes every stage of construction with premium materials, skilled workmanship and continuous on-site supervision.",
    },

    {
      number: "04",
      icon: <ShieldCheck size={38} />,
      title: "Quality Assurance",
      description:
        "Every phase of construction undergoes rigorous quality inspections to ensure structural strength, superior finishing, safety and long-term durability.",
    },

    {
      number: "05",
      icon: <KeyRound size={38} />,
      title: "Project Handover",
      description:
        "After comprehensive quality verification, we hand over a fully completed project that is ready for occupancy and built to the highest standards of craftsmanship.",
    },

  ];

  return (

    <section className="process" id="process">

      <div className="processContainer">

        <motion.div
          className="processHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="sectionTag">
            OUR PROCESS
          </span>

          <h2>
            From Vision
            <br />
            To Reality
          </h2>

          <p>
            Every project is executed through a structured construction
            process focused on transparency, quality craftsmanship and
            professional execution—from the initial consultation to the
            final handover of your dream home.
          </p>

        </motion.div>

        <div className="timeline">

          {steps.map((step, index) => (

            <motion.div
              className="timelineCard"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >

              <div className="stepNumber">
                {step.number}
              </div>

              <div className="stepIcon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Process;