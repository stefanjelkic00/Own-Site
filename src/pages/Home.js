import React, { useEffect, useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaViber, FaWhatsapp, FaArrowRight, FaSun, FaMoon } from "react-icons/fa";

// Kreiranje konteksta za temu
const ThemeContext = createContext();

// Kreiranje konteksta za jezik
const LanguageContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    console.log("ThemeProvider theme:", theme);
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Kreiranje LanguageProvider-a za upravljanje jezikom
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
const useLanguage = () => useContext(LanguageContext);

// Objekat sa prevodima za engleski i srpski jezik (u latinici)
const translations = {
  en: {
    name1: "Stefan Jelkić",
    name2: "Nikola Matosić",
    subtitle: "We build full-stack web solutions.",
    aboutTitle: "About",
    aboutText1: "We are Stefan Jelkić and Nikola Matosić, founders of IT Solutions, a brand we aim to grow into a leading software development company. Based in Novi Sad, Serbia, we specialize in creating full-stack web applications and websites tailored to businesses of all sizes, driven by our passion for technology and innovation.",
    aboutText2: "Graduates of the Faculty of Technical Sciences in Novi Sad, we hold degrees in Software and Information Technologies and are pursuing master’s degrees in Engineering Management. Our expertise in programming, system design, and project management allows us to deliver scalable, efficient solutions while meeting client expectations through clear communication and competitive pricing.",
    aboutText3: "Our goal is to expand IT Solutions and establish a reputation for quality and creativity. We adapt to diverse industries, ensuring client satisfaction with every project. Outside work, we explore new technologies, work on personal projects, and enjoy nature and travel, which fuels our inspiration and growth.",
    technologiesTitle: "Technologies we use",
    projectsTitle: "Projects & Experience",
    teamProjectsTitle: "Team Projects",
    stefanProjectsTitle: "Stefan's personal Projects & Experience",
    nikolaProjectsTitle: "Nikola's personal Projects & Experience",
    comingSoon: "Coming soon...",
    techShopTitle: "Tech Shop",
    techShopDesc: "The website is used for selling technology products. Data can be searched and filtered by categories. Cart functionalities and order functionalities. Admin control of workflows. Adding discounts for specific users and more.",
    ftnStudentServiceTitle: "FTN Student Service",
    ftnStudentServiceDesc: "An internal project demonstrating the student service at FTN. Students are enrolled in programs and have courses they take. Professors grade their students in courses and apply for new courses. Admin CRUD operations and more.",
    travelAdvisorTitle: "Travel Advisor",
    travelAdvisorDesc: "Travel Advisor website I used as my thesis project at university. The purpose of the application is to display all destinations with comments from other users and reactions to those comments. Google Maps were used for destinations and more.",
    internshipTitle: "Internship at PR Presiva Novi Sad",
    internshipDesc: "Training in client communication and working on internal team projects (company planner, plan, and program).",
    period1: "02.2025 - 04.2025",
    period2: "01.2025 - 03.2025",
    period3: "05.2024 - 07.2024",
    period4: "04.2024 - 05.2024",
    navAbout: "About",
    navTechnologies: "Technologies",
    navProjects: "Projects & Experiences",
    githubStefan: "Stefan's GitHub",
    githubNikola: "Nikola's GitHub",
    contactStefan: "Stefan - +381695590320",
    contactNikola: "Nikola - +381646477555",
    languageButton: "Serbian",
  },
  sr: {
    name1: "Stefan Jelkić",
    name2: "Nikola Matosić",
    subtitle: "Gradimo kompletna web rešenja.",
    aboutTitle: "O nama",
    aboutText1: "Mi smo Stefan Jelkić i Nikola Matosić, osnivači IT Solutions, brenda koji želimo da razvijemo u vodeću kompaniju za razvoj softvera. Sa sedištem u Novom Sadu, Srbija, specijalizovani smo za kreiranje kompletnih web aplikacija i web sajtova prilagođenih preduzećima svih veličina, vođeni našom strašću prema tehnologiji i inovacijama.",
    aboutText2: "Diplomci Fakulteta tehničkih nauka u Novom Sadu, posedujemo diplome iz softverskih i informacionih tehnologija i trenutno pohađamo master studije iz inženjerskog menadžmenta. Naša stručnost u programiranju, sistemskom dizajnu i upravljanju projektima omogućava nam da isporučimo skalabilna, efikasna rešenja uz ispunjavanje očekivanja klijenata kroz jasnu komunikaciju i konkurentne cene.",
    aboutText3: "Naš cilj je da proširimo IT Solutions i izgradimo reputaciju za kvalitet i kreativnost. Prilagođavamo se različitim industrijama, obezbeđujući zadovoljstvo klijenata sa svakim projektom. Izvan posla, istražujemo nove tehnologije, radimo na ličnim projektima i uživamo u prirodi i putovanjima, što podstiče našu inspiraciju i rast.",
    technologiesTitle: "Tehnologije koje koristimo",
    projectsTitle: "Projekti i iskustvo",
    teamProjectsTitle: "Timski projekti",
    stefanProjectsTitle: "Stefanovi lični projekti i iskustvo",
    nikolaProjectsTitle: "Nikolini lični projekti i iskustvo",
    comingSoon: "Uskoro dolazi...",
    techShopTitle: "Tech Shop",
    techShopDesc: "Web sajt se koristi za prodaju tehnoloških proizvoda. Podaci se mogu pretraživati i filtrirati po kategorijama. Funkcionalnosti korpe i naručivanja. Administratorska kontrola tokova rada. Dodavanje popusta za određene korisnike i još mnogo toga.",
    ftnStudentServiceTitle: "Studentska služba FTN",
    ftnStudentServiceDesc: "Interni projekat koji prikazuje studentsku službu na FTN-u. Studenti su upisani na programe i pohađaju kurseve. Profesori ocenjuju studente na kursevima i prijavljuju se za nove kurseve. Administratorske CRUD operacije i još mnogo toga.",
    travelAdvisorTitle: "Travel Advisor",
    travelAdvisorDesc: "Web sajt Travel Advisor koji sam koristio kao diplomski rad na univerzitetu. Svrha aplikacije je da prikaže sve destinacije sa komentarima korisnika i reakcijama na te komentare. Google Maps su korišćeni za destinacije i još mnogo toga.",
    internshipTitle: "Praksa u PR Presiva Novi Sad",
    internshipDesc: "Obuka u komunikaciji sa klijentima i rad na internim timskim projektima (planiranje kompanije, plan i program).",
    period1: "02.2025 - 04.2025",
    period2: "01.2025 - 03.2025",
    period3: "05.2024 - 07.2024",
    period4: "04.2024 - 05.2024",
    navAbout: "O nama",
    navTechnologies: "Tehnologije",
    navProjects: "Projekti i iskustvo",
    githubStefan: "Stefanov GitHub",
    githubNikola: "Nikolin GitHub",
    contactStefan: "Stefan - +381695590320",
    contactNikola: "Nikola - +381646477555",
    languageButton: "English",
  },
};

