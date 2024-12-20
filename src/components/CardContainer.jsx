import React from 'react';
import { Star, Heart } from 'lucide-react';

const CustomCard = ({ imgSrc, text, gradient }) => {
  return (
    <div className="group relative overflow-visible bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform-gpu my-12 mx-2">
      {/* Decorative icons - made larger and more visible */}
      <div className="absolute -top-8 -left-6 text-pink-500 transform -rotate-12">
        <Star size={40} strokeWidth={1.5} fill="pink" className="filter drop-shadow-md" />
      </div>
      <div className="absolute -top-8 -right-6 text-purple-500 transform rotate-12">
        <Star size={40} strokeWidth={1.5} fill="purple" className="filter drop-shadow-md" />
      </div>
      
      {/* Additional decorative stars */}
      <div className="absolute -bottom-4 -left-4 text-pink-400 transform rotate-45">
        <Star size={32} strokeWidth={1.5} fill="pink" className="filter drop-shadow-md" />
      </div>
      <div className="absolute -bottom-4 -right-4 text-purple-400 transform -rotate-45">
        <Star size={32} strokeWidth={1.5} fill="purple" className="filter drop-shadow-md" />
      </div>
      
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
      />
      
      {/* Image container */}
      <div className="relative p-3">
        <img
          src={imgSrc}
          alt="Card"
          className="w-full h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Text container */}
      <div className="p-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Heart className="text-pink-500" size={24} fill="pink" />
          <p className="text-xl font-semibold text-center text-gray-800 transition-all duration-300 group-hover:scale-105">
            {text}
          </p>
          <Heart className="text-pink-500" size={24} fill="pink" />
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cardData = [
    {
      imgSrc: "../../public/images/1.jpg",
      text: "",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      imgSrc: "../../public/images/2.jpg",
      text: "",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      imgSrc: "../../public/images/3.jpg",
      text: "",
      gradient: "from-orange-500 to-red-500"
    },
    {
      imgSrc: "../../public/images/10.jpg",
      text: "",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-8">
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