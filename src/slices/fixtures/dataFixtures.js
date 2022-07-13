export const initialState = {
  pokemons: [],
  pokemonsFilter: [],
  loading: false,
};

export const dataState = {
  pokemons: [
    {
      name: "Bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
    },
  ],
  pokemonsFilter: [],
  loading: false,
};
