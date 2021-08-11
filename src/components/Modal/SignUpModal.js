import React, { useState } from "react";
import classes from "./SignUpModal.module.css";
import Backdrop from "../UI/Backdrop";
import SignUpForm from "../Functional/SignUpForm";

const SignUp = ({setShowModal}) => {

  const [backdrop, setBackdropState] = useState(true);

  const backdropToggleHandler = () => {
      setBackdropState(!backdrop);
      setShowModal((prev) => !prev);
  };
  return (
    <>
      <Backdrop show={backdrop} clicked={backdropToggleHandler} />
      <div
        className={classes.SignUpModal}
        style={{
          transform: backdrop ? "translateY(0)" : "translateY(-100vh)",
          opacity: backdrop ? "1" : "0",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            borderRadius: "3px",
          }}
        >
          <p style={{ color: "white", fontWeight: "bold", fontSize: "40px" }}>
            Welcome To
            <br />
            BarterFace
          </p>{" "}
          <p style={{ color: "white" }}>Save Money</p>
        </div>
        <div>
          <SignUpForm setShowModal = {setShowModal}/>
        </div>
      </div>
    </>
  );
};

export default SignUp;
