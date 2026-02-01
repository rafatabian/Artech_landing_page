import styles from "./Landing_navbar.module.css";
import Image from "next/image";

const Landing_navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo_container}>
         <Image src="/landing_logo.jpg" alt="logo" width={120} height={60} />
      </div>
    </div>
  )
}

export default Landing_navbar