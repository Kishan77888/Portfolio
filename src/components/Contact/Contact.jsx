import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations, opportunities, or just a chat about cybersecurity.
          </p>
          <div className="section-divider"></div>
        </div>

        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <a href={`mailto:${personalInfo.email}`} className="contact__card card" id="contact-email">
            <div className="contact__icon">
              <FiMail size={22} />
            </div>
            <div className="contact__label">Email</div>
            <div className="contact__value">{personalInfo.email}</div>
          </a>

          <a href={`tel:${personalInfo.phone}`} className="contact__card card" id="contact-phone">
            <div className="contact__icon">
              <FiPhone size={22} />
            </div>
            <div className="contact__label">Phone</div>
            <div className="contact__value">{personalInfo.phone}</div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card card"
            id="contact-linkedin"
          >
            <div className="contact__icon">
              <FiLinkedin size={22} />
            </div>
            <div className="contact__label">LinkedIn</div>
            <div className="contact__value">Kumar Kishan</div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card card"
            id="contact-github"
          >
            <div className="contact__icon">
              <FiGithub size={22} />
            </div>
            <div className="contact__label">GitHub</div>
            <div className="contact__value">Kishan77888</div>
          </a>

          <div className="contact__card card" id="contact-location">
            <div className="contact__icon">
              <FiMapPin size={22} />
            </div>
            <div className="contact__label">Location</div>
            <div className="contact__value">{personalInfo.location}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
