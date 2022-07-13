import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import "./index.css";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
