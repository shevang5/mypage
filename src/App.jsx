import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
// import AboutWindow from "./components/AboutWindow.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsTools from "./components/SkillsTools.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Graphics from "./components/Graphics.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BookSlider from "./components/BookSlider.jsx";

export default function App() {
  return (
    <div className="text-white bg-black">
      <NavBar />
      <Hero />
      {/* <AboutWindow /> */}
      <AboutSection />
      <Services />
      <SkillsTools />
      <Projects />
      <Graphics />
      <BookSlider/>
      <Contact />
      <Footer />
    </div>
  );
}
