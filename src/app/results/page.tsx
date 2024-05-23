// src/app/results/page.tsx
"use client";

import { useState, useEffect } from 'react';

interface Result {
  name: string;
  email: string;
  answers: string[];
}

const Results = () => {
  const [results, setResults] = useState<Result | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem('assessmentResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Results</h1>
      <div className="result-group">
        <h2>Name:</h2>
        <p>{results.name}</p>
      </div>
      <div className="result-group">
        <h2>Email:</h2>
        <p>{results.email}</p>
      </div>
      <div className="result-group">
        <h2>Answers:</h2>
        <ul>
          {results.answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
