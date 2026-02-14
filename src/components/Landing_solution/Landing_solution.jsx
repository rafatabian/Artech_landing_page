"use client";

import { useState, useEffect } from 'react';
import styles from "./Landing_solution.module.css";
import { motion } from "framer-motion";

const stats = [
  {
    percent: 77,
    text: '77% of patients now choose clinics based on Online Booking availability.',
  },
  {
    percent: 40,
    text: '40% of high-value appointments are booked after 6:00 PM when your desk is closed.',
  },
  {
    percent: 60,
    text: `60% of leads "ghost" if they don't receive a response within 5 minutes.`,
  },
];

function RadialChart({ percent, animate }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 1500; 
    const startTime = performance.now();

    function tick(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); 
      
      setCount(Math.round(ease * percent));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [animate, percent]);

  return (
    <svg width="110" height="110" className={styles.chart}>
      <circle cx="55" cy="55" r={radius} className={styles.bg} />
      
      <circle
        cx="55"
        cy="55"
        r={radius}
        className={styles.progress}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: animate ? offset : circumference,
          transition: "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)" // CSS smooth transition
        }}
      />
      
      <text
        x="55"
        y="55"
        textAnchor="middle"
        dominantBaseline="middle"
        className={styles.label}
      >
        {count}%
      </text>
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 }, 
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const Landing_solution = () => {
  const [chartsActive, setChartsActive] = useState(false);

  return (
    <div className={styles.solution_container}>
      <div className={styles.intro_content}>
        
        <motion.section 
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          onViewportEnter={() => setChartsActive(true)} 
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            2026 Data Shows Your<br />Website is Losing You Money
          </motion.h2>

          <motion.div 
            className={styles.list}
            variants={containerVariants}
          >
            {stats.map((item, i) => (
              <motion.div 
                key={i} 
                className={styles.row}
                variants={itemVariants} 
              >
                <RadialChart percent={item.percent} animate={chartsActive} />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
          
        </motion.section>
      </div>
    </div>
  );
}

export default Landing_solution;