"use client";

import React from 'react';
import styles from './agency.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, CheckCircle } from 'lucide-react';

const AgencyProcess = () => {
  const { dict, isRTL } = useLanguage();

  const steps = [
    {
      id: "01",
      title: dict?.agencyProcessStep1 || "Concept & Instinct",
      desc: dict?.agencyProcessStep1Desc || "Tout commence par une étincelle humaine, une émotion, un besoin stratégique.",
      Icon: Sparkles,
      color: "#AD26E3",
    },
    {
      id: "02",
      title: dict?.agencyProcessStep2 || "Génération IA",
      desc: dict?.agencyProcessStep2Desc || "Nos pipelines propriétaires transforment le concept en une multitude de visions haute fidélité.",
      Icon: Cpu,
      color: "#AD26E3",
    },
    {
      id: "03",
      title: dict?.agencyProcessStep3 || "Raffinement Humain",
      desc: dict?.agencyProcessStep3Desc || "Nos artistes polissent chaque pixel pour garantir une émotion et une qualité irréprochable.",
      Icon: CheckCircle,
      color: "#AD26E3",
    },
  ];

  return (
    <section className={styles.process} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {dict?.agencyProcessTitle || "Notre Processus"}
        </motion.h2>

        <div className={styles.processGrid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.processCard}
              style={{ "--accent-color": step.color } as any}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
            >
              {/* Top row: icon + glow dot */}
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <step.Icon size={26} />
                </div>
                <span className={styles.glowDot} />
              </div>

              {/* Ghost number */}
              <span className={styles.ghostNumber}>{step.id}</span>

              {/* Text */}
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyProcess;
