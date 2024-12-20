import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const SwipeableCardList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      // title: "Birthday Memories",
      video: "../../public/videos/1.mp4",  // Change to video file path
    },
    {
      id: 2,
      // title: "Special Celebrations",
      video: "../../public/videos/2.mp4",  // Placeholder video URL
    },
    {
      id: 3,
      // title: "Party Moments",
      video: "../../public/videos/3.mp4",  // Placeholder video URL
    },
    {
      id: 4,
      // title: "Cake Cutting",
      video: "../../public/videos/4.mp4",  // Placeholder video URL
    },
    {
      id: 5,
      // title: "Birthday Games",
      video: "../../public/videos/5.mp4",  // Placeholder video URL
    },
    {
      id: 6,
      // title: "Happy Wishes",
      video: "../../public/videos/6.mp4",  // Placeholder video URL
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-block mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="text-pink-500" size={24} fill="pink" />
            <h4 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
              Ur Clicks
            </h4>
            <Star className="text-purple-500" size={24} fill="purple" />
          </div>
          <p className="text-lg text-gray-600">Capturing the joy of celebration</p>
        </div>

        {/* Carousel Container */}
        <div className="carousel__container relative overflow-hidden rounded-xl shadow-2xl">
          <div className="carousel__track flex transition-transform duration-500 ease-in-out">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`carousel__slide flex-shrink-0 w-full relative ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transition: "opacity 0.5s ease",
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <video
                  src={project.video}
                  alt={project.title}
                  className="w-full h-96 object-contain"
                  autoPlay
                  loop
                  muted
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-white bg-opacity-90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg">
                    <span className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full cursor-pointer hover:bg-white transition-colors duration-300 group"
          >
            <ChevronLeft className="text-pink-600 group-hover:scale-110 transition-transform duration-300" size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full cursor-pointer hover:bg-white transition-colors duration-300 group"
          >
            <ChevronRight className="text-purple-600 group-hover:scale-110 transition-transform duration-300" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SwipeableCardList;
