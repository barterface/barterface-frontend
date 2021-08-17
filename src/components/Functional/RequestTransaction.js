import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as requestActions from "../../store/action/requestAction";
import { Flex, HStack, Text, VStack } from "@chakra-ui/layout";

const RequestTransaction = () => {
  const userId = useSelector((state) => state.auth.userId);

  const requestedData = useSelector((state) => state.request.availableRequests);
  console.log(requestedData);
  const dispatch = useDispatch();

  const requestData = useCallback(async () => {
    try {
      dispatch(requestActions.fetchRequest(userId));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    requestData();
  }, [requestData]);

  return (
    <Flex
      direction="column"
      maxWidth="90%"
      marginLeft="auto"
      my={3}
      marginRight="auto"
      alignContent="center"
    >
      {requestedData.length > 0
        ? requestedData.map((data) => (
            <HStack
              cursor="pointer"
              shadow="lg"
              p="10"
              rounded="xl"
              mt="10"
              justifyContent="center"
              justify="center"
              justifyItems="center"
              alignItems="center"
            >
              <VStack flex="1">
                <Text fontSize="lg">{data.requesterAccName}</Text>
                <Text fontSize="2xl" fontWeight="bold">
                  {data.requesterAccId}
                </Text>
                <Text fontWeight="bold" color="gray">
                  {data.accName}
                </Text>
              </VStack>
              <VStack flex="2">
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "gray",
                    width: "100%",
                  }}
                ></div>
              </VStack>
              <VStack flex="1">
                <Text fontWeight="bold">{data.status}</Text>
              </VStack>

              {/* <div className={classes.CardContainer}></div> */}
            </HStack>
          ))
        : null}
    </Flex>
  );
};

export default RequestTransaction;
