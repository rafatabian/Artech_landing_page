"use client";

import Link from "next/link";
import styles from "./Landing_intro.module.css";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import gdpr_img from "../../../public/images/gdpr_logo.png";
import { motion } from "framer-motion";

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

const Landing_intro = ({ onScrollToCalc }) => {
  return (
    <div className={styles.intro_container}>
      <div className={styles.intro_content}>
        

        <motion.div 
          className={styles.intro_text}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Stop Overpaying for Manchester Dental Patients
          </motion.h1>
          
          <motion.h2 variants={itemVariants}>
            Most Manchester clinics lose 40% of their ad budget to leaky websites and slow follow-ups. We build the systems that turn expensive clicks into booked chairs.
          </motion.h2>
          
          <motion.div variants={itemVariants}>
            <Link href="/contact" className={styles.intro_cta}>
              Get a Free Audit
            </Link>
            <button className={styles.intro_cta} onClick={onScrollToCalc}>
              Calculate my profit leak
            </button>
          </motion.div>
          
          <motion.p className={styles.intro_compliance} variants={itemVariants}>
            <Image src={gdpr_img} alt="GDPR" width={27} height={27} /> 
            GDPR compliant <FaLock /> DPA compliant
          </motion.p>
        </motion.div>
        
        <motion.div 
          className={styles.intro_image}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        ></motion.div>
        
      </div>
    </div>
  );
};

export default Landing_intro;