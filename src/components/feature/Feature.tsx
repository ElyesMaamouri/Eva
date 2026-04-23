"use client";

import React from 'react';
import styles from './feature.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Clapperboard, Box, Brain } from 'lucide-react';

const Feature = () => {
  const { dict, isRTL } = useLanguage();

  const features = [
    {
      id: "01",
      title: dict.feat1Title,
      desc: dict.feat1Desc,
      icon: <Clapperboard size={24} />,
    },
    {
      id: "02",
      title: dict.feat2Title,
      desc: dict.feat2Desc,
      icon: <Box size={24} />,
    },
    {
      id: "03",
      title: dict.feat3Title,
      desc: dict.feat3Desc,
      icon: <Brain size={24} />,
    },
  ];

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
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className={styles.feature} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Ambient Glows replicated from Hero */}
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
      
      <motion.div 
        className={`${styles.container} container-website`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.header}>
          <span className={styles.bgTitle}>{dict.featureSub}</span>
          <motion.h2 variants={itemVariants} className={styles.mainTitle}>
            {dict.featureTitle}
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <motion.div 
              key={f.id} 
              variants={itemVariants}
              className={styles.card}
            >
              <div className={styles.cardInnerGlow}>
                <Image
                  src="/ambient-glows.svg"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.innerGlowImg}
                />
              </div>
              
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{f.id}</span>
                <div className={styles.textPart}>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                  <p className={styles.cardDesc}>{f.desc}</p>
                </div>
              </div>
              
              <div className={styles.cardBottom}>
                <div className={styles.iconWrapper}>
                  {f.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Feature;
