import React from "react";
import { useParams } from "react-router-dom";
import { useGames } from "../../context";
import { format, parseISO } from "date-fns";
import "./SingleGame.css";

export const SingleGame = () => {
  const { gameId } = useParams();
  const {
    gameState: { games },
  } = useGames();

  const foundGame = games.find(({ id }) => id === gameId);

  const { name, author, published_date, url } = foundGame;

  const date = format(parseISO(published_date), "PPpp");

  return (
    <>
      <h1 className="my-4 text-center">Game Details</h1>
      <div className="game-details mx-auto">
        <div>
          <span className="game-key">Game Name:</span> {name}
        </div>
        <div>
          <span className="game-key">Author Name:</span> {author}
        </div>

        <div>
          <span className="game-key">Link:</span>{" "}
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </div>
        <div>
          <span className="game-key">Published date:</span> {date}
        </div>
      </div>
    </>
  );
};
