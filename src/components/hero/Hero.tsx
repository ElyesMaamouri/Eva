"use client";

import React, { useEffect } from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { dict, isRTL } = useLanguage();

  const countVal = useMotionValue(1);
  const rounded = useTransform(countVal, (latest) => {
    return latest >= 5.95 ? "6" : latest.toFixed(1);
  });

  useEffect(() => {
    const controls = animate(countVal, 6, {
      duration: 2.5,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [countVal]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: [0.16, 1, 0.3, 1], // Custom ease-out
      },
    },
  };

  return (
    <section className={styles.hero} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Ambient Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
        className={styles.ambientGlow}
      >
        <Image
          src="/ambient-glows.svg"
          alt=""
          role="presentation"
          fill
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <div className={styles.glow}>
        <Image
          src="/ambient-glows.svg"
          alt=""
          role="presentation"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={styles.moon}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.floatingArrow}
        >
          <Image
            src="/arrow.png"
            alt="Floating Element"
            width={278}
            height={278}
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <Image
            src="/moon.png"
            alt=""
            role="presentation"
            width={1440}
            height={872}
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
      </div>

      <motion.div
        className={`${styles.container} container-website`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className={styles.topBadge}
        >
          {dict.topBadge}
        </motion.div>

        <motion.h1 variants={itemVariants} className={styles.title}>
          {dict.titlePart1} <br />
          {dict.titlePart2} <span className={styles.gradientText}>{dict.titlePart3}</span>
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.description}>
          {dict.description}
        </motion.p>

        <motion.div variants={itemVariants} className={styles.social}>
          <div className={styles.avatars}>
            <div className={styles.avatar}>
              <Image src="/user.jpg" alt="User 1" width={62} height={62} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className={styles.avatar}>
              <Image src="/user.jpg" alt="User 2" width={62} height={62} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className={styles.plusIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>
          <div className={styles.socialText}>
            <strong><motion.span>{rounded}</motion.span>k+</strong>
            <span className={styles.clientText}> {dict.clientText}</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.ctaButtons}>
          <motion.button
            className={styles.primaryBtn}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
          >
            {dict.btnStart}
            <motion.span
              style={{ display: 'inline-flex', alignItems: 'center' }}
              variants={{
                hover: {
                  x: isRTL ? -4 : 4,
                  y: -4,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <svg
                width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.span>
          </motion.button>

          <motion.button
            className={styles.secondaryBtn}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {dict.btnDiscover}
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.heroImageSection}>
          <div className={styles.heroImageBackground}>
            <Image
              src="/img-hero.png"
              alt="Hero Illustration"
              width={1200}
              height={600}
              className={styles.heroImage}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
