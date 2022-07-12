import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { pokemonsReducer } from "./reducers/pokemons";
import { featuring, logger } from "./middlewares";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  applyMiddleware(logger, featuring)
);

const store = createStore(pokemonsReducer, composeEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
