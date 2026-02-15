import styles from "./Contact_Intro.module.css";
import { IoStar } from "react-icons/io5";
import Image from 'next/image';
import dynamic from "next/dynamic";
import cori_img from "../../../public/images/corina.jpeg"
import maysa_img from "../../../public/images/maysa.jpeg"
import ahmed_img from "../../../public/images/ahmed.jpeg"
import george_img from "../../../public/images/george.jpeg"
import google_logo_img from "../../../public/images/google_logo.png"
import meta_logo_img from "../../../public/images/meta_logo.png"
import gdpr_logo from "../../../public/images/gdpr_logo.png"

const ContactForm = dynamic(() =>
  import("../../components/Contact_form/Contact_form")
);

const ContactIntro = () => {
  return (
    <div className={styles.contact_intro_background}>
        <div className={styles.contact_intro_container}>
            <div className={styles.contact_intro_first}>
             <h1>Stop guessing. Start growing.</h1>
             <h2>Book your free 15-minute call and get a clear, step-by-step plan to attract and book pacients on autopilot</h2>
             <div className={styles.contactIntroReviews}>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <Image src={cori_img} alt="5 star reviews"
                  width={35}
                  height={35}
                />
                 <Image src={maysa_img} alt="5 star reviews"
                  width={35}
                  height={35}
                />
                 <Image src={ahmed_img} alt="5 star reviews"
                  width={35}
                  height={35}
                />
                 <Image src={george_img} alt="5 star reviews"
                  width={35}
                  height={35}
                />
                <p>Excellent</p>
              </div>
                 <p>Certified Google Ads<Image width={29} height={29} src={google_logo_img} alt="google logo"/>and Meta Ads<Image width={40} height={40} src={meta_logo_img} alt="meta logo"/> professionals</p>
                 <span><Image width={30} height={30} src={gdpr_logo} alt="gdpr logo"/>GDPR compliant</span>
            </div>
            <div className={styles.contact_intro_second}>
            <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default ContactIntro