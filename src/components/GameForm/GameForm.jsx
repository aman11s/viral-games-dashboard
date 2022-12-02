import React, { useState } from "react";
import { useGames } from "../../context";
import { v4 as uuid } from "uuid";

const initialFormData = {
  name: "",
  url: "",
  author: "",
};

export const GameForm = ({
  setOpenModal,
  editModal,
  editGameData,
  editGameId,
}) => {
  const intialState = editModal ? editGameData : initialFormData;

  const [formData, setFormData] = useState(intialState);

  const { gameDispatch } = useGames();

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editModal) {
      gameDispatch({
        type: "EDIT_GAME",
        payload: { edit_game: formData, edit_game_id: editGameId },
      });
    } else {
      formData.id = uuid();
      formData.published_date = new Date().toISOString();
      gameDispatch({ type: "ADD_NEW_GAME", payload: { new_game: formData } });
      setFormData(initialFormData);
    }
    setOpenModal(false);
  };

  return (
    <form onSubmit={submitHandler} className="game-form">
      <h2>{editModal ? "Edit Game" : "Create New Game"}</h2>
      <input
        onChange={changeHandler}
        name="name"
        required
        value={formData.name}
        type="text"
        placeholder="Enter game name"
      />
      <input
        onChange={changeHandler}
        name="url"
        required
        value={formData.url}
        type="text"
        placeholder="Enter game url"
      />
      <input
        onChange={changeHandler}
        name="author"
        required
        value={formData.author}
        type="text"
        placeholder="Enter author name"
      />
      <button className="btn primary-btn">Submit</button>
    </form>
  );
};
