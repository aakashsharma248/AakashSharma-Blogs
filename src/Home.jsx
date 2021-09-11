import React from "react";
import Common from "./Common";
import img from "./images/home1.jpg";

const Home = () => {
  return (
    <>
      <Common name="Grow in your life with" imgsrc={img} visit="/Service" btnName="Get Started"/>
    </>
  );
};

export default Home;
