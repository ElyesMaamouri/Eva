"use client";

import React, { useState, useEffect } from 'react';
import styles from './agency.module.css';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const AgencyHero = () => {
  const { dict, isRTL } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = dict?.agencyHeroTitle || "L'Agence";
  const subtitle = dict?.agencyHeroSubtitle || "Où l'intelligence artificielle rencontre l'instinct artistique.";

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
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>

      <div className={styles.moon}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
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
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          >
            {title}
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" as any }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AgencyHero;
