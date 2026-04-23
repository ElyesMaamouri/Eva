"use client";

import React from 'react';
import styles from './footer.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

/**
 * Note: Brand icons (Facebook, Youtube, etc.) were removed from the official lucide-react package.
 * We use the official Lucide SVGs here to maintain the consistent "Lucide" aesthetic.
 */

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Footer = () => {
  const { dict, isRTL } = useLanguage();

  return (
    <footer className={styles.footer} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={styles.wavesContainer}>
        {/* Abstract waves background pattern */}
        <svg className={styles.waves} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(255, 255, 255, 0.03)" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="rgba(255, 255, 255, 0.05)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,197.3C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className={`${styles.container} container-website`}>
        <div className={styles.mainGrid}>
          {/* Logo & Brand Info */}
          <div className={styles.brandCol}>
            <motion.h2 
              className={styles.logo}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              EVA
            </motion.h2>
            <motion.p 
              className={styles.slogan}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2 }}
              viewport={{ once: true }}
            >
              {dict.footerSlogan}
            </motion.p>
            <div className={styles.socials}>
              <a href="https://facebook.com/eva-studio" aria-label="Suivez EVA sur Facebook" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FacebookIcon size={20} aria-hidden="true" /></a>
              <a href="https://youtube.com/@eva-studio" aria-label="Suivez EVA sur YouTube" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><YoutubeIcon size={20} aria-hidden="true" /></a>
              <a href="https://linkedin.com/company/eva-studio" aria-label="Suivez EVA sur LinkedIn" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><LinkedinIcon size={20} aria-hidden="true" /></a>
              <a href="https://instagram.com/eva_studio" aria-label="Suivez EVA sur Instagram" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><InstagramIcon size={20} aria-hidden="true" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <motion.div 
            className={styles.linksGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.linksCol}>
              <h3>{dict.footerLinksTitle}</h3>
              <ul>
                <li><Link href="#about">{dict.footerAbout}</Link></li>
                <li><Link href="#team">{dict.footerTeam}</Link></li>
                <li><Link href="#portfolio">{dict.footerPortfolio}</Link></li>
                <li><Link href="/services">{dict.navServices}</Link></li>
                <li><Link href="/contact">{dict.footerContact}</Link></li>
                <li><Link href="#pricing">{dict.footerPricing}</Link></li>
              </ul>
            </div>
            <div className={styles.linksCol}>
              <h3>{dict.footerSolutionsTitle}</h3>
              <ul>
                <li><Link href="#solutions">{dict.footerSolVideo}</Link></li>
                <li><Link href="#solutions">{dict.footerSolProduct}</Link></li>
                <li><Link href="#solutions">{dict.footerSolConcepts}</Link></li>
                <li><Link href="#solutions">{dict.footerSolStory}</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className={styles.bottomBar}>
          <p>{dict.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
