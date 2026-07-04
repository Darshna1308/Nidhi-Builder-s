import "./Footer.css";
import {
  Mail,
  MessageCircle,
  ArrowUp
} from "lucide-react";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footerContainer">

        <div className="footerColumn">

          <h2>
            <span>NIDHI</span> BUILDERS
          </h2>

          <p>
            Building trust through quality construction,
            innovative design and timely delivery.
            Every project reflects our commitment to excellence.
          </p>

        </div>

        <div className="footerColumn">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Our Expertise</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footerColumn">

          <h3>Contact</h3>

          <div className="footerInfo">
            <MessageCircle size={18} />
            <span>+91 9314714978</span>
          </div>

          <div className="footerInfo">
            <Mail size={18} />
            <span>maheshparihar271@gmail.com</span>
          </div>

        </div>

        <div className="footerColumn">

          <button
            className="topBtn"
            onClick={scrollTop}
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

        </div>

      </div>

      <div className="footerBottom">
        © {new Date().getFullYear()} Nidhi Builders. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;