import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./UploadForm.module.css";
import * as uploadActions from "../../store/action/uploadAction";
import { Select, Input, Button, Box, Text } from "@chakra-ui/react";

const UploadForm = () => {
  const dispatch = useDispatch();
  const { userId, name } = useSelector((state) => state.auth);

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
    <Box
      display={{ sm: "flex", base: "none" }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="40px"
      flexWrap="wrap"
      bg="green.300"
    >
      <Text fontSize="lg" pb="5">
        Exchange your account with others.
      </Text>

      <form className={classes.form}>
        <Select
          variant="filled"
          bg="white"
          value={platformName}
          onChange={(event) => setPlatformName(event.currentTarget.value)}
        >
          <option defaultValue="none">Select a Platform</option>
          <option value="Netflix">Netflix</option>
          <option value="Amazon Prime">Amazon Prime</option>
          <option value="SonyLiv">SonyLiv</option>
          <option value="Hotstar">Hotstar</option>
        </Select>

        <Input
          type="text"
          variant="filled"
          name="platformId"
          value={platformId}
          placeholder="Platform Id"
          onChange={(event) => {
            setPlatformId(event.target.value);
          }}
          required
        />
        <Input
          variant="filled"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <Input
          variant="filled"
          type="datetime-local"
          name="startTime"
          value={startTime}
          placeholder="Start Time"
          onChange={(event) => {
            setStartTime(event.target.value);
          }}
          required
        />
        <Input
          variant="filled"
          type="datetime-local"
          name="endTime"
          value={endTime}
          placeholder="End Time"
          onChange={(event) => {
            setEndTime(event.target.value);
          }}
          required
        />
        <Button colorScheme="red" onClick={formSubmitHandler}>
          Upload
        </Button>
      </form>
    </Box>
  );
};

export default UploadForm;
