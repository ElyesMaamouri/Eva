"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './portfolio.module.css';

interface PortfolioModalProps {
  isOpen: boolean;
  image: string | null;
  onClose: () => void;
  isRTL: boolean;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, image, onClose, isRTL }) => {
  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div 
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.button 
            className={styles.closeBtn}
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={32} />
          </motion.button>
          
          <motion.div 
            className={styles.modalContent}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.modalImageWrapper}>
              <Image 
                src={image} 
                alt="Portfolio Enlarged" 
                fill 
                className={styles.modalImg}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
