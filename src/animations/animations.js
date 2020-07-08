import gsap from "gsap";

const tl = gsap.timeline();

// HOME ANIMATIONS
export function homeAnimation(animationComplete, completeAnimation, landscape) {
  if (!landscape && !animationComplete) {
    homeNormalAnimate(completeAnimation);
  } else {
    // mobile landscape == no animations because screw landscape mobile
    homeAnimateLandscape(completeAnimation);
  }
}

function homeNormalAnimate(completeAnimation) {
  tl.from(".line span", 1.8, {
    opacity: 0,
    delay: 0.62,
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
      onComplete: completeAnimation,
    });

  gsap.fromTo(
    ".header",
    { css: { zIndex: 4 } },
    {
      css: {
        zIndex: 1000,
      },
      delay: 3,
    }
  );
  gsap.fromTo(
    ".header",
    { css: { backgroundColor: "transparent" } },
    {
      css: {
        backgroundColor: "rgba(255, 255, 255, 00.92)",
        zIndex: 1000,
      },
      duration: 0.6,
      delay: 4,
    }
  );
}

function homeAnimateLandscape(completeAnimation) {
  gsap.from(".line span", 1.8, {
    opacity: 0,
    delay: 0.5,
    y: 100,
    ease: "power4.out",
    skewY: 8,
    stagger: 0.07,
  });
  gsap.from(".btn-row", 1, {
    opacity: 0,
    delay: 1.3,
    ease: "power3.inOut",
    onComplete: completeAnimation,
  });

  gsap.to(".header", {
    css: {
      backgroundColor: "rgba(255, 255, 255, 00.92)",
      zIndex: 1000,
    },
    duration: 0,
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
    skewY: 0,
  });
  gsap.to(menu, 1, {
    css: {
      display: "none",
    },
  });
  gsap.to(".header .logo a", 0.5, {
    css: {
      color: "black",
    },
    delay: 0.5,
  });
  hideUpArrow();
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
  showUpArrow();
}

const showUpArrow = () => {
  gsap.to(".header .hamburger-menu span", 0.5, {
    css: {
      opacity: 0,
    },
    delay: 0.6,
  });
  gsap.to(".header .hamburger-menu", 0, {
    css: {
      display: "none",
    },
    delay: 0.5,
  });
  gsap.to(".header .hamburger-menu-close", 0, {
    css: {
      display: "block",
    },
  });
  gsap.to(".header .hamburger-menu-close", 1, {
    css: {
      opacity: 1,
    },
    delay: 0.5,
  });
};

const hideUpArrow = () => {
  gsap.to(".header .hamburger-menu-close", 0.6, {
    css: {
      opacity: 0,
    },
  });
  gsap.to(".header .hamburger-menu-close", 0, {
    css: {
      display: "none",
    },
    delay: 0.6,
  });
  gsap.to(".header .hamburger-menu", 0, {
    css: {
      display: "block",
    },
    delay: 0.6,
  });
  gsap.to(".header .hamburger-menu span", 0.5, {
    ease: "power3.inOut",
    css: {
      backgroundColor: "black",
      opacity: 1,
    },
  });
};

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
