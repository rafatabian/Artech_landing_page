import styles from './Landing_owr_services.module.css'
import Image from 'next/image'
import { FaCalendarAlt } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";

const Landing_own_services = () => {

  return (
    <div className={styles.services_container}>
      <div className={styles.services_content}>
        <div className={styles.services_text}>
           <h2 className={styles.services_title}>The Artech Engine <Image src="/owr_services_logo.png" alt="Artech Engine" width={55} height={35}/></h2>
           <p>The system that manages and automastes your bookings while saving you time and money</p>
        </div>

      {/* 3 pillars */}
      <div className={styles.pillar}>
        <div>
            <h3>Book appointments 24/7 </h3>
            <p>Turn your website into a 24-hour receptionist that fills your Monday morning schedule before you even open your doors.We install a seamless booking system that lets patients secure consultations instantly on evenings, nights, and weekends.</p>
        </div>
        <div className={styles.landing_our_services_icons_div}>
          <FaCalendarAlt/>
        </div>
        </div>
      <div className={styles.pillar}>
        <div>
            <h3>Cheaper more effective ads.</h3>
            <p>Lower Your Ad Spend by up to 40% Without Losing a Single Booking. Our websites are built as high-performance funnels designed specifically for dental clinics. We optimize each section to ensure the leads you pay for actually turn into patients.</p>
        </div>
        <div className={styles.landing_our_services_icons_div}>
          <TbPigMoney/>
        </div>
      </div>
      <div className={styles.pillar}>
        <div>
            <h3>Eliminate manual admin work.</h3>
            <p>Reduce admin work with our automated message system that sends confirmations, booking details and reminder to your patients. This ensures no high-value patient ever slips through</p>
        </div>
        <div className={styles.landing_our_services_icons_div}>
        <IoIosTime/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Landing_own_services