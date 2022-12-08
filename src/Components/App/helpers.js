import { useState } from "react";
import background1 from "../../assets/images/background_1.png";
import background2 from "../../assets/images/background_2.png";
import background3 from "../../assets/images/background_3.png";
import background4 from "../../assets/images/background_4.png";

export function useRandomBackground() {
  var backgroundsArr = [background1, background2, background3, background4];
  const [selectedBackground, setSelectedBackground] = useState(
    RandomBackgroundURL(backgroundsArr)
  );

  function RandomBackgroundURL(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return selectedBackground;
}
