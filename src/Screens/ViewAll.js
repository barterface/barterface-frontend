import { Box } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import { useLocation } from "react-router";

import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ratingActions from "../store/action/ratingAction";
import { useState } from "react";

const ViewAllCard = ({startTime,endTime}) => {
  return <Box boxShadow="md" borderRadius="md">{startTime}{ endTime}</Box>;
};

function ViewAll(props) {
  const location = useLocation();
  const { platformData } = location.state;
  console.log(platformData);

  const dispatch = useDispatch();
  const [requestModal, setRequestModal] = useState(false);

  const ratingData = useSelector((state) => state.rating.availableRating);
  //console.log(ratingData)

  let noOfStars = 0;
  ratingData.forEach((element) => {
    noOfStars = noOfStars + element.noOfStars;
  });

  const { startTime, uploadId, uploaderId, endTime, name } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const loadRating = useCallback(async () => {
    try {
      dispatch(ratingActions.fetchRating(uploaderId));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadRating();
  }, [loadRating]);



  // const allPlatforms = platformData.map(acc => )

  return <ViewAllCard></ViewAllCard>;
}

export default ViewAll;
