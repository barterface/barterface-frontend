import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Functional/Navbar";
import Footer from "./components/Functional/Footer";
import Home from "./Screens/HomePage";
import Explore from "./Screens/Explore";
import { Auth } from "aws-amplify";
import * as authAction from './store/action/authAction';
import "./App.css";

function App() {
  const status = useSelector((state) => state.auth.status);
  console.log(status);
  const dispatch = useDispatch();

  const checkAuthState = async () => {
    try {
      await Auth.currentAuthenticatedUser().then((response) => {
        dispatch(
          authAction.authFlow(
            "Logged In",
            response.attributes.sub,
            response.attributes.name,
            response.attributes.email,
            response.signInUserSession.idToken.jwtToken
          )
        );
      });
    } catch (err) {
      dispatch(authAction.authFlow("loggedOut"));
    }
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
