import React from 'react'
import {Link} from "react-router-dom"

export const EmailSent = () => {
  const email = window.localStorage.getItem("email")
  const fullName = window.localStorage.getItem("fullName");
  return (
    <div className="container">
      <div className="col-6 mx-auto my-5 p-3 bg-light bg-gradient">
        <h3 className="mb-2">
          Hello, {fullName} <br />An email Verification link has been sent to {email}
        </h3>
        <h4 className="mb-3">
          Click on the link sent, to verify your email
        </h4>
        <h5>
          Go back <Link to="/">Home</Link>
        </h5>
      </div>
    </div>
  );
}
