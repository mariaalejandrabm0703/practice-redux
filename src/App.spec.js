import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";

const store = configureStore({
  reducer: {
    data: {
      pokemons: [],
      pokemonsFilter: [],
      loading: false,
    },
    ui: {
      loading: false,
    },
  },
  preloadedState: {
    data: {
        pokemons: [
            {
                name: "Bulbasaur",
                url: "https://pokeapi.co/api/v2/pokemon/1/",
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                },
            },
        ],
        pokemonsFilter: [],
        loading: false,
    },
    ui: {
        loading: false,
    }
    }
});

describe("App", () => {
  it("should render correctly", () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
  });
});
