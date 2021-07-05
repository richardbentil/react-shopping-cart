import React, { useState } from "react";
import firebase from "firebase/app";

import { Spinner } from "../components/";
import { useHistory } from "react-router-dom";

export const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setloading] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(<Spinner />);

    if (!email || !password) {
      seterrorMessage("Provide your email/password");
      setloading("");
    } else {
      // 1.  create user
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            //if user was signed up
            if (user) {
              // 2. send email verification
              firebase
                .auth()
                .currentUser.sendEmailVerification()
                .then(() => {
                  // On Email verification sent!
                  // 3. update user profile
                  user
                    .updateProfile({
                      displayName: fullName,
                    })
                    .then(() => {
                      // Update successful
                      window.localStorage.setItem("email", email)
                      window.localStorage.setItem("fullName", fullName);
                      // 4.  redirect to verify email
                      history.push("/email-sent");
                    })
                    .catch((error) => {
                      setloading("");
                      // An error occurred
                      seterrorMessage(error.message);
                    });
                });
            }
            setloading("");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            seterrorMessage(errorMessage);
            setloading("");
          });
      } catch (error) {
        seterrorMessage(error.message);
        setloading("");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="my-5">
          {errorMessage && (
            <div className="my-3 py-2 alert alert-danger">
              <p className="pb-0">{errorMessage}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="form-control"
                id="fullName"
                aria-describedby="emailHelp"
              />
            </div>
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
            <button type="submit" className="btn btn-primary btn-block w-100 mt-3"
            disabled={!fullName || !email || !password}>
              {loading} Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
