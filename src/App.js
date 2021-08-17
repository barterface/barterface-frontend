import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Functional/Navbar";
import Footer from "./components/Functional/Footer";
import Home from "./Screens/HomePage";
import MyAccount from "./Screens/MyAccount";
import ViewAll from "./Screens/ViewAll";
import Request from "./Screens/Request";
import MyTransaction from "./Screens/MyTransaction";
import Explore from "./Screens/Explore";
import Rating from "./Screens/Rating";
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
        console.log(response)
        dispatch(
          authAction.authFlow(
            true,
            response.attributes.sub,
            response.attributes.name,
            response.attributes.email,
            response.signInUserSession.idToken.jwtToken
          )
        );
      });
    } catch (err) {
      console.log("error")
      dispatch(authAction.authFlow(false));
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
          {status? <Redirect to="/explore" /> : <Home />}
        </Route>
        <Route path="/my-transactions">
          {status ? <MyTransaction /> : <Redirect to="/" />}
        </Route>
        <Route path="/my-account">
          {status ? <MyAccount /> : <Redirect to="/" />}
        </Route>
        <Route path="/explore">
          {status ? <Explore /> : <Redirect to="/" />}
        </Route>
        <Route path="/viewAll">
          {status ? <ViewAll /> : <Redirect to="/" />}
        </Route>
        <Route path="/request">
          {status ? <Request /> : <Redirect to="/" />}
        </Route>
        <Route path="/rating">
          {status ? <Rating /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
