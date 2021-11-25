import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./container/home/Home";
import NavBar from "./components/navbar/NavBar";
import Gestionnaire from "./container/gestionnaire/Gestionnaire";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gestionnaire" element={<Gestionnaire />} />
      </Routes>
    </div>
  );
}

export default App;
