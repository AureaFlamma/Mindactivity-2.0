import { useState } from "react";
import background1 from "../../assets/images/background_1.png";
import background2 from "../../assets/images/background_2.png";
import background3 from "../../assets/images/background_3.png";
import background4 from "../../assets/images/background_4.png";

// export function useRandomBackground() {
//   var backgroundsArr = [background1, background2, background3, background4];
//   const [selectedBackground] = useState(RandomBackgroundURL(backgroundsArr)); //ommiting setSelectedBackground as I'm not using it- otherwise Netlify will give me an error.

//   function RandomBackgroundURL(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }
//   return selectedBackground;
// }

export function useRandomBackground() {
  var backgroundsArr = [background1, background2, background3, background4];
  //ommiting setSelectedBackground as I'm not using it- otherwise Netlify will give me an error.

  return backgroundsArr[Math.floor(Math.random() * backgroundsArr.length)];
}
