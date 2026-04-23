"use client";

import React, { useState, useEffect } from 'react';
import styles from './services.module.css';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  const { dict, isRTL } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = dict?.servicesHeroTitle || "Innovative solutions";
  const accent = dict?.servicesHeroTitleAccent || "visionary future";
  const subtitle = dict?.servicesPageSubtitle || "We combine human creativity with AI.";

  return (
    <section className={styles.hero} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
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
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>

      <div className={styles.glow}>
        <Image
          src="/ambient-glows.svg"
          alt=""
          role="presentation"
          fill
          sizes="100vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <div className={styles.moon}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <Image
            src="/moon.jpg"
            alt=""
            role="presentation"
            width={1440}
            height={872}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </motion.div>
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.topBadge}
          >
            {dict?.topBadge || "EVA • SERVICES"}
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
            suppressHydrationWarning
          >
            {title} <br />
            <span className={styles.gradientText}>{accent}</span>
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" as any }}
            suppressHydrationWarning
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
