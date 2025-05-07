// src/components/LeftSidebar.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaViber, FaWhatsapp, FaSun, FaMoon } from "react-icons/fa";
import { styles } from "../styles";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations, navItems } from "../data";

const LeftSidebar = ({ scrollToSection, activeSection }) => {
  const [showEmails, setShowEmails] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showGitHubs, setShowGitHubs] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div style={styles.leftSide(theme)}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={styles.leftContent}
      >
        <div style={styles.logoSpotlightContainer}>
          <img
            src={process.env.PUBLIC_URL + "/ITSolutionsLogo.png"}
            alt="IT Solutions Logo"
            style={styles.logo(theme)}
          />
          <div style={styles.logoSpotlight(theme)} />
        </div>
        <h1 style={styles.name(theme)}>{translations[language].name1}</h1>
        <h1 style={styles.name(theme)}>{translations[language].name2}</h1>
        <h2 style={styles.subtitle(theme)}>{translations[language].subtitle}</h2>

        {/* Navigacija */}
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    ...styles.navLink(theme),
                    color: activeSection === item.id ? styles.navLinkHover(theme).color : styles.navLink(theme).color,
                    fontWeight: activeSection === item.id ? "bold" : "normal",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = styles.navLinkHover(theme).color;
                    e.currentTarget.style.fontWeight = "bold";
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.querySelector("span").style.width = "40px";
                    e.currentTarget.querySelector("span").style.backgroundColor =
                      styles.navLinkHoverBefore(theme).backgroundColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      activeSection === item.id
                        ? styles.navLinkHover(theme).color
                        : styles.navLink(theme).color;
                    e.currentTarget.style.fontWeight = activeSection === item.id ? "bold" : "normal";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.querySelector("span").style.width = activeSection === item.id ? "40px" : "20px";
                    e.currentTarget.querySelector("span").style.backgroundColor =
                      activeSection === item.id
                        ? styles.navLinkHoverBefore(theme).backgroundColor
                        : styles.navLinkBefore(theme).backgroundColor;
                  }}
                >
                  <span
                    style={{
                      ...styles.navLinkBefore(theme),
                      width: activeSection === item.id ? "40px" : "20px",
                      backgroundColor: activeSection === item.id
                        ? styles.navLinkHoverBefore(theme).backgroundColor
                        : styles.navLinkBefore(theme).backgroundColor,
                    }}
                  ></span>
                  {translations[language][item.label]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Društvene mreže, tema i jezik */}
        <div style={styles.socials}>
          <div style={styles.socialIcons}>
            <div
              style={styles.socialLink(theme)}
              onClick={() => setShowGitHubs(!showGitHubs)}
              onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover(theme).color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = styles.socialLink(theme).color)}
            >
              <FaGithub size={25} />
            </div>
            <a
              href="https://www.linkedin.com/in/stefan-jelkic/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink(theme)}
              onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover(theme).color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = styles.socialLink(theme).color)}
            >
              <FaLinkedin size={25} />
            </a>
            <div
              style={styles.socialLink(theme)}
              onClick={() => setShowEmails(!showEmails)}
              onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover(theme).color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = styles.socialLink(theme).color)}
            >
              <FaEnvelope size={25} />
            </div>
            <div
              style={styles.socialLink(theme)}
              onClick={() => setShowContacts(!showContacts)}
              onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover(theme).color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = styles.socialLink(theme).color)}
            >
              <FaPhone size={25} />
            </div>
            <div
              style={styles.themeToggle(theme)}
              onClick={toggleTheme}
              onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover(theme).color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = styles.themeToggle(theme).color)}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />}
            </div>
            <div
              style={styles.socialLink(theme)}
              onClick={toggleLanguage}
              onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover(theme).color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = styles.socialLink(theme).color)}
              aria-label={`Switch to ${language === "en" ? "Serbian" : "English"} language`}
            >
              <span style={styles.languageText}>{language === "en" ? "SR" : "EN"}</span>
            </div>
          </div>

          {/* GitHub linkovi */}
          {showGitHubs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              style={styles.githubList}
            >
              <a
                href="https://github.com/stefanjelkic00"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubLink(theme)}
                onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover(theme).color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = styles.githubLink(theme).color)}
              >
                {translations[language].githubStefan}
              </a>
              <a
                href="https://github.com/NikolaMatosic00"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubLink(theme)}
                onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover(theme).color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = styles.githubLink(theme).color)}
              >
                {translations[language].githubNikola}
              </a>
            </motion.div>
          )}

          {/* Email adrese */}
          {showEmails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              style={styles.emailList}
            >
              <a
                href="mailto:stefanjelkic@gmail.com"
                style={styles.emailLink(theme)}
                onMouseEnter={(e) => (e.currentTarget.style.color = styles.emailLinkHover(theme).color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = styles.emailLink(theme).color)}
              >
                stefanjelkic@gmail.com
              </a>
              <a
                href="mailto:nikola.matosic2000@gmail.com"
                style={styles.emailLink(theme)}
                onMouseEnter={(e) => (e.currentTarget.style.color = styles.emailLinkHover(theme).color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = styles.emailLink(theme).color)}
              >
                nikola.matosic2000@gmail.com
              </a>
            </motion.div>
          )}

          {/* Kontakt informacije */}
          {showContacts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              style={styles.contactList}
            >
              <div style={styles.contactItem}>
                <p style={styles.contactText(theme)}>{translations[language].contactStefan}</p>
                <div style={styles.contactIcons}>
                  <a
                    href="viber://chat?number=%2B381695590320"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactIcon(theme)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover(theme).color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = styles.contactIcon(theme).color)}
                  >
                    <FaViber size={18} />
                  </a>
                  <a
                    href="https://wa.me/+381695590320"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactIcon(theme)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover(theme).color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = styles.contactIcon(theme).color)}
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
              <div style={styles.contactItem}>
                <p style={styles.contactText(theme)}>{translations[language].contactNikola}</p>
                <div style={styles.contactIcons}>
                  <a
                    href="viber://chat?number=%2B381646477555"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactIcon(theme)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover(theme).color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = styles.contactIcon(theme).color)}
                  >
                    <FaViber size={18} />
                  </a>
                  <a
                    href="https://wa.me/+381646477555"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactIcon(theme)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover(theme).color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = styles.contactIcon(theme).color)}
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LeftSidebar;