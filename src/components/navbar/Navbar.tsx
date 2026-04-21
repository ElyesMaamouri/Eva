"use client";

import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, dict, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: language === 'fr' ? 'Accueil' : language === 'en' ? 'Home' : 'الرئيسية', href: '/' },
    { name: language === 'fr' ? "L'agence" : language === 'en' ? 'Agency' : 'الوكالة', href: '/agence' },
    { name: language === 'fr' ? 'Services' : language === 'en' ? 'Services' : 'الخدمات', href: '/services' },
    { name: language === 'fr' ? 'Réalisations' : language === 'en' ? 'Projects' : 'الأعمال', href: '/realisations' },
    { name: language === 'fr' ? 'Blog / Actualités' : language === 'en' ? 'Blog / News' : 'المدونة', href: '/blog' },
  ];

  const activeLink = links[0].name;

  return (
    <nav className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`${styles.navbar} container-website`}>
        <div className={styles.logo}>EVA</div>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={link.name === activeLink ? styles.active : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={`${styles.langContainer} ${langOpen ? styles.langOpen : ''}`}>
            <button
              className={styles.langCurrent}
              onClick={() => setLangOpen(!langOpen)}
            >
              <span className={styles.langName}>{language.toUpperCase()}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ opacity: 0.5, marginLeft: isRTL ? '0' : '4px', marginRight: isRTL ? '4px' : '0' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={styles.langDropdown}>
              <button
                onClick={() => { setLanguage('fr'); setLangOpen(false); }}
                className={language === 'fr' ? styles.activeLang : ''}
              >
                Français
              </button>
              <button
                onClick={() => { setLanguage('en'); setLangOpen(false); }}
                className={language === 'en' ? styles.activeLang : ''}
              >
                English
              </button>
              <button
                onClick={() => { setLanguage('ar'); setLangOpen(false); }}
                className={language === 'ar' ? styles.activeLang : ''}
              >
                العربية
              </button>
            </div>
          </div>

          <motion.button
            className={styles.contactBtn}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
          >
            {dict.contactBtn}
            <motion.div
              className={styles.iconCircle}
              variants={{
                hover: {
                  rotate: isRTL ? -45 : 45,
                  scale: 1.1,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <svg 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.div>
          </motion.button>

          {/* Toggle Menu Mobile */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={link.name === activeLink ? styles.active : ''}
          >
            {link.name}
          </Link>
        ))}
        <div className={styles.mobileLangSwitcher}>
          <button onClick={() => setLanguage('fr')}>FR</button>
          <button onClick={() => setLanguage('en')}>EN</button>
          <button onClick={() => setLanguage('ar')}>AR</button>
        </div>
        <button className={styles.mobileContactBtn}>
          {dict.contactBtn}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
