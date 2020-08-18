import React from "react";
import { useState } from "react";
import allContests from "../data/competitionsList";
import BackToTop from "../components/BackToTop";

import Fade from "react-reveal/Fade";

export default function Competitions() {
  const [contestList, updateContestList] = useState(allContests);

  return (
    <div className="competitions page" id="top">
      <div className="info">
        <h1>Recommended Competitions</h1>
        <h2>The best events to test your skills.</h2>
        <input
          type="text"
          placeholder="Search by name or topic"
          id="search-filter"
          onChange={(e) => {
            let filterText = e.target.value.toLowerCase().trim();
            updateContestList(
              allContests.filter((contest) => {
                for (let i = 0; i < contest.tags.length; i++)
                  if (contest.tags[i].toLowerCase().trim().includes(filterText))
                    return true;

                return contest.name.toLowerCase().trim().includes(filterText);
              })
            );
          }}
        ></input>
        <div className="flex-grid">
          {contestList.length > 0 ? (
            contestList.map((contest) => (
              <div className="flex-col" key={contest.name}>
                <Fade duration={1550}>
                  <div className="contest-card card">
                    <div className="card-title">
                      <h1>{contest.name}</h1>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={contest.link}
                      >
                        Visit site{" "}
                        <i
                          className="fa fa-external-link-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="card-body">
                      {contest.description}
                      {contest.tags.map((tag) => (
                        <div key={contest.name + tag} className="tag">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </Fade>
              </div>
            ))
          ) : (
            <p>Sorry, we can't seem to find anything matching your search.</p>
          )}
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
