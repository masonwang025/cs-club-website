import React, { useEffect } from "react";

import Banner from "../components/Banner";
import Sections from "../components/Sections";
import IntroOverlay from "../components/IntroOverlay";

import { homeAnimation } from "../animations/animations";

export default function Home({ animationComplete, completeAnimation }) {
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
