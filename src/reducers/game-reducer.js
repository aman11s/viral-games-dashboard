export const gameReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NEW_GAME":
      return { ...state, games: state.games.concat(payload.new_game) };

    default:
      return state;
  }
};
