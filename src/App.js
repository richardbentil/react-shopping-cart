import React, { Suspense, useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase/app";

import ErrorBoundary from "./ErrorBoundary";

import { Home, LoginSignUp, PageNotFound } from "./routes";

import {
  EmailSent,
  SuccessOnRegistration,
  SuccessOnPasswordReset,
} from "./auth";

import { Header, Spinner } from "./components/";

function App() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    picture: "",
  });

  const [item, setItem] = useState()
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setuser({
          name: user.displayName,
          email: user.email,
          picture: user.photoURL,
        });
        // ...
        console.log(user);
      } else {
        // User is signed out
        // ...
        console.log("user data missing");
      }
    });
    return unsubscribe();
  }, []);

  const addToCart = (payload) => {
    if (payload) {
      console.log(payload)
      cart.push(payload)
      console.log(cart)
    }
    
  };

  const addToWishList = (payload) => {
    console.log(payload);
  };

  return (
    <Router>
      <Header user={user} cart={cart} />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="mx-auto">
              <Spinner />
            </div>
          }>
          <Switch>
            <Route exact path="/">
              <Home addToCart={addToCart} addToWishList={addToWishList} />
            </Route>
            <Route path="/sign-in">
              <LoginSignUp />
            </Route>
            <Route path="/email-sent">
              <EmailSent />
            </Route>
            <Route path="/success-registration">
              <SuccessOnRegistration />
            </Route>
            <Route path="/success-password-reset">
              <SuccessOnPasswordReset />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
