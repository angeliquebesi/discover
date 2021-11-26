import React from "react";
import Fade from "react-reveal/Fade";
import { genres } from "../../data/data";
import "./Genre.css";
import Background from "../../components/background/Background";
import Grain from "../../assets/grain.png";
import NavBar from "../../components/navbar/NavBar";
// import rap from "../../assets/rap.jpg";

export default function Genre() {
  return (
    <div className="container-genre">
      <Background />
      <NavBar />
      <div className="container-categories">
        <div className="inner">
          {genres.map((genre) => (
            <Fade top cascade>
              <div className="categorie">
                <img src={genre.url} alt="" />
                <h2>{genre.name}</h2>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <img src={Grain} alt="grain" className="texture-grain" />
    </div>
  );
}
