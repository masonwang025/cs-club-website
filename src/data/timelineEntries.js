import React from "react";

const timelineEntries = [
  {
    title: "The Power of Computer Science",
    unit: "General",
    date: "8/24/20",
    startOfUnit: true,
    content: (
      <p>
        <b>Computer science is a massive field,</b> ranging from data science
        and machine learning to cybersecurity. Whether you're interested in
        making AIs to beat your favorite game or devising cryptographic schemes
        to secure network connections, computer science has something for you.
        <br />
        <br />
        Activity: AI, Processing, Capture The Flag (CTF) and web dev demos.
      </p>
    ),
    lecture: "https://www.youtube.com/watch?v=UzNXavkBRg8",
  },
  {
    title: "Intro to Algorithms",
    unit: "Algorithms",
    date: "8/31/20",
    startOfUnit: true,
    content: (
      <p>
        <b>Motivation behind the study of algorithms and big O analysis.</b>
        <br />
        <br />
        Activity: Fibonacci recursion analysis and binary digit sum example.
      </p>
    ),
    lecture: "https://www.youtube.com/watch?v=yWXdQkgKHXg",
  },
  {
    title: "Arrays and Sorting",
    unit: "Algorithms",
    date: "9/14/20",
    content: (
      <p>
        <b>Clever manipulations of arrays and basic data structures.</b>
        <br />
        <br />
        Demo: Visualization of different sorting methods.
      </p>
    ),
    lecture: "https://youtu.be/XHgFX0xCL3s",
  },
  {
    title: "Stacks, Queues, BFS and DFS",
    unit: "Algorithms",
    date: "9/21/20",
    content: (
      <p>
        <b>
          Mechanisms underlying stacks and queues and their applications in
          graph traversals.
        </b>
        <br />
        <br />
        Demo: Python live coding of iterative and recursive DFS: generating
        passwords of length k.
      </p>
    ),
    lecture: "https://youtu.be/XHgFX0xCL3s",
  },
  {
    title: "Greedy Algorithms",
    unit: "Algorithms",
    date: "9/28/20",
    content: (
      <p>
        <b>
          Examples of greedy strategies and their application in Kruskal's MST
          algorithm.
        </b>
        <br />
        <br />
        Demo: Python live coding of greedy scheduling algorithm.
      </p>
    ),
    lecture: "https://youtu.be/rJ8tMtgEL1M",
  },
  {
    title: "Dynamic Programming",
    unit: "Algorithms",
    date: "10/19/20",
    content: (
      <p>
        <b>Using memoization to speed up code.</b>
        <br />
        <br />
        Activity: Revisiting knapsack.
      </p>
    ),
    lecture: "https://youtu.be/ta-ZY-C4pow",
  },
  {
    title: "Introduction to Web Development",
    unit: "Web Development",
    date: "10/19/2020",
    startOfUnit: true,
    content: (
      <p>
        Unit Repository:{" "}
        <a href="https://github.com/MasonWang025/cs-club-web-dev-unit">
          https://github.com/MasonWang025/cs-club-web-dev-unit
        </a>
        <br />
        <br />
        <b>Tools and libraries needed to make stylish interactive websites.</b>
        <br />
        <br />
        Activity: HTML, CSS, and JS live demo.
      </p>
    ),
    lecture: "https://youtu.be/hoZE7Ipy05Q",
  },
  {
    title: "HTML, CSS, and JavaScript",
    unit: "Web Development",
    date: "10/26/2020",
    startOfUnit: false,
    content: (
      <p>
        <b>
          Basic syntax and terminology and important tags, selectors, and
          attributes.
        </b>
        <br />
        <br />
        Demo: Basic vanilla JavaScript todo list.
      </p>
    ),
    lecture: "https://youtu.be/hnZQJBOwL0E",
  },
  {
    title: "Bootstrap and React Essentials",
    unit: "Web Development",
    date: "11/2/2020",
    startOfUnit: false,
    content: (
      <p>
        <b>Basic Bootstrap classes and React components, props, and state.</b>
        <br />
        <br />
        Demo: Creating a simple counter app using React.
      </p>
    ),
    lecture: "https://youtu.be/dbYLFDcCM1s",
  },
  {
    title: "Creating a React Todo List (Part 1)",
    unit: "Web Development",
    date: "11/9/2020",
    startOfUnit: false,
    content: (
      <p>
        <b>
          Using Bootstrap and React to implement basic functionalities of a todo
          list.
        </b>
        <br />
        <br />
        Demo: Creating an interactive todo list.
      </p>
    ),
    lecture: "https://youtu.be/Nl8SNI9g630",
  },
  {
    title: "Creating a React Todo List (Part 2)",
    unit: "Web Development",
    date: "11/16/2020",
    startOfUnit: false,
    content: (
      <p>
        <b>
          Implementing the backend for our todo list using Google Cloud
          Firestore and deploying with Netlify.
        </b>
        <br />
        <br />
        Demo: Finishing our todo list app.
        <br />
        <br />
        Deployed app:{" "}
        <a href="https://todo-list-cs-club.netlify.app/">
          {" "}
          https://todo-list-cs-club.netlify.app/
        </a>
      </p>
    ),
    lecture: "https://youtu.be/DqJ04DoBdgk",
  },
  {
    title: "USACO Review",
    unit: "Algorithms",
    date: "11/23/2020",
    startOfUnit: false,
    content: (
      <p>
        <b>We went over a couple of USACO problems.</b>
        <br />
        <br />
        Demo: Explaining binary search, Floyd-Warshall, and dynamic programming.
      </p>
    ),
    lecture: "https://youtu.be/sdCGep5XYMk",
  },
  {
    title: "Introduction to Systems",
    unit: "Systems",
    date: "11/30/20",
    startOfUnit: true,
    content: (
      <p>
        <b> The fundamentals of computers and how they work. </b>
        <br />
        <br />
        Activity: Terminal.
      </p>
    ),
    lecture: "https://youtu.be/1jBaX-41dCA",
  },
  {
    title: "How Computers Run Code",
    unit: "Systems",
    date: "1/11/21",
    content: (
      <p>
        <b>Memory, assembly, and CALL.</b>
        <br />
        <br />
        Demo: GDB of a simple function call.
      </p>
    ),
    lecture: "https://youtu.be/FM8Y53qosLw",
  },
  {
    title: "CS Club Competition",
    unit: "General",
    date: "1/25/21",
    content: (
      <p>
        <b>Competition on miscellaneous computer science subjects.</b>
        <br />
        <br />
        Activity: Live leaderboard, 25-minute team competition.
        <br />
        <br />
        <a href="https://docs.google.com/document/d/1K1u1-9QdC07kMjLDqI_U98QSRbre7jq9R5fRzst-wqY/edit">
          {" "}
          Problems{" "}
        </a>
        <br />
        <a href="https://docs.google.com/document/d/1EchiWKKb0kngJOY9ie3nNcZRKez8NCwQh8oLwv4iX8k/edit">
          {" "}
          Answers{" "}
        </a>
      </p>
    ),
  },
  {
    title: "USACO Silver Review",
    unit: "Algorithms",
    date: "2/1/21",
    content: (
      <p>
        <b>The solutions to the USACO January 2021 Silver contest problems.</b>
        <br />
        <br />
        Demo: Live-code of Problem 1, Dance Mooves.
      </p>
    ),
    lecture: "https://youtu.be/ZEcTFCaBH30",
  },
  {
    title: "Git Essentials and Best Practices",
    unit: "Systems",
    date: "2/8/21",
    content: (
      <p>
        <b>Repositories, commits, branches, pull requests, and more.</b>
        <br />
        <br />
        Demo: Live repository creation and merge conflict resolution.
      </p>
    ),
    lecture: "https://youtu.be/QUm7e3DKu5o",
  },
  {
    title: "How the Internet Works",
    unit: "Systems",
    date: "2/22/21",
    content: (
      <p>
        <b>The OSI model, TCP/IP, packet routing, DNS, and TLS.</b>
        <br />
        <br />
        Demo: DNS lookup and Wireshark packet sniffing.
      </p>
    ),
    lecture: "https://youtu.be/5VuFq2qK01w",
  },
  {
    title: "Distributed Systems",
    unit: "Systems",
    date: "3/1/21",
    content: (
      <p>
        <b>Concurrency and MapReduce with Scala and Spark.</b>
        <br />
        <br />
        Demo: BASH background processes, Go concurrent summation, word count MapReduce.
      </p>
    ),
    lecture: "https://youtu.be/rsT54IyTJ1Q"
  },
  {
    title: "Introduction to Cybersecurity",
    unit: "Cybersecurity",
    date: "3/8/21",
    startOfUnit: true,
    content: (
      <p>
        <b>Principles of security and real-world examples.</b>
        <br />
        <br />
        Activity: picoCTF hacking challenges.
      </p>
    ),
    lecture: "https://youtu.be/d4-MuM7SZYM"
  },
  {
    title: "Binary Exploit",
    unit: "Cybersecurity",
    date: "3/15/21",
    content: (
      <p>
        <b>C memory layout and buffer overflow.</b>
        <br />
        <br />
        Activity: picoCTF Binary Exploitation problems.
      </p>
    ),
    lecture: "https://youtu.be/3Kxx6MU1QJs"
  },
  {
    title: "Web Exploit",
    unit: "Cybersecurity",
    date: "3/22/21",
    content: (
      <p>
        <b>Client-side validation, cookies, and SQL injection.</b>
        <br />
        <br />
        Activity: picoCTF Web Exploitation problems.
      </p>
    ),
    lecture: "https://youtu.be/cE1BamCUv9s"
  },
  {
    title: "Cryptography",
    unit: "Cybersecurity",
    date: "3/29/21",
    content: (
      <p>
        <b>Traditional ciphers and RSA encryption.</b>
        <br />
        <br />
        Activity: picoCTF Cryptography problems.
      </p>
    ),
    lecture: "https://youtu.be/cKYrYdr0b5w"
  },
  {
    title: "Introduction to Machine Learning",
    unit: "Machine learning",
    date: "4/12/21",
    startOfUnit: true,
    content: (
      <p>
        <b>Applications of AI/ML and important resources.</b>
        <br />
        <br />
        Demo: AI-generated faces.
      </p>
    ),
    lecture: "https://youtu.be/TgtH7QuqLcM",
  },
  {
    title: "Deep Learning and Neural Networks",
    unit: "Machine learning",
    date: "4/19/21",
    content: (
      <p>
        <b>The basic math behind machine learning algorithms.</b>
        <br />
        <br />
        Demo: Gradient descent visualization.
      </p>
    ),
    lecture: "https://youtu.be/Pw7XjS4I3g4",
  },
  {
    title: "Neural Networks",
    unit: "Machine learning",
    date: "4/26/21",
    content: (
      <p>
        <b>Types of neural networks and how they work.</b>
        <br />
        <br />
        Demo: Convolutional neural network for classifying dogs and cats.
      </p>
    ),
  },
  {
    title: "Reinforcement Learning",
    unit: "Machine learning",
    date: "5/3/21",
    content: (
      <p>
        <b>Concepts behind AI.</b>
        <br />
        <br />
        Demo: CS188 Pacman example.
      </p>
    ),
  },
  {
    title: "What's Next?",
    unit: "General",
    date: "m/dd/yy",
    content: (
      <p>
        <b>Member suggested meetings and extra coverage.</b>
        <br />
        <br />
        Feel free to let us know if you have any meeting ideas at{" "}
        <a
          rel="noopener noreferrer"
          href="mailto:clubshscs@gmail.com"
          target="_blank"
          id="email"
        >
          clubshscs@gmail.com
        </a>
        !
      </p>
    ),
  },
];

export default timelineEntries;
