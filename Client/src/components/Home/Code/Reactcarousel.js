import React from "react";
import { Carousel } from "react-bootstrap";
import "../Style/caraouselstyles.css";
import logo1 from "./Carousel1.svg"
import logo2 from "./Caraousel2.svg"
function Craousel() {
  return (
    <div className="styleCarousel">
      <Carousel>
        <Carousel.Item>
          <div className="card-1 Home-slider">
            <h1>
              Multi-regulated <br /> global broker.
              <p id="sliderp">
                A trusted destination for traders worldwide, <br /> Authorised
                by FCA, ASIC & FSCA
              </p>
            </h1>
            <img
              src={logo1}
              alt=""
              className="logoResponse"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card-1 Home-slider">
            <h1>
              New Standard <br /> in Stock Broker
              <p id="sliderp">
                Trade Forex, Commodities, Synthetic and stock <br /> indices
                from a single account
              </p>
            </h1>

            <img
              src={logo2}
              alt=""
              className="logoResponse"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Craousel;
