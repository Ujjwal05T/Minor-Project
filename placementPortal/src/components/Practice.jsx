import React from 'react';

function Practice() {
  const materials = [
    {
      title: 'DSA Sheet by Love Babbar',
      description: 'A comprehensive DSA sheet to prepare for coding interviews.',
      link: 'https://drive.google.com/file/d/1KOj8g4z5k5z5k5z5k5z5k5z5k5z5k5z/view',
      type: 'DSA Sheet'
    },
    {
      title: 'Striver\'s SDE Sheet',
      description: 'A curated list of problems to ace coding interviews.',
      link: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/',
      type: 'DSA Sheet'
    },
    {
      title: 'YouTube Playlist: Data Structures and Algorithms',
      description: 'A YouTube playlist covering various data structures and algorithms.',
      link: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod',
      type: 'YouTube Playlist'
    },
    {
      title: 'GeeksforGeeks Placement Preparation',
      description: 'A collection of articles and problems for placement preparation.',
      link: 'https://www.geeksforgeeks.org/placement-preparation/',
      type: 'Article'
    },
    {
      title: 'LeetCode Top Interview Questions',
      description: 'A list of top interview questions on LeetCode.',
      link: 'https://leetcode.com/problemset/top-interview-questions/',
      type: 'LeetCode'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Placement Preparation Materials</h1>
      <div className="space-y-4">
        {materials.map((material, index) => (
          <div key={index} className="bg-inherit shadow-lg rounded-lg p-4 flex justify-between">
            <div>
            <h2 className="text-2xl font-semibold mb-2">{material.title}</h2>
            <p className=" mb-2"><strong>Type:</strong> {material.type}</p>
            <p className="mb-4">{material.description}</p>
            </div>
            <div>
            <a href={material.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 btn">
              Access Material
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;