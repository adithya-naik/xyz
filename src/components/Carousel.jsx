import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    {
      title: "Birthday Cake",
      description: "Sweet Celebrations",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Party Games",
      description: "Fun & Laughter",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Gift Time",
      description: "Special Surprises",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Birthday Dance",
      description: "Moving Moments",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Make a Wish",
      description: "Dream Big",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Happy Friends",
      description: "Share Joy",
      gradient: "from-purple-500 to-blue-500"
    }
  ];
  
  const totalCards = cards.length;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalCards - 3));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="text-pink-500" size={24} fill="pink" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
            Birthday Moments
          </h2>
          <Star className="text-purple-500" size={24} fill="purple" />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-3"
            >
              <div className="relative h-72 bg-white shadow-lg rounded-xl overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 transform rotate-12">
                  <Heart className="text-pink-500" size={32} fill="pink" />
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevCard} 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6 text-pink-600" />
      </button>
      
      <button 
        onClick={nextCard} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === totalCards - 3}
      >
        <ChevronRight className="w-6 h-6 text-purple-600" />
      </button>
      
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {cards.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index >= currentIndex && index < currentIndex + 3 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;