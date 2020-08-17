import React from "react";
import { useState } from "react";
import allContests from "../data/competitionsList";
import BackToTop from "../components/BackToTop";

export default function Competitions() {
  const [contestList, updateContestList] = useState(allContests);

  return (
    <div className="competitions page" id="top">
      <div className="info">
        <h1>Recommended Competitions</h1>
        <h2>The greatest events to test your skills.</h2>
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
        {contestList.map((contest) => (
          <div key={contest.name} className="contest-card card">
            <div className="card-title">{contest.name}</div>
            <div className="card-body">
              {contest.tags.map((tag) => (
                <div key={contest.name + tag} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BackToTop />
    </div>
  );
}
