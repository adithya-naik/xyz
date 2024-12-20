import React, { useState } from 'react';
import TypewriterEffect from './TypewriterEffect';  // Import the Typewriter effect from a separate file
import Confetti from 'react-confetti';
  // Import Confetti if needed

const Welcome = ({ onBirthdayWishComplete }) => {
  const [isTypingVisible, setIsTypingVisible] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingVisible(false);
    setShowCongrats(true);
    onBirthdayWishComplete();  // Notify the parent component when typing is complete
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-purple-100 to-pink-100 overflow-hidden">
      {showCongrats && <Confetti />}

      {isTypingVisible && (
        <div>
          <h1 className="text-6xl">
            Welcome to{' '}
            <span className="text-blue-600 font-bold text-6xl">
              <TypewriterEffect
                words={['YouDay!', 'Biic!', 'Celebrons!']}
                onComplete={handleTypingComplete}
              />
            </span>
          </h1>
        </div>
      )}

      {showCongrats && (
        <div className="space-y-4 mt-8">
          <div><img className="text-center m-auto" src="https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#cecece" alt="" /></div>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-bounce">
            🎂 Happy Birthday! 🎂
          </h1>
          <div className="space-y-4 animate-fade-in">
            <p className="text-2xl text-gray-700 animate-slide-up">
              May your day be filled with joy, laughter, and unforgettable moments!
            </p>
            <div className="text-3xl animate-bounce">
              🎈 🎉 🎁 🎊
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