// Podaci (techStack, teamProjects, stefanProjects, nikolaProjects, navItems)
const techStack = [
  "Java", "Spring Boot", "Spring Security", "JWT", ".NET", "ASP.NET", "C#", "JavaScript", "TypeScript",
  "React", "React.js", "React Native", "Redux", "Axios", "Next.js", "Node.js",
  "HTML", "HTML5", "CSS", "Bootstrap", "Tailwind",
  "MySQL", "PostgreSQL", "MSSQL", "Elasticsearch", "Docker", "Git", "GitHub", "Google Maps API"
];

const teamProjects = [];

const stefanProjects = [
  {
    title: "techShopTitle",
    description: "techShopDesc",
    tech: [
      "Spring Boot", "React", "MySQL", "Java", "Spring Security", "JWT", "JavaScript", "React.js",
      "Axios", "HTML", "CSS", "Bootstrap", "Elasticsearch", "Docker", "Git", "GitHub"
    ],
    github: "https://github.com/stefanjelkic00/tech-shop",
    type: "project",
    period: "period1",
  },
  {
    title: "ftnStudentServiceTitle",
    description: "ftnStudentServiceDesc",
    tech: [
      "React", "JWT", ".NET", "ASP.NET", "C#", "JavaScript", "React.js", "Axios", "HTML", "HTML5",
      "CSS", "Bootstrap", "MSSQL", "Git", "GitHub"
    ],
    github: "https://github.com/stefanjelkic00/ftn-student-service",
    type: "project",
    period: "period2",
  },
  {
    title: "travelAdvisorTitle",
    description: "travelAdvisorDesc",
    tech: [
      "React", "Spring Boot", "Google Maps API", "Java", "Spring Security", "JWT", "JavaScript",
      "React.js", "Axios", "HTML", "CSS", "Bootstrap", "MySQL", "Git", "GitHub"
    ],
    github: "https://github.com/stefanjelkic00/travel-advisor",
    type: "project",
    period: "period3",
  },
  {
    title: "internshipTitle",
    description: "internshipDesc",
    period: "period4",
    tech: [
      "Java", "Spring Boot", "Spring Security", "JWT", "JavaScript", "React", "React.js", "Axios",
      "HTML", "CSS", "Bootstrap", "MySQL", "Git", "Docker"
    ],
    type: "experience",
  },
];

