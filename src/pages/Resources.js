import React from "react";
import resources from "../data/resources";
import AccordionItem from "../components/AccordionItem";
import BackToTop from "../components/BackToTop";

export default function Resources() {
  return (
    <div className="resources page" id="top">
      <div className="info">
        <h1>Curated Resources</h1>
        <h2>The best CS courses and projects for all skill levels.</h2>
      </div>
      <div className="row">
        <div className="col">
          <div className="tabs">
            {resources.map((resource) => {
              let id = resource.topic.replace(/\s+/g, "-").toLowerCase();
              return <AccordionItem key={id} resource={resource} id={id} />;
            })}
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
