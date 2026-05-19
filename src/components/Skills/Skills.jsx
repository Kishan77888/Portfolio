import { motion } from 'framer-motion';
import { FiShield, FiTool, FiCode } from 'react-icons/fi';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const categoryMeta = {
  security: { label: 'Cybersecurity', icon: <FiShield size={20} />, color: '#ef4444' },
  tools: { label: 'Tools & Platforms', icon: <FiTool size={20} />, color: '#f59e0b' },
  programming: { label: 'Programming & Frameworks', icon: <FiCode size={20} />, color: '#3b82f6' },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <div className="section-divider"></div>
        </div>

        <div className="skills__grid">
          {Object.entries(skills).map(([key, items]) => {
            const meta = categoryMeta[key];
            return (
              <motion.div
                key={key}
                className="skills__category card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="skills__category-header">
                  <span className="skills__category-icon" style={{ color: meta.color }}>
                    {meta.icon}
                  </span>
                  <h3 className="skills__category-title">{meta.label}</h3>
                </div>
                <div className="skills__tags">
                  {items.map((skill) => (
                    <span key={skill.name} className="tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
