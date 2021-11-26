import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { genres } from "../../data/data";
import "./Genre.css";
import Background from "../../components/background/Background";
import Grain from "../../assets/grain.png";
import NavBar from "../../components/navbar/NavBar";

export default function Genre() {
  return (
    <div className="container-genre">
      <Background />
      <NavBar />
      {genres.map((genre) => (
        <Link to={`/genre/${genre.id}`}>
          <Fade top cascade>
            <div className="categorie">
              <img src={genre.url} alt="" />
              <h2>{genre.name}</h2>
            </div>
          </Fade>
          <img src={Grain} alt="grain" className="texture-grain" />
        </Link>
      ))}
    </div>
  );
}
