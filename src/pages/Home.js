// src/Home.js
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import LeftSidebar from "../components/LeftSidebar";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

  // Postavljanje IntersectionObserver-a za praćenje vidljivosti sekcija
  useEffect(() => {
    const setupObserver = () => {
      const sections = document.querySelectorAll("section");
      if (sections.length === 0) {
        console.error("No sections found!");
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          let mostVisibleSection = null;
          let maxRatio = 0;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              mostVisibleSection = entry.target.id;
              maxRatio = entry.intersectionRatio;
            }
          });

          if (mostVisibleSection) {
            console.log(`Active section changed to: ${mostVisibleSection} (ratio: ${maxRatio})`);
            setActiveSection(mostVisibleSection);
          }
        },
        {
          threshold: [0.1],
          rootMargin: "-130px 0px -50% 0px",
        }
      );

      sections.forEach((section) => {
        console.log(`Observing section: ${section.id}`);
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    };

    const timeoutId = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Funkcija za skrolovanje do određene sekcije
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 115;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div style={styles.container(theme)}>
      {/* Levi deo - Fiksiran */}
      <LeftSidebar scrollToSection={scrollToSection} activeSection={activeSection} />

      {/* Desni deo - Skrolabilni */}
      <div style={styles.rightSide}>
        <About />
        <Technologies />
        <Projects />
      </div>
    </div>
  );
};

// Omotavanje Home komponente sa ThemeProvider-om i LanguageProvider-om
const WrappedHome = () => (
  <ThemeProvider>
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  </ThemeProvider>
);

export default WrappedHome;