import Particle from "../ParticleBackground/Particle";
import "./App.css";
import React from "react";
import { Text, extendTheme } from "@chakra-ui/react";
import MyTimer from "../Timer";
import Quote from "../Quote Element";
import Blogpost from "../Blogpost/index";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  const [affirmations, setAffirmations] = React.useState([
    { content: undefined },
  ]);
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetchAffirmations();
    fetchBlogs();
  }, []);

  const fetchAffirmations = async () => {
    const response = await fetch("http://localhost:3001/v1/mindactivity");
    const data = await response.json();
    // console.log(`this is data: ${data}`);
    setAffirmations([...data.payload]);
  };

  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:3001/v1/blogs");
    const data = await response.json();
    setBlogs([...data.payload]);
  };

  const randomIndex = Math.floor(Math.random() * 50);
  console.log(randomIndex);

  const randomBlogIndex = Math.floor(Math.random() * 3);
  console.log(randomBlogIndex);

  let currentItem = { ...affirmations[randomIndex] };

  let currentBlog = { ...blogs[randomBlogIndex] };
  console.log(currentBlog);
  console.log(currentBlog.imgageSrc);

  // 2. Update the breakpoints as key-value pairs

  return (
    <>
      <Particle />

      <Text fontSize="6xl">Mindactivity</Text>
    </>
  );
}

export default App;