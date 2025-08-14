import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <motion.main
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-overlay"></div>

      <div className="about-container">
        {/* LEFT SIDE - TEXT */}
        <div className="about-text">
          <h1>
            Hi, I’m <span className="highlight">Nimesh Jaiswal</span>
          </h1>
          <p>
            I’m a <strong>UI/UX Designer</strong> and <strong>Front-End Developer</strong> who transforms ideas into interactive and impactful digital experiences.  
            I bring designs to life with clean, responsive code and craft user journeys that feel effortless.
          </p>
          <p>
            With expertise in <strong>Figma</strong>, <strong>Adobe Creative Suite</strong>, and modern web technologies like <strong>React.js</strong> and <strong>Node.js</strong>,  
            I thrive in dynamic, fast-paced environments — especially startups.
          </p>

          <div className="social-links">
            <a href="https://bento.me/nimeshjaiswal" target="_blank" rel="noreferrer">Bento</a>
            <a href="https://www.behance.net/nimeshjaiswal" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://www.linkedin.com/in/nimesh-jaiswal/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div>
            <h3>📧 nimeshjaiswal884@gmail.com</h3>
            <h3>📞 +91 8169065601 </h3>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="about-image">
          <img src="/images/Nimu.png" alt="Nimesh Jaiswal" />
        </div>
      </div>
    </motion.main>
  );
}
