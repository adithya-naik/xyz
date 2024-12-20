import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const Memories = () => {
  const memoriesData = [
    {
      imgSrc: "/images/1.jpg",
      // text: "First Birthday Celebration",
      date: "March 2023"
    },
    {
      imgSrc: "/images/2.jpg",
      // text: "Family Birthday Dinner",
      date: "April 2023"
    },
    {
      imgSrc: "/images/3.jpg",
      // text: "Birthday Party Games",
      date: "June 2023"
    },
    {
      imgSrc: "/images/4.jpg",
      // text: "Cake Cutting Moment",
      date: "August 2023"
    },
    {
      imgSrc: "/images/5.jpg",
      // text: "Birthday Surprises",
      date: "October 2023"
    },
    {
      imgSrc: "/images/6.jpg",
      // text: "Birthday Adventures",
      date: "December 2023"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Star className="text-pink-500" size={32} />
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
            Birthday Memories
          </h1>
          <Star className="text-purple-500" size={32} />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-pink-50 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-purple-50 to-transparent z-10" />
          
          <div className="overflow-x-auto cursor-pointer snap-x snap-mandatory py-8 no-scrollbar">
            <div className="flex gap-8 w-max px-8 transition-transform duration-300 ease-in-out">
              {memoriesData.map((memory, index) => (
                <div
                  key={index}
                  className="relative bg-white bg-opacity-90 backdrop-blur-lg rounded-xl w-96 snap-center transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl shadow-lg group"
                >
                  <div className="absolute -top-3 -right-3">
                    <Sparkles className="text-yellow-400" size={24} />
                  </div>
                  <img
                    src={memory.imgSrc}
                    alt="Memory"
                    className="w-full h-96 object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {memory.text}
                    </h3>
                    <p className="text-gray-600">
                      {memory.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;