import gsap from "gsap";

// HOME ANIMATIONS
export function homeAnimate(completeAnimation) {
  const tl = gsap.timeline();
  tl.from(".line span", 1.7, {
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
          backgroundColor: "rgba(255, 255, 255, 00.92)",
          zIndex: 250,
        },
        delay: -0.5,
        duration: 0.6,
        onComplete: completeAnimation,
      }
    );
}

export function homeAnimateLandscape(completeAnimation) {
  const tl = gsap.timeline();
  tl.from(".line span", 1.2, {
    opacity: 0,
    delay: 0.5,
    y: 100,
    ease: "power4.out",
    skewY: 8,
  })
    .from(".btn-row", 0.5, {
      opacity: 0,
    })
    .to(".header", 0, {
      css: {
        backgroundColor: "rgba(255, 255, 255, 00.92)",
        zIndex: 250,
        onComplete: completeAnimation,
      },
    });
}

// MENU ANIMATIONS
