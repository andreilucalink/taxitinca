import React from "react";
import "./header.css";
import bh from "../img/bh.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <h1 className="header-text">TAXI</h1>
          <h2 className="header-text">TINCA</h2>
        </div>
        <img src={bh} alt="" className="header-img" />
      </div>
    </div>
  );
};

export default Header;
