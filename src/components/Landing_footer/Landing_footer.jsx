"use client"
import styles from './Landing_footer.module.css'
import Image from 'next/image'  
import Link from 'next/link'
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import footer_img from "../../../public/images/footer_logo.png"
import { track } from '@vercel/analytics';

const Landing_footer = () => {
    const initialEmailData = {
    tip_solicitare: "/",
    planul: "/",
    descriere: "",
    nume: "",
    telefon: "/",
    email: "",
  };
   const [emailData, setEmailData] = useState(initialEmailData);

    // function for sending emails
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_bxwwj7b", "template_85xbllk", emailData, {
        publicKey: "zRB_M2l24GAb2ixBd",
      })
      .then(
        () => {
          console.log(emailData)
          console.log("SUCCESS!");
          // Reset the form state to clear the inputs
          setEmailData(initialEmailData);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className={styles.landing_footer_container}>
      <div className={styles.landing_footer_content}>
       <div className={styles.landing_footer_first_container}>
        {/* logo */}
         <div><Image src={footer_img} alt="logo" width={300} height={150}/></div>
         {/* links */}
         <div>
           <Link href="https://www.facebook.com/profile.php?id=61561101313220" onClick={() => track("footer facebook", {location: "landing footer"})}>Facebook</Link>
            <Link href="https://www.instagram.com/artech.agency1?igsh=cDFycG50ZnVlZDFi" onClick={() => track("footer instagram", {location: "landing footer"})}>Instagram</Link>
          <Link href="/privacy" onClick={() => track("footer privacy policy", {location: "landing footer"})}>Privacy Policy</Link>
          <Link href="/terms" onClick={() => track("footer terms and conditions", {location: "landing footer"})}>Terms and Conditions</Link>
          <p>business@artech-agency.co</p>
         </div>
        </div>
         <div className={styles.landing_footer_second_container}>
          <p>© 2026 Artech-Agency. All rights reserved.</p>
        </div>
      </div>
      </div>
  )
}

export default Landing_footer