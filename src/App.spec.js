import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import { logger } from "./middlewares";
import rootReducer from "./reducers/rootReducer";

describe("App", () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
  });

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
