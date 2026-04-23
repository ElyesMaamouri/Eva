"use client";

import React, { useState } from 'react';
import styles from './contact.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const { dict, isRTL, language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className={`${styles.contactGrid} container`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Left Column: Contact Us */}
      <motion.div 
        className={styles.detailsCol}
        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className={styles.titleWithUnderline}>{dict.contactPageTitle}</h2>
        
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <Phone size={20} style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
            </div>
            <div className={styles.infoText}>
              <p dir="ltr" style={{ textAlign: isRTL ? 'right' : 'left' }}>+33 3 00 00 00 00</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <Mail size={20} />
            </div>
            <div className={styles.infoText}>
              <p>hello@eva-studio.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <MapPin size={20} />
            </div>
            <div className={styles.infoText}>
              <p>{language === 'ar' ? 'ريمس، فرنسا' : 'Reims, France'}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Need Help? */}
      <motion.div 
        className={styles.formCol}
        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className={styles.titleWithUnderline}>{dict.contactNeedHelp}</h2>
        <p className={styles.helpDesc}>{dict.contactHelpDesc}</p>

        <form onSubmit={handleSubmit} className={styles.formCol}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                className={styles.inputField} 
                placeholder={dict.contactFormName + "*"} 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                className={styles.inputField} 
                placeholder={dict.contactFormEmail + "*"} 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="tel" 
                className={styles.inputField} 
                placeholder={dict.contactFormPhone + "*"} 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                className={styles.inputField} 
                placeholder={dict.contactFormCompany} 
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <textarea 
              className={`${styles.inputField} ${styles.textArea}`} 
              placeholder={dict.contactFormMessage} 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? '...' : (
              <>
                {dict.contactFormSend}
                <div className={styles.iconCircle}>
                  <Send size={18} style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
                </div>
              </>
            )}
          </button>

          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#4ade80', marginTop: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {dict.contactSuccess}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
