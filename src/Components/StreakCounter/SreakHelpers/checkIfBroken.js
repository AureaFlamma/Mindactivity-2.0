import React from "react";
import getDate from "../../getDate";

const checkIfBroken = (timestampsArr) => {
  const twentyFourHours = 24 * 60 * 60 * 1000
  const today = getDate(Date.now()).date;
  const yesterday = getDate(Date.now() - twentyFourHours).date;
  let cleanedUpTimestampsArr = [];

  //If last entry in timestamp array isn't today or yesterday, it empties the array before returning. The length > 0 condition is there so that code doesn't break if array is empty.
  for (let i = timestampsArr.length - 1; i >= 0 ; i--){
    if (timestampsArr[i] === getDate(timestampsArr[i - 1].offset + twentyFourHours).date){
cleanedUpTimestampsArr.push(timestampsArr[i])
    } else {
      cleanedUpTimestampsArr.push(timestampsArr[i]);
      i = -1;
    }
    // console.log(timestampsArr[i], timestampsArr[i-1])
  }
  if (
    timestampsArr.length > 0 &&
    timestampsArr[timestampsArr.length - 1].date !== today &&
    timestampsArr[timestampsArr.length - 1].date !== yesterday
  ) {
    timestampsArr = [];
  }


  return timestampsArr;
};

export default checkIfBroken;

/*
1. Count backwards from most recent date
2. For every date check if it equals previous date plus 24h
  a) if it does, push to solution array
  b) if it doesn't, push to solutions array and break the loop. 


*/
