"use client"
import styles from './Landing_plans.module.css'
import Link from 'next/link';

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
    price: '6,495',
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
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`${styles.card} ${
              plan.highlighted ? styles.highlighted : ''
            }`}
          >
            <div className={styles.header}>
              <h3>{plan.title}</h3>
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
            </div>

            <p className={styles.subtitle}>{plan.subtitle}</p>

            <div className={styles.price}>{plan.price}</div>

            <Link href="/contact" className={styles.button}>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Landing_plans