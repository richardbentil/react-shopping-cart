import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import {Link} from 'react-router-dom'

export const Home = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    picture: "",
  })

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setuser({
          name: user.displayName,
          email: user.email,
          picture: user.displayPicture
        })
        // ...
        console.log(user)
      } else {
        // User is signed out
        // ...
        console.log("user data missing")
      }
    });
    return unsubscribe()
  }, [])

  return (
    <div className="container h-100">
      <div className="row m-auto my-5 h-100 ">
        {user.name && (
          <div className="col-4">
            <div className="bg-light text-center p-3">
              <div className="my-3">
                <img src={user.picture} alt="avatara" />
              </div>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          </div>
        )}
        <div className="col-8 m-auto text-center">
          <h3 className="text-primary">
            React Firebase Authentication with Email Verfication
          </h3>
          <h4>Hello and Welcome</h4>
          <h5>Login or signup to test this application</h5>
          <div className="my-3">
            <Link to="/sign-in" className="btn btn-primary me-2">
              Login/Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

