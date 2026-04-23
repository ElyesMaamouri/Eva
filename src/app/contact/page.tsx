import React from 'react';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: "Contact | EVA Studio",
  description: "Contactez EVA Studio pour vos projets de création vidéo IA et visuels produits.",
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage;
