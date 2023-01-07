import { React } from "react";
import { Text, Flex } from "@chakra-ui/react";
import MyTimer from "../Timer/Timer.js";
import { useRandomBackground } from "./AppHelpers/useRandomBackground.js";
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
        <StreakCounter />
      </Flex>
    </>
  );
}

export default App;
