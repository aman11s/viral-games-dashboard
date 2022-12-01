import React, { useState } from "react";
import { useAuth } from "../../context";
import "./Login.css";

const testCredentials = {
  username: "aman11s",
  password: "amansingh",
};

const initialFormData = {
  username: "",
  password: "",
};
export const Login = () => {
  const { setIsLoggedIn } = useAuth();

  const [formData, setFormData] = useState(initialFormData);

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === "aman11s" && password === "amansingh") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={submitHandler} className="login-form my-2 p-4">
        <label className="my-2">
          <div className="mb-1">Username : </div>
          <input
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
            value={formData.username}
            type="text"
          />
        </label>
        <label className="my-2">
          <div className="mb-1">Password : </div>
          <input
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            value={formData.password}
            type="password"
          />
        </label>
        <button
          onClick={submitHandler}
          type="submit"
          className="btn primary-btn mx-auto"
        >
          Login
        </button>
        <button
          onClick={() => setFormData(testCredentials)}
          type="button"
          className="btn primary-btn mx-auto my-2"
        >
          Use test credentials
        </button>
      </form>
    </div>
  );
};
