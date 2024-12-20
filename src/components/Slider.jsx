import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Cake } from 'lucide-react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      src: "/api/placeholder/400/300",
      title: "Birthday Cake",
      text: "Make a wish and blow out the candles! Every birthday needs a special cake.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      src: "/api/placeholder/400/300",
      title: "Party Games",
      text: "Fun and excitement with friends playing traditional birthday games!",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      src: "/api/placeholder/400/300",
      title: "Gift Opening",
      text: "The joy of unwrapping presents and sharing happiness with loved ones.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      src: "/api/placeholder/400/300",
      title: "Happy Memories",
      text: "Creating lasting memories with family and friends on this special day.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16 bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Title Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="text-pink-500" size={24} fill="pink" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
            Birthday Memories
          </h2>
          <Star className="text-purple-500" size={24} fill="purple" />
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative h-[400px] perspective-1000">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-500 preserve-3d
              ${index === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}
              ${index === activeIndex ? 'rotate-y-0' : 'rotate-y-180'}`}
          >
            {/* Front of card */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="relative h-full bg-white rounded-xl shadow-xl overflow-hidden group">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-30`} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <Cake className="w-6 h-6 inline-block mr-2" />
                  <span>Click to see more</span>
                </div>
              </div>
            </div>

            {/* Back of card */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <div className="h-full bg-white rounded-xl shadow-xl p-8 flex flex-col justify-center items-center">
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br ${card.gradient}`}>
                  <Cake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 text-center text-lg">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6 text-pink-600" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6 text-purple-600" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 
              ${index === activeIndex ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
