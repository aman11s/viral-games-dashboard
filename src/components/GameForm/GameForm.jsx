import React, { useState } from "react";
import { useGames } from "../../context";
import { v4 as uuid } from "uuid";

const initialFormData = {
  name: "",
  url: "",
  author: "",
};

export const GameForm = ({ setOpenModal, editModal, editGameData }) => {
  const intialState = editModal ? editGameData : initialFormData;

  const [formData, setFormData] = useState(intialState);

  const { gameDispatch } = useGames();

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formData.id = uuid();
    formData.published_date = new Date();
    gameDispatch({ type: "ADD_NEW_GAME", payload: { new_game: formData } });
    setFormData(initialFormData);
    setOpenModal(false);
  };

  return (
    <form onSubmit={submitHandler} className="game-form">
      <h2>Create New Game</h2>
      <input
        onChange={changeHandler}
        name="name"
        value={formData.name}
        type="text"
        placeholder="Enter game name"
      />
      <input
        onChange={changeHandler}
        name="url"
        value={formData.url}
        type="text"
        placeholder="Enter game url"
      />
      <input
        onChange={changeHandler}
        name="author"
        value={formData.author}
        type="text"
        placeholder="Enter author name"
      />
      <button className="btn primary-btn">Submit</button>
    </form>
  );
};
