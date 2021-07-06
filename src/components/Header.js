import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "firebase/app";

export const Header = ({ user, cart }) => {

  const history = useHistory();

   const handleLogout = async () => {
     try {
       await firebase
         .auth()
         .signOut()
         .then(() => {
           // Sign-out successful.
           history.goBack(-1);
         })
         .catch((error) => {
           // An error happened.
           alert(error.message);
         });
     } catch (error) {
       // An error happened.
       alert("There was an error loging out");
     }
   };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Shop
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              {!user.name && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-in">
                    Login/Signup
                  </NavLink>
                </li>
              )}
              {cart.length > 0 && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart <i className="fa fa-shopping-bag"></i>{" "}
                    <span class="badge rounded-pill bg-danger ms-n3">
                      {cart.length}{" "}
                    </span>
                  </NavLink>
                </li>
              )}
              {user.name && (
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="dropdownId"
                    data-toggle="dropdown"
                    ariaHasPopUp="true"
                    aria-expanded="false"
                    style={{ cursor: "pointer" }}>
                    Account
                  </span>
                  <div className="dropdown-menu" ariaLabelledBy="dropdownId">
                    <NavLink className="dropdown-item" to="/dashboard">
                      Dashboard
                    </NavLink>
                    <NavLink className="dropdown-item" to="/profile-settings">
                      Profile settings
                    </NavLink>
                    <span className="dropdown-item">
                      <button
                        className="btn btn-primary me-2"
                        onClick={handleLogout}>
                        Logout
                      </button>
                    </span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
