import { Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/action/uploadAction";

const UploadTransaction = () => {
  const userId = useSelector((state) => state.auth.userId);

  const uploadedData = useSelector((state) => state.upload.userUploadedData);
  console.log(uploadedData);

  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    try {
      dispatch(uploadActions.fetchUploadByUserid(userId));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Flex
      direction="column"
      maxWidth="90%"
      marginLeft="auto"
      my={3}
      marginRight="auto"
    >
      {uploadedData.length > 0
        ? uploadedData.map((data) => (
            <HStack
              cursor="pointer"
              shadow="lg"
              p="10"
              rounded="xl"
              mt="10"
              justifyContent="center"
              justifyItems="center"
              alignItems="center"
            >
              <VStack flex="1">
                <Text fontSize="lg">
                  {new Date(data.startTime).toString().substr(0, 10)}
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  {new Date(data.startTime).toString().substr(16, 5)}
                </Text>
                <Text fontWeight="bold" color="gray">
                  {data.accName}
                </Text>
              </VStack>
              <VStack style={{ flex: "2" }}>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "gray",
                    width: "100%",
                  }}
                ></div>
              </VStack>
              <VStack style={{ flex: "1" }}>
                <Text fontSize="lg">
                  {new Date(data.endTime).toString().substr(0, 10)}
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  {new Date(data.endTime).toString().substr(16, 5)}
                </Text>
                <Text color="green.400">Uploaded</Text>
              </VStack>

              {/* <div className={classes.CardContainer}></div> */}
            </HStack>
          ))
        : null}
    </Flex>
  );
};

export default UploadTransaction;
