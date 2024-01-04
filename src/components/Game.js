// src/components/Game.js
import React, { useState, useEffect, useRef } from 'react';
import './Game.css';

const Game = ({ musicPlaying }) => {
  const [backgroundIndex, setBackgroundIndex] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState(`/fact${backgroundIndex}.gif`);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play().catch(error => {
      console.error(`Error playing audio ${audioFile}:`, error);
    });
    return audio;
  };

  const buttonRef = useRef();

  const handleMouseoverClicked = () => {
    playAudio('/button.mp3');
    playAudio('/talking.mp3');
    setBackgroundIndex(prevIndex => (prevIndex % 10) + 1);
  };

  const handleMouseEnter = () => {
    playAudio('/mouseover.mp3');
  };

  useEffect(() => {
    let audio;

    if (musicPlaying) {
      audio = playAudio('/music.mp3');
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [musicPlaying]);

  useEffect(() => {
    setBackgroundImage(`/fact${backgroundIndex}.gif`);

    if (backgroundIndex === 3) {
      setTimeout(() => {
        playAudio('/dog.mp3');
      }, 1000);
    }
  }, [backgroundIndex]);

  return (
    <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="button-container">
        <img
          ref={buttonRef}
          src={isButtonHovered ? '/mouseover.png' : '/button.gif'}
          alt="Button"
          className="game-button"
          onMouseEnter={() => {
            setIsButtonHovered(true);
            handleMouseEnter();
          }}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={handleMouseoverClicked}
        />
      </div>
      {/* Add your game content here */}
    </div>
  );
};

export default Game;
