import React from "react";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { FaPlay, FaPause } from "react-icons/fa";
import { getExpiryTimestamp, getCountWithZero } from "./helpers";

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
import { useState } from "react";

export default function MyTimer() {
  // To change the default starting timer, change the below. It'll also update the slider anchor:
  const startingMinutes = 10;
  //A separate state for display minutes is necessary as the timer hook doesn't give us a setMinutes function:
  const [displayMinutes, setDisplayMinutes] = useState(startingMinutes);
  //This sets the initial timer:
  var expiryTimestamp = getExpiryTimestamp(startingMinutes);

  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  //This adds leading 0 to single-digit minutes/seconds, making them double-digit.

  return (
    <VStack gap="10">
      <Flex
        boxSize={["300px", "350px"]}
        border="10px solid white"
        borderRadius="full"
        align="center"
        justify={"center"}
      >
        <Text
          fontSize={["90px", "100px"]}
          fontFamily={"de_valenciaregular, sans-serif"}
        >
          {getCountWithZero(minutes)}:{getCountWithZero(seconds)}
        </Text>
      </Flex>
      <VStack width="75%">
        <Text>{displayMinutes} minute session</Text>
        <Slider
          aria-label="slider-ex-1"
          min={5}
          max={59}
          defaultValue={startingMinutes}
          //This sets the timer to the value selected by user. False means the timer won't start as soon as user releases the draggable thumb.
          onChangeEnd={(val) => {
            restart(getExpiryTimestamp(val), false);
          }}
          onChange={(val) => setDisplayMinutes(val)}
        >
          <SliderTrack bg="whiteAlpha.500">
            <SliderFilledTrack bg="white" />
          </SliderTrack>
          <SliderThumb
            _focus={{ boxShadow: "none" }} //this overrides Chakra's default settings whereby the shadow persists for as long as the slider is in focus.
            _hover={{ boxShadow: "0 0 0 5px #38B2AC80" }}
          />
        </Slider>
      </VStack>
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
