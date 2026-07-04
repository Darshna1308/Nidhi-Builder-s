import "./Contact.css";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactContainer">

        {/* LEFT SIDE */}

        <motion.div
          className="contactLeft"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="sectionTag">
            CONTACT US
          </span>

          <h2>
            Let's Build Your
            <br />
            Dream Project.
          </h2>

          <p>
            Whether you're planning a luxurious residence,
            commercial building, renovation, or turnkey
            construction project, our team is ready to
            transform your vision into reality.
          </p>

          <form className="contactForm">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <select defaultValue="">
              <option value="" disabled>
                Select Your Project
              </option>

              <option>🏡 Luxury Residential Home</option>

              <option>🏢 Commercial Building</option>

              <option>🏗️ Industrial Project</option>

              <option>🛠️ Renovation & Redevelopment</option>

              <option>🔑 Turnkey Construction</option>

              <option>🌿 Farmhouse / Villa</option>

              <option>✨ I Have My Own Vision (Let's Discuss)</option>

            </select>

            <textarea
              rows="6"
              placeholder="Tell us about your dream project..."
            ></textarea>

            <button type="submit">
              Request Consultation
            </button>

          </form>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="contactRight"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="contactCard">

            <h3>Contact Information</h3>

            <div className="contactItem">
              <MapPin size={22} />
              <div>
                <h4>Office</h4>
                <p>Jodhpur, Rajasthan</p>
              </div>
            </div>

            <div className="contactItem">
              <Phone size={22} />
              <div>
                <h4>Phone</h4>
                <p>+91 9314714978</p>
              </div>
            </div>

            <div className="contactItem">
              <Mail size={22} />
              <div>
                <h4>Email</h4>
                <p>maheshparihar271@gmail.com</p>
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

          <div className="workingHours">

            <h3>Working Hours</h3>

            <p>Monday – Saturday</p>

            <span>9:00 AM – 6:00 PM</span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;