import React from "react";
import Dash from "./dash" ;

import Header from "../Header/Code/header";
import SimpleFooter from "../Footer/Code/footer";

export default function RenderingDash() {
  return (
    <div >
      <Header/>
      <Dash />
      <SimpleFooter/>
    </div>
  );
}
