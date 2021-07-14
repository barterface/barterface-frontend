import React from "react";
import classes from "./Button.module.css";

const STYLES = ["btnPrimary", "btnOutline"];
const styles = {
  btnPrimary: classes.btnPrimary,
  btnOutline: classes.btnOutline,
};

const SIZES = ["btnMedium", "btnLarge", "btnMobile", "btnWide"];

const sizes = {
  btnMedium: classes.btnMedium,
  btnLarge: classes.btnLarge,
  btnMobile: classes.btnMobile,
  btnWide: classes.btnWide,
};

const COLOR = ["primary", "blue", "red", "green"];

const color = {
  primary: classes.primary,
  blue: classes.blue,
  red: classes.red,
  green: classes.green,
};

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={[
        classes.btn,
        styles[checkButtonStyle],
        sizes[checkButtonSize],
        color[checkButtonColor],
      ].join(" ")}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
