import React from 'react';

const CustomCard = ({ imgSrc, text, gradient }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform-gpu">
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
      />
      <div className="relative">
        <img
          src={imgSrc}
          alt="Card"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <p className="text-xl font-semibold text-center text-gray-800 transform transition-all duration-300 group-hover:scale-105">
          {text}
        </p>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cardData = [
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Card 1 - Exploring React",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Card 2 - Building Projects",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Card 3 - Creative Ideas",
      gradient: "from-orange-500 to-red-500"
    },
    {
      imgSrc: "/api/placeholder/300/200",
      text: "Card 4 - React Best Practices",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            imgSrc={card.imgSrc}
            text={card.text}
            gradient={card.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
