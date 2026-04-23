"use client";

import React, { useState } from 'react';
import styles from './showcase.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Showcase = () => {
  const { dict, isRTL } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // High-quality cinematic AI showreel ID
  const videoId = "ScMzIvxBSi4";

  return (
    <section className={styles.showcase}>
      <div className={styles.bgWrapper}>
        <Image 
          src="/generative-ia.jpg" 
          alt="Generative AI Showcase" 
          fill 
          className={styles.bgImage}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={`${styles.content} container-website`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" as any }}
          viewport={{ once: true }}
          className={styles.playBtnWrapper}
          onClick={() => setIsVideoOpen(true)}
        >
          <div className={styles.playBtn}>
            <Play fill="white" size={32} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as any }}
          viewport={{ once: true }}
          className={styles.textContent}
        >
          <span className={styles.badge}>{dict.showcaseBadge}</span>
          <h2 className={styles.title}>{dict.showcaseTitle}</h2>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoId={videoId} 
      />
    </section>
  );
};

export default Showcase;
