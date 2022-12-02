export const gameReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NEW_GAME":
      return { ...state, games: state.games.concat(payload.new_game) };

    case "EDIT_GAME":
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === payload.edit_game_id
            ? { ...game, ...payload.edit_game }
            : { ...game }
        ),
      };

    case "DELETE_GAME":
      return {
        ...state,
        games: state.games.filter(({ id }) => id !== payload.delete_game_id),
      };

    default:
      return state;
  }
};
