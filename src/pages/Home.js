import React, { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Sections from "../components/Sections";
import IntroOverlay from "../components/IntroOverlay";

import { homeAnimation } from "../animations/animations";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation, window.innerHeight < 540);
  }, []);

  return (
    <div>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Sections />
    </div>
  );
}
