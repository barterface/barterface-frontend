import Request from "../../model/request";
import axios from "axios";

export const ADD_REQUEST = "ADD_REQUEST";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const DELETE_REQUEST = "DELETE_REQUEST";
export const UPDATE_REQUEST = "UPDATE_REQUEST";

export const fetchRequest = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://5dzkdvg9ae.execute-api.ap-south-1.amazonaws.com/test/request/userId/?userId=${userId}`
      );

      // if (!response.ok) {
      //   throw new Error("Something went wrong");
      // }
      //data from response

      console.log(response);

      const resData = await response.data;

      const loadedRequest = [];

      for (const key in resData) {
        loadedRequest.push(
          new Request(
            resData[key].id,
            resData[key].platformId,
            resData[key].platformName,
            resData[key].platformPassword
          )
        );
      }

      dispatch({ type: FETCH_REQUEST, data: loadedRequest });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addRequest = (
  requesterAccId,
  requesterAccName,
  requesterAccPass,
  requesterId,
  uploadId
  ) => {
  return async (dispatch) => {
    try {
      const data = {
        requesterAccId : requesterAccId ,
        requesterAccName : requesterAccName,
        requesterAccPass : requesterAccPass,
        requesterId : requesterId,
        uploadId : uploadId 
      };
      const response = await axios.post(
        "https://5dzkdvg9ae.execute-api.ap-south-1.amazonaws.com/test/request",
        data
      );
      // requesterAccId, requesterAccName, requesterAccPass, requesterId, uploadId;
      const resData = await response.data;
      console.log(resData);
      dispatch({
        type: ADD_REQUEST,
        data: {
          requestId: resData.requesterId,
          requesterAccName: resData.accName,
          requesterAccId: resData.accId,
          requesterAccPass: resData.accPass,
          uploadId: resData.uploadId,
          requesterId: resData.requesterId,
        },
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const deleteRequest = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete("");

      const resData = await response.data;

      dispatch({ type: DELETE_REQUEST, id: id });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateRequest = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch("", id);

      const resData = await response.data;

      dispatch({ type: UPDATE_REQUEST, id: id });
    } catch (err) {
      console.log(err);
    }
  };
};
