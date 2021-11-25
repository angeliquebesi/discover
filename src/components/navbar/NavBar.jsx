import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to="/">Accueil</Link> <br />
        <Link to="/genre">Genre </Link> <br />
        <Link to="/genre/musique"> Musique</Link> <br />
        <Link to="/artiste"> Contact </Link>
      </ul>
    </div>
  );
}
