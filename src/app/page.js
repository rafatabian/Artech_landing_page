"use client"
import dynamic from "next/dynamic";
import { useRef } from "react";

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
const Landing_Plans = dynamic(() =>
  import("../components/Landing_plans/Landing_plans")
);
const Landing_Faq = dynamic(() =>
  import("../components/Landing_faq/Landing_faq")
);
const Landing_CTA = dynamic(() =>
  import("../components/Landing_CTA/Landing_CTA")
);

export default function Home() {
  const calculatorRef = useRef(null)

  const scrollToCalculator = () => {
     if(calculatorRef.current){
      calculatorRef.current.scrollIntoView({behavior: "smooth"})
     }
  }

  return (
    <>
    <Home_Intro onScrollToCalc={scrollToCalculator}/>
    <Home_Solutions />
    <Landing_calculator ref={calculatorRef}/>
    {/* <Landing_Girls /> */}
    <Landing_Owr_Services />
    <Landing_Plans />
    <Landing_Faq />
    <Landing_CTA />
    </>
    
  );
}
