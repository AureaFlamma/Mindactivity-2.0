import React from "react";

import { useTimer } from "react-timer-hook";
import { FaPlay, FaPause } from "react-icons/fa";
import { getExpiryTimestamp, getCountWithZero } from "./helpers";

import {
  Text,
  IconButton,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useState } from "react";

export default function MyTimer() {
  // To change the default starting timer, change the below. It'll also update the slider anchor:
  const startingMinutes = 10;
  //A separate state for display minutes is necessary as the timer hook doesn't give us a setMinutes function:
  const [maxMinutes, setMaxMinutes] = useState(startingMinutes);
  //This sets the initial timer:
  var expiryTimestamp = getExpiryTimestamp(startingMinutes);

  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  return (
    <VStack gap="10">
      <CircularProgress
        size={["350px", "400px"]}
        thickness="2px"
        value={maxMinutes * 60 - (minutes * 60 + seconds)}
        min={0}
        max={maxMinutes * 60}
        color="white"
        trackColor="whiteAlpha.500"
        capIsRound={true}
      >
        <CircularProgressLabel>
          <Text
            fontSize={["90px", "100px"]}
            fontFamily={"de_valenciaregular, sans-serif"}
          >
            {getCountWithZero(minutes)}:{getCountWithZero(seconds)}
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
      <VStack width="75%">
        <Text>{maxMinutes} minute session</Text>
        <Slider
          aria-label="slider-ex-1"
          min={5}
          max={59}
          defaultValue={startingMinutes}
          //This sets the timer to the value selected by user. False means the timer won't start as soon as user releases the draggable thumb.
          onChangeEnd={(val) => {
            restart(getExpiryTimestamp(val), false);
          }}
          onChange={(val) => setMaxMinutes(val)}
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
