import React from 'react';
import { Cake, Gift, PartyPopper, Heart, Star, Music } from 'lucide-react';

const BirthdayGrid = () => {
  const items = [
    {
      src: "../../public/images/3.jpg",
      text: "Happy Birthday!",
      icon: Cake,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      src: "../../public/images/4.jpg",
      text: "Make a Wish!",
      icon: Star,
      gradient: "from-blue-500 to-teal-500"
    },
    {
      src: "../../public/images/5.jpg",
      text: "Surprise!",
      icon: Gift,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      src: "../../public/images/7.jpg",
      text: "Celebrate!",
      icon: PartyPopper,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      src: "../../public/images/8.jpg",
      text: "Let's Party!",
      icon: Music,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      src: "../../public/images/9.jpg",
      text: "Cheers!",
      icon: Heart,
      gradient: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Star className="text-pink-500" size={24} fill="pink" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
            With you
          </h2>
          <Star className="text-purple-500" size={24} fill="purple" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Birthday Item ${index + 1}`}
                    className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transform rotate-0 group-hover:rotate-12 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-pink-500" />
                  </div>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-xl font-bold text-center">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BirthdayGrid;