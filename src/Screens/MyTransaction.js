import React, { useState } from "react";
import UploadTransaction from "../components/Functional/UploadTransaction";
import RequestTransaction from "../components/Functional/RequestTransaction";
import classes from "./MyTransaction.module.css";

const MyTransaction = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.BlocTabs}>
        <button
          className={
            toggleState === 1
              ? [classes.Tabs, classes.ActiveTabs].join(" ")
              : classes.Tabs
          }
          onClick={() => toggleTab(1)}
        >
          Uploads
        </button>
        <button
          className={
            toggleState === 2
              ? [classes.Tabs, classes.ActiveTabs].join(" ")
              : classes.Tabs
          }
          onClick={() => toggleTab(2)}
        >
          Requests
        </button>
      </div>

      <div className={classes.ContentTabs}>
        {toggleState === 1 ? <UploadTransaction /> : <RequestTransaction />}
      </div>
    </div>
  );
};

export default MyTransaction;
