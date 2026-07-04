import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Process from "../components/Process/Process";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Stats from "../components/Stats/Stats";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import OngoingProjects from "../components/OngoingProjects/OngoingProjects";
import HomeShowcase from "../components/HomeShowcase/HomeShowcase";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OngoingProjects />
      <Portfolio />
      <HomeShowcase />
      <Process />
      <WhyChoose />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;