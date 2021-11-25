import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./container/home/Home";
import Genre from "./container/genre/Genre";
import Musique from "./container/musique/Musique";
import Contact from "./container/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/genre" element={<Genre />} />
        <Route exact path="/genre/musique" element={<Musique />} />
        <Route exact path="/artiste" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
