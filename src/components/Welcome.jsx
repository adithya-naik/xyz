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
            Surprise{' '}
            <span className="text-blue-600 font-bold text-6xl">
              <TypewriterEffect
                words={['Aditi!', 'Anu!', 'AnuDeeb!','Wake up!','😊']}
                onComplete={handleTypingComplete}
              />
            </span>
          </h1>
        </div>
      )}

      {/* {showCongrats && (
        
      )} */}
    </div>
  );
};

export default Welcome;
