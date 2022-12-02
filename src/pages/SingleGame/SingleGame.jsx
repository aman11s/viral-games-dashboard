import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGames } from "../../context";
import { format, parseISO } from "date-fns";
import { GameForm } from "../../components";
import { MdOutlineArrowBack } from "react-icons/md";
import "./SingleGame.css";

export const SingleGame = () => {
  const { gameId } = useParams();
  const {
    gameState: { games },
  } = useGames();

  const [openModal, setOpenModal] = useState(false);
  const opneFormModal = () => setOpenModal(true);
  const closeFormModal = (e) => {
    if (
      e.target.classList.contains("form-modal") &&
      e.target.tagName === "DIV"
    ) {
      setOpenModal(false);
    }
  };

  const foundGame = games.find(({ id }) => id === gameId);

  const { name, author, published_date, url } = foundGame;

  const date = format(parseISO(published_date), "PPpp");

  const editGameData = { name, url, author };

  return (
    <>
      <div className="single-game-header">
        <Link to="/">
          <MdOutlineArrowBack size={40} className="back-icon" />
        </Link>
        <h1 className="my-4 text-center">Game Details</h1>
      </div>
      <div className="game-details mx-auto">
        <button onClick={opneFormModal} className="btn secondary-btn edit-btn">
          Edit
        </button>
        <div
          onClick={closeFormModal}
          className={`form-modal ${!openModal && "hide"}`}
        >
          <GameForm
            setOpenModal={setOpenModal}
            editModal={true}
            editGameData={editGameData}
            editGameId={gameId}
          />
        </div>
        <div>
          <span className="game-key">Game Name:</span> {name}
        </div>
        <div>
          <span className="game-key">URL:</span>{" "}
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </div>
        <div>
          <span className="game-key">Author Name:</span> {author}
        </div>

        <div>
          <span className="game-key">Published date:</span> {date}
        </div>
      </div>
    </>
  );
};
