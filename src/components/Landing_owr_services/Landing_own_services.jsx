"use client";

import styles from './Landing_owr_services.module.css'
import Image from 'next/image'
import { FaCalendarAlt } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import services_img from "../../../public/images/owr_services_logo.png"
import Link from 'next/link';
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

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

const Landing_own_services = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.services_content} >
         
        {/* --- TOP SECTION (Video + Text) --- */}
        <motion.section 
          className={styles.container}  
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Video Side */}
          <motion.div className={styles.videoWrapper} variants={itemVariants}>
            <video
              controls 
              playsInline
              poster="./images/landing_video_prefixer.png"
              className={styles.videoElement}
            >
              <source src={`./landing_video.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Text Side */}
          <div className={styles.content}>
            <motion.span className={styles.badge} variants={itemVariants}>
                High-Touch Service
            </motion.span>
            
            <motion.h2 className={styles.heading} variants={itemVariants}>
                The Artech Engine <Image src={services_img} alt="Artech Engine" width={55} height={35}/>
            </motion.h2>
            
            <motion.p className={styles.description} variants={itemVariants}>
                The system that manages and automates your bookings while saving you time and money
            </motion.p>

            <motion.ul className={styles.list} variants={itemVariants}>
              <li className={styles.listItem}>
                <span className={styles.checkIcon}>✓</span>Fill Your Monday Schedule
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkIcon}>✓</span>40% Lower Ad Spend
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkIcon}>✓</span> Zero Manual Admin
              </li>
            </motion.ul>

            <motion.div variants={itemVariants}>
                <Link href="/contact" className={styles.ctaButton} onClick={() => track("services get free audit", {location: "landing_girls"})}>
                Get a free audit
                </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* --- 3 PILLARS SECTION --- */}
        <motion.div 
            className={styles.pillars_container}
            variants={containerVariants} 
            initial="hidden"             
            whileInView="visible"        
            viewport={{ once: true, amount: 0.2 }} 
        >
            <motion.div className={styles.pillar} variants={itemVariants}>
                <div>
                    <h3>Book appointments 24/7 </h3>
                    <p>Turn your website into a 24-hour receptionist that fills your Monday morning schedule before you even open your doors. We install a seamless booking system that lets patients secure consultations instantly on evenings, nights, and weekends.</p>
                </div>
                <div className={styles.landing_our_services_icons_div}>
                    <FaCalendarAlt/>
                </div>
            </motion.div>

            <motion.div className={styles.pillar} variants={itemVariants}>
                <div>
                    <h3>Cheaper more effective ads.</h3>
                    <p>Lower Your Ad Spend by up to 40% Without Losing a Single Booking. Our websites are built as high-performance funnels designed specifically for dental clinics. We optimize each section to ensure the leads you pay for actually turn into patients.</p>
                </div>
                <div className={styles.landing_our_services_icons_div}>
                    <TbPigMoney/>
                </div>
            </motion.div>

            <motion.div className={styles.pillar} variants={itemVariants}>
                <div>
                    <h3>Eliminate manual admin work.</h3>
                    <p>Reduce admin work with our automated message system that sends confirmations, booking details and reminder to your patients. This ensures no high-value patient ever slips through</p>
                </div>
                <div className={styles.landing_our_services_icons_div}>
                    <IoIosTime/>
                </div>
            </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default Landing_own_services;