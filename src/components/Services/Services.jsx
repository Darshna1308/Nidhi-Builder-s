import "./Services.css";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hammer,
  Ruler,
  Map,
  KeyRound,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Home size={42} />,
      title: "Luxury Residential Construction",
      desc: "We specialize in constructing premium homes, villas and independent residences with exceptional craftsmanship, superior materials and timely execution.",
      highlight: "End-to-end residential construction with complete transparency.",
    },

    {
      icon: <Building2 size={42} />,
      title: "Commercial Construction",
      desc: "From office buildings and retail spaces to commercial developments, we deliver projects that combine durability, functionality and modern engineering standards.",
      highlight: "Reliable execution for offices, showrooms and commercial projects.",
    },

    {
      icon: <Ruler size={42} />,
      title: "Architectural Planning Assistance",
      desc: "Construction is our core expertise. For architectural planning, we collaborate with experienced architects to provide professionally designed plans before construction begins.",
      highlight: "Professional planning support through trusted architectural partners.",
    },

    {
      icon: <Hammer size={42} />,
      title: "Premium Renovation & Redevelopment",
      desc: "We undertake comprehensive renovation and redevelopment works for premium residential and commercial properties, primarily focusing on large-scale transformations.",
      highlight: "Ideal for extensive renovation and structural redevelopment.",
    },

    {
      icon: <Map size={42} />,
      title: "Plot Purchase & Home Development",
      desc: "Looking for a complete solution? We assist clients in identifying suitable plots and developing premium homes tailored to their vision and lifestyle.",
      highlight: "From plot selection to dream home delivery under one trusted name.",
    },

    {
      icon: <KeyRound size={42} />,
      title: "Turnkey Construction Solutions",
      desc: "From planning coordination and construction to finishing and final handover, we manage every stage of your project for a seamless building experience.",
      highlight: "Single point of responsibility from concept to completion.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="sectionHeading">

        <span>OUR EXPERTISE</span>

        <h2>
          Building Excellence,
          <br />
          Delivering Trust
        </h2>

        <p>
          Every project reflects our commitment to premium quality,
          transparent communication and long-lasting client relationships.
        </p>

      </div>

      <div className="serviceGrid">

        {services.map((service, index) => (

          <motion.div
            className="serviceCard"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
          >

            <div className="icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <div className="serviceHighlight">

              ✓ {service.highlight}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Services;