import "../Style/AboutUsInfo.css";
import React from "react";

function OurWorks() {
  const headingStyle = {
    fontSize: "1.5rem",
  };
  const pStyle = {
    fontSize: "1.2rem",
  };
  return (
    <div className="aboutUsinfo">
      <img
        className="no-round"
        src="http://demo.themenio.com/finance/image/photo-half-a.jpg"
        alt="man"
      />
      <div className="heading-text">
        <h5 className="heading-sm-lead" style={headingStyle}>
          Marketing:
        </h5>
        <p style={pStyle}>
          Tailored strategies to boost brand visibility, engage audiences, and
          drive growth across digital and social channels.
        </p>
        <h5 className="heading-sm-lead" style={headingStyle}>
          Consultation:
        </h5>
        <p style={pStyle}>
          Valuable insights, industry analysis, and strategic recommendations
          for informed decision-making and sustainable business growth.
        </p>
        <h5 className="heading-sm-lead" style={headingStyle}>
          Accounting:
        </h5>
        <p style={pStyle}>
          Streamlined financial management, from bookkeeping to budgeting,
          ensuring compliance and enabling focus on core activities.
        </p>
        <h5 className="heading-sm-lead" style={headingStyle}>
          Trademarks:
        </h5>
        <p style={pStyle}>
          Safeguard your brand identity with expert trademark registration,
          monitoring, and enforcement services.
        </p>
      </div>
    </div>
  );
}

export default OurWorks;
