import React from "react";

export function getExpiryTimestamp(startingMinutes) {
  var date = new Date();
  var expiryTimestamp = date.setSeconds(
    date.getSeconds() + 60 * startingMinutes
  );
  return expiryTimestamp;
}

export function countWithZero(num) {
  if (num > 9) {
    return num;
  } else {
    return "0" + num;
  }
}
