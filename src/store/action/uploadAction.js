import Upload from "../../model/upload";
import axios from "axios";

export const ADD_UPLOAD_DATA = "ADD_UPLOAD_DATA";
export const UPDATE_UPLOAD_DATA = "UPDATE_UPLOAD_DATA";
export const DELETE_UPLOAD_DATA = "DELETE_UPLOAD_DATA";
export const FETCH_UPLOAD_DATA = "FETCH_UPLOAD_DATA";
export const FETCH_UPLOAD_DATA_BY_USERID = "FETCH_UPLOAD_DATA_BY_USERID";

export const fetchUpload = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://5dzkdvg9ae.execute-api.ap-south-1.amazonaws.com/test/upload/all"
      );

      const resData = await response.data;

      const loadedUploadData = [];

      for (const key in resData) {
        loadedUploadData.push(
          new Upload(
            resData[key].uploadId,
            resData[key].accName,
            resData[key].accId,
            resData[key].accPass,
            resData[key].startTime,
            resData[key].endTime,
            resData[key].uploaderId,
            null,
            null,
            resData[key].name
          )
        );
      }

      dispatch({ type: FETCH_UPLOAD_DATA, data: loadedUploadData });
    } catch (err) {
      console.log(err);
    }
  };
};


export const fetchUploadByUserid = (userId) => {

  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://5dzkdvg9ae.execute-api.ap-south-1.amazonaws.com/test/upload/userId/?userId=${userId}`
      );

      const resData = await response.data;

      const loadedUploadData = [];

      for (const key in resData) {
        loadedUploadData.push(
          new Upload(
            resData[key].uploadId,
            resData[key].accName,
            resData[key].accId,
            resData[key].accPass,
            resData[key].startTime,
            resData[key].endTime,
            resData[key].uploaderId,
            resData[key].status,
            resData[key].reqId,
            resData[key].name
          )
        );
      }

      dispatch({ type: FETCH_UPLOAD_DATA_BY_USERID, data: loadedUploadData });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUpload = (
  accName,
  accId,
  accPass,
  startTime,
  endTime,
  uploaderId,
  name
) => {
  return async (dispatch) => {
    try {
      const data = {
        accName: accName,
        accId: accId,
        accPass: accPass,
        startTime: startTime,
        endTime: endTime,
        uploaderId: uploaderId,
        name: name
      };
      const response = await axios.post(
        "https://5dzkdvg9ae.execute-api.ap-south-1.amazonaws.com/test/upload",
        data
      );

      const resData = await response.data;
      console.log(resData);

      dispatch({
        type: ADD_UPLOAD_DATA,
        data: {
          uploadId: resData.uploadId,
          accName,
          accId,
          accPass,
          startTime,
          endTime,
          uploaderId,
          name
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUpload = (
  id,
  accName,
  accId,
  password,
  startTime,
  endTime,
  uploaderId
) => {
  return async (dispatch) => {
    try {
      const data = {
        id: id,
        accName: accName,
        accId: accId,
        password: password,
        startTime: startTime,
        endTime: endTime,
        uploaderId: uploaderId,
      };
      const response = await axios.patch(
        "https://barter-face-853ef-default-rtdb.firebaseio.com/user-data.json",
        data
      );

      const resData = await response.data;
      console.log(resData);

      dispatch({
        type: UPDATE_UPLOAD_DATA,
        data: {
          id: id,
          accName,
          accId,
          password,
          startTime,
          endTime,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUpload = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        "https://barter-face-853ef-default-rtdb.firebaseio.com/user-data.json"
      );

      const resData = await response.data;
      console.log(resData);
      dispatch({ type: DELETE_UPLOAD_DATA, id: id });
    } catch (err) {
      console.log(err);
    }
  };
};
