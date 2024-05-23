// pages/results.tsx
import { useState, useEffect } from 'react';

interface Result {
  name: string;
  email: string;
  answers: string[];
}

const Results = () => {
  const [results, setResults] = useState<Result | null>(null);

  // Mock fetch function to simulate fetching results
  useEffect(() => {
    const fetchResults = async () => {
      // Simulate fetching data from a server or local storage
      const storedResults = localStorage.getItem('assessmentResults');
      if (storedResults) {
        setResults(JSON.parse(storedResults));
      }
    };

    fetchResults();
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
