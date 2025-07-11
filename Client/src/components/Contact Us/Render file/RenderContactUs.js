import React from "react";

import ContactPage from "../Code/ContactPage";
import Header from "../../Header/Code/header";
 import SimpleFooter from "../../Footer/Code/footer.js";

import "../Style/ContactUsStyle.css";
export default function ContactUs() {
  return (
    <div className="Contact-Form">
      <Header/>
      <ContactPage />
      <SimpleFooter/>
    </div>
  );
}
