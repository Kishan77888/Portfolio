import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <h2 className="hero__title">{personalInfo.title}</h2>
          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__cta">
            <a href="#contact" className="btn-primary">
              <FiMail size={16} />
              Get In Touch
            </a>
            <a
              href={`${base}${personalInfo.resumeLink}`}
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={16} />
              Resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero__social-link"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero__avatar-wrapper">
            {personalInfo.profilePhoto && !imgError ? (
              <img
                src={`${base}${personalInfo.profilePhoto}`}
                alt={personalInfo.name}
                className="hero__avatar-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero__avatar-placeholder">
                <span>{personalInfo.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
