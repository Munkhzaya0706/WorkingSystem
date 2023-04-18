import React from "react";

import logoImage from "../images/logo.png";

const Logo = () => (
  <div
    style={{
      margin: "20px",
      height: "50%",
      boxSizing: "border-box",
      borderRadius: "5px",
    }}
  >
    <img src={logoImage} style={{ maxWidth: "50%" }} alt="" />
  </div>
);

export default Logo;
