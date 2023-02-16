import React from "react";
import getDate from "../../getDate";

const checkIfBroken = (timestampsArr) => {
  const today = getDate(Date.now()).date;
  const yesterday = getDate(Date.now() - 24 * 60 * 60 * 1000).date;
  //If last entry in timestamp array isn't today or yesterday, it empties the array before returning. The length > 0 condition is there so that code doesn't break if array is empty.
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
