import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./SignUpForm.module.css";
import { Button } from "../UI/Button";
import { Auth } from "aws-amplify";
import * as authAction from "../../store/action/authAction";

const SignUpForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  //local input state for sign Up

  const status = useSelector((state) => state.auth.status);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [inputConfirm, setInputConfirm] = useState("");

  //state to show signUp or SignIn form conditionally
  const [isSignIn, setIsSignIn] = useState(status);

  //Local input state for signIn
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const signUpFormSubmitHandler = async (event) => {
    event.preventDefault();
    if (enterPassword === repeatPassword) {
      try {
        await Auth.signUp({
          username: email,
          password: enterPassword,
          attributes: {
            name: name,
          },
        }).then((res) => {
          setConfirm(!confirm);
        });
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      await Auth.signIn(signInEmail, signInPassword).then((response) => {
        console.log(response);
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
      setShowModal((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmOTP = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(email, inputConfirm).then((response) => {
        console.log(response);
      });
      setIsSignIn(!isSignIn);
      setShowModal((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

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
            <Button
              buttonColor="red"
              buttonStyle="btnMedium"
              onClick={signUpFormSubmitHandler}
            >
              SignUp
            </Button>
            <div style={{ marginTop: "15px" }}>
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
          </div>
        </form>
      ) : (
        <div>
          <form onSubmit={confirmOTP}>
            <input
              type="number"
              placeholder="confirm"
              name="confirm"
              onChange={(event) => setInputConfirm(event.target.value)}
            />
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
        {/* <p style={{marginBottom:'15px'}}>Forgot password??</p> */}
        <Button
          buttonColor="red"
          buttonStyle="btnMedium"
          onClick={signInHandler}
        >
          SignIn
        </Button>
        <div style={{marginTop:'15px'}}>
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
      </div>
    </form>
  );

  return <>{isSignIn ? signUpForm : signInForm}</>;
};

export default SignUpForm;
