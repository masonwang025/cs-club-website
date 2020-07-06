import gsap from "gsap";

// HOME ANIMATIONS
export function homeAnimation(completeAnimation, landscape) {
  if (!landscape) {
    homeNormalAnimate(completeAnimation);
  } else {
    // mobile landscape == no animations because screw landscape mobile
    homeAnimateLandscape(completeAnimation);
  }
}

function homeNormalAnimate(completeAnimation) {
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

function homeAnimateLandscape(completeAnimation) {
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
export function menuClose(menu, revealMenu, revealMenuSecondaryBg) {
  gsap.to([revealMenu, revealMenuSecondaryBg], {
    duration: 0.9,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
  gsap.to(menu, 1, {
    css: {
      display: "none",
    },
  });

  // navbar colors
  gsap.to(".header .logo a", 0.5, {
    css: {
      color: "black",
    },
    delay: 0.5,
  });
  gsap.to(".header .nav span", 0.5, {
    css: {
      backgroundColor: "black",
    },
    delay: 0.5,
  });
}

export function menuOpen(
  menu,
  revealMenu,
  revealMenuSecondaryBg,
  line1,
  line2,
  line3,
  line4
) {
  gsap.to(menu, 1, {
    css: {
      display: "block",
    },
  });
  gsap.to([revealMenu, revealMenuSecondaryBg], {
    duration: 0,
    height: "100%",
    opacity: 1,
  });
  gsap.from([revealMenuSecondaryBg, revealMenu], {
    duration: 0.9,
    height: 0,
    transformOrigin: "right top",
    skewY: 2.5,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
  fadeInUp([".menu .info h3", ".menu .info p"]);
  staggerText(line1, line2, line3, line4);
  // navbar colors
  gsap.to(".header .logo a", 0.5, {
    css: {
      color: "white",
    },
    delay: 0.5,
  });
  gsap.to(".header .nav span", 0.5, {
    css: {
      backgroundColor: "white",
    },
    delay: 0.5,
  });
}

const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.02,
    },
  });
};

const staggerText = (node1, node2, node3, node4) => {
  console.log("staggers");
  gsap.from([node1, node2, node3, node4], {
    duration: 0.4,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};
