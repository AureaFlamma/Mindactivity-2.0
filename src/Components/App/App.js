import React from "react";
import { ChakraProvider, Text, Flex } from "@chakra-ui/react";
import MyTimer from "../Timer/Timer.js";
import { useRandomBackground } from "./helpers";

function App() {
  return (
    <>
      <ChakraProvider>
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
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default App;
