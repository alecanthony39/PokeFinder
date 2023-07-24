import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getPokemonMoves, getPokemonMovesById } from "../Api";
import styles from "./FindMoves.module.css";

const FindMoves = () => {
  const [pokemonMoveName, setPokemonMoveName] = useState("");
  const [pokemonMoveData, setPokemonMoveData] = useState(null);
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
    const Alec = pokemonMoveName.toLowerCase();

    const data = await getPokemonMoves(Alec);
    if (data === undefined) {
      setErrorMessage(`${pokemonMoveName} Does Not Exist`);
    }
    console.log(data);
    setPokemonMoveData(data);
  };

  const handleSecondSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(" ");

    const data = await getPokemonMovesById(pokemonMoveId);
    if (data === undefined) {
      setErrorMessage(`${pokemonMoveName} Does Not Exist`);
    }
    console.log(data);
    setPokemonMoveData(data);
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
          Submit
        </Button>
      </Form>

      <p>{pokemonMoveData.name}</p>
    </div>
  );
};

export default FindMoves;
