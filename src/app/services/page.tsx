import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';

import Footer from '@/components/footer/Footer';
import styles from '@/components/services/services.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services | EVA Studio",
  description: "Découvrez nos services de création visuelle assistée par l'intelligence artificielle : Cinéma IA, Vision Produit et Concept Art.",
  openGraph: {
    title: "Services | EVA Studio",
    description: "Expertise en production vidéo et visuels IA pour les marques visionnaires.",
  }
};

const ServicesPage = () => {
  return (
    <main className={styles.servicesWrapper}>
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </main>
  );
};

export default ServicesPage;
