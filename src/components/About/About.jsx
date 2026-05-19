import { motion } from 'framer-motion';
import { FiMapPin, FiAward, FiShield, FiCheckCircle } from 'react-icons/fi';
import { aboutMe, personalInfo, education } from '../../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <motion.div
          className="about__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="about__text">
            <p className="about__summary">{aboutMe.summary}</p>
            <ul className="about__highlights">
              {aboutMe.highlights.map((item, i) => (
                <li key={i} className="about__highlight-item">
                  <FiCheckCircle size={16} className="about__check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__stats">
            <div className="about__stat-card card">
              <FiAward size={24} className="about__stat-icon" />
              <div className="about__stat-value">7+</div>
              <div className="about__stat-label">Certifications</div>
            </div>
            <div className="about__stat-card card">
              <FiShield size={24} className="about__stat-icon" />
              <div className="about__stat-value">3+</div>
              <div className="about__stat-label">Security Projects</div>
            </div>
            <div className="about__stat-card card">
              <FiMapPin size={24} className="about__stat-icon" />
              <div className="about__stat-value">{education.cgpa}</div>
              <div className="about__stat-label">CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
