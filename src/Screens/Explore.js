import React, { useEffect,useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UploadForm from "../components/Functional/UploadForm";
import ExploreCard from "../components/Functional/ExploreCard";
import * as uploadActions from '../store/action/uploadAction';
import Spinner from "../components/UI/Spinner";
import classes from "./Explore.module.css";

const Explore = () => {

  const uploadedData = useSelector(
    (state) => state.upload.availableUploadedData
  );
  // console.log(uploadedData);

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
  
  
  const combinedArray = [NetflixAcc, HotstarAcc, SonyLivAcc,AmazonAcc];

  return (
    <>
      <UploadForm />
      {combinedArray.map((plat) => {
        return plat.length > 0 ? (
          <div className={classes.Container}>
            <div
              className={classes.Row}
              style={{ justifyContent: "space-between" }}
            >
              <h1>{plat[0].accName}</h1>
              <Link to="/viewAll">
                <h3>View All</h3>
              </Link>
            </div>

            <div className={classes.Row}>
              {plat.map((acc) => {
                console.log(acc.uploadId)
                return (
                  <ExploreCard
                    startTime={acc.startTime}
                    endTime={acc.endTime}
                    uploadId = {acc.uploadId}
                    uploaderId = {acc.uploaderId}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <Spinner />
        );
      })}
    </>
  );
};

export default Explore;
