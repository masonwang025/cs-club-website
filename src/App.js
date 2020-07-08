import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/Header";

// page components
import Home from "./pages/Home";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Competitions from "./pages/Competitions";
import Resources from "./pages/Resources";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevent flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });

    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      let wBreakpoint = 500;
      // tl;dr: don't resize for portrait mobile URL bar window height changes
      // bad user experience if everything resizes as they scroll (URL bar appears/disappears while scrolling up/down)
      // so: wBreakpoint is to signify the maxWidth of what we will consider portrait mobile device
      // if the new width AND old width are the SAME, and they are both under wBreakpoint, don't resize
      if (
        !(
          window.innerWidth === dimensions.width &&
          dimensions.width < wBreakpoint
        )
      )
        setTimeout(() => {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
          });
        }, 500);
    });

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  // routes
  const routes = [
    {
      path: "/",
      Component: Home,
      props: {
        animationComplete: animationComplete,
        completeAnimation: completeAnimation,
      },
    },
    { path: "/about", Component: About },
    { path: "/curriculum", Component: Curriculum },
    { path: "/competitions", Component: Competitions },
    { path: "/resources", Component: Resources },
  ];

  return (
    <div className="App">
      <Header />
      <div className="App">
        <Switch>
          {routes.map(({ path, Component, props }) => (
            <Route key={path} exact path={path}>
              <Component {...props} />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
