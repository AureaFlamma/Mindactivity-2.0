import React from "react";

const checkIfRepeats = (arr) => {
  let tidyArray = [];
  if (arr[0] !== undefined) {
    tidyArray.push(arr[0]);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].date !== arr[i - 1].date) {
      tidyArray.push(arr[i]);
    }
  }
  return tidyArray;
};

export default checkIfRepeats;
