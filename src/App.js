import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { fetchPokemonsWithDetails, setPokemonsFilter } from "./slices/dataSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const pokemonsFilter = useSelector(
    (state) => state.data.pokemonsFilter,
    shallowEqual
  );

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (name === "" && pokemons.length === 0) {
      dispatch(fetchPokemonsWithDetails());
    } else {
      const filter = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      dispatch(setPokemonsFilter(filter));
    }
  }, [name]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher setName={setName} />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : pokemonsFilter.length > 0 ? (
        <PokemonList pokemons={pokemonsFilter} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
