import styles from "./Contact_Intro.module.css";
import { IoStar } from "react-icons/io5";
import Image from 'next/image';
import dynamic from "next/dynamic";


const ContactForm = dynamic(() =>
  import("../../components/Contact_form/Contact_form")
);

const ContactIntro = () => {
  return (
    <div className={styles.contact_intro_background}>
        <div className={styles.contact_intro_container}>
            <div className={styles.contact_intro_first}>
             <h1>Stop guessing. Start growing.</h1>
             <h2>Book your free 15-minute call and get a clear, step-by-step plan to attract clients consistently</h2>
             <div className={styles.contactIntroReviews}>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <Image src="/images/corina.jpeg" alt="5 star reviews"
                  width={35}
                  height={35}
                />
                 <Image src="/images/maysa.jpeg" alt="5 star reviews"
                  width={35}
                  height={35}
                />
                 <Image src="/images/ahmed.jpeg" alt="5 star reviews"
                  width={35}
                  height={35}
                />
                 <Image src="/images/george.jpeg" alt="5 star reviews"
                  width={35}
                  height={35}
                />
                <p>Excellent</p>
              </div>
                 <p>Certified Google Ads<Image width={29} height={29} src="/images/google_logo.png" alt="google logo"/>and Meta Ads<Image width={40} height={40} src="/images/meta_logo.png" alt="meta logo"/> professionals</p>
                 <span><Image width={30} height={30} src="/images/gdpr_logo.png" alt="gdpr logo"/>GDPR compliant</span>
            </div>
            <div className={styles.contact_intro_second}>
            <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default ContactIntro