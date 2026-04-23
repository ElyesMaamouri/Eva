"use client";

import React, { useState } from 'react';
import styles from './portfolio.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import PortfolioModal from './PortfolioModal';

const Portfolio = () => {
  const { dict, isRTL } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const openModal = (img: string) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className={styles.portfolio} dir={isRTL ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className={styles.ambientGlow}
      >
        <Image
          src="/ambient-glows.svg"
          alt="Ambient Glows"
          fill
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <div className={styles.glowHighlight}>
        <Image
          src="/ambient-glows.svg"
          alt="Glow Highlight"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`${styles.contentContainer} container-website`}>
        <header className={styles.header}>
          <span className={styles.bgTitle}>{dict.portfolioBg}</span>
          <h2 className={styles.mainTitle}>{dict.portfolioTitle}</h2>
        </header>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Block: Single Large Image */}
          <motion.div className={styles.colBig} variants={itemVariants}>
            <button
              className={styles.imageWrapperBig}
              onClick={() => openModal('/img-3.png')}
              aria-label={`${dict.portfolioView} 1`}
            >
              <Image src="/img-3.png" alt="EVA Studio — Projet IA 1" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.img} />
              <div className={styles.overlay}>
                <span className={styles.viewText}>{dict.portfolioView}</span>
              </div>
            </button>
          </motion.div>

          {/* Middle Column: 2 stacked images */}
          <div className={styles.colMiddle}>
            <motion.button
              className={styles.imageWrapperSmall}
              variants={itemVariants}
              onClick={() => openModal('/img-4.png')}
              aria-label={`${dict.portfolioView} 2`}
            >
              <Image src="/img-4.png" alt="EVA Studio — Projet IA 2" fill sizes="(max-width: 768px) 100vw, 25vw" className={styles.img} />
              <div className={styles.overlay}>
                <span className={styles.viewText}>{dict.portfolioView}</span>
              </div>
            </motion.button>
            <motion.button
              className={styles.imageWrapperSmall}
              variants={itemVariants}
              onClick={() => openModal('/img-5.png')}
              aria-label={`${dict.portfolioView} 3`}
            >
              <Image src="/img-5.png" alt="EVA Studio — Projet IA 3" fill sizes="(max-width: 768px) 100vw, 25vw" className={styles.img} />
              <div className={styles.overlay}>
                <span className={styles.viewText}>{dict.portfolioView}</span>
              </div>
            </motion.button>
          </div>

          {/* Right Column: 1 tall image */}
          <motion.div className={styles.colTall} variants={itemVariants}>
            <button
              className={styles.imageWrapperTall}
              onClick={() => openModal('/img-6.png')}
              aria-label={`${dict.portfolioView} 4`}
            >
              <Image src="/img-6.png" alt="EVA Studio — Projet IA 4" fill sizes="(max-width: 768px) 100vw, 25vw" className={styles.img} />
              <div className={styles.overlay}>
                <span className={styles.viewText}>{dict.portfolioView}</span>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <PortfolioModal 
        isOpen={!!selectedImage} 
        image={selectedImage} 
        onClose={closeModal} 
        isRTL={isRTL}
      />
    </section>
  );
};

export default Portfolio;
