import React from "react";
import { useSelector } from "react-redux";
import classes from "./HeroSection.module.css";
import { Button } from "../UI/Button";
import { useState } from "react";
import SignUp from "../Modal/SignUpModal";

const HeroSection = ({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  isButton,
  img,
  alt,
  imgStart,
}) => {
  //const status = useSelector(state => state.auth.status)
  //console.log(status)
  const [modal, setModal] = useState(false);
  //const [isSignIn, setIsSignIn] = useState(status);
  return (
    <>
      {modal ? <SignUp setShowModal = { setModal }/>:null}
      <div
        className={
          lightBg
            ? classes.HomeHeroSection
            : [classes.HomeHeroSection, classes.DarkBg].join(" ")
        }
      >
        <div className={classes.Container}>
          <div
            className={[classes.Row, classes.HomeHeroRow].join(" ")}
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className={classes.Col}>
              <div className={classes.HomeHeroTextWrapper}>
                <h1
                  className={
                    lightText
                      ? classes.Heading
                      : [classes.Heading, classes.Dark].join(" ")
                  }
                >
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? classes.HomeHeroSubtitle
                      : [classes.HomeHeroSubtitle, classes.Dark].join(" ")
                  }
                >
                  {description}
                </p>
                {isButton ? (
                  <Button
                    buttonSize="btnWide"
                    buttonColor="red"
                    buttonStyle="btnOutline"
                    onClick={()=>setModal(!modal)}
                  >
                    {buttonLabel}
                  </Button>
                ) : null}
              </div>
            </div>
            <div className={classes.Col}>
              <div className={classes.HomeHeroImgWrapper}>
                <img src={img} alt={alt} className={classes.HomeHeroImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
