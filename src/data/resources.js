import React from "react";

const resources = [
  {
    topic: "Machine Learning",
    sources: [
      {
        title: "CS 188",
        link: "https://inst.eecs.berkeley.edu/~cs188/sp20/",
        description: (
          <p>
            This is a description of the amazing resource <b>CS188</b>{" "}
            <i>Oooh ahh</i>
          </p>
        ),
      },
      {
        title: "Kaggle Tutorials",
        link: "http://www.usaco.org/",
        description: (
          <p>
            <b>CHANGE THIS LINK RN</b> <b>USACO</b> <i>Oooh ahh</i>
          </p>
        ),
      },
    ],
  },
  {
    topic: "Example Topic",
    sources: [
      {
        title: "Resource number 1",
        link: "https://inst.eecs.berkeley.edu/~cs188/sp20/",
        description: (
          <p>
            Description of resoure number 1 (TALK ABOUT WHAT SKILL LEVEL THIS IS
            FOR)
          </p>
        ),
      },
      {
        title: "Resource number 2",
        link: "http://www.usaco.org/",
        description: (
          <p>
            Description of resoure number <b>TWO</b> (TALK ABOUT WHAT SKILL
            LEVEL THIS IS FOR)
          </p>
        ),
      },
    ],
  },
];

export default resources;
