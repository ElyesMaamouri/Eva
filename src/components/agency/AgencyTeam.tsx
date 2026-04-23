"use client";

import React from 'react';
import styles from './agency.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AgencyTeam = () => {
  const { dict, isRTL } = useLanguage();

  const team = [
    { name: "James Sterling", role: "Creative Director",    image: "/user-1.webp" },
    { name: "Sophia Vance",   role: "Creative Intelligence", image: "/user-2.webp" },
    { name: "David Thorne",   role: "Visual Strategist",    image: "/user-3.webp" },
  ];

  return (
    <section id="team" className={styles.team} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {dict?.agencyTeamTitle || "Les Visionnaires"}
        </motion.h2>
        <motion.p
          className={styles.sectionSub}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {dict?.agencyTeamSub || "Une équipe hybride mêlant expertise humaine et maîtrise technologique."}
        </motion.p>

        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={styles.memberContainer}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
            >
              <div className={styles.teamCard}>
                <div className={styles.memberImgWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.memberImg}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                  />
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyTeam;
