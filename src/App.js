import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import EducationLayout from "./components/EducationLayout";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen text-slate-800 dark:text-neutral-100 transition-colors duration-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Dark Mode Background */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] hidden dark:block transition-all duration-500"></div>
        {/* Light Mode Background */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.12),rgba(255,255,255,0))] block dark:hidden transition-all duration-500"></div>
      </div>
      <div>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <EducationLayout />
        <Technologies />
        <Certifications />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
