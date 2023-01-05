import React from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import MyTimer from "../Timer/Timer.js";
import { useRandomBackground } from "./AppHelpers/useRandomBackground.js";
import getToday from "./AppHelpers/getToday.js";
import sendRequest from "./AppHelpers/sendRequest.js";

function App() {
  // console.log(getToday());
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
      </Flex>
    </>
  );
}

export default App;
