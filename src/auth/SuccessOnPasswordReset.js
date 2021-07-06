import React from "react";
import { useHistory } from "react-router-dom";

export const SuccessOnPasswordReset = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/sign-in")
  }

  return (
    <div className="container">
      <div className="col-6 mx-auto my-5 p-3 bg-light">
        <h3>Your password has been reset</h3>
        <button className="btn btn-primary mt-2" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
