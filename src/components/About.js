// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data";
import { styles } from "../styles";
import useIsMobile from "../hooks/useIsMobile";

const About = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section id="about" style={styles.section(isMobile)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.heading(theme, isMobile)}>{translations[language].about}</h2>
        <div style={styles.subSection}>
          <h3 style={styles.subHeading(theme)}>{translations[language].aboutStefan}</h3>
          <p style={styles.desc(theme, isMobile)}>{translations[language].aboutStefanDesc}</p>
        </div>
        <div style={styles.subSection}>
          <h3 style={styles.subHeading(theme)}>{translations[language].aboutNikola}</h3>
          <p style={styles.desc(theme, isMobile)}>{translations[language].aboutNikolaDesc}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;