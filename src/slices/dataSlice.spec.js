import dataSlice from "./dataSlice";

describe("dataSlice", () => {
  it("should create the correct actions", () => {
    const actions = dataSlice.actions;

    expect(dataSlice.name).toBe("data");
    // expect(actions.setPokemons).toBeDefined();
    // expect(actions.setPokemonsFilter).toBeDefined();
    // expect(actions.setFavorite).toBeDefined();
  });
});
