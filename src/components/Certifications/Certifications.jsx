import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiAlertCircle } from 'react-icons/fi';
import { certifications } from '../../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  const [activeImage, setActiveImage] = useState(null);
  const [failedImages, setFailedImages] = useState(new Set());
  const base = import.meta.env.BASE_URL;

  const handleViewCert = (image) => {
    if (image && !failedImages.has(image)) {
      setActiveImage(image);
    }
  };

  const handleImageError = (imagePath) => {
    setFailedImages((prev) => new Set(prev).add(imagePath));
    setActiveImage(null);
  };

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and credentials</p>
          <div className="section-divider"></div>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="certs__card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="certs__icon-wrapper">
                <FiAward size={20} />
              </div>
              <div className="certs__info">
                <h3 className="certs__name">{cert.name}</h3>
                <p className="certs__issuer">{cert.issuer}</p>
                {cert.date && <p className="certs__date">{cert.date}</p>}
                {cert.validity && (
                  <p className="certs__validity">{cert.validity}</p>
                )}
              </div>
              {cert.image && !failedImages.has(cert.image) && (
                <button
                  className="certs__view-btn"
                  onClick={() => handleViewCert(`${base}${cert.image}`)}
                  aria-label="View certificate"
                >
                  <FiExternalLink size={14} />
                  View
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Image Lightbox */}
      {activeImage && (
        <div className="certs__lightbox" onClick={() => setActiveImage(null)}>
          <div className="certs__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="certs__lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
            >
              <FiX size={20} />
            </button>
            <img
              src={activeImage}
              alt="Certificate"
              className="certs__lightbox-img"
              onError={() => handleImageError(activeImage)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
