import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import {Link, useHistory} from 'react-router-dom'

export const Home = () => {
  const [errorMessage, seterrorMessage] = useState()
  const [user, setuser] = useState({
    name: "",
    email: "",
    picture: "",
  })

  const history = useHistory()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setuser({
          name: user.displayName,
          email: user.email,
          picture: user.photoURL
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

  const handleLogout = async() => {
    console.log("logout")
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          history.push("/sign-in")
        })
        .catch((error) => {
          // An error happened.
          seterrorMessage(error.message)
        });

    } catch (error) {
      seterrorMessage("There was an error loging out");
    }
  }

  return (
    <div className="container h-100">
      <div className="row m-auto my-5 h-100 ">
        {user.name && (
          <div className="col-4">
            <div className="bg-light text-center p-3">
              <div className="my-3">
                <img src={user.picture} alt="avatar" />
              </div>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              {user.emailVerified === false && <p className="my-2">Verify your email</p>}
              {user.name && (
                <button className="btn btn-primary me-2" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
        <div className="col-8 m-auto text-center">
          <h3 className="text-primary">
            React Firebase Authentication with Email Verfication
          </h3>
          <h4>Hello and Welcome</h4>
          {!user.name && <h5>Login or signup to test this application</h5>}
          {user.name && <h5>You have successfully logged in</h5>}
          <div className="my-3">
            {errorMessage && <span>{errorMessage}</span>}
            {!user.name && (
              <Link to="/sign-in" className="btn btn-primary me-2">
                Login/Signup
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

