import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
// import { Button } from "../UI/Button";
import classes from "./ExploreCard.module.css";
import RequestModal from "../Modal/RequestModal";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";
//import * as requestAction from "../../store/action/requestAction";
import * as ratingActions from "../../store/action/ratingAction";
import awsmobile from "../../aws-exports";
import { useState } from "react";
import { Box, VStack, Text, HStack, Spacer, Button } from "@chakra-ui/react";
const ExploreCard = (props) => {
  const dispatch = useDispatch();
  const [requestModal, setRequestModal] = useState(false);

  //const userId = useSelector((state) => state.auth.userId);
  const ratingData = useSelector((state) => state.rating.availableRating);
  //console.log(ratingData)

  let noOfStars = 0;
  ratingData.forEach((element) => {
    noOfStars = noOfStars + element.noOfStars;
  });

  // //const req = useSelector(state => state.request.availableRequest)

  // const requesterAccId = "12345";
  // const requesterAccPass = "ankur";
  // const requesterAccName = "ankurflix";

  const { startTime, uploadId, uploaderId, endTime, name } = props;

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

  return (
    <>
      {requestModal ? (
        <RequestModal
          requestModal={requestModal}
          setRequestModal={setRequestModal}
          uploadId={uploadId}
        />
      ) : null}
      <Box mr={8} my={5} shadow="lg" rounded="md" p={5}>
        <VStack alignItems="flex-start" height="100%">
          <HStack spacing={6} justifyItems="space-between" alignSelf="center">
            <VStack>
              <Text fontWeight="bold">
                {new Date(startTime).toString().slice(4, 10)}
              </Text>
              <Text fontWeight="bold">
                {new Date(startTime).toString().slice(4, 10)}
              </Text>
            </VStack>
            <AiOutlineArrowRight color="grey" />
            <VStack>
              <Text fontWeight="bold">
                {new Date(endTime).toString().slice(4, 10)}
              </Text>
              <Text fontWeight="bold">
                {new Date(endTime).toString().slice(4, 10)}
              </Text>
            </VStack>
          </HStack>
          <Spacer />
          <Text fontWeight="bold" pt={2}>
            7hrs
          </Text>
          <Text>{name}</Text>
          <Text>{`${noOfStars} Ratings`}</Text>
          <Button
            onClick={() => setRequestModal(!requestModal)}
            colorScheme="red"
            width="100%"
            alignSelf="center"
          >
            Send Request
          </Button>
        </VStack>
      </Box>
    </>
    // ?? (
    //   <>
    //     {requestModal ? (
    //       <RequestModal
    //         requestModal={requestModal}
    //         setRequestModal={setRequestModal}
    //         uploadId={uploadId}
    //       />
    //     ) : null}
    //     <div className={classes.Card}>
    //       <div className={classes.Time}>
    //         <h4>{startTime}</h4>
    //         <AiOutlineArrowRight />
    //         <h4>{endTime}</h4>
    //       </div>
    //       <div className={classes.CardInfo}>
    //         <p>{noOfStars}</p>
    //         <p>{name}</p>
    //         <p>
    //           <AiFillStar />
    //           <AiFillStar />
    //           <AiFillStar />
    //           <AiFillStar />
    //           <AiFillStar />
    //         </p>
    //       </div>
    //       <Button
    //         buttonColor="red"
    //         onClick={() => setRequestModal(!requestModal)}
    //       >
    //         Send Request
    //       </Button>
    //     </div>
    //   </>
    // )
  );
};

export default ExploreCard;
