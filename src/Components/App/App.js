import "./App.css";
import React from "react";
import { ChakraProvider, Text, Flex } from "@chakra-ui/react";
import MyTimer from "../Timer";
import {
  RandomBackground1,
  RandomBackground2,
  RandomBackground3,
} from "../RandomBackground/RandomBackground";
import { useEffect, useState } from "react";

function App() {
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 300);
  // const [affirmations, setAffirmations] = React.useState([
  //   { content: undefined },
  // ]);
  // const [blogs, setBlogs] = React.useState([]);

  // React.useEffect(() => {
  //   fetchAffirmations();
  //   fetchBlogs();
  // }, []);

  // const fetchAffirmations = async () => {
  //   const response = await fetch("http://localhost:3001/v1/mindactivity");
  //   const data = await response.json();
  //   // console.log(`this is data: ${data}`);
  //   setAffirmations([...data.payload]);
  // };

  // const fetchBlogs = async () => {
  //   const response = await fetch("http://localhost:3001/v1/blogs");
  //   const data = await response.json();
  //   setBlogs([...data.payload]);
  // };

  // const randomIndex = Math.floor(Math.random() * 50);
  // console.log(randomIndex);

  // const randomBlogIndex = Math.floor(Math.random() * 3);
  // console.log(randomBlogIndex);

  // let currentItem = { ...affirmations[randomIndex] };

  // let currentBlog = { ...blogs[randomBlogIndex] };
  // console.log(currentBlog);
  // console.log(currentBlog.imgageSrc);

  // console.log(RandomBackground1());

  // const [background, setBackground] = useState("poop");

  // useEffect(() => {
  //   setBackground(RandomBackground2());
  //   console.log(background);
  // }, []);

  // useEffect(() => {
  //   console.log(RandomBackground2());
  // }, []);
  // console.log(RandomBackground1());
  var exampleArr = [1, 2, 3, 4];
  useEffect(() => {
    let variable;
    variable = exampleArr[Math.floor(Math.random() * exampleArr.length)];
    console.log(variable);
  }, []);

  // 2. Update the breakpoints as key-value pairs
  console.log();
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
          bgGradient="linear(to-br, #131224, #0c1445, #36306f ) "
          // bgImage={RandomBackground()}
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
