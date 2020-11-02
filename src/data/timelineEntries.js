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
        Demo: Python live coding of iterative and recursive DFS: generating passwords of length k.
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
    date: "11/2/2020",
    startOfUnit: true,
    content: (
      <p>
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
    date: "11/9/2020",
    startOfUnit: true,
    content: (
      <p>
        <b>Basic syntax and terminology and important tags, selectors, and attributes.</b>
        <br />
        <br />
        Demo: Basic vanilla JavaScript todo list.
      </p>
    ),
      lecture: "https://youtu.be/hnZQJBOwL0E"
  },
    {
        title: "Bootstrap and React Essentials",
        unit: "Web Development",
        date: "11/16/2020",
        startOfUnit: true,
        content: (
            <p>
                <b>Basic Bootstrap classes and React components, props, and state.</b>
                <br />
                <br />
                Demo: Creating a simple counter app using React.
            </p>
        ),
        lecture: "https://youtu.be/dbYLFDcCM1s"
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
