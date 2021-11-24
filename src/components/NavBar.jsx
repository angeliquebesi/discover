import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to="/">Accueil</Link><br/>
        <Link to="/recettes">Recettes </Link><br/>
        <Link to="/gestionnaire">Gestionnaire </Link><br/>
        <Link to="/troc">Troc </Link>
      </ul>
    </div>
  )
}
