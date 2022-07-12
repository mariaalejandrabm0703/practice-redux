import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import {
  fetchPokemonsWithDetails,
  setPokemonsFilter,
} from "./slices/dataSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [noData, setNoData] = useState(true);

  const pokemons = useSelector((state) => state.data.pokemons);
  const pokemonsFilter = useSelector((state) => state.data.pokemonsFilter);
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  useEffect(() => {
    search(setNoData, pokemons, name, dispatch);
  }, [name]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher setName={setName} />
        <p hidden={noData}>No se ha encontrado coincidencias.</p>
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

function search(setNoData, pokemons, name, dispatch) {
  setNoData(true);
  const filter = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())
  );

  if (filter.length > 0) {
    dispatch(setPokemonsFilter(filter));
  } else {
    dispatch(setPokemonsFilter([]));
  }
  if (0 === filter.length && name !== "") {
    setNoData(false);
  } else {
    setNoData(true);
  }
}
