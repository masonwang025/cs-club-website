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

// routes
const routes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/curriculum", Component: Curriculum },
  { path: "/competitions", Component: Competitions },
  { path: "/resources", Component: Resources },
];

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
      if (!(window.innerWidth < wBreakpoint && dimensions.width < wBreakpoint))
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

  return (
    <div className="App">
      <Header />
      <div className="App">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
