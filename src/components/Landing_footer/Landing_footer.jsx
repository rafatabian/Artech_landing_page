"use client"
import styles from './Landing_footer.module.css'
import Image from 'next/image'  
import Link from 'next/link'
import { useState } from 'react';
import emailjs from "@emailjs/browser";

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
         <div><Image src="/footer_logo.png" alt="logo" width={300} height={150}/></div>
         {/* links */}
         <div>
           <Link href="https://www.facebook.com/profile.php?id=61561101313220">Facebook</Link>
            <Link href="https://www.instagram.com/artech.agency1?igsh=cDFycG50ZnVlZDFi">Instagram</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms and Conditions</Link>
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