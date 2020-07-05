import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";

// page components
import About from "./";

// routes

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
      <Home />
    </div>
  );
}

export default App;
