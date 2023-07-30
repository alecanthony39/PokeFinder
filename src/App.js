import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import FindItems from "./Components/FindItems";
import FindMoves from "./Components/FindMoves";
import FindPokemon from "./Components/FindPokemon";

import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-items" element={<FindItems />} />
          <Route path="/find-moves" element={<FindMoves />} />

          <Route path="/find-pokemon" element={<FindPokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
