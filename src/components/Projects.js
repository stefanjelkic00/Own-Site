// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { styles } from "../styles";
import { translations, teamProjects, stefanProjects, nikolaProjects } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";


const Projects = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading(theme)}>{translations[language].projectsTitle}</h2>

      {/* Team Projects */}
      <div style={styles.subSection}>
        <h3 style={styles.subHeading(theme)}>{translations[language].teamProjectsTitle}</h3>
        {teamProjects.length > 0 ? (
          <div style={styles.grid}>
            {teamProjects.map((project, index) => (
              <motion.div
                key={index}
                style={styles.card(theme)}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: theme === "dark" ? "#1a1a1a" : "#f0f0f0",
                  boxShadow: theme === "dark" ? "0 4px 14px rgba(0, 0, 0, 0.5)" : "0 4px 14px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={styles.cardHeader}>
                  <FaGithub size={25} color={styles.link(theme).color} />
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link(theme)}>
                    {translations[language][project.title]}
                  </a>
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.arrowIcon(theme)}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaArrowRight size={18} />
                </motion.a>
                <p style={styles.period(theme)}>{translations[language][project.period]}</p>
                <p style={styles.description(theme)}>{translations[language][project.description]}</p>
                <div style={styles.techStack}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} style={styles.techBadge(theme)}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p style={styles.emptyMessage(theme)}>{translations[language].comingSoon}</p>
        )}
      </div>

      {/* Stefanovi projekti i iskustvo */}
      <div style={styles.subSection}>
        <h3 style={styles.subHeading(theme)}>{translations[language].stefanProjectsTitle}</h3>
        {stefanProjects.length > 0 ? (
          <div style={styles.grid}>
            {stefanProjects.map((item, index) => (
              <motion.div
                key={index}
                style={styles.card(theme)}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: theme === "dark" ? "#1a1a1a" : "#f0f0f0",
                  boxShadow: theme === "dark" ? "0 4px 14px rgba(0, 0, 0, 0.5)" : "0 4px 14px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {item.type === "project" ? (
                  <>
                    <div style={styles.cardHeader}>
                      <FaGithub size={25} color={styles.link(theme).color} />
                      <a href={item.github} target="_blank" rel="noopener noreferrer" style={styles.link(theme)}>
                        {translations[language][item.title]}
                      </a>
                    </div>
                    <motion.a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.arrowIcon(theme)}
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaArrowRight size={18} />
                    </motion.a>
                    <p style={styles.period(theme)}>{translations[language][item.period]}</p>
                    <p style={styles.description(theme)}>{translations[language][item.description]}</p>
                    <div style={styles.techStack}>
                      {item.tech.map((t, idx) => (
                        <span key={idx} style={styles.techBadge(theme)}>{t}</span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={styles.cardHeader}>
                      <span style={styles.link(theme)}>{translations[language][item.title]}</span>
                    </div>
                    <p style={styles.period(theme)}>{translations[language][item.period]}</p>
                    <p style={styles.description(theme)}>{translations[language][item.description]}</p>
                    <div style={styles.techStack}>
                      {item.tech.map((t, idx) => (
                        <span key={idx} style={styles.techBadge(theme)}>{t}</span>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <p style={styles.emptyMessage(theme)}>{translations[language].comingSoon}</p>
        )}
      </div>

      {/* Nikolini projekti i iskustvo */}
      <div style={styles.subSection}>
        <h3 style={styles.subHeading(theme)}>{translations[language].nikolaProjectsTitle}</h3>
        {nikolaProjects.length > 0 ? (
          <div style={styles.grid}>
            {nikolaProjects.map((project, index) => (
              <motion.div
                key={index}
                style={styles.card(theme)}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: theme === "dark" ? "#1a1a1a" : "#f0f0f0",
                  boxShadow: theme === "dark" ? "0 4px 14px rgba(0, 0, 0, 0.5)" : "0 4px 14px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={styles.cardHeader}>
                  <FaGithub size={25} color={styles.link(theme).color} />
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link(theme)}>
                    {translations[language][project.title]}
                  </a>
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.arrowIcon(theme)}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaArrowRight size={18} />
                </motion.a>
                <p style={styles.period(theme)}>{translations[language][project.period]}</p>
                <p style={styles.description(theme)}>{translations[language][project.description]}</p>
                <div style={styles.techStack}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} style={styles.techBadge(theme)}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p style={styles.emptyMessage(theme)}>{translations[language].comingSoon}</p>
        )}
      </div>
    </section>
  );
};

export default Projects;