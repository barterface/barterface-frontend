import React from "react";
import HeroSection from "../components/UI/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from '../constants/HomePageData';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Home;
