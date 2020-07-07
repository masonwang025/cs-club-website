import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuClose, menuOpen } from "../animations/animations";

export default function Menu({ clicked }) {
  const currentPath = useLocation().pathname;

  const paths = [
    { path: "/about", name: "About" },
    { path: "/curriculum", name: "Curriculum" },
    { path: "/competitions", name: "Competitions" },
    { path: "/resources", name: "Resources" },
  ];

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuSecondaryBg = useRef(null);
  useEffect(() => {
    if (clicked === false) {
      // close
      menuClose(menu, revealMenu, revealMenuSecondaryBg);
    } else if (clicked === true) {
      // open
      menuOpen(
        menu,
        revealMenu,
        revealMenuSecondaryBg,
        ".menu .menu-links #aboutlink",
        ".menu .menu-links #curriculumlink",
        ".menu .menu-links #competitionslink",
        ".menu .menu-links #resourceslink"
      );
    }
  }, [clicked]);

  return (
    <div ref={(el) => (menu = el)} className="menu">
      <div
        ref={(el) => (revealMenuSecondaryBg = el)}
        className="menu-secondary-bg-color"
      ></div>
      <div id="page-transition-layer"></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper row v-center">
            <div className="menu-links">
              <nav>
                <ul>
                  {paths.map((path) => (
                    <li key={path.name.toLowerCase() + "link"}>
                      <Link
                        to={path.path}
                        className={currentPath === path.path ? "active" : ""}
                        id={path.name.toLowerCase() + "link"}
                      >
                        {path.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="info">
                <h3>Extra Info</h3>
                <p>
                  Possibly a slogan, a contact email, etc. Whatever we choose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
