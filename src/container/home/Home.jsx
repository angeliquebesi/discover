import React from "react";
import { Link } from "react-router-dom";
import Background from "../../components/background/Background";
import Grain from "../../assets/grain.png";
import "./Home.css";
import NavBar from "../../components/navbar/NavBar";

export default function Home() {
  return (
    <div className="container-Home">
      <Background />
      <NavBar />

      <h3>
        <span className="debut-pres">Bienvenue sur discover, ici</span> «on ne
        vend pas la musique on la partage.»
      </h3>
      <div>
        <h4>-Leonard Bernstein</h4>
      </div>
      <Link to="/genre">
        <button type="button" className="btn-start">
          Entrée
        </button>
      </Link>
      <Link to="/artiste">
        <button type="button" className="btn-artiste">
          Entrée des artistes
        </button>
      </Link>
      <img src={Grain} alt="grain" className="texture-grain" />
    </div>
  );
}
