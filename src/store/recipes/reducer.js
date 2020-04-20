const INITIAL_STATE = {
  recipes: []
};

export function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "RECIPE/ADD":
      alert("called this reducer");
      return {
        recipes: [...state.recipes, action.payload],
        ...state
      };
    default:
      return state;
  }
}
