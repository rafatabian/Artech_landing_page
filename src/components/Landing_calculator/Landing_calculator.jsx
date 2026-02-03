"use client"
import styles from './Landing_calculator.module.css'
import { forwardRef, useState } from 'react'

// Fix: Am adăugat parantezele (props, ref) => ...
const Landing_calculator = forwardRef((props, ref) => {
   const [adsSpend, setAdsSpend] = useState('');
   const [customers, setCustomers] = useState('');
   const [email, setEmail] = useState('');
   const [errors, setErrors] = useState({});
   const [showResults, setShowResults] = useState(false);

   const validate = () => {
    const newErrors = {};

    if (!adsSpend || Number(adsSpend) <= 0) {
      newErrors.adsSpend = 'Please enter a valid monthly ad spend.';
    }

    if (!customers || Number(customers) <= 0) {
      newErrors.customers = 'Please enter the number of new patients.';
    }

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

  const cac = showResults
    ? Number(adsSpend) / Number(customers)
    : 0;

  const getGradeData = () => {
    if (cac <= 40) {
      return {
        grade: 'A',
        title: 'Excellent performance',
        text: 'Your system is elite. You are likely using automation and have a high-converting front desk.',
      };
    }
    if (cac <= 80) {
      return {
        grade: 'B',
        title: 'Good, but improvable',
        text: 'You are "holding steady," but likely losing 20-30% of your ad spend to slow follow-ups.',
      };
    }
    if (cac <= 140) {
      return {
        grade: 'C',
        title: 'High leakage detected',
        text: 'You are overpaying for patients. Your "manual" booking process is killing your margins.',
      };
    }
    return {
      grade: 'D',
      title: 'Critical revenue loss',
      text: 'Your ad budget is being vaporized. You are likely paying for clicks that never even reach your front desk.',
      };
  };

  const gradeData = getGradeData();

  return (
    <div className={styles.cac_container} ref={ref}>
     <div className={styles.cac_content}>
      <div className={styles.grid}>
        <div>
          <span className={styles.eyebrow}>
            Customer Acquisition Cost Calculator (CAC)
          </span>
          <h2>
            What is Your Lead to <br/>Patient Leakage Score?
          </h2>
          <p>
            Input your monthly ads spend and bookings to see exactly how much revenue is slipping through your current system.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="number"
              placeholder="Total marketing spend (£)"
              value={adsSpend}
              onChange={(e) => setAdsSpend(e.target.value)}
            />
            {errors.adsSpend && (
              <span className={styles.error}>{errors.adsSpend}</span>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="New patients"
              value={customers}
              onChange={(e) => setCustomers(e.target.value)}
            />
            {errors.customers && (
              <span className={styles.error}>{errors.customers}</span>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <button type="submit">Get your score</button>
        </form>
      </div>

      {showResults && (
        <div className={styles.results}>
          <div className={styles.header}>
            <div className={styles.grade}>{gradeData.grade}</div>
            <div>
              <h3>{gradeData.title}</h3>
              <p>{gradeData.text}</p>
            </div>
          </div>

          <div className={styles.cards}>
            <div>
              <span>Cost per patient</span>
              <strong>£{cac.toFixed(2)}</strong>
            </div>
            <div>
              <span>Monthly ad spend</span>
              <strong>£{adsSpend}</strong>
            </div>
            <div>
              <span>New patients</span>
              <strong>{customers}</strong>
            </div>
          </div>

          <p className={styles.note}>
            Clinics with automated booking and instant response systems typically reduce CAC by 25–40%.
          </p>
        </div>
      )}
      </div>
      </div>
  );
}); // <-- Închidem paranteza de la forwardRef

// Important: Dăm un nume componentei pentru debugging în React DevTools
Landing_calculator.displayName = "Landing_calculator";

export default Landing_calculator;