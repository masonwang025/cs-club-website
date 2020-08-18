import React from "react";

export default function AccordionItem({ resource, id }) {
  return (
    <div className="tab">
      <input type="checkbox" id={id}></input>
      <label className="tab-label" htmlFor={id}>
        {resource.topic}
      </label>
      <div className="tab-content">
        {resource.sources.map((source) => (
          <div key={source.title} className="source">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={source.link}
              className="source-title underline"
            >
              {source.title} <i className="fa fa-external-link-square"></i>
            </a>
            {source.description}
          </div>
        ))}
      </div>
    </div>
  );
}
