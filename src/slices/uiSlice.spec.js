import { initialStateFixture, initialStateTrue } from "./fixtures/uiFixtures";
import uiSlice, { setLoading } from "./uiSlice";

describe("uiSlice", () => {
  it("should create the correct actions", () => {
    const actions = uiSlice.actions;

    expect(uiSlice.name).toBe("ui");
    expect(actions.setLoading).toBeDefined();
  });

  it("should return the correct initialState", () => {
    const state = uiSlice.reducer(initialStateFixture, {});
    expect(state).toEqual(initialStateFixture);
  });

  it("should do setLoading correctly", () => {
    const state = uiSlice.reducer(initialStateFixture, setLoading(true));
    expect(state).toEqual(initialStateTrue);
  });
});
