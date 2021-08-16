import React , { useEffect, useCallback} from "react";
import { useSelector , useDispatch } from "react-redux";
import * as ratingActions from "../store/action/ratingAction";


function Rating() {

const dispatch = useDispatch()

const params = (new URL(document.location)).searchParams;
const uploaderId = params.get('uploaderId')

const ratingData = useSelector(state => state.rating.availableRating)

const loadRating = useCallback(async () => {
    try {
      dispatch(ratingActions.fetchRating(uploaderId));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadRating();
  }, [loadRating]);

console.log(ratingData)
return (
    <>
      <div>
        {console.log(ratingData)}
      </div>
    </>
  );
}

export default Rating;
