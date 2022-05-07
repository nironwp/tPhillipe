import { useState } from 'react'
import CelularGato from './imgs/celulargato.jpg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TDIC from './components/TDIC';
import RoutesIs from './components/Routes';


function App() {

  return (
    <>
    <Router>
      <RoutesIs />
    </Router>
    </>
  )
}

export default App
