import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as requestActions from "../../store/action/requestAction";

import classes from "./RequestTransaction.module.css";

const RequestTransaction = () => {
  const userId = useSelector((state) => state.auth.userId);

  const requestedData = useSelector((state) => state.request.availableRequests);

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
    <div className={classes.MyTransactions}>
      {requestedData.length > 0
        ? requestedData.map((data) => (
            <div className = {classes.Card}>
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

export default RequestTransaction;
