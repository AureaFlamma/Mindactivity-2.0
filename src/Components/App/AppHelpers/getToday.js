export default function getToday(offset) {
  const today = new Date(offset);
  function formatDate(options) {
    return Intl.DateTimeFormat("en-GB", options).format(today);
  }
  const todayFormatted = {
    dayName: formatDate({ weekday: "long" }),
    day: formatDate({ day: "numeric" }),
    month: formatDate({ month: "long" }),
    year: formatDate({ year: "numeric" }),
    date: formatDate(),
  };

  return todayFormatted;
}
