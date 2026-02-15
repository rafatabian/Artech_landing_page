import styles from "./page.module.css";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import dynamic from "next/dynamic";
import { FaCalendarAlt } from "react-icons/fa";
import { Suspense } from "react";

// dynamic import
const ContactIntro = dynamic(() =>
  import("../../components/Contact_intro/Contact_Intro")
);
const FaqSection = dynamic(() =>
  import("../../components/Landing_faq/Landing_faq")
);

export default function Contact() {


  return (
      <div className={styles.contact_container}>
        <Suspense>
          <ContactIntro />
        </Suspense>

        {/* or */}
        <div className={styles.contact_alternative_line}>
          <p>or</p>
        </div>

        {/* alternative contact */}
        <div className={styles.contact_phone_email}>
          <div>
            <RiWhatsappFill />
            <span>
              <a href="https://wa.me/447424177665"
                 target="_blank"
                 rel="noopener noreferrer"
                 >+44 7424 177 665</a>
            </span>
          </div>
          <div>
            <MdEmail />
            <a href={`mailto:${"business@artech-agency.co"}`}>
              business@artech-agency.co
            </a>
          </div>
            <div className={styles.contact_note}>
          <p><FaCalendarAlt /> We only take on 3 new clients each month</p>
        </div>
        </div>
          <div className={styles.contact_faq_container}>
            <FaqSection />
          </div>
      </div>
  );
}