"use client";

import React, { useState } from 'react';
import styles from './contact.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const { dict, isRTL, language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
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
            <div className={styles.infoIcon} aria-hidden="true">
              <Phone size={20} style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
            </div>
            <div className={styles.infoText}>
              <p dir="ltr" style={{ textAlign: isRTL ? 'right' : 'left' }}>+33 3 00 00 00 00</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon} aria-hidden="true">
              <Mail size={20} />
            </div>
            <div className={styles.infoText}>
              <p>hello@eva-studio.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon} aria-hidden="true">
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

        <form onSubmit={handleSubmit} className={styles.formCol} noValidate>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="contact-name" className="sr-only">{dict.contactFormName}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className={styles.inputField}
                placeholder={dict.contactFormName + "*"}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-email" className="sr-only">{dict.contactFormEmail}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className={styles.inputField}
                placeholder={dict.contactFormEmail + "*"}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-phone" className="sr-only">{dict.contactFormPhone}</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                className={styles.inputField}
                placeholder={dict.contactFormPhone + "*"}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-company" className="sr-only">{dict.contactFormCompany}</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                className={styles.inputField}
                placeholder={dict.contactFormCompany}
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-message" className="sr-only">{dict.contactFormMessage}</label>
            <textarea
              id="contact-message"
              name="message"
              className={`${styles.inputField} ${styles.textArea}`}
              placeholder={dict.contactFormMessage}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'loading'}
            aria-label={dict.contactFormSend}
          >
            {status === 'loading' ? '...' : (
              <>
                {dict.contactFormSend}
                <div className={styles.iconCircle} aria-hidden="true">
                  <Send size={18} style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
                </div>
              </>
            )}
          </button>

          {status === 'success' && (
            <motion.p
              role="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#4ade80', marginTop: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {dict.contactSuccess}
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              role="alert"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#f87171', marginTop: '10px', fontWeight: 600 }}
            >
              {language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : language === 'en' ? 'Something went wrong. Please try again.' : 'Une erreur est survenue. Veuillez réessayer.'}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
