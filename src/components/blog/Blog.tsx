"use client";

import React from 'react';
import styles from './blog.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';

const Blog = () => {
  const { dict, isRTL } = useLanguage();

  const articles = [
    {
      id: 1,
      title: dict.article1Title,
      image: "/article-1.jpg",
      date: dict.articleDate,
      badge: isRTL ? "استراتيجية" : "STRATÉGIE",
      slug: "networking-startups"
    },
    {
      id: 2,
      title: dict.article2Title,
      image: "/article-2.jpg",
      date: dict.articleDate,
      badge: isRTL ? "تطوير" : "DÉVELOPPEMENT",
      slug: "digital-growth"
    },
    {
      id: 3,
      title: dict.article3Title,
      image: "/article-3.jpg",
      date: dict.articleDate,
      badge: isRTL ? "ابتكار" : "INNOVATION",
      slug: "digital-evolution"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.blog}>
      <div className={`${styles.container} container-website`}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.bgTitle}>{dict.blogBg}</h2>
            <h3 className={styles.mainTitle}>{dict.blogTitle}</h3>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.moreBtn}
          >
            {dict.blogMore}
          </motion.button>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {articles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.id} className={styles.cardLink}>
              <motion.div 
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.meta}>
                    <span className={styles.badge}>{article.badge}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.date}>{article.date}</span>
                  </div>
                  <h4 className={styles.articleTitle}>{article.title}</h4>
                </div>
                
                <div className={styles.imageWrapper}>
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className={styles.articleImg}
                  />
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.arrowIcon}>
                    <ArrowRight size={20} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
