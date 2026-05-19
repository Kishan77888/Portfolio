import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  };

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container container">
        <a href="#hero" className="navbar__logo" onClick={handleNavClick}>
          {personalInfo.name.split(' ')[0]}
          <span className="navbar__logo-dot">.</span>
        </a>

        <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className="navbar__menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
