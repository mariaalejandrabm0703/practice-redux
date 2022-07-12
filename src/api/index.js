import axios from 'axios';

export const getPokemon = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};


export const getPokemonDetails = async (pokemon) => {
  const { name } = pokemon;
  const res = await axios.get(pokemon.url);
  const { height, weight, sprites } = res.data;
  return {
    name,
    height,
    weight,
    sprites,
  };
}
