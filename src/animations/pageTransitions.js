import gsap from "gsap";

const tl = gsap.timeline();

export function logoTransition() {
  gsap.to(".menu", 1, {
    css: {
      display: "block",
    },
  });

  gsap.to([".menu .page-transition-layer", ".menu .menu-secondary-bg-color"], {
    duration: 0,
    height: "100%",
    opacity: 1,
    display: "block",
  });

  tl.from([".menu .menu-secondary-bg-color", ".menu .page-transition-layer"], {
    duration: 0.9,
    height: 0,
    transformOrigin: "right top",
    skewY: 2.5,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  }).to([".menu", ".menu .page-transition-layer"], {
    css: {
      display: "none",
    },
  });
}
