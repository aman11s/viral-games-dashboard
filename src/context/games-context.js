import { createContext, useContext, useEffect, useReducer } from "react";
import { gameReducer } from "../reducers";

const gamesContext = createContext(null);

const intialGameState = {
  games: JSON.parse(localStorage.getItem("games")) || [],
};

const GamesProvider = ({ children }) => {
  const [gameState, gameDispatch] = useReducer(gameReducer, intialGameState);

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(gameState.games));
  }, [gameState]);

  return (
    <gamesContext.Provider value={{ gameState, gameDispatch }}>
      {children}
    </gamesContext.Provider>
  );
};

const useGames = () => useContext(gamesContext);

export { GamesProvider, useGames };
