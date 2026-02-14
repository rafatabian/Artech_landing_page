"use client";

import styles from './Landing_calculator.module.css';
import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Landing_calculator = forwardRef((props, ref) => {
  const [adsSpend, setAdsSpend] = useState('');
  const [customers, setCustomers] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showResults, setShowResults] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!adsSpend || Number(adsSpend) <= 0) newErrors.adsSpend = 'Please enter a valid monthly ad spend.';
    if (!customers || Number(customers) <= 0) newErrors.customers = 'Please enter the number of new patients.';
    if (!email) {
      newErrors.email = 'Email is required to receive your score.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setShowResults(true);
  };

  const cac = showResults ? Number(adsSpend) / Number(customers) : 0;

  const getGradeData = () => {
    if (cac <= 40) return { grade: 'A', title: 'Excellent performance', text: 'Your system is elite. You are likely using automation and have a high-converting front desk.' };
    if (cac <= 80) return { grade: 'B', title: 'Good, but improvable', text: 'You are "holding steady," but likely losing 20-30% of your ad spend to slow follow-ups.' };
    if (cac <= 140) return { grade: 'C', title: 'High leakage detected', text: 'You are overpaying for patients. Your "manual" booking process is killing your margins.' };
    return { grade: 'D', title: 'Critical revenue loss', text: 'Your ad budget is being vaporized. You are likely paying for clicks that never even reach your front desk.' };
  };

  const gradeData = getGradeData();
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
  hidden: { opacity: 0, y: 20 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

  return (
    <div className={styles.cac_container} ref={ref}>
      <motion.div 
        className={styles.cac_content} initial="hidden" whileInView="visible"
      >
        <div className={styles.grid}>
         <motion.div variants={containerVariants}>
            <motion.span className={styles.eyebrow} variants={itemVariants}>
              Customer Acquisition Cost Calculator (CAC)
            </motion.span>
            <motion.h2 variants={itemVariants}>
              What is Your Lead to <br/>Patient Leakage Score?
            </motion.h2>
            <motion.p variants={itemVariants}>
              Input your monthly ads spend and bookings to see exactly how much revenue is slipping through your current system.
            </motion.p>
          </motion.div>

         <motion.form 
            className={styles.form} 
            onSubmit={handleSubmit} 
            noValidate
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <input
                type="number"
                placeholder="Total marketing spend (£)"
                value={adsSpend}
                onChange={(e) => setAdsSpend(e.target.value)}
              />
              {errors.adsSpend && <span className={styles.error}>{errors.adsSpend}</span>}
            </div>

            <div>
              <input
                type="number"
                placeholder="New patients"
                value={customers}
                onChange={(e) => setCustomers(e.target.value)}
              />
              {errors.customers && <span className={styles.error}>{errors.customers}</span>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <motion.button 
              type="submit"
            >
              Get your score
            </motion.button>
          </motion.form>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div 
              className={styles.results}
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <div className={styles.header}>
                <motion.div 
                  className={styles.grade}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                  {gradeData.grade}
                </motion.div>
                <div>
                  <h3>{gradeData.title}</h3>
                  <p>{gradeData.text}</p>
                </div>
              </div>

              <div className={styles.cards}>
                {[
                  { label: "Cost per patient", value: `£${cac.toFixed(2)}` },
                  { label: "Monthly ad spend", value: `£${adsSpend}` },
                  { label: "New patients", value: customers }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </motion.div>
                ))}
              </div>

              <p className={styles.note}>
                Clinics with automated booking and instant response systems typically reduce CAC by 25–40%.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

Landing_calculator.displayName = "Landing_calculator";

export default Landing_calculator;