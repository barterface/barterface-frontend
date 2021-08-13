import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UploadForm from "../components/Functional/UploadForm";
import ExploreCard from "../components/Functional/ExploreCard";
import * as uploadActions from "../store/action/uploadAction";
import Spinner from "../components/UI/Spinner";
import classes from "./Explore.module.css";
import { HStack, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
// fetch all rating Data in explore.js
//map all rating data to uploaded data using (uploaderId in uploaded data) and (touserId in rating Data)
//send the rating to exploreCard along with uploaderId so that we can fetch the rate and review of a particular user

const Explore = () => {
  const uploadedData = useSelector(
    (state) => state.upload.availableUploadedData
  );

  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    try {
      dispatch(uploadActions.fetchUpload());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const NetflixAcc = uploadedData
    .filter((acc) => acc.accName === "Netflix")
    .splice(0, 4);
  const HotstarAcc = uploadedData
    .filter((acc) => acc.accName === "Hotstar")
    .splice(0, 4);
  const SonyLivAcc = uploadedData
    .filter((acc) => acc.accName === "SonyLiv")
    .splice(0, 4);
  const AmazonAcc = uploadedData
    .filter((acc) => acc.accName === "Amazon Prime")
    .splice(0, 4);

  const combinedArray = [NetflixAcc, HotstarAcc, SonyLivAcc, AmazonAcc];

  return (
    <>
      <UploadForm />
      {combinedArray.map((plat) => {
        return plat.length > 0 ? (
          <div className={classes.Container}>
            <HStack justifyContent="space-between">
              <Heading>{plat[0].accName}</Heading>

              <Link to="/viewAll">
                <Button fontSize="md">
                  View all
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </Button>
              </Link>
            </HStack>

            <Flex
              p={5}
              overflowX="scroll"
              // wrap="wrap"
              className={classes.Row}
            >
              {plat.map((acc) => {
                return (
                  <>
                    <ExploreCard
                      startTime={acc.startTime}
                      endTime={acc.endTime}
                      uploadId={acc.uploadId}
                      uploaderId={acc.uploaderId}
                      name={acc.name}
                    />{" "}
                    <ExploreCard
                      startTime={acc.startTime}
                      endTime={acc.endTime}
                      uploadId={acc.uploadId}
                      uploaderId={acc.uploaderId}
                      name={acc.name}
                    />{" "}
                    <ExploreCard
                      startTime={acc.startTime}
                      endTime={acc.endTime}
                      uploadId={acc.uploadId}
                      uploaderId={acc.uploaderId}
                      name={acc.name}
                    />{" "}
                    <ExploreCard
                      startTime={acc.startTime}
                      endTime={acc.endTime}
                      uploadId={acc.uploadId}
                      uploaderId={acc.uploaderId}
                      name={acc.name}
                    />{" "}
                    <ExploreCard
                      startTime={acc.startTime}
                      endTime={acc.endTime}
                      uploadId={acc.uploadId}
                      uploaderId={acc.uploaderId}
                      name={acc.name}
                    />
                  </>
                );
              })}
            </Flex>
          </div>
        ) : (
          <Spinner />
        );
      })}
    </>
  );
};

export default Explore;
