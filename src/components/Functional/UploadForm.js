import React, { useState } from "react";
import {useDispatch, useSelector } from 'react-redux';
import classes from "./UploadForm.module.css";
import { Button } from "../UI/Button";
import * as uploadActions from '../../store/action/uploadAction';

const UploadForm = () => {

  const dispatch = useDispatch();
  const { userId, name } = useSelector(state => state.auth);
 
  const [platformName, setPlatformName] = useState("");
  const [platformId, setPlatformId] = useState("");
  const [password, setPassword] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");


  const formSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(
      uploadActions.addUpload(
        platformName,
        platformId,
        password,
        startTime,
        endTime,
        userId,
        name
      )
    );
  };
  
  return (
    <section className={classes.Container}>
      <h1>Exchange your account with others.</h1>

      <form className={classes.form}>
        <select
          className={classes.FormInput}
          value={platformName}
          onChange={(event) => setPlatformName(event.currentTarget.value)}
        >
          <option defaultValue="none">Select a Platform</option>
          <option value="Netflix">Netflix</option>
          <option value="Amazon Prime">Amazon Prime</option>
          <option value="SonyLiv">SonyLiv</option>
          <option value="Hotstar">Hotstar</option>
        </select>

        <input
          className={classes.FormInput}
          type="text"
          name="platformId"
          value={platformId}
          placeholder="Platform Id"
          onChange={(event) => {
            setPlatformId(event.target.value);
          }}
          required
        />
        <input
          className={classes.FormInput}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <input
          className={classes.FormInput}
          type="datetime-local"
          name="startTime"
          value={startTime}
          placeholder="Start Time"
          onChange={(event) => {
            setStartTime(event.target.value);
          }}
          required
        />
        <input
          className={classes.FormInput}
          type="datetime-local"
          name="endTime"
          value={endTime}
          placeholder="End Time"
          onChange={(event) => {
            setEndTime(event.target.value);
          }}
          required
        />
        <Button buttonColor="red" onClick={formSubmitHandler}>Upload</Button>
      </form>
    </section>
  );
};

export default UploadForm;
