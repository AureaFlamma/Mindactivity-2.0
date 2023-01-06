import { React, useState, useEffect } from "react";
import { Text, Flex, Button, Circle, HStack } from "@chakra-ui/react";
import MyTimer from "../Timer/Timer.js";
import { useRandomBackground } from "./AppHelpers/useRandomBackground.js";
import getToday from "./AppHelpers/getToday.js";
import sendRequest from "../fetchData.js";
import StreakCounter from "../StreakCounter/Streak.js";

function App() {
  return (
    <>
      <Flex
        align="center"
        direction={"column"}
        p="3"
        color="aliceblue"
        minH="100vh"
        w="100vw"
        bgImage={useRandomBackground}
        gap="10"
        fontFamily="Oswald, sans-serif"
      >
        <Text fontSize={["4xl", "6xl"]} fontWeight="200">
          Mindactivity
        </Text>

        <MyTimer />
        {/* <Button
          colorScheme={"BlackAlpha"}
          onClick={() => {
            sendRequest(getToday(), "http://localhost:3000/boobs");
          }}
        >
          {" "}
          Send request{" "}
        </Button> */}
        <StreakCounter />
      </Flex>
    </>
  );
}

export default App;
