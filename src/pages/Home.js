import React, { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Sections from "../components/Sections";
import IntroOverlay from "../components/IntroOverlay";

import { homeAnimation } from "../animations/animations";

export default function Home({ setNavEnabled }) {
  useEffect(() => {
    // navigation disabled for 2 sec
    setNavEnabled(false);
    setTimeout(() => {
      console.log("allowed");
      setNavEnabled(true);
    }, 4200);
  }, []);

  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(
      animationComplete,
      completeAnimation,
      window.innerHeight < 540
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Sections />
    </div>
  );
}
