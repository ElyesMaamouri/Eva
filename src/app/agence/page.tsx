"use client";

import React, { useState, useEffect } from 'react';
import styles from '@/components/agency/agency.module.css';
import AgencyManifesto from '@/components/agency/AgencyManifesto';
import AgencyProcess from '@/components/agency/AgencyProcess';
import AgencyTeam from '@/components/agency/AgencyTeam';
import CTA from '@/components/cta/CTA';
import Footer from '@/components/footer/Footer';

export default function AgencyPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className={styles.agencyWrapper}>
      <AgencyManifesto />
      <AgencyProcess />
      <AgencyTeam />
      <CTA />
      <Footer />
    </main>
  );
}
