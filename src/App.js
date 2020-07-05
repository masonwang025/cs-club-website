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

    const tl = gsap.timeline(); // timeline
    if (
      !(
        window.innerWidth > 400 &&
        window.innerWidth < 960 &&
        window.innerHeight < 480
      )
    ) {
      // mobile landscape == no animations because screw landscape mobile
      tl.from(".line span", 1.5, {
        opacity: 0,
        delay: 0.5,
        y: 100,
        ease: "power4.out",
        skewY: 8,
        stagger: {
          amount: 0.32,
        },
      })
        .to(".complete-overlay", 0, { height: "50%" })
        .to(".overlay-top", 1.5, {
          height: 0,
          ease: "power3.inOut",
          stagger: 0.32,
        })
        .to(".complete-overlay", 0, { height: 0, delay: -0.8 })
        .to(".overlay-bottom", 1.5, {
          width: 0,
          ease: "power3.inOut",
          delay: -0.8,
          stagger: 0.32,
        })
        .to(".intro-overlay", 0, {
          css: { display: "none" },
        })
        .from(".section-image img", 2, {
          scale: 1.4,
          ease: "power3.inOut",
          delay: -2.8,
          stagger: 0.32,
        })
        .fromTo(
          ".header",
          { css: { backgroundColor: "transparent" } },
          {
            css: {
              zIndex: 100,
              backgroundColor: "rgba(255, 255, 255, 00.92)",
            },
            delay: -0.5,
            duration: 0.6,
          }
        );
    } else {
      tl.from(".line span", 1.2, {
        opacity: 0,
        delay: 0.5,
        y: 100,
        ease: "power4.out",
        skewY: 8,
      })
        .from(".btn-row", 0.5, { opacity: 0 })
        .to(".header", 0, {
          css: {
            zIndex: 100,
            backgroundColor: "rgba(255, 255, 255, 00.92)",
          },
        });
    }
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
