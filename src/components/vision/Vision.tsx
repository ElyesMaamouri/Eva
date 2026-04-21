"use client";

import React from 'react';
import styles from './vision.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Vision = () => {
  const { dict, isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.vision} dir={isRTL ? 'rtl' : 'ltr'}>
      <motion.div
        className={`${styles.container} container-website`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.contentWrapper}>
          {/* Images Section - Consolidated into one container */}
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.imageSmall}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/img-1.jpg"
                alt="Detail"
                width={306}
                height={508}
                className={styles.img}
              />
            </motion.div>

            <motion.div
              className={styles.imageLarge}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/img-2.jpg"
                alt="Creative Vision"
                width={420}
                height={690}
                className={styles.img}
                priority
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className={styles.textSide}>
            <motion.h2 variants={itemVariants} className={styles.title}>
              {dict.visionTitle} <br />
              <span className={styles.gradientText}>{dict.visionTitleAccent}</span>
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.description}>
              {dict.visionDesc}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vision;
