import React, { useState } from "react";
import firebase from "firebase/app"
import { Spinner } from "../components/";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState("");

  const [errorMessage, seterrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async(e) => {
    e.preventDefault();
    setloading(<Spinner />);

    if (!email) {
      seterrorMessage("Provide your email address");
      setloading("");
    } else {
      try {
        var actionCodeSettings = {
          url:
            "localhost:3000?email=" +
            firebase.auth().currentUser.email,
          handleCodeInApp: true
        };
        await firebase
          .auth()
          .sendPasswordResetEmail(email, actionCodeSettings)
          .then(() => {
            // Password reset email sent!
            setMessage(`A password reset link has been sent to your ${email}`)
            seterrorMessage("")
            setloading("");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            seterrorMessage(errorMessage)
            setloading("");
          });

        setloading("");
      } catch (error) {
        seterrorMessage(error.message)
        setloading("")
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="passwordResetModal"
      tabindex="-1"
      aria-labelledby="passwordResetModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Provide your email
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>

          <form onSubmit={handleForgotPassword}>
            <div className="modal-body">
              {errorMessage && (
                <div className="my-3 py-2 alert alert-danger">
                  <p className="pb-0">{errorMessage}</p>
                </div>
              )}
              {message && (
                <div className="my-3 py-2 alert alert-danger">
                  <p className="pb-0">{message}</p>
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => seterrorMessage("")}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                {loading} Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
