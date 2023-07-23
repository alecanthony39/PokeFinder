import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SinglePokemon = ({ pokemonData }) => {
  const [selectedMoveName, setSelectedMoveName] = useState("");
  const [moveDataMap, setMoveDataMap] = useState({});

  if (pokemonData && pokemonData.sprites) {
    const handleMoveSelection = (e) => {
      const selectedMoveName = e.target.value;
      const moveObject = pokemonData.moves.find(
        (move) => move.move.name === selectedMoveName
      );

      setMoveDataMap((prevMoveDataMap) => ({
        ...prevMoveDataMap,
        [selectedMoveName]: moveObject,
      }));

      setSelectedMoveName(selectedMoveName);
    };

    return (
      <>
        <img src={pokemonData.sprites.front_default} alt="Pokemon" />
        <p>Name: {pokemonData.species.name}</p>
        <Form.Group controlId="moveSelect">
          <Form.Label>Select a Move:</Form.Label>
          <Form.Control
            as="select"
            value={selectedMoveName}
            onChange={handleMoveSelection}
          >
            <option value="">--List Of Moves--</option>
            {pokemonData.moves.map((move, index) => (
              <option key={index} value={move.move.name}>
                {move.move.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {selectedMoveName && moveDataMap[selectedMoveName] && (
          <div>
            <p>Selected Move: {selectedMoveName}</p>
          </div>
        )}
      </>
    );
  } else {
    return <p>No Pokemon data found</p>;
  }
};

export default SinglePokemon;
