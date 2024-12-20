import React from 'react';

const Memories = () => {
  const memoriesData = [
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Memory 1 - Exploring React",
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Memory 2 - Building Projects",
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Memory 3 - Creative Ideas",
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Memory 4 - React Best Practices",
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Memory 5 - Advanced React Concepts",
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Memory 6 - Learning Tailwind CSS",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Memories</h1>
      <div className="overflow-x-auto cursor-pointer snap-x snap-mandatory pb-8">
        <div className="flex gap-8 w-max transform transition-transform duration-300 ease-in-out hover:translate-x-4">
          {memoriesData.map((memory, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-30 backdrop-blur-lg shadow-md rounded-lg w-80 snap-center transform transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <img
                src={memory.imgSrc}
                alt="Memory"
                className="w-full h-48 object-cover mb-4 rounded-t-lg"
              />
              <p className="text-lg font-italic text-black px-4 pb-4">
                {memory.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;
