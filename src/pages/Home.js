import React, { useEffect, useState, useContext } from "react";

import Banner from "../components/Banner";
import Sections from "../components/Sections";
import IntroOverlay from "../components/IntroOverlay";
import { HeaderContext } from "../contexts/HeaderContext";

import { homeAnimation } from "../animations/homeAnim";

export default function Home() {
  // disabling header
  const { setDisabled } = useContext(HeaderContext);

  useEffect(() => {
    // navigation disabled for a home animation to run
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 4300);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    <div className="home">
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Sections />
    </div>
  );
}
