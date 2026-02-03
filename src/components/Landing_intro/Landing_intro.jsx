import Link from "next/link";
import styles from "./Landing_intro.module.css";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import gdpr_img from "../../../public/images/gdpr_logo.png"

const Landing_intro = ({onScrollToCalc}) => {
  return (
    <div className={styles.intro_container}>
     <div className={styles.intro_content}>
        <div className={styles.intro_text}>
         <h1>Stop Overpaying for Manchester Dental Patients</h1>
         <h2>Most Manchester clinics lose 40% of their ad budget to leaky websites and slow follow-ups. We build the systems that turn expensive clicks into booked chairs.</h2>
         <div>
            <Link href="/contact" className={styles.intro_cta}>Get a Free Audit</Link>
            <button className={styles.intro_cta} onClick={onScrollToCalc}>Calculate my profit leak</button>
            </div>
            <p className={styles.intro_compliance}><Image src={gdpr_img} alt="GDPR" width={27} height={27} /> GDPR compliant <FaLock />DPA compliant</p>
         
        </div>
        
        <div className={styles.intro_image}></div>
     </div>
    </div>
  )
}

export default Landing_intro