import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import CodingProfiles from "./components/CodingProfiles";
import Journey from "./components/Journey";
import Positions from "./components/Positions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Background from "./components/Background";

export default function App() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Journey />
        <Positions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
