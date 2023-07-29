import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import styles from "./singlePokemon.module.css";

const SinglePokemon = ({ pokemonData }) => {
  const [selectedMoveName, setSelectedMoveName] = useState("");
  const [moveDataMap, setMoveDataMap] = useState({});
  const [showStat, setShowStat] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
        <p>Ability: {pokemonData.abilities[0].ability.name}</p>
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
            <p>{selectedMoveName}</p>
          </div>
        )}
        <Button
          onClick={() => {
            setShowStat(!showStat);
          }}
          variant="primary"
        >
          Show Base Stats
        </Button>{" "}
        {showStat && (
          <div className={styles["trading-card-container"]}>
            <div className={styles["trading-card"]}>
              <h3 className={styles["PokeName"]}>
                {pokemonData.species.name}{" "}
                <span>
                  {pokemonData.types[0].type.name}{" "}
                  {pokemonData.types[1] && (
                    <span>& {pokemonData.types[1].type.name}</span>
                  )}
                </span>
              </h3>
              {pokemonData.sprites.front_shiny &&
                pokemonData.sprites.back_shiny && (
                  <img
                    src={
                      isHovered
                        ? pokemonData.sprites.back_shiny
                        : pokemonData.sprites.front_shiny
                    }
                    alt={pokemonData.name}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                )}
              <p>
                {pokemonData.stats[0].stat.name}{" "}
                <span>Base:{pokemonData.stats[0].base_stat}</span>
              </p>
              <p>
                {pokemonData.stats[1].stat.name}{" "}
                <span>Base:{pokemonData.stats[1].base_stat}</span>
              </p>
              <p>
                {pokemonData.stats[2].stat.name}{" "}
                <span>Base:{pokemonData.stats[2].base_stat}</span>
              </p>
              <p>
                {pokemonData.stats[3].stat.name}{" "}
                <span>Base:{pokemonData.stats[3].base_stat}</span>
              </p>
              <p>
                {pokemonData.stats[4].stat.name}{" "}
                <span>Base:{pokemonData.stats[4].base_stat}</span>
              </p>
              <p>
                {pokemonData.stats[5].stat.name}{" "}
                <span>Base:{pokemonData.stats[5].base_stat}</span>
              </p>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <p>No Pokemon data found</p>;
  }
};

export default SinglePokemon;
