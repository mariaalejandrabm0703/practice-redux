export const initialStateFixture = {
  pokemons: [],
  pokemonsFilter: [],
};

export const dataStateWithPokemons = {
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
};

export const dataStateWithPokemonsFavorite = {
  pokemons: [
    {
      favorite: true,
      name: "Bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
    },
  ],
  pokemonsFilter: [],
};

export const dataStateWithPokemonsFilter = {
  pokemons: [],
  pokemonsFilter: [
    {
      name: "Bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
    },
  ],
};
