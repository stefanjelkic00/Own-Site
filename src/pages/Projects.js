import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Tech Shop",
    description: "Full-stack online store with filtering, cart, discounts and admin panel.",
    tech: ["Spring Boot", "React", "MySQL"],
    github: "https://github.com/stefanjelkic00/tech-shop",
  },
  {
    title: "FTN Student Service",
    description: "University system for students and professors. Includes registration and exam management.",
    tech: ["React", "Spring Boot", "JWT"],
    github: "https://github.com/stefanjelkic00/ftn-student-service",
  },
  {
    title: "Travel Advisor",
    description: "Tour planning platform with destination rating and Google Maps integration.",
    tech: ["React", "Spring Boot", "Google Maps API"],
    github: "https://github.com/stefanjelkic00/travel-advisor",
  },
];

const Projects = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div style={styles.cardHeader}>
                <FaGithub size={25} color="#ffa500" />
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  {project.title}
                </a>
              </div>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.techStack}>
                {project.tech.map((t, idx) => (
                  <span key={idx} style={styles.techBadge}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#0d0d0d",
    color: "#fff",
    padding: "4rem 1rem",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    color: "#ffa500",
    marginBottom: "2rem",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.5)",
    transition: "0.3s",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
  link: {
    color: "#ffa500",
    fontSize: "1.1rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  description: {
    fontSize: "0.95rem",
    marginBottom: "1rem",
    lineHeight: "1.5",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  techBadge: {
    backgroundColor: "#333",
    padding: "0.3rem 0.7rem",
    borderRadius: "20px",
    fontSize: "0.75rem",
    color: "#ffa500",
  },
};

export default Projects;
