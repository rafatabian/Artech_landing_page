'use client';
import "./Landing_solution.module.css"
import styles from "./Landing_solution.module.css";


import { useEffect, useRef, useState } from 'react';

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


    const duration = 900;
    const startTime = performance.now();

    function tick(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.round(progress * percent));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [animate, percent]);

  return (
    <svg width="110" height="110" className={styles.chart}>
      {/* background */}
      <circle
        cx="55"
        cy="55"
        r={radius}
        className={styles.bg}
      />

      {/* progress */}
      <circle
        cx="55"
        cy="55"
        r={radius}
        className={styles.progress}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: animate ? offset : circumference,
        }}
      />

      {/* label */}
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
const Landing_solution = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.solution_container}>
     <div className={styles.intro_content}>
    <section ref={sectionRef} className={styles.section}>
      <h2>2026 Data Shows Your<br />Website is Losing You Money</h2>

      <div className={styles.list}>
        {stats.map((item, i) => (
          <div key={i} className={styles.row}>
            <RadialChart percent={item.percent} animate={visible} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
    </div>
  );
}

export default Landing_solution