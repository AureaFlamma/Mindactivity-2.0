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
import getTimestamps from "../fetchData.js";

const StreakCounter = () => {
  const [timestampsArr, setTimestampsArr] = useState([]);
  //The reason it's nested like this is because otherwise clean-up function would never get called. I don't have a clean-up function but best practice is best practice
  useEffect(() => {
    (async () => {
      const timestamps = await getTimestamps(
        "GET",
        "http://localhost:3000/boobs"
      );
      setTimestampsArr(timestamps);
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
            <Box
              h="15px"
              w="5px"
              bg="white"
              rounded={"full"}
              // color="white"
              // shadow="0 0 2px 2px RGBA(255, 255, 255, 0.40)" //This is the colour corresponding to Chakra's WhiteAlpha 400
              key={key}
            />
            {/* <Box
              h="15px"
              w="3px"
              bg="white"
              rounded={"full"}
              // color="white"
              // shadow="0 0 2px 2px RGBA(255, 255, 255, 0.40)" //This is the colour corresponding to Chakra's WhiteAlpha 400
              key={key}
            />
            <Box
              h="15px"
              w="5px"
              bg="white"
              rounded={"full"}
              // color="white"
              // shadow="0 0 2px 2px RGBA(255, 255, 255, 0.40)" //This is the colour corresponding to Chakra's WhiteAlpha 400
              key={key}
            /> */}
          </>
        ))}
      </Wrap>
    </VStack>
  );
};

export default StreakCounter;
