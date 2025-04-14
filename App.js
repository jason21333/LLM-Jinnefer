import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:8000/api/query', {
        text: query
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error processing your request');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LLM Chat Interface</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query..."
            rows="4"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Submit'}
          </button>
        </form>
        {response && (
          <div className="response">
            <h2>Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App; 