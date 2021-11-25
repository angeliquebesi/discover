import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Genres from "./data"; // importer le fichier data de Coralie à la place
import "./Genre.css";

export default function Genre() {
  console.log(Genres);
  return (
    <Link to="/genre/:id/">
      <>
        <NavBar />
        {Genres.map((genre) => (
          <div className={`${genre.name} categorie`}>
            <h2>{genre.name}</h2>
          </div>
        ))}
      </>
    </Link>
  );
}
