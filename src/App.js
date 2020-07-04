import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Sections from "./components/Sections";
import IntroOverlay from "./components/IntroOverlay";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // prevent flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });

    // timeline
    const tl = gsap.timeline();
    tl.from(".line span", 1.8, {
      opacity: 0,
      delay: 1,
      y: 100,
      ease: "power4.out",
      skewY: 8,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".complete-overlay", 0, { height: "50%" })
      .to(".overlay-top", 1.5, {
        height: 0,
        ease: "power3.inOut",
        stagger: 0.4,
      })
      .to(".complete-overlay", 0, { height: 0, delay: -0.8 })
      .to(".overlay-bottom", 1.5, {
        width: 0,
        ease: "power3.inOut",
        delay: -0.8,
        stagger: 0.4,
      })
      .to(".intro-overlay", 0, {
        css: { display: "none" },
      })
      .from(".section-image img", 2, {
        scale: 1.4,
        ease: "power3.inOut",
        delay: -2.8,
        stagger: 0.4,
      });
  });

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Sections />
    </div>
  );
}

export default App;
