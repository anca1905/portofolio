import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import EducationLayout from "./components/EducationLayout";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
function App() {
  return (
    <div>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div>
        <Navbar />
        <Hero />
        <About />
        <EducationLayout />
        <Technologies />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
