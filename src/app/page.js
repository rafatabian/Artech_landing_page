import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => 
  import("../components/Landing_navbar/Landing_navbar")
);
const Home_Intro = dynamic(() =>
  import("../components/Landing_intro/Landing_intro")
);
const Home_Solutions = dynamic(() =>
  import("../components/Landing_solution/Landing_solution")
);
const Landing_calculator = dynamic(() =>
  import("../components/Landing_calculator/Landing_calculator")
);
const Landing_Owr_Services = dynamic(() =>
  import("../components/Landing_owr_services/Landing_own_services")
);
const Landing_Girls = dynamic(() =>
  import("../components/Landing_girls/Landing_girls")
);
const Landing_Plans = dynamic(() =>
  import("../components/Landing_plans/Landing_plans")
);
const Landing_Faq = dynamic(() =>
  import("../components/Landing_faq/Landing_faq")
);
const Landing_CTA = dynamic(() =>
  import("../components/Landing_CTA/Landing_CTA")
);
const Landing_footer = dynamic(() =>
  import("../components/Landing_footer/Landing_footer")
);

export default function Home() {
  return (
    <>
    <Navbar />
    <Home_Intro />
    <Home_Solutions />
    <Landing_calculator />
    <Landing_Owr_Services />
    <Landing_Girls />
    <Landing_Plans />
    <Landing_Faq />
    <Landing_CTA />
    <Landing_footer />
    </>
    
  );
}
