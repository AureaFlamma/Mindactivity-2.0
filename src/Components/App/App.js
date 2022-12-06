import "./App.css";
import React from "react";
import { ChakraProvider, Text, Flex } from "@chakra-ui/react";
import MyTimer from "../Timer";
import { useState } from "react";

function App() {
  var backgroundURLArr = [
    `background_1.png`,
    "background_2.png",
    "background_3.png",
    "background_4.png",
  ];

  function RandomBackgroundURL(arr) {
    return `url(/backgroundLib/${arr[Math.floor(Math.random() * arr.length)]})`;
  }
  const [num, setNum] = useState(RandomBackgroundURL(backgroundURLArr));

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
          bgImage={num}
          gap="10"
          fontFamily="Oswald, sans-serif"
        >
          <Text fontSize={["3xl", "6xl"]} fontWeight="200">
            Mindactivity
          </Text>
          <MyTimer />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default App;
