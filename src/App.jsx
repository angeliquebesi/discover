import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./container/home/Home";
import Genre from "./container/genre/Genre";
import Contact from "./container/contact/Contact";
import SwipCube from "./components/swip/Cube";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/genre" element={<Genre />} />
        <Route exact path="/genre/:id" element={<SwipCube />} />
        <Route exact path="/artiste" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
