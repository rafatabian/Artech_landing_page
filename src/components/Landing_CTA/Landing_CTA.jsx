"use client"
import styles from "./Landing_CTA.module.css"
import Link from 'next/link'
import { track } from '@vercel/analytics';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FinalCTA = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <motion.div 
        className={styles.backgroundImage} 
        style={{ y: backgroundY }}
      />
      
      <div className={styles.overlay} />

      <motion.div 
        className={styles.content} 
        style={{ y: textY }}
      >
        <span className={styles.tagline}>Ready to scale?</span>
        <h2 className={styles.slogan}>
          Fill Your Monday Schedule <br /> 
          <span className={styles.highlight}>On Autopilot.</span>
        </h2>
        <p className={styles.subtext}>
          Zero Manual Admin. 40% Lower Ad Spend. One simple system.
        </p>
        
        <div className={styles.buttonGroup}>
          <Link href="/contact" className={styles.primaryBtn} onClick={() => {track("CTA book a call",{location: "landing_CTA"})}}>Get Your Growth Audit</Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;