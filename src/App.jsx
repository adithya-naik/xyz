import React, { useState, useEffect, useRef } from 'react';
import Welcome from './components/Welcome';
import CardContainer from './components/CardContainer';
import SwipeableCardList from './components/SwipeableCardList';
import Memories from './components/Memories';
import Carousel from './components/Carousel';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const componentsRef = useRef([]); // Just use an empty array without type annotations

  const components = [
    { component: <CardContainer />, name: "Card Container" },
    { component: <Memories />, name: "Memories" },
    { component: <SwipeableCardList />, name: "Swipeable Cards" },
    { component: <Carousel />, name: "Circular Swipe Carousel" }
  ];

  const handleBirthdayWishComplete = () => {
    setShowWelcome(false);
    setShowTransition(true);
  };

  useEffect(() => {
    if (showTransition) {
      const timer = setTimeout(() => {
        setShowTransition(false);
        setShowComponents(true);
      }, 2000); // Transition effect lasts for 2 seconds
      return () => clearTimeout(timer);
    }
  }, [showTransition]);

  const handleNext = () => {
    // Log refs to verify they are being set
    console.log('Refs:', componentsRef.current);

    // Find the current component in the viewport
    const currentIndex = componentsRef.current.findIndex(
      (ref) => ref && ref.getBoundingClientRect().top >= 0
    );

    console.log('Current index:', currentIndex);

    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % components.length;
      console.log('Next index:', nextIndex);

      // Smooth scroll to the next component
      componentsRef.current[nextIndex]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      {showWelcome ? (
        <Welcome onBirthdayWishComplete={handleBirthdayWishComplete} />
      ) : showTransition ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-4xl font-bold text-white animate-bounce">
            Let's celebrate!
          </div>
        </div>
      ) : showComponents && (
        <div className="container mx-auto px-4 py-8">
          {components.map((comp, index) => (
            <div
              key={index}
              ref={(el) => {
                // Ensure that the refs are set dynamically
                componentsRef.current[index] = el;
              }}
              className="mb-16"
            >
              <h1 className="text-3xl font-bold text-center mb-8 text-white">
                {comp.name}
              </h1>
              {comp.component}
            </div>
          ))}
          <div className="fixed bottom-8 right-8">
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
