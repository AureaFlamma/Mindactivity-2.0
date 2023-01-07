import { useEffect, useState, React } from "react";
import {
  Circle,
  HStack,
  VStack,
  Text,
  Highlight,
  Box,
  Wrap,
} from "@chakra-ui/react";
import checkIfBroken from "./SreakHelpers/checkIfBroken.js";
import getTimestamps from "../fetchData.js";
import checkIfRepeats from "./SreakHelpers/checkIfRepeats.js";
import useTimestamps from "./SreakHelpers/useTimestamps.js";

const StreakCounter = () => {
  // TODO: This could be a custom hook
  const [timestampsArr, setTimestampsArr] = useState([]);
  // The reason it's nested like this is because otherwise clean-up function would never get called. I don't have a clean-up function but best practice is best practice
  useEffect(() => {
    (async () => {
      const timestamps = await getTimestamps(
        "GET",
        "http://localhost:3000/boobs"
      );
      var cleanedUpTimestamps = checkIfRepeats(checkIfBroken(timestamps));
      setTimestampsArr(cleanedUpTimestamps);
    })();
  }, []);

  return (
    <VStack w={["100%", "30%"]}>
      <HStack>
        <Text>Your current streak is</Text>
        <Text fontWeight={"800"} fontSize="xl">
          {timestampsArr.length}
        </Text>
        <Text>days</Text>
      </HStack>
      <Wrap spacing="8px" w="100%">
        {timestampsArr.map((element, key) => (
          <>
            <Box h="15px" w="5px" bg="white" rounded={"full"} key={key} />
          </>
        ))}
      </Wrap>
    </VStack>
  );
};

export default StreakCounter;
