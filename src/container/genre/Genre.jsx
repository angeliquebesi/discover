import React from "react";
import Genres from "./data"; // importer le fichier data de Coralie à la place
import "./Genre.css";
import Background from "../../components/background/Background";
import Grain from "../../assets/grain.png";
import NavBar from "../../components/navbar/NavBar";

export default function Genre() {
  return (
    <div className="container-genre">
      <Background />
      <NavBar />

      {Genres.map((genre) => (
        <div className={`${genre.name} categorie`}>
          <h2>{genre.name}</h2>
        </div>
      ))}
      <img src={Grain} alt="grain" className="texture-grain" />
    </div>
  );
}
