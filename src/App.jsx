import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechFilter from "./components/TechFilter";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ApiLab from "./components/ApiLab";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100">
      {/* Animated Constellation & Moving Stars Background */}
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <TechFilter />
          <Experience />
          <Projects />
          <Certifications />
          <ApiLab />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;