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
  },
    {
        title: "Cybersecurity Team Planning",
        unit: "Cybersecurity",
        date: "8/31/20",
        content: (
            <p>
                <b>Exploring Capture The Flags (CTFs) and setting up a study plan for the year.</b>
                <br />
                <br />
                Activity: picoCTF General Skills problems.
            </p>
        ),
    },
  {
    title: "Intro to Algorithms",
    unit: "Algorithms",
    date: "9/14/20",
    startOfUnit: true,
    content: (
      <p>
        <b>Motivation behind the study of algorithms and big O analysis.</b>
        <br />
        <br />
        Activity: Fibonacci recursion analysis and knapsack example.
      </p>
    ),
  },
  {
    title: "Arrays and Sorting",
    unit: "Algorithms",
    date: "9/21/20",
    content: (
      <p>
        <b>Clever manipulations of arrays and basic data structures.</b>
        <br />
        <br />
        Demo: Visualization of different sorting methods.
      </p>
    ),
  },
  {
    title: "Intro to Graph Theory",
    unit: "Algorithms",
    date: "9/28/20",
    content: (
      <p>
        <b>
          Real-world applications of graph theory and important terminology.
        </b>
        <br />
        <br />
        Activity: Seven bridges of Konigsburg.
      </p>
    ),
  },
  {
    title: "Stacks, Queues, BFS and DFS",
    unit: "Algorithms",
    date: "10/12/20",
    content: (
      <p>
        <b>
          Mechanisms underlying stacks and queues and their applications in
          graph traversals.
        </b>
        <br />
        <br />
        Demo: Generating all permutations, Processing floodfill demo.
      </p>
    ),
  },
  {
    title: "Greedy Algorithms",
    unit: "Algorithms",
    date: "10/19/20",
    content: (
      <p>
        <b>
          Examples of greedy strategies and their application in Kruskal's MST
          algorithm.
        </b>
        <br />
        <br />
        Demo: Kruskal's visualization.
      </p>
    ),
  },
  {
    title: "Dynamic Programming",
    unit: "Algorithms",
    date: "10/26/20",
    content: (
      <p>
        <b>Using memoization to speed up code.</b>
        <br />
        <br />
        Activity: Revisiting knapsack.
      </p>
    ),
  },
  {
    title: "Introduction to Web Development",
    unit: "Web Development",
    date: "11/2/2020",
    startOfUnit: true,
    content: (
      <p>
        <b>Tools and libraries needed to make stylish interactive websites.</b>
        <br />
        <br />
        Activity: React.js animations.
      </p>
    ),
  },
  {
    title: "Coding an Animated Todo List",
    unit: "Web Development",
    date: "11/9/2020",
    startOfUnit: true,
    content: (
      <p>
        <b>Putting together a website with a frontend and backend.</b>
        <br />
        <br />
        Demo: Using React.js with mongoDB.
      </p>
    ),
  },
    {
        title: "Coding an Animated Todo List (Pt. 2)",
        unit: "Web Development",
        date: "11/16/2020",
        startOfUnit: true,
        content: (
            <p>
                <b>Putting together a website with a frontend and backend.</b>
                <br />
                <br />
                Demo: Using React.js with mongoDB.
            </p>
        ),
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
        Activity: Terminal, BASH scripting and CRONTAB.
      </p>
    ),
  },
  {
    title: "How Computers Run Code",
    unit: "Systems",
    date: "12/7/20",
    content: (
      <p>
        <b>Memory, assembly, and CALL.</b>
        <br />
        <br />
        Demo: GDB of a simple function call.
      </p>
    ),
  },
  {
    title: "Computer Architecture",
    unit: "Systems",
    date: "12/14/20",
    content: (
      <p>
        <b>Structure of a CPU and virtual memory.</b>
        <br />
        <br />
        Demo: Logisim CPU.
      </p>
    ),
  },
  {
    title: "Operating Systems",
    unit: "Systems",
    date: "1/4/21",
    content: (
      <p>
        <b>Processes, threads, and the file system.</b>
        <br />
        <br />
        Demo: Multiprocess speedup.
      </p>
    ),
  },
  {
    title: "The Internet",
    unit: "Systems",
    date: "1/11/21",
    content: (
      <p>
        <b>IP addresses, DNS, and web protocols. </b>
        <br />
        <br />
        Demo: Traceroute, Dig, HTTP.
      </p>
    ),
  },
  {
    title: "Distributed Systems",
    unit: "Systems",
    date: "1/25/21",
    content: (
      <p>
        <b>Virtualization and real-time synchronization.</b>
        <br />
        <br />
        Demo: Dockerizing a web app.
      </p>
    ),
  },
  {
    title: "Introduction to Cybersecurity",
    unit: "Cybersecurity",
    date: "2/1/21",
    startOfUnit: true,
    content: (
      <p>
        <b>Principles of security and real-world examples.</b>
        <br />
        <br />
        Activity: picoCTF General Skills problems.
      </p>
    ),
  },
  {
    title: "Binary Exploit",
    unit: "Cybersecurity",
    date: "2/8/21",
    content: (
      <p>
        <b>Buffer overflows and shellcode.</b>
        <br />
        <br />
        Activity: picoCTF Binary Exploitation problems.
      </p>
    ),
  },
  {
    title: "Web Exploit",
    unit: "Cybersecurity",
    date: "2/22/21",
    content: (
      <p>
        <b>SQL injection, XSS, and other common exploits.</b>
        <br />
        <br />
        Activity: picoCTF Web Exploitation problems.
      </p>
    ),
  },
  {
    title: "Cryptography",
    unit: "Cybersecurity",
    date: "3/1/21",
    content: (
      <p>
        <b>Ciphers and encryption algorithms.</b>
        <br />
        <br />
        Activity: picoCTF Cryptography problems.
      </p>
    ),
  },
  {
    title: "Introduction to Machine Learning",
    unit: "Machine learning",
    date: "3/22/21",
    startOfUnit: true,
    content: (
      <p>
        <b>Applications of AI/ML and important resources.</b>
        <br />
        <br />
        Demo: CodeBullet projects.
      </p>
    ),
  },
  {
    title: "Linear Regression and Gradient Descent",
    unit: "Machine learning",
    date: "3/29/21",
    content: (
      <p>
        <b>The basic math behind machine learning algorithms.</b>
        <br />
        <br />
        Demo: Gradient descent visualization with different hyperparameters.
      </p>
    ),
  },
  {
    title: "Neural Networks",
    unit: "Machine learning",
    date: "4/12/21",
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
    date: "4/19/21",
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
