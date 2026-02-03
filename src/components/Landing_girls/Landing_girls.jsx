import styles from "./Landing_girls.module.css"
import Link from "next/link";

const Landing_girls = () => {
  return (
   <section className={styles.container}>
      {/* Video Side */}
      <div className={styles.videoWrapper}>
      <video
        controls // Adds play/pause and volume buttons
        playsInline
        poster="./images/landing_video_prefixer.png"
       className={styles.videoElement}
>
  <source src={`./landing_video.mp4`} type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>

      {/* Text Side */}
      <div className={styles.content}>
        <span className={styles.badge}>High-Touch Service</span>
        <h2 className={styles.heading}>The Dental Growth Blueprint</h2>
        <p className={styles.description}>
          We build high-conversion patient 
          acquisition systems. Watch how we help clinics dominate local search and lower ad spend.
        </p>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.checkIcon}>✓</span> Lower Your Ad Spend by up to 40%
          </li>
          <li className={styles.listItem}>
            <span className={styles.checkIcon}>✓</span> Turn your website into a 24-hour receptionist
          </li>
          <li className={styles.listItem}>
            <span className={styles.checkIcon}>✓</span>Reduce admin work with our automated message system
          </li>
        </ul>

        <Link href="/contact" className={styles.ctaButton}>
          Get a free audit
        </Link>
        {/* <p className={styles.landing_girls_note}>To ensure every clinic gets our full creative energy, we strictly limit ourselves to 2 new projects per month</p> */}
      </div>
    </section>
  );
}

export default Landing_girls