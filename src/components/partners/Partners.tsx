"use client";

import React from 'react';
import styles from './partners.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Partners = () => {
  const logos = [
    "/logo-1.png",
    "/logo-2.png",
    "/logo-3.png",
    "/logo-4.png",
  ];

  // Double the logos for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className={styles.partners}>
      <div className="container-website">
        <div className={styles.carouselContainer}>
          <motion.div 
            className={styles.track}
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                <Image 
                  src={logo} 
                  alt={`Partner ${index}`} 
                  width={140} 
                  height={50} 
                  className={styles.logo}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
