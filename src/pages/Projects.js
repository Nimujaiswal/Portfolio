import React from "react";
import { projects } from "../data/projectsData";
import profileBg from "../assets/profile.jpg";
import "./Projects.css";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    
    <main
      className="projects-page"
      style={{ backgroundImage: `url(${profileBg})` }}
    >
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15
              }}
            >
              <div className="project-thumb">
  {project.image && <img src={project.image} alt={project.title} />}
</div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="view-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
