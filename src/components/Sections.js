import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    subtitle: "Dedicated to Education",
    title: "Diverse curriculum designed for all",
    img: "curriculum-min",
    to: "/curriculum",
  },
  {
    id: 2,
    subtitle: "Compete Together",
    title: "Join competitions with your friends",
    img: "compete-min",
    to: "/compete",
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
  return (
    <section className="sections">
      <div className="container-fluid">
        <div className="row">
          {sections.map((section) => (
            <Link className="section-wrapper-link" to={section.to}>
              <div className="section" key={section.id}>
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
            </Link>
          ))}
        </div>
        ;
      </div>
    </section>
  );
}
