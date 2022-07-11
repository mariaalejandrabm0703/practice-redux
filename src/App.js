import { useEffect } from "react";
import { connect } from "react-redux";
import { setPokemons as setPokemonsAction } from "./actions";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemon } from "./api";
import logo from "./statics/logo.svg";
import "./App.css";

function App({ pokemons, setPokemons }) {

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (payload) => dispatch(setPokemonsAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
