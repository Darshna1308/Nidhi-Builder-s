import "./OngoingProjects.css";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

function OngoingProjects() {
  const projects = [
    {
      no: "01",
      title: "Kayasth Sabha Residence",
      location: "17E, Chopasni Housing Board, Jodhpur",
    },
    {
      no: "02",
      title: "Arihant Nagar Residence",
      location: "Arihant Nagar, Jodhpur",
    },
    {
      no: "03",
      title: "Sector 15 Residence - A",
      location: "Sector 15, Chopasni Housing Board, Jodhpur",
    },
    {
      no: "04",
      title: "Sector 15 Residence - B",
      location: "Sector 15, Chopasni Housing Board, Jodhpur",
    },
  ];

  return (
    <section className="ongoing" id="ongoing">
      <div className="ongoingContainer">

        <motion.div
          className="ongoingHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>ONGOING DEVELOPMENTS</span>

          <h2>
            Building Tomorrow,
            <br />
            Today.
          </h2>

          <p>
            Nidhi Builders is currently executing premium residential projects
            across Jodhpur. Every development is undertaken as a complete
            turnkey construction solution, ensuring uncompromised quality,
            transparency and engineering excellence.
          </p>
        </motion.div>

        <div className="projectsList">

          {projects.map((project, index) => (

            <motion.div
              className="projectRow"
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >

              <div className="projectNumber">
                {project.no}
              </div>

              <div className="projectContent">

                <div className="statusBadge">
                  Under Construction
                </div>

                <h3>{project.title}</h3>

                <div className="location">

                  <MapPin size={18} />

                  <span>{project.location}</span>

                </div>

                <div className="projectMeta">

                  <div>

                    <small>Project Type</small>

                    <h4>Residential Construction</h4>

                  </div>

                  <div>

                    <small>Execution</small>

                    <h4>Complete Turnkey Construction</h4>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default OngoingProjects;