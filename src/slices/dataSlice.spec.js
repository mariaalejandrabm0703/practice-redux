import dataSlice, {
  setFavorite,
  setPokemons,
  setPokemonsFilter,
} from "./dataSlice";
import {
  dataStateWithPokemons,
  dataStateWithPokemonsFavorite,
  dataStateWithPokemonsFilter,
  initialStateFixture,
} from "./fixtures/dataFixtures";

describe("dataSlice", () => {
  it("should create the correct actions", () => {
    const actions = dataSlice.actions;

    expect(dataSlice.name).toBe("data");
    expect(actions.setPokemons).toBeDefined();
    expect(actions.setPokemonsFilter).toBeDefined();
    expect(actions.setFavorite).toBeDefined();
  });

  it("should return the correct initialState", () => {
    const state = dataSlice.reducer(initialStateFixture, {});
    expect(state).toEqual(initialStateFixture);
  });

  it("should return the correct pokemons", () => {
    const state = dataSlice.reducer(dataStateWithPokemons, {});
    expect(state).toEqual(dataStateWithPokemons);
  });

  it("should return the correct pokemonsFilter", () => {
    const state = dataSlice.reducer(dataStateWithPokemonsFilter, {});
    expect(state).toEqual(dataStateWithPokemonsFilter);
  });

  it("should do setPokemons correctly", () => {
    const state = dataSlice.reducer(
      initialStateFixture,
      setPokemons([dataStateWithPokemons.pokemons[0]])
    );
    expect(state).toEqual(dataStateWithPokemons);
  });

  it("should do setPokemonsFilter correctly", () => {
    const state = dataSlice.reducer(
      initialStateFixture,
      setPokemonsFilter([dataStateWithPokemonsFilter.pokemonsFilter[0]])
    );
    expect(state).toEqual(dataStateWithPokemonsFilter);
  });

  it("should do setFavorite correctly", () => {
    const state = dataSlice.reducer(
      dataStateWithPokemons,
      setFavorite([dataStateWithPokemons.pokemons[0]])
    );
    expect(state).toEqual(dataStateWithPokemonsFavorite);
  });
});
