import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import FindItems from "./Components/FindItems";
import FindMoves from "./Components/FindMoves";
import FindPokemon from "./Components/FindPokemon";
import FindGames from "./Components/FindGames";

import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-items" element={<FindItems />} />
          <Route path="/find-moves" element={<FindMoves />} />
          <Route path="/find-games" element={<FindGames />} />
          <Route path="/find-pokemon" element={<FindPokemon />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
