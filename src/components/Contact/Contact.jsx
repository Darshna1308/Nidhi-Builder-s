import "./Contact.css";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  ArrowRight,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contactContainer">

        {/* ================= LEFT ================= */}

        <motion.div
          className="contactLeft"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="sectionTag">
            CONTACT NIDHI BUILDERS
          </span>

          <h2>
            Let's Build Your
            <br />
            <span>Dream Project Together</span>
          </h2>

          <p>
            Whether you're planning a luxury residence,
            commercial building, renovation or turnkey
            construction project, our experienced team is
            ready to bring your vision to life with
            exceptional quality and complete transparency.
          </p>

          <form className="contactForm">

            <div className="inputRow">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
            />

            <select defaultValue="">
              <option value="" disabled>
                Select Project Type
              </option>

              <option>Luxury Residence</option>

              <option>Commercial Building</option>

              <option>Turnkey Construction</option>

              <option>Renovation</option>

              <option>Redevelopment</option>

              <option>Plot Development</option>

              <option>Other</option>

            </select>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
            />

            <button type="submit">

              Request Free Consultation

              <ArrowRight size={18} />

            </button>

          </form>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          className="contactRight"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="contactCard">

            <h3>
              Contact Information
            </h3>

            <div className="contactItem">

              <div className="contactIcon">

                <MapPin size={22} />

              </div>

              <div>

                <h4>Office Address</h4>

                <p>
                  Jodhpur,
                  Rajasthan, India
                </p>

              </div>

            </div>

            <div className="contactItem">

              <div className="contactIcon">

                <Phone size={22} />

              </div>

              <div>

                <h4>Phone Number</h4>

                <p>+91 93147 14978</p>

              </div>

            </div>

            <div className="contactItem">

              <div className="contactIcon">

                <Mail size={22} />

              </div>

              <div>

                <h4>Email Address</h4>

                <p>maheshparihar271@gmail.com</p>

              </div>

            </div>

            <div className="contactItem">

              <div className="contactIcon">

                <Clock3 size={22} />

              </div>

              <div>

                <h4>Working Hours</h4>

                <p>
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>

              </div>

            </div>

            <a
              href="https://wa.me/919314714978"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsappCard"
            >

              <MessageCircle size={22} />

              Chat on WhatsApp

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;