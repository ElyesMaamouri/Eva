"use client";

import React, { useEffect, useRef } from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { dict, isRTL } = useLanguage();
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  const countVal = useMotionValue(0);
  const rounded = useTransform(countVal, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(countVal, 5, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [countVal, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="about" className={styles.about} dir={isRTL ? 'rtl' : 'ltr'}>
      <motion.div
        className={`${styles.container} container-website`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className={styles.title}>
          {dict.aboutTitlePart1} <br />
          <span className={styles.gradientText}>{dict.aboutTitlePart2}</span>
        </motion.h2>

        <div className={styles.content}>
          {/* Left Column - Stats */}
          <motion.div variants={itemVariants} className={styles.stats}>
            <div className={styles.statsWrapper} ref={counterRef}>
              <div className={styles.decorativeWrapper}>
                <motion.div
                  className={styles.arrowsDecor}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Image src="/arrows.png" alt="" role="presentation" width={80} height={80} />
                </motion.div>
                <span className={styles.number}>
                  <motion.span>{rounded}</motion.span>+
                </span>
              </div>
              <p className={styles.expText}>{dict.aboutExpText}</p>
            </div>
          </motion.div>

          {/* Right Column - text */}
          <motion.div variants={itemVariants} className={styles.textContent}>
            <div className={styles.divider} />
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                {dict.aboutDescription}
              </p>

              <motion.button
                className={styles.aboutBtn}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <span>{dict.aboutBtn}</span>
                <motion.div
                  className={styles.iconCircle}
                  variants={{
                    hover: {
                      rotate: isRTL ? -45 : 45,
                      scale: 1.1,
                      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as any }
                    }
                  }}
                >
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
