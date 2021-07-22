import Request from "../../model/request";

import {
  ADD_REQUEST,
  UPDATE_REQUEST,
  FETCH_REQUEST,
  DELETE_REQUEST,
} from "../action/requestAction";

const initialState = {
  availableRequests: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      const newRequest = new Request(
        action.data.requestId,
        action.data.requesterAccId,
        action.data.requesterAccName,
        action.data.requesterAccPass,
        action.data.uploadId,
        action.data.requesterId
      );
      return {
        ...state,
        availableRequests: state.availableRequests.concat(newRequest),
      };
    case UPDATE_REQUEST:
      const index = state.availableRequests.findIndex(
        (req) => req.id === action.data.id
      );

      const updatedRequest = new Request(
        action.data.id,
        action.data.accId,
        action.data.accName,
        action.data.accPassword
      );

    case DELETE_REQUEST:
      return {
        ...state,
        availableRequests: state.availableRequests.filter(
          (req) => req.id !== action.id
        ),
      };
    case FETCH_REQUEST:
      return {
        availableRequests: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
