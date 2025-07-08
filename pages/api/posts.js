export default function handler(req, res) {
  const posts = [
    {
      id: 1,
      title: 'Recursion',
      content:
        'Recursion is a fundamental concept in data structures. This post explains how it works, where to use it, and common pitfalls in recursive algorithms.',
    },
    {
      id: 2,
      title: 'Normalization in DBMS',
      content:
        'Database normalization helps reduce redundancy and improve data integrity. This blog explains 1NF to 3NF with real-world table examples.',
    },
    {
      id: 3,
      title: 'Operating System',
      content:
        'This post covers FCFS, SJF, Round Robin, and Priority scheduling with Gantt chart examples and advantages of each algorithm.',
    },
    {
      id: 4,
      title: 'Java OOP Concepts',
      content:
        'From inheritance to polymorphism, this post walks you through Java’s object-oriented principles with clear examples and code.',
    }
  ];

  res.status(200).json(posts);
}
