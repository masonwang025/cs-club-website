import React from "react";

const competitionsList = [
  {
    name: "USACO",
    link: "https://www.usaco.org",
    description: (
      <p>
        A 3-problem, 4-hour <b>algorithmic coding competition</b> for high schoolers
        that takes place in December, January, February, and March.
        Students compete in Bronze, Silver, Gold, and Platinum divisions,
          and students that perform well in Platinum are invited to the summer training camp.
      </p>
    ),
    tags: ["competitive programming", "algorithms", "data structures", "online"],
  },
  {
    name: "Codeforces",
    link: "http://codeforces.com/",
    description: (
      <p>
        A website that hosts weekly coding competitions of varying format and difficulty.
        Tens of thousands of competitors attempt to gain rating by solving as many problems in as little time
          as possible. Problems are focused on algorithms and datastructures.
      </p>
    ),
    tags: ["competitive programming", "algorithms", "data structures", "ICPC", "online"],
  },
    {
        name: "Kaggle",
        link: "https://www.kaggle.com/competitions",
        description: (
            <p>
                A website that hosts machine learning competitions involving data analysis,
                natural language processing, and more. Competitors have the chance to earn cash
                rewards in addition to new skills for winning certain challenges.
            </p>
        ),
        tags: ["machine learning", "data analysis", "online"],
    },
    {
        name: "picoCTF",
        link: "https://picoctf.com/",
        description: (
            <p>
                A cybersecurity competition hosted by Carnegie Mellon where teams of high schoolers
                solve problems involving cryptography, binary exploitation, forensics, and more
                to obtain flags and gain points.
            </p>
        ),
        tags: ["CTF", "cybersecurity", "hacking", "systems", "CMU", "online"],
    },
    {
        name: "ProCo",
        link: "https://sumo.stanford.edu/proco/info.html",
        description: (
            <p>
                A two-round, full-day competition hosted by Stanford where teams of 1-3 high schooolers
                compete to solve algorithmic problems. Prizes such as Raspberry Pis and iPad Minis are awarded to the
                highest-scoring teams.
            </p>
        ),
        tags: ["competitive programming", "algorithms", "data structures", "Stanford", "in-person"],
    },
    {
        name: "Virginia Tech",
        link: "https://icpc.cs.vt.edu/#/hscontest2019",
        description: (
            <p>
                A 13-problem, 5-hour contest organized by Virginia Tech following ICPC (Intercollegiate
                Programming Competition) rules. Teams of 1-3 students compete to solve problems as quickly
                as possible. Topics range from basic implementation problems to
                advanced algorithms.
            </p>
        ),
        tags: ["competitive programming", "algorithms", "data structures", "ICPC", "online"],
    },
    {
        name: "Facebook Hacker Cup",
        link: "https://www.facebook.com/codingcompetitions/hacker-cup",
        description: (
            <p>
                An international algorithmic coding competition with a qualification round followed by three competitive rounds.
                Individual competitors compete to solve problems as fast as possible, and cash prizes
                are available to the top contestants.
            </p>
        ),
        tags: ["competitive programming", "algorithms", "data structures"],
    },
    {
        name: "Google Code Jam",
        link: "https://codingcompetitions.withgoogle.com/codejam/about/",
        description: (
            <p>
                Google's longest running global coding competition where contestants advance through four online rounds
                to qualify for the World Finals. Problems are based on algorithms and data structures.
            </p>
        ),
        tags: ["competitive programming", "algorithms", "data structures"],
    },
    {
        name: "Google Kick Start",
        link: "https://codingcompetitions.withgoogle.com/kickstart/about",
        description: (
            <p>
                A three hour coding competition held regularly throughout the year, similar to USACO.
                Participants have to solve algorithmic problems as fast as possible.
            </p>
        ),
        tags: ["competitive programming", "algorithms", "data structures"],
    },
    {
        name: "Google Hash Code",
        link: "https://codingcompetitions.withgoogle.com/hashcode/about",
        description: (
            <p>
                A team-based coding competition where teams of two to four coders compete in the Qualification Round
                to advance to the Final Round at a Google office. During each round, competitors have four hours to solve
                an optimization problem.
            </p>
        ),
        tags: ["competitive programming", "algorithms", "data structures"],
    },
    {
        name: "redpwnCTF",
        link: "https://ctf.redpwn.net/",
        description: (
            <p>
                A two-day cybersecurity competition hosted by redpwn high school CTF team. Problems are jeopardy-style,
                falling into categories such as pwn, reversing, and cryptography.
            </p>
        ),
        tags: ["CTF", "cybersecurity", "hacking", "systems"],
    },
];

export default competitionsList;