const nikolaProjects = [];

const navItems = [
  { id: "about", label: "navAbout" },
  { id: "technologies", label: "navTechnologies" },
  { id: "projects", label: "navProjects" },
];

const Home = () => {
  const [showEmails, setShowEmails] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showGitHubs, setShowGitHubs] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

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

  // Dodajemo scrollToSection funkciju unutar Home komponente
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

  // Dinamički stilovi na osnovu teme
  const styles = {
    logoSpotlightContainer: {
      position: "relative",
      display: "inline-block",
    },
    logoSpotlight: {
      position: "absolute",
      width: "900px",
      height: "900px",
      background: theme === "dark"
        ? "radial-gradient(circle, rgba(255, 166, 0, 0.1) 0%, transparent 70%)"
        : "radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: "-1",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: "0.8",
      transition: "background 0.3s ease",
    },
    container: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: theme === "dark" ? "#0d0d0d" : "#f5f5f5",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${
        theme === "dark" ? "%23000000" : "%23666666"
      }' stroke-width='1' stroke-opacity='0.1'%3E%3Cpath d='M0 60L60 0'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundAttachment: "fixed",
      backgroundSize: "60px 60px",
      color: theme === "dark" ? "#ffffff" : "#333333",
      position: "relative",
      zIndex: 0,
    },
    leftSide: {
      width: "40%",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 2rem",
      backgroundColor: "transparent",
      zIndex: 1,
    },
    leftContent: {
      maxWidth: "500px",
      textAlign: "left",
    },
    logo: {
      width: "100px",
      height: "100px",
      marginBottom: "1rem",
      borderRadius: "50%",
      objectFit: "cover",
      border: `2px solid ${theme === "dark" ? "#ffa500" : "#ff6200"}`,
      position: "relative",
      zIndex: 2,
    },
    name: {
      fontSize: "2.7rem",
      fontWeight: "bold",
      marginBottom: "0.3rem",
      color: theme === "dark" ? "#ffffff" : "#333333",
    },
    subtitle: {
      fontSize: "1.5rem",
      color: theme === "dark" ? "#ccc" : "#666",
      margin: "1rem 0",
    },
    desc: {
      fontSize: "1rem",
      color: theme === "dark" ? "#aaa" : "#555",
      lineHeight: "1.6",
      marginBottom: "1rem",
    },
    rightSide: {
      width: "60%",
      marginLeft: "40%",
      overflowY: "auto",
      padding: "2rem",
      paddingTop: "120px",
    },
    nav: {
      marginTop: "2rem",
    },
    navList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    navLink: {
      background: "none",
      border: "none",
      color: theme === "dark" ? "#ccc" : "#666",
      fontSize: "1.1rem",
      cursor: "pointer",
      textDecoration: "none",
      padding: "0",
      position: "relative",
      textAlign: "left",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    navLinkBefore: {
      content: '""',
      width: "20px",
      height: "1px",
      backgroundColor: theme === "dark" ? "#ccc" : "#666",
      transition: "all 0.3s ease",
    },
    navLinkHover: {
      color: theme === "dark" ? "#ffa500" : "#ff6200",
    },
    navLinkHoverBefore: {
      backgroundColor: theme === "dark" ? "#ffa500" : "#ff6200",
    },
    socials: {
      marginTop: "2rem",
    },
    socialIcons: {
      display: "flex",
      gap: "1rem",
      marginBottom: "1rem",
    },
    socialLink: {
      color: theme === "dark" ? "#ccc" : "#666",
      transition: "color 0.3s",
      cursor: "pointer",
    },
    socialLinkHover: {
      color: theme === "dark" ? "#ffa500" : "#ff6200",
    },
    languageText: {
      fontSize: "25px", // Veličina teksta ista kao i za ikonice (size={25})
      lineHeight: "25px", // Podešavanje visine reda da bi se tekst centrirao
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "25px", // Širina elementa da bude ista kao kod ikonica
      height: "25px", // Visina elementa da bude ista kao kod ikonica
    },
    githubList: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    githubLink: {
      color: theme === "dark" ? "#ccc" : "#666",
      fontSize: "0.9rem",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    githubLinkHover: {
      color: theme === "dark" ? "#ffa500" : "#ff6200",
    },
    emailList: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    emailLink: {
      color: theme === "dark" ? "#ccc" : "#666",
      fontSize: "0.9rem",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    emailLinkHover: {
      color: theme === "dark" ? "#ffa500" : "#ff6200",
    },
    contactList: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    contactIcons: {
      display: "flex",
      gap: "0.5rem",
    },
    contactIcon: {
      color: theme === "dark" ? "#ccc" : "#666",
      transition: "color 0.3s",
    },
    contactText: {
      color: theme === "dark" ? "#ccc" : "#666",
      fontSize: "0.9rem",
      margin: 0,
    },
    section: {
      marginBottom: "8rem",
    },
    heading: {
      fontSize: "2.5rem",
      color: theme === "dark" ? "#ffa500" : "#ff6200",
      marginBottom: "2rem",
      letterSpacing: "1px",
      textShadow: theme === "dark" ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
    },
    subSection: {
      marginBottom: "3rem",
    },
    subHeading: {
      fontSize: "1.8rem",
      color: theme === "dark" ? "#ffa500" : "#ff6200",
      marginBottom: "1.5rem",
      letterSpacing: "1px",
      textShadow: theme === "dark" ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
    },
    emptyMessage: {
      fontSize: "1rem",
      color: theme === "dark" ? "#aaa" : "#555",
      fontStyle: "italic",
    },
    techGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.6rem",
    },
    techBadge: {
      backgroundColor: theme === "dark" ? "#1e1e1e" : "#e0e0e0",
      color: theme === "dark" ? "#ffa500" : "#ff6200",
      padding: "0.4rem 0.9rem",
      borderRadius: "4px",
      fontSize: "0.85rem",
      border: `1px solid ${theme === "dark" ? "#ffa500" : "#ff6200"}`,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
    card: {
      backgroundColor: theme === "dark" ? "transparent" : "#ffffff",
      borderRadius: "8px",
      padding: "2rem",
      boxShadow: theme === "dark" ? "none" : "0 2px 8px rgba(0, 0, 0, 0.1)",
      transition: "0.3s",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      position: "relative",
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "0.5rem",
    },
    link: {
      color: theme === "dark" ? "#ffa500" : "#ff6200",
      fontSize: "1.1rem",
      fontWeight: "bold",
      textDecoration: "none",
    },
    period: {
      fontSize: "0.9rem",
      color: theme === "dark" ? "#ccc" : "#666",
      marginBottom: "0.5rem",
      fontStyle: "italic",
    },
    description: {
      fontSize: "0.95rem",
      color: theme === "dark" ? "#aaa" : "#555",
      marginBottom: "1rem",
      lineHeight: "1.5",
    },
    techStack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    arrowIcon: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      color: theme === "dark" ? "#ccc" : "#666",
      transition: "color 0.3s",
    },
    themeToggle: {
      color: theme === "dark" ? "#ccc" : "#666",
      transition: "color 0.3s",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div style={styles.container}>
        {/* Levi deo - Fiksiran */}
        <div style={styles.leftSide}>
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
                style={styles.logo}
              />
              <div style={styles.logoSpotlight} />
            </div>
            <h1 style={styles.name}>{translations[language].name1}</h1>
            <h1 style={styles.name}>{translations[language].name2}</h1>
            <h2 style={styles.subtitle}>{translations[language].subtitle}</h2>

            {/* Navigacija */}
            <nav style={styles.nav}>
              <ul style={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        ...styles.navLink,
                        color: activeSection === item.id ? styles.navLinkHover.color : (theme === "dark" ? "#ccc" : "#666"),
                        fontWeight: activeSection === item.id ? "bold" : "normal",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = styles.navLinkHover.color;
                        e.currentTarget.style.fontWeight = "bold";
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.querySelector("span").style.width = "40px";
                        e.currentTarget.querySelector("span").style.backgroundColor =
                          styles.navLinkHoverBefore.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = activeSection === item.id ? styles.navLinkHover.color : (theme === "dark" ? "#ccc" : "#666");
                        e.currentTarget.style.fontWeight = activeSection === item.id ? "bold" : "normal";
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.querySelector("span").style.width = activeSection === item.id ? "40px" : "20px";
                        e.currentTarget.querySelector("span").style.backgroundColor =
                          activeSection === item.id ? styles.navLinkHoverBefore.backgroundColor : (theme === "dark" ? "#ccc" : "#666");
                      }}
                    >
                      <span
                        style={{
                          ...styles.navLinkBefore,
                          width: activeSection === item.id ? "40px" : "20px",
                          backgroundColor: activeSection === item.id ? styles.navLinkHoverBefore.backgroundColor : (theme === "dark" ? "#ccc" : "#666"),
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
                  style={styles.socialLink}
                  onClick={() => setShowGitHubs(!showGitHubs)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                >
                  <FaGithub size={25} />
                </div>
                <a
                  href="https://www.linkedin.com/in/stefan-jelkic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                >
                  <FaLinkedin size={25} />
                </a>
                <div
                  style={styles.socialLink}
                  onClick={() => setShowEmails(!showEmails)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                >
                  <FaEnvelope size={25} />
                </div>
                <div
                  style={styles.socialLink}
                  onClick={() => setShowContacts(!showContacts)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                >
                  <FaPhone size={25} />
                </div>
                {/* Dugme za prebacivanje teme */}
                <div
                  style={styles.themeToggle}
                  onClick={toggleTheme}
                  onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                >
                  {theme === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />}
                </div>
                {/* Dugme za prebacivanje jezika - zamenjeno sa tekstom SR/EN */}
                <div
                  style={styles.socialLink}
                  onClick={toggleLanguage}
                  onMouseEnter={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                  aria-label={`Switch to ${language === "en" ? "Serbian" : "English"} language`}
                >
                  <span style={styles.languageText}>
                    {language === "en" ? "SR" : "EN"}
                  </span>
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
                    style={styles.githubLink}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                  >
                    {translations[language].githubStefan}
                  </a>
                  <a
                    href="https://github.com/NikolaMatosic00"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.githubLink}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
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
                    style={styles.emailLink}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.emailLinkHover.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                  >
                    stefanjelkic@gmail.com
                  </a>
                  <a
                    href="mailto:nikola.matosic2000@gmail.com"
                    style={styles.emailLink}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.emailLinkHover.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
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
                    <p style={styles.contactText}>{translations[language].contactStefan}</p>
                    <div style={styles.contactIcons}>
                      <a
                        href="viber://chat?number=%2B381695590320"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.contactIcon}
                        onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                      >
                        <FaViber size={18} />
                      </a>
                      <a
                        href="https://wa.me/+381695590320"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.contactIcon}
                        onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                      >
                        <FaWhatsapp size={18} />
                      </a>
                    </div>
                  </div>
                  <div style={styles.contactItem}>
                    <p style={styles.contactText}>{translations[language].contactNikola}</p>
                    <div style={styles.contactIcons}>
                      <a
                        href="viber://chat?number=%2B381646477555"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.contactIcon}
                        onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
                      >
                        <FaViber size={18} />
                      </a>
                      <a
                        href="https://wa.me/+381646477555"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.contactIcon}
                        onMouseEnter={(e) => (e.currentTarget.style.color = styles.githubLinkHover.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = theme === "dark" ? "#ccc" : "#666")}
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

        {/* Desni deo - Skrolabilni */}
        <div style={styles.rightSide}>
          {/* About sekcija */}
          <section id="about" style={styles.section}>
            <h2 style={styles.heading}>{translations[language].aboutTitle}</h2>
            <p style={styles.desc}>{translations[language].aboutText1}</p>
            <p style={styles.desc}>{translations[language].aboutText2}</p>
            <p style={styles.desc}>{translations[language].aboutText3}</p>
          </section>

          {/* Technologies sekcija */}
          <section id="technologies" style={styles.section}>
            <h2 style={styles.heading}>{translations[language].technologiesTitle}</h2>
            <div style={styles.techGrid}>
              {techStack.map((tech, idx) => (
                <span key={idx} style={styles.techBadge}>{tech}</span>
              ))}
            </div>
          </section>

          {/* Projects & Experience sekcija */}
          <section id="projects" style={styles.section}>
            <h2 style={styles.heading}>{translations[language].projectsTitle}</h2>

            {/* Team Projects */}
            <div style={styles.subSection}>
              <h3 style={styles.subHeading}>{translations[language].teamProjectsTitle}</h3>
              {teamProjects.length > 0 ? (
                <div style={styles.grid}>
                  {teamProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      style={styles.card}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: theme === "dark" ? "#1a1a1a" : "#f0f0f0",
                        boxShadow: theme === "dark" ? "0 4px 14px rgba(0, 0, 0, 0.5)" : "0 4px 14px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={styles.cardHeader}>
                        <FaGithub size={25} color={theme === "dark" ? "#ffa500" : "#ff6200"} />
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
                          {translations[language][project.title]}
                        </a>
                      </div>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.arrowIcon}
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaArrowRight size={18} />
                      </motion.a>
                      <p style={styles.period}>{translations[language][project.period]}</p>
                      <p style={styles.description}>{translations[language][project.description]}</p>
                      <div style={styles.techStack}>
                        {project.tech.map((t, idx) => (
                          <span key={idx} style={styles.techBadge}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p style={styles.emptyMessage}>{translations[language].comingSoon}</p>
              )}
            </div>

            {/* Stefanovi projekti i iskustvo */}
            <div style={styles.subSection}>
              <h3 style={styles.subHeading}>{translations[language].stefanProjectsTitle}</h3>
              {stefanProjects.length > 0 ? (
                <div style={styles.grid}>
                  {stefanProjects.map((item, index) => (
                    <motion.div
                      key={index}
                      style={styles.card}
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
                            <FaGithub size={25} color={theme === "dark" ? "#ffa500" : "#ff6200"} />
                            <a href={item.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
                              {translations[language][item.title]}
                            </a>
                          </div>
                          <motion.a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.arrowIcon}
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaArrowRight size={18} />
                          </motion.a>
                          <p style={styles.period}>{translations[language][item.period]}</p>
                          <p style={styles.description}>{translations[language][item.description]}</p>
                          <div style={styles.techStack}>
                            {item.tech.map((t, idx) => (
                              <span key={idx} style={styles.techBadge}>{t}</span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div style={styles.cardHeader}>
                            <span style={styles.link}>{translations[language][item.title]}</span>
                          </div>
                          <p style={styles.period}>{translations[language][item.period]}</p>
                          <p style={styles.description}>{translations[language][item.description]}</p>
                          <div style={styles.techStack}>
                            {item.tech.map((t, idx) => (
                              <span key={idx} style={styles.techBadge}>{t}</span>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p style={styles.emptyMessage}>{translations[language].comingSoon}</p>
              )}
            </div>

            {/* Nikolini projekti i iskustvo */}
            <div style={styles.subSection}>
              <h3 style={styles.subHeading}>{translations[language].nikolaProjectsTitle}</h3>
              {nikolaProjects.length > 0 ? (
                <div style={styles.grid}>
                  {nikolaProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      style={styles.card}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: theme === "dark" ? "#1a1a1a" : "#f0f0f0",
                        boxShadow: theme === "dark" ? "0 4px 14px rgba(0, 0, 0, 0.5)" : "0 4px 14px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={styles.cardHeader}>
                        <FaGithub size={25} color={theme === "dark" ? "#ffa500" : "#ff6200"} />
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
                          {translations[language][project.title]}
                        </a>
                      </div>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.arrowIcon}
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaArrowRight size={18} />
                      </motion.a>
                      <p style={styles.period}>{translations[language][project.period]}</p>
                      <p style={styles.description}>{translations[language][project.description]}</p>
                      <div style={styles.techStack}>
                        {project.tech.map((t, idx) => (
                          <span key={idx} style={styles.techBadge}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p style={styles.emptyMessage}>{translations[language].comingSoon}</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
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