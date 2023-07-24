const API_URL = "https://pokeapi.co/api/v2";

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
    const response = await fetch(`${API_URL}/Moves/${name}`, {
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

export { getPokemon };
