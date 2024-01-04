// src/components/TitleScreen.js
import React, { useEffect, useState } from 'react';
import './TitleScreen.css';

const TitleScreen = ({ onStartGame }) => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  const handleOrientationChange = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    <div className="title-screen">
      <div className="rotation-message" style={{ display: isPortrait ? 'block' : 'none' }}>
        Please rotate your device to play!
      </div>
      <img
        src="title.gif"
        alt="Title Screen"
        onClick={onStartGame}
        style={{ display: isPortrait ? 'none' : 'block' }}
      />
    </div>
  );
};

export default TitleScreen;
