import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__left">
          <span className="footer__name">
            {personalInfo.name}
            <span className="footer__dot">.</span>
          </span>
          <p className="footer__copy">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className="footer__socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer__social-link"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>

        <p className="footer__built">
          Built with <FiHeart size={12} className="footer__heart" /> using React
        </p>
      </div>
    </footer>
  );
}
