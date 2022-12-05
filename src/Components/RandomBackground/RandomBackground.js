import React from "react";
import { useEffect, useState } from "react";

export function RandomBackground1() {
  var backgroundPaths = [
    "srcComponentsRandomBackground\backgroundLib\background_1.png",
    "srcComponentsRandomBackground\backgroundLib\background_2.png",
    "srcComponentsRandomBackground\backgroundLib\background_3.png",
    "srcComponentsRandomBackground\backgroundLib\background_4.png",
  ];
  const [selectedPath, setSelectedPath] = useState("");
  useEffect(() => {
    setSelectedPath(
      backgroundPaths[Math.floor(Math.random() * backgroundPaths.length)]
    );
  }, []);
  return `url('${selectedPath}')`; //Needs to be returned in CSS url format as we'll be using it as prop for a Chakra component.
}

export function RandomBackground2() {
  var backgroundPaths = [
    "srcComponentsRandomBackground\backgroundLib\background_1.png",
    "srcComponentsRandomBackground\backgroundLib\background_2.png",
    "srcComponentsRandomBackground\backgroundLib\background_3.png",
    "srcComponentsRandomBackground\backgroundLib\background_4.png",
  ];

  return `url('${
    backgroundPaths[Math.floor(Math.random() * backgroundPaths.length)]
  }')`; //Needs to be returned in CSS url format as we'll be using it as prop for a Chakra component.
}

export function RandomBackground3() {
  var backgroundPaths = [
    "srcComponentsRandomBackground\backgroundLib\background_1.png",
    "srcComponentsRandomBackground\backgroundLib\background_2.png",
    "srcComponentsRandomBackground\backgroundLib\background_3.png",
    "srcComponentsRandomBackground\backgroundLib\background_4.png",
  ];
  var selectedPath = "";
  useEffect(() => {
    selectedPath =
      backgroundPaths[Math.floor(Math.random() * backgroundPaths.length)];
  }, []);

  return `url('${selectedPath}')`; //Needs to be returned in CSS url format as we'll be using it as prop for a Chakra component.
}
