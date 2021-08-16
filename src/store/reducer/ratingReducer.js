import { FETCH_RATING } from "../action/ratingAction";

const initialRatingState = {
  availableRating:[]
};

const reducer = (state = initialRatingState, action) => {
  switch(action.type){
        case FETCH_RATING:
          return {
            ...state,
            availableRating: action.data
          }
        default:
          return state
  }
};

export default reducer;
