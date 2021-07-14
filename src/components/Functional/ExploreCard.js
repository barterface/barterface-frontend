import React from "react";
import { Button } from "../UI/Button";
import classes from "./ExploreCard.module.css";

const Card = (props) => {
    return <div className={classes.card}>
        <div>
            {props.startTime}
            {props.endTime}
        </div>
        <div>Arrow</div>
        <div>{props.startDate}{props.endDate}</div>
        <div>Duration</div>
        <div>UserName</div>
        <div>Rating</div>
        <Button/>
  </div>;
};

export default Card;
