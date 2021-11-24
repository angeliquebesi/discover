import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './container/Home';
import Recettes from './container/Recettes';
import Gestionnaire from './container/Gestionnaire';
import Troc from './container/Troc';

function App() {
  return (
    <div className="App">
      <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recettes" element={<Recettes />} />
      <Route path="/gestionnaire" element={<Gestionnaire />} />
      <Route path="/troc" element={<Troc />} />
    </Routes>
 
    </div>
  );
}

export default App;
