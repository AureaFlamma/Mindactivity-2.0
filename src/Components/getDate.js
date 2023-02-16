export default function getDate(offset) {
  //Offset is the number of miliseconds since the epoch. For today's date, put Date.now().
  const date = new Date(offset);
  function formatDate(options) {
    return Intl.DateTimeFormat("en-GB", options).format(date);
  }
  const dateFormatted = {
    dayName: formatDate({ weekday: "long" }),
    day: formatDate({ day: "numeric" }),
    month: formatDate({ month: "long" }),
    year: formatDate({ year: "numeric" }),
    date: formatDate(),
    miliseconds: date.getTime()
  };
// console.log("miliseconds here: ", dateFormatted.miliseconds)s
  return dateFormatted;
}
