export default function getToday() {
  const today = new Date();
  function formatDate(options) {
    return Intl.DateTimeFormat("en-GB", options).format(today);
  }
  const todayFormatted = {
    dayName: formatDate({ weekday: "long" }),
    day: formatDate({ day: "numeric" }),
    month: formatDate({ month: "long" }),
    year: formatDate({ year: "numeric" }),
    date: today.toString(),
  };

  return todayFormatted;
}
