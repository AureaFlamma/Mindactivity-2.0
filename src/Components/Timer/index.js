import React from "react";
import { useTimer } from "react-timer-hook";
import TimerButton from "../TimerButton";
import musicFunctionality from "../Sound";
import { Flex, Box, Text, Button, ButtonGroup, VStack } from "@chakra-ui/react";

export default function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  return (
    <VStack>
      <Flex
        bg="red"
        w={["200px", "300px"]}
        h={["200px", "300px"]}
        border="10px solid white"
        borderRadius="full"
        align="center"
        justify={"center"}
      >
        {/* There may be a problem with single/dbl digits. Possibly needs spearste containers */}
        <Text fontSize={["70px", "105px"]}>
          {minutes}:{seconds}
        </Text>
      </Flex>

      <ButtonGroup colorScheme="whiteAlpha" gap="4" variant="solid" size="md">
        <Button borderRadius="full"></Button>
        <Button variant="outline" borderRadius="full"></Button>
      </ButtonGroup>
    </VStack>
  );
}
