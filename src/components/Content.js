import React from "react";
import "./content.css";

import tuly from "../img/t.PNG";
import dode from "../img/d.jpg";
import hyundai from "../img/h.png";
import opel from "../img/o.webp";
import star from "../img/s2.png";

const Content = () => {
  return (
    <div className="content">
      <div className="text-container">
        <h3 className="text">Pana la Rapa, Husasau sau chiar Oradea?</h3>
        <br />
        <h3 className="text">Sau doar un drum scurt pana la piata?</h3>
        <br />
        <h1>NOI SUNTEM SOLUTIA!</h1>
      </div>
      <div className="card">
        <img src={dode} alt="dode" />

        <div className="stars">
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
        </div>
        <h3>Andrei "Dodel" Morgovan</h3>
        <img src={hyundai} alt="opel" className="car" />
        <a href="tel:0749578088">Comanda TAXI</a>
      </div>
      <div className="card">
        <img src={tuly} alt="tulica" />
        <div className="stars">
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
        </div>
        <h3>Alexandru "Țulica" Szilagyi</h3>
        <img src={opel} alt="opel" className="car" />
        <a href="tel:0753549318">Comanda TAXI TURBAT</a>
      </div>
    </div>
  );
};

export default Content;
