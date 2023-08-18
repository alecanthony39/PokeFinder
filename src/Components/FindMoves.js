import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { defaultPokemon, getPokemonMoves, getPokemonMovesById } from "../Api";
import styles from "./FindMoves.module.css";

export const formatPokemonMoveName = (name) => {
    if (name) {
      return name.toLowerCase().replace(/\s+/g, "-");
    } else {
      return null;
    }
  };

const FindMoves = () => {
  const [pokemonMoveName, setPokemonMoveName] = useState("");
  const [pokemonMoveData, setPokemonMoveData] = useState(defaultPokemon);

  const [errorMessage, setErrorMessage] = useState("");

  const [pokemonMoveId, setPokemonMoveId] = useState(" "); // New state for the second input

  const handleChange = (event) => {
    setPokemonMoveName(event.target.value);
  };

  const handleSecondInputChange = (event) => {
    setPokemonMoveId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(" ");
    const formattedName = formatPokemonMoveName(pokemonMoveName);

    if(!formattedName) {
      setErrorMessage("");
    }

    const data = await getPokemonMoves(formattedName);
    if (data === undefined) {
      setErrorMessage(`${pokemonMoveName} Does Not Exist`);
    }
    console.log(data);
    setPokemonMoveData(data);
  };

  const handleSecondSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(" ");

    if (!pokemonMoveId.trim()) {
      setErrorMessage("Please enter a valid Pokemon Move ID");
      setPokemonMoveData({});
    } else {
      const data = await getPokemonMovesById(pokemonMoveId);
      if (data === undefined) {
        setErrorMessage(`${pokemonMoveId} Does Not Exist`);
        setPokemonMoveData({});
      } else {
        setPokemonMoveData(data);
      }
    }
  };

  return (
    <div className={styles["FindM-contain"]}>
      <h2 className={styles["title"]}>Find Pokemon Moves</h2>

      <Form className={styles["form"]} onSubmit={handleSubmit}>
        <Form.Control
          placeholder="What Move?"
          value={pokemonMoveName}
          onChange={handleChange}
        />
        <Form.Text>
          Search For the Pokemon Move of your choice by name!
        </Form.Text>
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Form>

      {/* Second input section */}
      <Form className={styles["form"]} onSubmit={handleSecondSubmit}>
        <Form.Control
          type="number"
          maxLength={3}
          placeholder="Guess With A Number!"
          value={pokemonMoveId}
          onChange={handleSecondInputChange}
        />
        <Form.Text>If you Don't Know the Name, Search By Number!</Form.Text>
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Form>
      {pokemonMoveData && (
        <div className={styles["Move-container"]}>
          <h3>Name: {pokemonMoveData.name}</h3>
          {pokemonMoveData.type && <p>Type: {pokemonMoveData.type.name}</p>}
          {pokemonMoveData.damage_class && (
            <p>Damage Class: {pokemonMoveData.damage_class.name}</p>
          )}
          {pokemonMoveData.flavor_text_entries &&
            pokemonMoveData.flavor_text_entries[1] && (
              <p>
                Description:{" "}
                {pokemonMoveData.flavor_text_entries[1].flavor_text}
              </p>
            )}
        </div>
      )}
    </div>
  );
};

export default FindMoves;
