import { useEffect } from "react";
import { setPokemons } from "./actions";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemon } from "./api";
import logo from "./statics/logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "./api";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetails = await Promise.all(
        pokemonsRes.map(async (pokemon) => {
         return getPokemonDetails(pokemon);
        })
      );
      dispatch(setPokemons(pokemonDetails));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
