import React from 'react';
import tommy from './img/tommy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tommy} className="App-logo" alt="logo" />
        <p>
          I drink <b>Soda</b> for lunch
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kill Me Now
        </a>
      </header>
    </div>
  );
}

export default App;
