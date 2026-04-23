"use client";

import React from 'react';
import styles from './cta.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  const { dict, isRTL } = useLanguage();

  return (
    <section className={styles.cta}>
      <div className={styles.bgWrapper}>
        <Image
          src="/work.jpg"
          alt="Work Background"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

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

      <div className={`${styles.content} container-website`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className={styles.inner}
        >
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            viewport={{ once: true }}
          >
            {dict.ctaTitlePart1} <span className={styles.gradientText}>{dict.ctaTitlePart2}</span> {dict.ctaTitlePart3}
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            viewport={{ once: true }}
          >
            {dict.ctaDesc}
          </motion.p>
          <motion.div
            className={styles.btnWrapper}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            variants={{
              hover: { scale: 1.05 }
            }}
          >
            <Link href="/contact" className={styles.btn}>
              <span className={styles.shine} />
              {dict.ctaBtn}
              <motion.div 
                className={styles.iconCircle}
                variants={{
                  hover: {
                    rotate: isRTL ? -45 : 45,
                    scale: 1.1,
                    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as any },
                  },
                }}
              >
                <svg 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5"
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
