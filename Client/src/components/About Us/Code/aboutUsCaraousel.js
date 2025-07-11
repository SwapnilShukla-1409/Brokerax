import { Carousel } from "react-bootstrap";
import "../Style/aboutUsStyle.css";
import React from "react";
function AboutUsCaraousel() {
  return (
    <div className="aboutUsCararousel">
      <Carousel>
        <Carousel.Item>
          <div className="AboutUscard-1">
            <h1>
              Expert Financial Advice.
              <p>
                We help clients find ways to turn into actionable insights by{" "}
                <br />
                embedding economics across their organization’s strategy.
              </p>
            </h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutUscard-2">
            <h1>
              Fit your life and budget.
              <p>
                We provide independent advice based on established research
                <br />
                methods, and our experts have in-depth sector knowledge.
              </p>
            </h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutUsCaraousel;
