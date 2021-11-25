import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gestionnaire" element={<Gestionnaire />} />
      </Routes>

    </div>
  );
}

export default App;
