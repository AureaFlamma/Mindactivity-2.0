export function getExpiryTimestamp(startingMinutes) {
  var date = new Date();
  var expiryTimestamp = date.setSeconds(
    date.getSeconds() + 60 * startingMinutes
  );
  return expiryTimestamp;
}

//This adds leading zero to single digit values, to be used to make the minutes and seconds spat out by Timer Hook double digit.
export function getCountWithZero(num) {
  if (num > 9) {
    return num;
  } else {
    return "0" + num;
  }
}
