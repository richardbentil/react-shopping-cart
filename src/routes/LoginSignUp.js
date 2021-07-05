import React from 'react'
import { Link } from 'react-router-dom';
import {LoginForm} from "../components/"
import { SignUpForm } from "../components/";

export const LoginSignUp = () => {
  return (
    <div className="container">
      <div className="col-5 mx-auto my-5 bg-light p-3 rounded">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-login-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-login"
              type="button"
              role="tab"
              aria-controls="nav-login"
              aria-selected="true">
              Login
            </button>
            <button
              className="nav-link"
              id="nav-signup-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-signup"
              type="button"
              role="tab"
              aria-controls="nav-signup"
              aria-selected="false">
              Signup
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-login"
            role="tabpanel"
            aria-labelledby="nav-login-tab">
            <LoginForm />
          </div>
          <div
            className="tab-pane fade"
            id="nav-signup"
            role="tabpanel"
            aria-labelledby="nav-signup-tab">
            <SignUpForm />
          </div>
          <div className="text-center">
            <Link to="/" className="text-center">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
