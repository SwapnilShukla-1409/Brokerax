import "../Style/AboutUsInfo.css";
import React from "react";

function AboutUsInfo() {
  const headingStyle = {
    fontSize: "1.5rem",
  };
  const pStyle = {
    fontSize: "1.2rem",
  };
  return (
    <div className="aboutUsinfo">
      <div className="heading-text">
        <h5 className="heading-sm-lead" style={headingStyle}>
          ABOUT US
        </h5>
        <h2 className="heading-section">WHO WE ARE</h2>
        <p style={pStyle}>
          We are Finance Corp, We provide Finance consulting.
        </p>
        <p style={pStyle}>
          At Brokerax, we are passionate about empowering individuals to
          participate in the global digital currency revolution. With our
          user-friendly platform, cutting-edge technology, and unwavering
          commitment to security.
        </p>
        <p style={pStyle}>
          we strive to make buying and selling cryptocurrencies accessible,
          transparent, and hassle-free for everyone.
        </p>
      </div>

      <img
        className="no-round"
        src="http://demo.themenio.com/finance/image/photo-home-a.jpg"
        alt="man"
      />
    </div>
  );
}

export default AboutUsInfo;
