import styles from './Landing_CTA.module.css'
import Link from 'next/link'

const Landing_CTA = () => {
    const phone_number = 447448726233

  return (
   <div className={styles.landing_cta_container}>
       <div className={styles.landing_cta_content}>
         <h2>Make impossible grow feel possible with Artech </h2>
         <Link href="/contact" >Book a call</Link> 
       </div>
    </div>
  )
}

export default Landing_CTA