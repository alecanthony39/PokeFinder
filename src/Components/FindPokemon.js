import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getPokemon } from "../Api";
import styles from "./FindPokemon.module.css";
import SinglePokemon from "./singlePokemon";
const FindPokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(" ");
    const Alec = pokemonName.toLowerCase();

    const data = await getPokemon(Alec);
    if (data === undefined) {
      setErrorMessage(`${pokemonName} Does Not Exist`);
    }
    console.log(data);
    setPokemonData(data);
  };

  return (
    <div className={styles["FindP-contain"]}>
      <h2 className={styles["title"]}>Find Pokemon</h2>

      <Form className={styles["form"]} onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Who's That Pokemon?"
          value={pokemonName}
          onChange={handleChange}
        />
        <Form.Text>Search For the Pokemon of your choice by name!</Form.Text>
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Form>
      {pokemonData && pokemonData.sprites && (
        <>
          <SinglePokemon pokemonData={pokemonData} />
        </>
      )}
      <p>{errorMessage}</p>
    </div>
  );
};

export default FindPokemon;
