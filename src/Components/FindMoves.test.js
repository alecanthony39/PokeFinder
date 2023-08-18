import { formatPokemonMoveName } from "./FindMoves";

it("formats pokemon name", () => {
  expect(formatPokemonMoveName("Billy Bob")).toEqual("billy-bob");
});

it("doesn't format empty name", () => {
  expect(formatPokemonMoveName("")).toEqual(null);
});
