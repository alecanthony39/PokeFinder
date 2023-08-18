const API_URL = "https://pokeapi.co/api/v2";

export const defaultPokemon = null;

const getPokemon = async (name) => {
  try {
    const response = await fetch(`${API_URL}/pokemon/${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

const getPokemonMoves = async (name) => {
  try {
    const response = await fetch(`${API_URL}/move/${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

const getPokemonMovesById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/move/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

const getPokemonItem = async (name) => {
  try {
    const response = await fetch(`${API_URL}/item/${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export { getPokemon, getPokemonMoves, getPokemonMovesById, getPokemonItem };
