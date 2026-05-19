import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';
import { education } from '../../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </div>

        <motion.div
          className="education__card card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="education__header">
            <div>
              <h3 className="education__degree">{education.degree}</h3>
              <p className="education__spec">
                <FiBook size={14} />
                Specialization: {education.specialization}
              </p>
              <p className="education__uni">{education.university}</p>
            </div>
            <div className="education__meta">
              <span className="education__cgpa">{education.cgpa}</span>
              <span className="education__meta-item">
                <FiCalendar size={14} /> {education.duration}
              </span>
              <span className="education__meta-item">
                <FiMapPin size={14} /> {education.location}
              </span>
            </div>
          </div>

          <div className="education__coursework">
            <div className="education__course-group">
              <h4 className="education__course-label">Computer Science</h4>
              <div className="education__course-tags">
                {education.coursework.computerScience.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
            <div className="education__course-group">
              <h4 className="education__course-label">Cybersecurity</h4>
              <div className="education__course-tags">
                {education.coursework.cybersecurity.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
