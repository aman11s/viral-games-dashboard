import React, { useState } from "react";
import { GameForm } from "../../components";
import { useGames } from "../../context";
import { BiTrash } from "react-icons/bi";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const {
    gameState: { games },
    gameDispatch,
  } = useGames();

  const navigate = useNavigate();

  const closeFormModal = (e) => {
    if (
      e.target.classList.contains("form-modal") &&
      e.target.tagName === "DIV"
    ) {
      setOpenModal(false);
    }
  };
  const opneFormModal = () => setOpenModal(true);

  const deleteGameHandler = (e, gameId) => {
    e.stopPropagation();
    gameDispatch({
      type: "DELETE_GAME",
      payload: { delete_game_id: gameId },
    });
  };

  return (
    <>
      <h1 className="my-4 text-center">Games Dashboard</h1>
      <div className="games-wrapper">
        {games?.map((game) => {
          const { id, name } = game;
          return (
            <div
              key={id}
              onClick={() => navigate(`/game/${id}`)}
              className="game"
            >
              <div className="game-name">{name}</div>
              <div
                onClick={(e) => deleteGameHandler(e, id)}
                className="delete-icon"
              >
                <BiTrash />
              </div>
            </div>
          );
        })}
        <div onClick={opneFormModal} className="game">
          <div className="game-name">+</div>
        </div>
        <div
          onClick={closeFormModal}
          className={`form-modal ${!openModal && "hide"}`}
        >
          <GameForm setOpenModal={setOpenModal} />
        </div>
      </div>
    </>
  );
};
