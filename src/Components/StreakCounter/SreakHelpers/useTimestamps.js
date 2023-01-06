import { useState, useEffect, React } from "react";
import fetchData from "../../fetchData";
import checkIfBroken from "./checkIfBroken";
import checkIfRepeats from "./checkIfRepeats";
const useTimestamps = (url) => {
  //TODO: This could be a custom hook
  const [timestampsArr, setTimestampsArr] = useState([]);
  //The reason it's nested like this is because otherwise clean-up function would never get called. I don't have a clean-up function but best practice is best practice
  useEffect(() => {
    (async () => {
      const timestamps = await fetchData("GET", url);
      var cleanedUpTimestamps = checkIfRepeats(checkIfBroken(timestamps));
      setTimestampsArr(cleanedUpTimestamps);
    })();
  }, []);
  return timestampsArr;
};

export default useTimestamps;
