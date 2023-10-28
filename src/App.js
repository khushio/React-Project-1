import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
  
    <div className="app">
      <h1>Responsive Paragragh Word Counter</h1>
      <div className="input-container">
        <textarea rows="5"
          placeholder="Type something..."
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className="word-count">
        Word Count: {wordCount}
      </div>
    </div>
   
  );
}

export default App;
