import React from "react";
import "../Style/Addon.css";
import logo1 from "./Addon1.svg";
import logo2 from "./Addon2.svg";
import logo3 from "./Addon3.svg";
import logo4 from "./Addon4.svg";
export default function Addon() {
  return (
    <div className="container">
      <div className="fstrow">
        <div className="addonHome ">
          <img
            className="logo-addon"
            src={logo1}
            alt="sample-icon"
            width="100vw"
            height="100vw"
          />

          <div>
            <h3 style={{ color: "black" }}>Expert service</h3>
            <p>
              Expert services provide corporate clients with access to the
              knowledge of highly qualified specialists to identify and address
              complex problems.
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
            </a>
          </div>
        </div>
        <div className="addonHome ">
          <img
            className="logo-addon"
            src={logo2}
            alt="sample-icon"
            width="100vw"
            height="100vw"
          />

          <div>
            <h3 style={{ color: "black" }}>Fully regulated</h3>
            <p>
              The material is accurately classified and described, packaged in a
              specification package, marked, labeled, documented, and certified
              before being offered to your carrier.
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className="secrow">
        <div className="addonHome ">
          <img
            className="logo-addon"
            src={logo3}
            alt="sample-icon"
            width="100vw"
            height="100vw"
          />

          <div>
            <h3>Financial strength</h3>
            <p>
              Generate the money required to make investments, service debts and
              pay dividends to shareholders with its own means
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
            </a>
          </div>
        </div>
        <div className="addonHome ">
          <img
            className="logo-addon"
            src={logo4}
            alt="sample-icon"
            width="100vw"
            height="100vw"
          />

          <div>
            <h3>Integrated support</h3>
            <p>
              The procedures, systems, and software Online Resources has
              developed to coordinate the enrollment of Users on, and their use
              of, the Quotien System.
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
