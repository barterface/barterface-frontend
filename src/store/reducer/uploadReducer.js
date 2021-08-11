import Upload from "../../model/upload";
import {
  ADD_UPLOAD_DATA,
  UPDATE_UPLOAD_DATA,
  DELETE_UPLOAD_DATA,
  FETCH_UPLOAD_DATA,
  FETCH_UPLOAD_DATA_BY_USERID,
} from "../action/uploadAction";

const initialState = {
  availableUploadedData: [],
  userUploadedData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_UPLOAD_DATA:
      const newUpload = new Upload(
        action.data.uploadId,
        action.data.accName,
        action.data.accId,
        action.data.accPass,
        action.data.startTime,
        action.data.endTime,
        action.data.uploaderId,
        null,
        null
      );
      return {
        ...state,
        availableUploadedData: state.availableUploadedData.concat(newUpload),
      };


    case UPDATE_UPLOAD_DATA:
      const index = state.availableUploadedData.findIndex(
        (acc) => acc.id === action.data.id
      );
      const updatedUpload = new Upload(
        action.data.id,
        action.data.accName,
        action.data.accId,
        action.data.password,
        action.data.startTime,
        action.data.endTime,
        action.data.uploaderId
      );
      const updatingUpload = [...state.availableUploadedData];
      updatingUpload[index] = updatedUpload;
      return {
        ...state,
        availableUploadedData: updatingUpload,
      };


    case DELETE_UPLOAD_DATA:
      return {
        ...state,
        availableUploadedData: state.availableUploadedData.filter(
          (acc) => acc.id !== action.id
        ),
      };


    case FETCH_UPLOAD_DATA:
      return {
        ...state,
        availableUploadedData: action.data,
      };

      
    case FETCH_UPLOAD_DATA_BY_USERID:
      return {
        ...state,
        userUploadedData: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
