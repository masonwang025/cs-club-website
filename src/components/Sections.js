import React, { useContext } from "react";
import DelayLink from "react-delay-link";
import { coverTransition } from "../animations/globalAnim";
import { HeaderContext } from "../contexts/HeaderContext";

const sections = [
  {
    id: 1,
    subtitle: "Dedicated to Education",
    title: "Extensive curriculum designed for all",
    img: "curriculum-min",
    to: "/curriculum",
  },
  {
    id: 2,
    subtitle: "Compete Together",
    title: "Put your skills to the test",
    img: "compete-min",
    to: "/competitions",
  },
  {
    id: 3,
    subtitle: "Curated Resources",
    title: "Courses and projects to hone your skills",
    img: "resources-min",
    to: "/resources",
  },
];

export default function Sections() {
  const { setDisabled } = useContext(HeaderContext);
  return (
    <section className="sections">
      <div className="fcontainer-fluid">
        <div className="row">
          {sections.map((section) => (
            <DelayLink
              className="section-wrapper-link"
              to={section.to}
              key={section.id}
              delay={825}
              clickAction={() => {
                // disable navbar
                setDisabled(true);
                setTimeout(() => {
                  setDisabled(false);
                }, 2000);

                coverTransition(true);
              }}
              replace={false}
            >
              <div className="section">
                <div className="section-details">
                  <span>{section.subtitle}</span>
                  <h2>{section.title}</h2>
                </div>
                <div className="section-image">
                  <img
                    src={require(`../assets/${section.img}.png`)}
                    alt={section.title}
                  />
                </div>
              </div>
            </DelayLink>
          ))}
        </div>
        ;
      </div>
    </section>
  );
}
