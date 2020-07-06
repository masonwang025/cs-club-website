import React, { useEffect, useState } from "react";
import gsap from "gsap";

import Banner from "../components/Banner";
import Sections from "../components/Sections";
import IntroOverlay from "../components/IntroOverlay";

import { homeAnimate, homeAnimateLandscape } from "../animations/animations";

const homeAnimation = (completeAnimation, landscape) => {
  if (!landscape) {
    homeAnimate(completeAnimation);
  } else {
    // mobile landscape == no animations because screw landscape mobile
    homeAnimateLandscape(completeAnimation);
  }
};

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(
      completeAnimation,
      window.innerWidth > 400 &&
        window.innerWidth < 960 &&
        window.innerHeight < 480
    );
  }, []);

  return (
    <div>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Sections />
    </div>
  );
}
