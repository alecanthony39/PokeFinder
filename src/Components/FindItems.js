import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styles from "./FindItems.module.css";
import { getPokemonItem } from "../Api";
const FindItems = () => {
  const [pokemonItems, setPokemonItems] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event) => {
    setPokemonItems(event.target.value);
  };

  const formatPokemonItemName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(" ");
    const Alec = formatPokemonItemName(pokemonItems);

    const data = await getPokemonItem(Alec);
    if (data === undefined) {
      setErrorMessage(`${pokemonItems} Does Not Exist`);
    }
    console.log(data);
    setPokemonData(data);
  };

  return (
    <div className={styles["FindI-contain"]}>
      <h2 className={styles["title"]}>Find Pokemon Items </h2>

      <Form className={styles["form"]} onSubmit={handleSubmit}>
        <Form.Control
          placeholder="What Item?"
          value={pokemonItems}
          onChange={handleChange}
        />
        <Form.Text>
          Search For the Pokemon Item of your choice by name!
        </Form.Text>
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Form>
      <p>{errorMessage}</p>
      {pokemonData && (
        <div className={styles["Item-container"]}>
          <h3>{pokemonData.name}</h3>
          {pokemonData.sprites.default && (
            <img src={pokemonData.sprites.default} alt="Pokemon" />
          )}
          <p>Category:{pokemonData.category.name}</p>
          <p>{pokemonData.flavor_text_entries[0].text}</p>
        </div>
      )}
    </div>
  );
};

export default FindItems;
