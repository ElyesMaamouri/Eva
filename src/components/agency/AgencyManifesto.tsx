"use client";

import React from 'react';
import styles from './agency.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AgencyManifesto = () => {
  const { dict, isRTL } = useLanguage();

  return (
    <section id="about" className={styles.manifestoHero} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background glow from ambient SVG */}
      <div className={styles.ambientGlow} aria-hidden="true">
        <Image
          src="/ambient-glows.svg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Moon — same as in the original hero */}
      <div className={styles.moonWrapper} aria-hidden="true">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 0.45 }}
          transition={{ duration: 1.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/moon.png"
            alt=""
            width={1440}
            height={872}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </motion.div>
      </div>

      <div className="container">
        <div className={styles.manifestoContent}>
          <motion.span
            className={styles.manifestoLabel}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {dict?.agencyManifestoTitle || "Notre Manifeste"}
          </motion.span>

          <motion.h1
            className={styles.manifestoText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {dict?.agencyManifestoPart1 || "Nous ne remplaçons pas l'artiste,"}{" "}
            <br />
            <span className={styles.gradientText}>
              {dict?.agencyManifestoPart2 || "nous lui donnons des ailes."}
            </span>
          </motion.h1>

          <motion.p
            className={styles.manifestoDesc}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            {dict?.agencyManifestoDesc ||
              "EVA est né d'une conviction profonde : l'IA n'est pas une fin en soi, mais le pinceau le plus puissant jamais créé. Notre mission est de libérer le potentiel créatif de chaque visionnaire en supprimant les barrières techniques."}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AgencyManifesto;
