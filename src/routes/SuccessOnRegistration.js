import React from "react";
import { useHistory } from "react-router-dom";

export const SuccessOnRegistration = () => {
  const history = useHistory()

  const fullName = window.localStorage.getItem("fullName");

  const goBack = () => {
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("fullName");
    history.push("/")
  };
  return (
    <div className="container">
      <div className="col-6 mx-auto my-5 p-3 bg-light">
        <h2>{fullName}</h2>
        <h3>Your email has been verified successfully</h3>
        <button className="btn btn-primary mt-2" onClick={goBack}>
          Go Back home
        </button>
      </div>
    </div>
  );
};
