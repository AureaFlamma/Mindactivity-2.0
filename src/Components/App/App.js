import { React, useState, useEffect } from "react";
import { Text, Flex, Button, Circle, HStack } from "@chakra-ui/react";
import MyTimer from "../Timer/Timer.js";
import { useRandomBackground } from "./AppHelpers/useRandomBackground.js";
import getToday from "./AppHelpers/getToday.js";
import sendRequest from "./AppHelpers/sendRequest.js";
import streakCounter from "../StreakCounter/Streak.js";
import getRequest from "./AppHelpers/getRequest.js";

function App() {
  // console.log(getToday());
  const [datesArr, setDatesArr] = useState([]);
  //The reason it's nested like this is because otherwise clean-up function would never get called. I don't have a clean-up function but best practice is best practice
  useEffect(() => {
    (async () => {
      const timestamps = await getRequest("http://localhost:3000/boobs");
      setDatesArr(timestamps);
    })();
  }, []);

  return (
    <>
      <Flex
        align="center"
        direction={"column"}
        p="3"
        color="aliceblue"
        h="100vh"
        w="100vw"
        bgImage={useRandomBackground}
        gap="10"
        fontFamily="Oswald, sans-serif"
      >
        <Text fontSize={["4xl", "6xl"]} fontWeight="200">
          Mindactivity
        </Text>

        <MyTimer />
        <Button
          colorScheme={"BlackAlpha"}
          onClick={() => {
            sendRequest(getToday(), "http://localhost:3000/boobs");
          }}
        >
          {" "}
          Send request{" "}
        </Button>
        <HStack gap="1">
          {datesArr ? (
            datesArr.map((element, key) => (
              <Circle
                size="15px"
                bg="whiteAlpha.800"
                color="white"
                shadow="0 0 3px 2px RGBA(255, 255, 255, 0.80)" //This is the colour corresponding to Chakra's WhiteAlpha 800
                key={key}
              />
            ))
          ) : (
            <Circle />
          )}
        </HStack>
      </Flex>
    </>
  );
}

export default App;
