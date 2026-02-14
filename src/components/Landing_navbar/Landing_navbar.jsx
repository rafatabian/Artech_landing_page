import styles from "./Landing_navbar.module.css";
import Image from "next/image";
import logo from "../../../public/images/landing_logo.png"

const Landing_navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo_container}>
         <Image src={logo} alt="logo" width={120} height={60} />
      </div>
    </div>
  )
}

export default Landing_navbar