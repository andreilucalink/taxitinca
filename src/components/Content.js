import React from "react";
import "./content.css";

import tuly from "../img/t.PNG";
import dode from "../img/d.jpg";
import lucas from "../img/l.jpg";
import emi from "../img/e.jpg";
import hyundai from "../img/h.png";
import opel from "../img/o.webp";
import vw from "../img/vw.png";
// import star from "../img/s2.png";

import { Grid } from "@mui/material";

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
      <Grid container padding={2} spacing={2} marginBottom={4}>
        <Grid item xs={6}>
          <div className="grid-card">
            <img className="card-img" src={dode} alt="dode" />
            <p className="card-text">Andrei Morgovan</p>
            <img src={hyundai} alt="h" className="card-car" />
            <a className="call-btn" href="tel:0749578088">
              Comanda TAXI
            </a>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="grid-card">
            <img className="card-img" src={tuly} alt="dode" />
            <p className="card-text">Alexandru Szilagyi</p>
            <img src={opel} alt="opel" className="card-car" />
            <a className="call-btn" href="tel:0753549318">
              Comanda TAXI
            </a>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="grid-card">
            <img className="card-img" src={lucas} alt="dode" />
            <p className="card-text">Lucas Avram</p>
            <img src={vw} alt="opel" className="card-car" />
            <a className="call-btn" href="tel:0751362532">
              Comanda TAXI
            </a>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="grid-card">
            <img className="card-img" src={emi} alt="dode" />
            <p className="card-text">Emi Bodea</p>
            <img src={vw} alt="opel" className="card-car" />
            <a className="call-btn" href="tel:0734010204">
              Comanda TAXI
            </a>
          </div>
        </Grid>
      </Grid>
      {/* <div className="card">
        <img className="profile-img" src={dode} alt="dode" />
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
        <img className="profile-img" src={tuly} alt="tulica" />
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
      <div className="card">
        <img className="profile-img" src={lucas} alt="tulica" />
        <div className="stars">
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
        </div>
        <h3>Lucas "Teo" Avram</h3>
        <img src={vw} alt="opel" className="car" />
        <a href="tel:0753549318">Comanda TAXI</a>
      </div> */}
    </div>
  );
};

export default Content;
