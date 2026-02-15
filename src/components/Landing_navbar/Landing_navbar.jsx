import styles from "./Landing_navbar.module.css";
import Image from "next/image";
import logo from "../../../public/images/landing_logo.png"
import Link from "next/link";

const Landing_navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo_container}>
        <Link href="/">
         <Image src={logo} alt="logo" width={120} height={60} />
         </Link>
      </div>
    </div>
  )
}

export default Landing_navbar