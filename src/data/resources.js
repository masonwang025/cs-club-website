import React from "react";

const resources = [
  {
    topic: "Algorithms and Data Structures",
    sources: [
      {
        title: "USACO",
        link: "http://www.usaco.org/index.php",
        description: (
            <p>
              Prestigious coding competition for students interested in algorithms and data structures.
            </p>
        ),
      },
        {
            title: "USACO Guide",
            link: "https://usaco-guide.vercel.app/",
            description: (
                <p>
                    Resources for learning algos and datastructures curated by IOI participants and USACO campers.
                </p>
            ),
        },
      {
        title: "Hackerrank",
        link: "https://www.hackerrank.com/dashboard",
        description: (
            <p>
              Website featuring hundreds of interview-style questions, good for coding practice.
            </p>
        ),
      },
      {
        title: "Codeforces",
        link: "http://codeforces.com/",
        description: (
            <p>
              Website that hosts weekly coding competitions with over 20 thousand participants.
            </p>
        ),
      },
      {
        title: "Princeton Algorithms",
        link: "https://www.coursera.org/learn/algorithms-part1",
        description: (
            <p>
              Free Coursera course with lectures and projects covering college-level algos and datastructures.
            </p>
        ),
      },
      {
        title: "Stanford Algorithms",
        link: "https://www.coursera.org/specializations/algorithms",
        description: (
            <p>
              Free four-part Coursera specialization that offers a certificate for completing the lectures, projects, and quizzes.
            </p>
        ),
      },
      {
        title: "UC Berkeley Data Structures",
        link: "https://inst.eecs.berkeley.edu/~cs61b/archives.html",
        description: (
            <p>
              College-level course with free online lectures and projects, can be taken by high schoolers for a grade during summer.
            </p>
        ),
      },
        {
            title: "UC Berkeley Efficient Algorithms and Intractable Problems",
            link: "https://cs170.org/",
            description: (
                <p>
                    Upper-division college course with free online lectures and projects.
                </p>
            ),
        },
      {
        title: "Geeks for Geeks",
        link: "https://www.geeksforgeeks.org/",
        description: (
            <p>
              Website with coding articles, good for learning new algorithms.
            </p>
        ),
      },
        {
            title: "William Lin",
            link: "https://www.youtube.com/channel/UCKuDLsO0Wwef53qdHPjbU2Q/videos",
            description: (
                <p>
                    IOI silver-medalist that makes live streams of his programming competitions.
                </p>
            ),
        },
        {
            title: "Errichto",
            link: "https://www.youtube.com/c/Errichto/videos",
            description: (
                <p>
                    One of the Codeforces problem writers with a competitive programming YouTube channel.
                </p>
            ),
        },
    ],
  },
    {
        topic: "Systems",
        sources: [
            {
                title: "Virtual Box",
                link: "https://www.virtualbox.org/",
                description: (
                    <p>
                        Hypervisor for creating and managing VMs on your computer.
                    </p>
                ),
            },
            {
                title: "Vagrant",
                link: "https://learn.hashicorp.com/collections/vagrant/getting-started",
                description: (
                    <p>
                        Command line utility for managing virtual machines.
                    </p>
                ),
            },
            {
                title: "Git Tutorial",
                link: "https://git-scm.com/docs/gittutorial",
                description: (
                    <p>
                        Tutorial on how to use the version control system Git.
                    </p>
                ),
            },
            {
                title: "Git Bash Tutorial",
                link: "https://examples.javacodegeeks.com/software-development/git/use-git-bash/",
                description: (
                    <p>
                        Tutorial on how to use BASH emulator Git Bash on Windows, Mac, and Linux.
                    </p>
                ),
            },
            {
                title: "Linux Terminal Tutorial",
                link: "https://ubuntu.com/tutorials/command-line-for-beginners#1-overview",
                description: (
                    <p>
                        Tutorial on how to use the Linux terminal, a powerful tool for managing files among other things.
                    </p>
                ),
            },
            {
                title: "Mac Terminal Tutorial",
                link: "https://www.makeuseof.com/tag/beginners-guide-mac-terminal/",
                description: (
                    <p>
                        Mac-specific tutorial on how to use terminal.
                    </p>
                ),
            },
            {
                title: "Windows Terminal Tutorial",
                link: "https://jussiroine.com/2019/08/getting-started-with-windows-terminal/",
                description: (
                    <p>
                        Windows-specific tutorial on how to use terminal.
                    </p>
                ),
            },
            {
                title: "UC Berkeley Programming Languages and Compilers",
                link: "https://inst.eecs.berkeley.edu/~cs164",
                description: (
                    <p>
                        College course on how compilers convert human-readable code to machine code.
                    </p>
                ),
            },
            {
                title: "UC Berkeley Operating Systems and System Programming",
                link: "https://cs162.eecs.berkeley.edu/",
                description: (
                    <p>
                        College course on how your operating system actually works.
                    </p>
                ),
            },
            {
                title: "UC Berkeley Introduction to the Internet",
                link: "https://www2.eecs.berkeley.edu/Courses/CS168/",
                description: (
                    <p>
                        College course on networking, explains protocols like HTTP, TCP, UDP, and more.
                    </p>
                ),
            },
            {
                title: "MIT Distributed Systems",
                link: "https://pdos.csail.mit.edu/6.824/",
                description: (
                    <p>
                        College course on designing systems involving hundreds or thousands of computers.
                    </p>
                ),
            },
        ],
    },
    {
        topic: "Cybersecurity",
        sources: [
            {
                title: "UC Berkeley Great Ideas in Computer Architecture",
                link: "https://cs61c.org/",
                description: (
                    <p>
                        College course covering everything from C memory structure to how CPUs work.
                    </p>
                ),
            },
            {
                title: "UC Berkeley Computer Security",
                link: "https://cs161.org/",
                description: (
                    <p>
                        College course exploring common exploits used by hackers and practical defenses against them.
                    </p>
                ),
            },
            {
                title: "picoCTF",
                link: "https://picoctf.com/",
                description: (
                    <p>
                        Cybersecurity competition with problems involving forensics, cryptography, web exploit, and more.
                    </p>
                ),
            },
            {
                title: "CTFTime",
                link: "https://ctftime.org/",
                description: (
                    <p>
                        Website with the dates of upcoming Capture the Flags (CTFs) and results.
                    </p>
                ),
            },
            {
                title: "John Hammond",
                link: "https://www.youtube.com/user/RootOfTheNull",
                description: (
                    <p>
                        Youtuber that makes videos on hacking and cybersecurity.
                    </p>
                ),
            },
        ],
    },
  {
    topic: "Machine Learning",
    sources: [
        {
            title: "UC Berkeley Introduction to Artificial Intelligence",
            link: "https://inst.eecs.berkeley.edu/~cs188",
            description: (
                <p>
                    A college course on the basic AI algorithms such as minimax and Q-learning.
                </p>
            ),
        },
      {
        title: "Kaggle Courses",
        link: "https://www.kaggle.com/learn/overview",
        description: (
          <p>
            Free interactive courses with certificates covering data analysis and machine learning techniques.
          </p>
        ),
      },
        {
            title: "Stanford Deep Learning",
            link: "https://www.coursera.org/specializations/deep-learning",
            description: (
                <p>
                    Free 5-part Coursera specialization covering several aspects of deep learning in depth.
                </p>
            ),
        },
        {
            title: "TensorFlow 2 Quickstart",
            link: "https://www.tensorflow.org/tutorials/quickstart/beginner",
            description: (
                <p>
                    Hands-on tutorial where you can code your own handwritten digit classifier.
                </p>
            ),
        },
        {
            title: "Code Bullet",
            link: "https://www.youtube.com/channel/UC0e3QhIYukixgh5VVpKHH9Q",
            description: (
                <p>
                    Youtuber that makes fun videos on AI and ML.
                </p>
            ),
        },
    ],
  },
    {
        topic: "Web Development",
        sources: [
            {
                title: "React Getting Started",
                link: "https://reactjs.org/docs/getting-started.html",
                description: (
                    <p>
                        A tutorial for using React.js to build websites.
                    </p>
                ),
            },
            {
                title: "Angular Docs",
                link: "https://angular.io/docs",
                description: (
                    <p>
                        Documentation for Google's javascript framework Angular.
                    </p>
                ),
            },
            {
                title: "Codecademy HTML & CSS",
                link: "https://www.codecademy.com/catalog/language/html-css",
                description: (
                    <p>
                        Interactive HTML and CSS tutorials for beginners.
                    </p>
                ),
            },
            {
                title: "HTML5 UP",
                link: "https://html5up.net/",
                description: (
                    <p>
                        Site with several customizable and responsive HTML templates.
                    </p>
                ),
            },
            {
                title: "BootstrapMade",
                link: "https://bootstrapmade.com/",
                description: (
                    <p>
                        Free Bootstrap templates for making quick, clean websites.
                    </p>
                ),
            },
            {
                title: "27 of the Best Website Designs to Inspire You",
                link: "https://blog.hubspot.com/marketing/best-website-designs-list",
                description: (
                    <p>
                        A compilation of amazing websites to give you ideas.
                    </p>
                ),
            },
        ],
    },
];

export default resources;
