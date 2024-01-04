// src/App.js
import React, { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import Game from './components/Game';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
    setMusicPlaying(true);
  };

  return (
    <div className="App">
      {gameStarted ? (
        <Game musicPlaying={musicPlaying} />
      ) : (
        <TitleScreen onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
