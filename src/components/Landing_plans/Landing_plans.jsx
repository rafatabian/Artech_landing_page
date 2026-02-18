"use client";

import styles from './Landing_plans.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { track } from "@vercel/analytics"


const plans = [
  {
    title: 'Foundation',
    subtitle: 'Best for new private clinics.',
    price: '£1,495',
    highlighted: false,
    features: [
      { text: 'High-Convert Website', included: true },
      { text: '24/7 Booking Engine', included: true },
      { text: 'Auto-WhatsApp/SMS', included: false },
      { text: 'Monthly Performance Report', included: true },
    ],
  },
  {
    title: 'Efficiency',
    badge: 'Recommended',
    subtitle: 'Best for scaling practices.',
    price: '£2,495',
    highlighted: true,
    features: [
      { text: 'High-Convert Website', included: true },
      { text: '24/7 Booking Engine', included: true },
      { text: 'Auto-WhatsApp/SMS', included: true },
      { text: 'CRM setup', included: true },
    ],
  },
  {
    title: 'Market Leader',
    subtitle: 'Best for multi-surgery groups.',
    price: '£6,495',
    highlighted: false,
    features: [
      { text: 'Custom Multi-Page Funnel', included: true },
      { text: '24/7 booking engine', included: true },
      { text: 'Google + Meta ads management', included: true },
      { text: 'Weekly CAC Optimization', included: true },
    ],
  },
];

const Landing_plans = () => {
  // motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        variants={containerVariants}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              transition: { duration: 0.3 } 
            }}
            className={`${styles.card} ${
              plan.highlighted ? styles.highlighted : ''
            }`}
          >
            <div className={styles.header}>
              <h3>{plan.title}</h3>
              {plan.badge && (
                <span className={styles.badge}>
                  {plan.badge}
                </span>
              )}
            </div>

            <p className={styles.subtitle}>{plan.subtitle}</p>

            <div className={styles.price}>{plan.price}</div>

            <Link href="/contact" className={styles.button} onClick={() => track(plan.title, {location: landing_plans})}>
              {plan.price === 'Custom Quote' ? 'Contact Us' : 'Get Started'}
            </Link>

            <div className={styles.includes}>This includes:</div>

            <ul className={styles.list}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span
                    className={
                      feature.included
                        ? styles.check
                        : styles.cross
                    }
                  >
                    {feature.included ? '✓' : '✕'}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Landing_plans;