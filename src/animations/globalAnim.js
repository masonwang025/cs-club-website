import gsap from "gsap";

// BASIC PAGE TRANSITION
export function coverTransition(doAlternative = window.innerHeight < 540) {
  gsap.to(".menu", 1, {
    css: {
      display: "block",
    },
  });
  gsap.to([".menu .menu-layer"], {
    duration: 0,
    display: "none",
  });

  gsap.to([".menu .page-transition-layer", ".menu .menu-secondary-bg-color"], {
    duration: 0,
    height: "100%",
    opacity: 1,
    display: "block",
  });

  gsap.from(
    [".menu .menu-secondary-bg-color", ".menu .page-transition-layer"],
    {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2.5,
      ease: "power2.inOut",
      stagger: {
        amount: 0.07,
      },
    }
  );

  if (doAlternative)
    gsap.to(
      [".menu .page-transition-layer", ".menu .menu-secondary-bg-color"],
      {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 0,
        ease: "power2.inOut",
        stagger: {
          amount: 0.07,
        },
        delay: 0.9,
      }
    );

  gsap.to([".menu", ".menu .page-transition-layer"], {
    css: {
      display: "none",
    },
    delay: doAlternative ? 1.9 : 0.9,
  });
}
