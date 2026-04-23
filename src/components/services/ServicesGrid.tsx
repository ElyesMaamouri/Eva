"use client";

import React, { useState, useEffect } from 'react';
import styles from './services.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesGrid = () => {
  const { dict, isRTL } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      id: "01",
      title: dict?.service1Title || "Cinéma IA",
      desc: dict?.service1Desc || "Séquences cinématographiques haut de gamme.",
      image: "/ai_cinema_service_1776943182699.png",
    },
    {
      id: "02",
      title: dict?.service2Title || "Vision Produit",
      desc: dict?.service2Desc || "Mise en scène photoréaliste de produits.",
      image: "/product_vision_service_1776943216975.png",
    },
    {
      id: "03",
      title: dict?.service3Title || "Publicité IA",
      desc: dict?.service3Desc || "Campagnes sociales optimisées pour l'engagement.",
      image: "/ai_advertising_service_1776943715619.png",
    },
    {
      id: "04",
      title: dict?.service4Title || "Concept Art",
      desc: dict?.service4Desc || "Visualisation instantanée d'idées complexes.",
      image: "/concept_art_service_1776943802803.png",
    },
  ];

  // Removed !mounted return to fix "nothing displays" issue and improve SSR
  // The grid will render with default values on server and update on client

  return (
    <section className={styles.alternatingSection}>
      <div className="container">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`${styles.serviceRow} ${index % 2 !== 0 ? styles.reverse : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
          >
            <div className={styles.imageSide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.img}
                />
              </div>
            </div>

            <div className={styles.textSide}>
              <span className={styles.number}>{service.id}</span>
              <h3 className={styles.title}>{service.title}</h3>
              <div className={styles.accentLine} />
              <p className={styles.desc}>{service.desc}</p>

              <Link href="/contact" className={styles.cta}>
                <span>{dict?.btnStart || "Démarrer un projet"}</span>
                <ArrowRight size={20} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
