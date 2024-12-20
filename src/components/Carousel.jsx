import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];
  const totalCards = cards.length;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalCards - 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
  });

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div className="overflow-hidden" {...handlers}>
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2"
            >
              <div className="h-64 bg-white shadow-lg rounded-lg flex items-center justify-center text-2xl font-bold">
                {card}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevCard} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      
      <button 
        onClick={nextCard} 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        disabled={currentIndex === totalCards - 3}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full ${
              index >= currentIndex && index < currentIndex + 3 ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
