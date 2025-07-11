import React from "react";
import Craousel from "../Code/aboutUsCaraousel";
import AboutUsInfo from "../Code/aboutInfo";
import OurWorks from "../Code/OurWorks";
import AboutUsEnd from "../Code/AboutUsEnd";
import Header from "../../Header/Code/header";
import SimpleFooter from "../../Footer/Code/footer.js";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <Craousel />
      <AboutUsInfo />
      <OurWorks />
      <AboutUsEnd />
      <SimpleFooter />
    </div>
  );
}
