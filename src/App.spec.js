import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from "./App";
import rootReducer from "./reducers/rootReducer";

describe("App", () => {
  const store = createStore(rootReducer);

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
