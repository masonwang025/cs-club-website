import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

export default function BackToTop() {
  useEffect(() => {
    let backToTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        backToTop.classList = "back-to-top show";
      } else {
        backToTop.classList = "back-to-top hide";
      }
    });
  });

  return (
    <AnchorLink href="#top">
      <RightArrow className="back-to-top" />
    </AnchorLink>
  );
}
