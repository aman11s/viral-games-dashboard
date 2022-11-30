import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form my-2 p-4">
        <label className="my-2">
          <div className="mb-1">Username : </div>
          <input type="text" />
        </label>
        <label className="my-2">
          <div className="mb-1">Password : </div>
          <input type="password" />
        </label>
        <button type="submit" className="btn primary-btn mx-auto">
          Use test credentials
        </button>
      </form>
    </div>
  );
};
