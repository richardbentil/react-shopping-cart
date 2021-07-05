import React, { useState } from "react";
import firebase from "firebase/app";
import { Spinner, ForgotPasswordForm } from "../components/";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setloading] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(<Spinner />);

    if (!email || !password) {
      seterrorMessage("Provide your email/password");
      setloading("");
    } else {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            seterrorMessage(errorMessage);
          });
      } catch (error) {
        seterrorMessage(error.message);
        setloading("");
      }
    }
  };

  return (
    <div className="container">
      <div className="my-5">
        {errorMessage && (
          <div className="my-3 py-2 alert alert-danger">
            <p className="pb-0">{errorMessage}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <nav>
            <div className="col-12 text-end mb-2" id="nav-tab2">
              <button
              type="button"
                className="btn btn-default text-primary"
                data-bs-toggle="modal"
                data-bs-target="#passwordResetModal">
                Forgot Password?
              </button>
            </div>
          </nav>
          <button
            class="btn btn-primary btn-block w-100"
            type="submit"
            disabled={!email || !password}>
            {loading} Login
          </button>
        </form>
      </div>

      <ForgotPasswordForm />
    </div>
  );
};
