// src/Home.js
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { styles } from "../styles";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import LeftSidebar from "../components/LeftSidebar";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import useIsMobile from "../hooks/useIsMobile";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isMobile = useIsMobile();

  // IntersectionObserver logika
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
            setActiveSection(mostVisibleSection);
          }
        },
        {
          threshold: [0.1],
          rootMargin: "-130px 0px -50% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    };

    const timeoutId = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: language === "en" ? "IT Solutions Portfolio" : "Portfolio IT Rešenja",
    url: "https://www.it-solutions.com",
    author: [
      {
        "@type": "Person",
        name: "Stefan Jelkić",
        url: "https://www.linkedin.com/in/stefan-jelkic/",
        sameAs: ["https://github.com/stefanjelkic00", "https://www.linkedin.com/in/stefan-jelkic/"],
      },
      {
        "@type": "Person",
        name: "Nikola Matosić",
        url: "https://github.com/NikolaMatosic00",
        sameAs: ["https://github.com/NikolaMatosic00"],
      },
    ],
    description:
      language === "en"
        ? "Portfolio website of Stefan Jelkić and Nikola Matosić — Full-Stack Developers providing IT Solutions."
        : "Portfolio sajt Stefana Jelkića i Nikole Matosića — Full-Stack programeri koji pružaju IT rešenja.",
  };

  return (
    <>
      <Helmet>
        <html lang={language === "en" ? "en" : "sr"} />
        <title>
          {language === "en"
            ? "IT Solutions | Full-Stack Web Development"
            : "IT Rešenja | Veb Programiranje"}
        </title>
        <meta
          name="description"
          content={
            language === "en"
              ? "Portfolio website of Stefan Jelkić and Nikola Matosić — Full-Stack Developers providing IT Solutions."
              : "Portfolio sajt Stefana Jelkića i Nikole Matosića — Full-Stack programeri koji pružaju IT rešenja."
          }
        />
        <meta property="og:title" content="IT Solutions" />
        <meta
          property="og:description"
          content={
            language === "en"
              ? "Modern IT solutions for your business — by Stefan Jelkić and Nikola Matosić."
              : "Moderna IT rešenja za vaše poslovanje — Stefan Jelkić i Nikola Matosić."
          }
        />
        <meta name="twitter:title" content="IT Solutions" />
        <meta
          name="twitter:description"
          content={
            language === "en"
              ? "Modern IT solutions for your business — by Stefan Jelkić and Nikola Matosić."
              : "Moderna IT rešenja za vaše poslovanje — Stefan Jelkić i Nikola Matosić."
          }
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div style={styles.container(theme, isMobile)}>
        <LeftSidebar scrollToSection={scrollToSection} activeSection={activeSection} />
        <div style={styles.rightSide(isMobile)}>
          <About />
          <Technologies />
          <Projects />
        </div>
      </div>
    </>
  );
};

const WrappedHome = () => (
  <ThemeProvider>
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  </ThemeProvider>
);

export default WrappedHome;