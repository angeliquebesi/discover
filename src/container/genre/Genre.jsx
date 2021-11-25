import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import { genres } from "../../data/data";
import Background from "../../components/background/Background";
import Grain from "../../assets/grain.png";
import "./Genre.css";

export default function Genre() {
  return (
    <div className="container-genre">
      <Background />
      <NavBar />
      {genres.map((genre) => (
        <Link to={`/genre/${genre.id}`}>
          <div className={`${genre.name} categorie`}>
            <h2>{genre.name}</h2>
          </div>
          <img src={Grain} alt="grain" className="texture-grain" />
        </Link>
      ))}
    </div>
  );
}
