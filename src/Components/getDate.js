export default function getDate(offset) {
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
  };

  return dateFormatted;
}
