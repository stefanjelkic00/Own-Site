// src/components/Technologies.js
import React from "react";
import { styles } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import {useTheme } from "../context/ThemeContext";
import { translations, techStack } from "../data";

const Technologies = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="technologies" style={styles.section}>
      <h2 style={styles.heading(theme)}>{translations[language].technologiesTitle}</h2>
      <div style={styles.techGrid}>
        {techStack.map((tech, idx) => (
          <span key={idx} style={styles.techBadge(theme)}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;