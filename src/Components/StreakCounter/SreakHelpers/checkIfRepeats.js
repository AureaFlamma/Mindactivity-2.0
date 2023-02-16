import React from "react";

const checkIfRepeats = (arr) => {
  let tidyArray = [];
  //If array isn't empty, add first element to our tidied array
  if (arr[0] !== undefined) {
    tidyArray.push(arr[0]);
  }
  //starting from element 2, compare each element with the one before it- if it's different, push to tidied array.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].date !== arr[i - 1].date) {
      tidyArray.push(arr[i]);
    }
  }
  return tidyArray;
};

export default checkIfRepeats;
