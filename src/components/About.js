// src/components/About.js
import React from "react";
import { styles } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../data";

const About = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading(theme)}>{translations[language].aboutTitle}</h2>
      <p style={styles.desc(theme)}>{translations[language].aboutText1}</p>
      <p style={styles.desc(theme)}>{translations[language].aboutText2}</p>
      <p style={styles.desc(theme)}>{translations[language].aboutText3}</p>
    </section>
  );
};

export default About;