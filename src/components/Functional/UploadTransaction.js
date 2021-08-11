import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/action/uploadAction";
import classes from "./UploadTransaction.module.css";

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
    <div className={classes.MyTransactions}>
      

      {uploadedData.length > 0
        ? uploadedData.map((data) => (
            <div className = {classes.card}>
              <div className={classes.Row}>
                <div className={classes.Col} style={{ flex: "1" }}>
                  <div>{new Date(data.startTime).toString().substr(0, 15)}</div>
                  <div style={{ fontWeight: "bold" }}>
                    {new Date(data.startTime).toString().substr(16, 8)}
                  </div>
                  <div style={{ color: "gray", fontWeight: "bold" }}>
                    {data.accName}
                  </div>
                </div>
                <div className={classes.Col} style={{ flex: "2" }}>
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "gray",
                      width: "100%",
                    }}
                  ></div>
                </div>
                <div className={classes.Col} style={{ flex: "1" }}>
                  <div>{new Date(data.endTime).toString().substr(0, 15)}</div>
                  <div style={{ fontWeight: "bold" }}>
                    {new Date(data.endTime).toString().substr(16, 8)}
                  </div>
                  <div>{data.accName}</div>
                </div>

                <div className={classes.CardContainer}></div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default UploadTransaction;
