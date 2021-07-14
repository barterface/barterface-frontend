import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./SignUpForm.module.css";
import { Button } from "../UI/Button";
import { Auth } from 'aws-amplify';
import * as authAction from '../../store/action/authAction';

const SignUpForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  //local input state for sign Up
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  //state to show signUp or SignIn form conditionally
  const [isSignIn, setIsSignIn] = useState(false);

  //Local input state for signIn
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      await Auth.signIn(signInEmail, signInPassword).then((response) => {
        console.log(response);
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
      setShowModal((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };


  const confirm = true;
  const signUpForm = (
    <div>
      {!confirm ? (
        <form>
          <div className={classes.Form}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={classes.FormInput}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={classes.FormInput}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={enterPassword}
              onChange={(event) => setEnterPassword(event.target.value)}
              className={classes.FormInput}
            />
            <input
              type="password"
              placeholder="Repeat Password"
              name="password"
              value={repeatPassword}
              onChange={(event) => setRepeatPassword(event.target.value)}
              className={classes.FormInput}
            />
            <Button>SignUp</Button>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setIsSignIn(!isSignIn)}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <u>SignIn</u>
              </span>
            </p>
          </div>
        </form>
      ) : (
        <div>
          <form>
            <input type="number" placeholder="confirm" name="confirm" />
            <Button>Confirm OTP</Button>
          </form>
        </div>
      )}
    </div>
  );

  const signInForm = (
    <form>
      <div className={classes.Form}>
        <h1 style={{ fontWeight: "bold" }}>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={signInEmail}
          onChange={(event) => setSignInEmail(event.target.value)}
          className={classes.FormInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={signInPassword}
          onChange={(event) => setSignInPassword(event.target.value)}
          className={classes.FormInput}
        />
        <Button onClick={signInHandler}>SignIn</Button>
        <p>Forgot Password?</p>
        <p>
          New to BarterFace?{" "}
          <span
            onClick={() => setIsSignIn(!isSignIn)}
            style={{
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register
          </span>
        </p>
      </div>
    </form>
  );

  return <div>{isSignIn ? signUpForm : signInForm}</div>;
};

export default SignUpForm;
