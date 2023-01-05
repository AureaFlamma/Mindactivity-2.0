import React from "react";
import { Text, Flex, Button, Circle, HStack } from "@chakra-ui/react";
import MyTimer from "../Timer/Timer.js";
import { useRandomBackground } from "./AppHelpers/useRandomBackground.js";
import getToday from "./AppHelpers/getToday.js";
import sendRequest from "./AppHelpers/sendRequest.js";
import streakCounter from "../StreakCounter/Streak.js";

function App() {
  // console.log(getToday());
  let datesArr = [1, 2, 3];
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
          {datesArr.map((element, key) => (
            <Circle
              size="20px"
              bg="whiteAlpha.800"
              color="white"
              shadow="0 0 3px 2px RGBA(255, 255, 255, 0.80)" //This is the colour corresponding to Chakra's WhiteAlpha 800
              key={key}
            />
          ))}
        </HStack>
      </Flex>
    </>
  );
}

export default App;
