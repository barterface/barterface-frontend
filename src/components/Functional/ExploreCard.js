import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../UI/Button";
import classes from "./ExploreCard.module.css";
import * as reqquestAction from "../../store/action/requestAction";


const Card = (props) => {

    const dispatch = useDispatch()

    const userId = useSelector(state => state.auth.userId)
    //const req = useSelector(state => state.request.availableRequest)
    const requesterAccId = '12345'
    const requesterAccPass = 'ankur'
    const requesterAccName = 'ankurflix'


    const { startTime, uploadId, uploaderId, endTime } = props

    const requestHandler = () => {
        dispatch(
            reqquestAction.addRequest(
            requesterAccId,
            requesterAccName,
            requesterAccPass,
            userId,
            uploadId
            )
        )
    }

    return <div className={classes.card}>
        <div>
            {startTime}
            {endTime}
        </div>
        <div>Arrow</div>
        <div>{uploadId}</div>
        <div>Duration</div>
        <div>{uploaderId}</div>
        <div>Rating</div>
        <Button
        buttonColor = 'red'
        onClick = {requestHandler}
        >
        Send Request
        </Button>
  </div>;
};

export default Card;
