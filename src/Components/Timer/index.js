import React from "react";
import { useTimer } from "react-timer-hook";
import { FaPlay, FaPause } from "react-icons/fa";
import {
  Flex,
  Box,
  Text,
  IconButton,
  ButtonGroup,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

export default function MyTimer() {
  const [sessionLength, setSessionLength] = React.useState(10);
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 60 * sessionLength);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  return (
    <VStack>
      {/* TODO: BoxSize? */}
      <Flex
        bg="red"
        w={["200px", "300px"]}
        h={["200px", "300px"]}
        border="10px solid white"
        borderRadius="full"
        align="center"
        justify={"center"}
      >
        {/* TODO: There may be a problem with single/dbl digits. Possibly needs spearste containers */}
        <Text fontSize={["70px", "105px"]}>
          {minutes}:{seconds}
        </Text>
      </Flex>
      <Text>X-minute session</Text>
      <Slider
        aria-label="slider-ex-1"
        min={5}
        max={60}
        defaultValue={10}
        onChangeEnd={(val) => {
          console.log("value: ", val);
          setSessionLength(val);
          console.log("sessionLength:", sessionLength);
          restart(expiryTimestamp, false);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <IconButton
        variant="solid"
        size="lg"
        colorScheme="whiteAlpha"
        borderRadius="full"
        icon={isRunning ? <FaPause /> : <FaPlay />}
        onClick={isRunning ? pause : resume}
      ></IconButton>
    </VStack>
  );
}
