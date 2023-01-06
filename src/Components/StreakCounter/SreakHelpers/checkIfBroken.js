import React from "react";
import getToday from "../../getDate";

const checkIfBroken = (timestampsArr) => {
  const today = getToday(Date.now()).date;
  const yesterday = getToday(Date.now() - 24 * 60 * 60 * 1000).date;
  //TODO: This could be made less DRY but more readable.
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
