import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "../App.module.css"
import CelularGato from "../imgs/celulargato.jpg"
import selfieGato from "../imgs/selfiegato.jpg"
import GatoPensador from "../imgs/gatopensador.jpg"
import CTD from "./CTD";
import TDIC from "./TDIC";
import PenCp from "./PenCp";

function RoutesIs() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <Link to="tdic">
            <div>
              <h1>TDIC</h1>
              <img src={CelularGato} alt="gato com um telefone na mão" />
            </div>
          </Link>
        </div>
        <Link to="ctd">
          <div className= {styles.responvity600} >
            <div className={styles.CulturaDigital}>
              <h1>Cultura Digital</h1>
              <img src={selfieGato} alt="gato tirando selfie" />
            </div>
          </div>
        </Link>
        <Link to="pensamentodigital">
          <div className={styles.bg}>
            <div className={styles.PensamentoComputacional}>
              <h1>Pensamento Computacional</h1>
              <img src={GatoPensador} alt="gato pensando" />
            </div>
          </div>
        </Link>
      </div>
      <Routes>
        <Route path="/tdic" exact element={<TDIC />} />
        <Route path="/ctd" exact element={<CTD />} />
        <Route path="/pensamentodigital" exact element={<PenCp />} />
      </Routes>
    </>
  )
}

export default RoutesIs;