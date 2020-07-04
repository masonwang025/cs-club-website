import React from "react";

const sections = [
  {
    id: 1,
    subtitle: "About",
    title: "All about SHS CS club",
    img: "about-min",
  },
  {
    id: 2,
    subtitle: "Curriculum",
    title: "Topics to be covered and competitions",
    img: "curriculum-min",
  },
  {
    id: 3,
    subtitle: "Resources",
    title: "Resources to help you learn",
    img: "resources-min",
  },
];

export default function Sections() {
  return (
    <section className="sections">
      <div className="container-fluid">
        <div className="row">
          {sections.map((section) => (
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
          ))}
        </div>
        ;
      </div>
    </section>
  );
}
