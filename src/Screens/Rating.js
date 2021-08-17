import React , { useEffect, useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import * as ratingActions from "../store/action/ratingAction";
import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/layout";


function Rating() {

const dispatch = useDispatch()

const params = (new URL(document.location)).searchParams;
const uploaderId = params.get('uploaderId')
const name = params.get('name')
const noOfStars = params.get('total')

const ratingData = useSelector(state => state.rating.availableRating)

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

console.log(ratingData)
return (
    <>
    <Flex
      direction="column"
      maxWidth="70%"
      marginLeft="auto"
      my={3}
      marginRight="auto"
    >
    <VStack alignItems="start">
      <Text fontSize = "lg" fontWeight = "bold">
        {name}
      </Text>
      <Text>
        {noOfStars}
      </Text>
      <Text fontSize = "lg" fontweight = "bold">
        Ratings
      </Text>
    </VStack>


      {ratingData.length > 0
        ? ratingData.map((data) => (
            <Box shadow="lg" p="10" rounded="xl" mt="10">
              <HStack
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <VStack>
                  <Text>
                    {data.fromUserId}
                  </Text>
                  <Text>
                    {data.noOfStars}
                  </Text>
                  <Text>
                    Time
                  </Text>
                </VStack>
                <VStack style={{ flex: "1" }}>
                  <Text>
                    {data.description}
                  </Text>
                </VStack>

                {/* <div className={classes.CardContainer}></div> */}
              </HStack>
            </Box>
          ))
        : null}
    </Flex>
    </>
  );
}

export default Rating;
