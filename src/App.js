import React, { useEffect } from "react";
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

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // prevent flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
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
