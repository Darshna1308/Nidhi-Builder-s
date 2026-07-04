import "./Process.css";
import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  Hammer,
  ShieldCheck,
  KeyRound,
  ArrowRight,
} from "lucide-react";

function Process() {

  const steps = [

    {
      number: "01",
      icon: <ClipboardList size={36} />,
      title: "Initial Consultation",
      description:
        "We begin by understanding your vision, lifestyle requirements, project goals and budget to establish a clear roadmap for your dream project.",
    },

    {
      number: "02",
      icon: <PencilRuler size={36} />,
      title: "Planning & Design",
      description:
        "Working alongside trusted architects and design professionals, we coordinate layouts, structural planning and project specifications before construction begins.",
    },

    {
      number: "03",
      icon: <Hammer size={36} />,
      title: "Construction Execution",
      description:
        "Our experienced construction team executes every stage with precision, premium materials and continuous site supervision to ensure exceptional quality.",
    },

    {
      number: "04",
      icon: <ShieldCheck size={36} />,
      title: "Quality Inspection",
      description:
        "Every milestone undergoes detailed quality inspections, ensuring structural integrity, flawless finishes and long-term durability before approval.",
    },

    {
      number: "05",
      icon: <KeyRound size={36} />,
      title: "Project Handover",
      description:
        "After final inspections, we deliver a beautifully completed project that is ready for occupancy and built to exceed expectations.",
    },

  ];

  return (

    <section className="process" id="process">

      <div className="processContainer">

        {/* ================= HEADING ================= */}

        <motion.div
          className="processHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="sectionTag">

            OUR CONSTRUCTION PROCESS

          </span>

          <h2>

            From Vision

            <br />

            <span>To Reality</span>

          </h2>

          <p>

            Every successful project follows a carefully structured
            process that prioritizes transparency, engineering
            excellence and uncompromising craftsmanship at every stage.

          </p>

        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="timeline">

          {steps.map((step, index) => (

            <motion.div

              key={index}

              className="timelineCard"

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}

            >

              {/* STEP NUMBER */}

              <div className="stepNumber">

                {step.number}

              </div>

              {/* ICON */}

              <div className="stepIcon">

                {step.icon}

              </div>

              {/* CONTENT */}

              <h3>

                {step.title}

              </h3>

              <p>

                {step.description}

              </p>

              {/* FOOTER */}

              <div className="stepFooter">

                <span>

                  Learn More

                </span>

                <ArrowRight size={18} />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Process;