"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './contact.module.css';
import ContactForm from './ContactForm';

const Map = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => <div className={styles.mapContainer} style={{ background: '#111' }}></div>
});

const Contact = () => {
  return (
    <section className={styles.contactWrapper} id="contact">
      <Map />
      <ContactForm />
    </section>
  );
};

export default Contact;
