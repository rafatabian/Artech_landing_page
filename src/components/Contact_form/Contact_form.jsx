"use client";

import styles from "./Contect_form.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const formRef = useRef(null);
  const [confirmation, setConfirmation] = useState(false);

  const clientProvider = (() => {
    if (!searchParams) return "";
    const ref = searchParams.get("ref");
    if (ref === "c" || searchParams.has("c")) return "Claudiu";
    if (ref === "f" || searchParams.has("f")) return "Fabian";
    return "";
  })();

  const [emailData, setEmailData] = useState(() => ({
    tip_solicitare: "",
    planul: "",
    descriere: "",
    day: "",
    time: "",
    nume: "",
    telefon: "",
    email: "",
    client_provider: clientProvider,
  }));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_vztopwc",
      "template_lylcs4q",
      emailData,
      { publicKey: "3EZTg7KvgmPiXOfnr" }
    );

    setConfirmation(true);
  };

  return (
    <>
      {confirmation ? (
        <div className={styles.contact_confirmation}>
          <Image
            src="/images/footer_logo.png"
            alt="logo"
            width={180}
            height={90}
            priority
          />
          <h1>Thank you for your time!</h1>
          <h2>We’ll call you at your scheduled time.</h2>
        </div>
      ) : (
        <form onSubmit={sendEmail} ref={formRef} className={styles.form}>
          <div className={styles.contact_desctiption}>
            <label htmlFor="description" className={styles.visually_hidden}>
              Give us some details
            </label>
            <textarea
              id="description"
              placeholder="Describe your project, needs, or questions"
              required
              value={emailData.descriere}
              onChange={(e) =>
                setEmailData({ ...emailData, descriere: e.target.value })
              }
            />
          </div>

          <div className={styles.contact_date_time_container}>
            <input
              type="date"
              required
              className={styles.input_date_time}
              value={emailData.day}
              onChange={(e) =>
                setEmailData({ ...emailData, day: e.target.value })
              }
            />

            <input
              type="time"
              required
              className={styles.input_date_time}
              value={emailData.time}
              onChange={(e) =>
                setEmailData({ ...emailData, time: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="name" className={styles.visually_hidden}>
              First and Last Name
            </label>
            <input
              id="name"
              type="text"
              required
              className={styles.input}
              placeholder="First and Last Name"
              value={emailData.nume}
              onChange={(e) =>
                setEmailData({ ...emailData, nume: e.target.value })
              }
            />

            <label htmlFor="phone" className={styles.visually_hidden}>
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              required
              className={styles.input}
              placeholder="Phone number"
              value={emailData.telefon}
              onChange={(e) =>
                setEmailData({ ...emailData, telefon: e.target.value })
              }
            />

            <label htmlFor="privacy" className={styles.contact_privacy_label}>
              <input type="checkbox" id="privacy" required />
              <span>
                I agree to the
                <Link href="/terms"> Terms of use </Link>
                and acknowledge the
                <Link href="/privacy"> Privacy Policy</Link>
              </span>
            </label>
          </div>

          <button type="submit" className={styles.contact_button_book}>
            Book my free audit
          </button>
        </form>
      )}
    </>
  );
}