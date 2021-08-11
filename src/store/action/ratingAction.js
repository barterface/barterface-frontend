import Rating from "../../model/rating";
import axios from 'axios';

export const FETCH_RATING = "FETCH_RATING";


export const fetchRating = ( toUserId ) => {
    return async (dispatch) => {
      try {

        const response = await axios.get(
          `https://5dzkdvg9ae.execute-api.ap-south-1.amazonaws.com/test/rating/?toUserId=${toUserId}`,
        );
  
        const resData = await response.data;
  
        const loadedUploadData = [];
  
        for (const key in resData) {
          loadedUploadData.push(
            new Rating(
              resData[key].upreqId,
              resData[key].description,
              resData[key].purpose,
              resData[key].fromUserId,
              resData[key].noOfStars,
              resData[key].ratingId,
              resData[key].toUserId,
            )
          );
        }
  
        dispatch({ type: FETCH_RATING, data: loadedUploadData });
      } catch (err) {
        console.log(err);
      }
    };
  };