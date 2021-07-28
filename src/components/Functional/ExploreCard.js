import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../UI/Button";
import classes from "./ExploreCard.module.css";
import RequestModal from "../Modal/RequestModal";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";
import * as reqquestAction from "../../store/action/requestAction";
import { useState } from "react";

const ExploreCard = (props) => {
  const uploadId = props.uploadId
  // const dispatch = useDispatch();
  const [requestModal, setRequestModal] = useState(false);

  // const userId = useSelector((state) => state.auth.userId);
  // //const req = useSelector(state => state.request.availableRequest)
  // const requesterAccId = "12345";
  // const requesterAccPass = "ankur";
  // const requesterAccName = "ankurflix";

  // const { startTime, uploadId, uploaderId, endTime } = props;

  // const requestHandler = () => {
  //   dispatch(
  //     reqquestAction.addRequest(
  //       requesterAccId,
  //       requesterAccName,
  //       requesterAccPass,
  //       userId,
  //       uploadId
  //     )
  //   );
  // };

  return (
    <>
      {requestModal ? (
        <RequestModal
          requestModal={requestModal}
          setRequestModal={setRequestModal}
          uploadId={uploadId}
        />
      ) : null}
      <div className={classes.Card}>
        <div className={classes.Time}>
          <h4>startTime</h4>
          <AiOutlineArrowRight />
          <h4>endTime</h4>
        </div>
        <div className={classes.CardInfo}>
          <p>*7hrs</p>
          <p>Ankit Gaurav</p>
          <p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </p>
        </div>
        <Button buttonColor="red" onClick={()=>setRequestModal(!requestModal)}>
          Send Request
        </Button>
      </div>
    </>
  );
};

export default ExploreCard;
