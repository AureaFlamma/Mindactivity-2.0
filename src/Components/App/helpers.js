import { React, useState } from "react";

export function useRandomBackground() {
  var backgroundURLArr = [
    `background_1.png`,
    "background_2.png",
    "background_3.png",
    "background_4.png",
  ];
  const [num, setNum] = useState(RandomBackgroundURL(backgroundURLArr));

  function RandomBackgroundURL(arr) {
    return `url(/backgroundLib/${arr[Math.floor(Math.random() * arr.length)]})`;
  }
  return num;
}
