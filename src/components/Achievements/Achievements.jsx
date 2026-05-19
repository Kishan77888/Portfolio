import { motion } from 'framer-motion';
import { FiAward, FiTerminal, FiSearch, FiUsers } from 'react-icons/fi';
import { achievements } from '../../data/portfolioData';
import './Achievements.css';

const iconMap = {
  trophy: <FiAward size={22} />,
  terminal: <FiTerminal size={22} />,
  search: <FiSearch size={22} />,
  users: <FiUsers size={22} />,
};

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Achievements</h2>
          <div className="section-divider"></div>
        </div>

        <div className="achieve__grid">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="achieve__card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="achieve__icon">
                {iconMap[a.icon] || <FiAward size={22} />}
              </div>
              <h3 className="achieve__title">{a.title}</h3>
              <p className="achieve__desc">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
