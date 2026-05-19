import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Cybersecurity tools and systems I've built</p>
          <div className="section-divider"></div>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              className="projects__card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__desc">{project.description}</p>

              <ul className="projects__highlights">
                {project.highlights.map((h, j) => (
                  <li key={j} className="projects__highlight">
                    <FiChevronRight size={14} className="projects__bullet" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="projects__tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <div className="projects__links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <FiGithub size={16} />
                    <span>Source Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <FiExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
