import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Training</h2>
          <p className="section-subtitle">Professional certifications and training programs</p>
          <div className="section-divider"></div>
        </div>

        <div className="exp__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="exp__item card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="exp__timeline-dot">
                <FiBriefcase size={14} />
              </div>
              <div className="exp__content">
                <div className="exp__header">
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <p className="exp__type">{exp.type}</p>
                    <p className="exp__org">{exp.organization}</p>
                  </div>
                  <span className="exp__duration">{exp.duration}</span>
                </div>
                <p className="exp__desc">{exp.description}</p>
                <ul className="exp__highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="exp__highlight">{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
