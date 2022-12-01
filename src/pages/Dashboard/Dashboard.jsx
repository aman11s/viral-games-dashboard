import React, { useState } from "react";
import { GameForm } from "../../components";
import { useGames } from "../../context";
import "./Dashboard.css";

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const {
    gameState: { games },
  } = useGames();

  const closeFormModal = (e) => {
    if (
      e.target.classList.contains("form-modal") &&
      e.target.tagName === "DIV"
    ) {
      setOpenModal(false);
    }
  };
  const opneFormModal = () => setOpenModal(true);

  return (
    <>
      <h1 className="my-4 dashboard-title">Games Dashboard</h1>
      <div className="games-wrapper">
        {games?.map((game) => {
          const { id, name } = game;
          return (
            <div key={id} className="game">
              <div className="game-name">{name}</div>
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
