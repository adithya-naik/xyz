import React, { useState, useEffect } from 'react';

const BirthdayGrid = () => {
  const [items, setItems] = useState([]);

  // Fetch random images and videos using placeholder APIs
  useEffect(() => {
    const fetchRandomItems = async () => {
      const randomItems = [
        {
          src: 'https://source.unsplash.com/random/300x200/?balloon',
          type: 'image',
          text: 'Happy Birthday!',
          aspectRatio: 'aspect-w-3 aspect-h-2', // 3:2 aspect ratio
        },
        {
          src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Sample placeholder video
          type: 'video',
          text: 'Make a Wish!',
          aspectRatio: 'aspect-w-16 aspect-h-9', // 16:9 aspect ratio
        },
        {
          src: 'https://source.unsplash.com/random/300x300/?cake',
          type: 'image',
          text: 'Surprise!',
          aspectRatio: 'aspect-w-1 aspect-h-1', // Square aspect ratio
        },
        {
          src: 'https://source.unsplash.com/random/400x300/?partyhat',
          type: 'image',
          text: 'Celebrate!',
          aspectRatio: 'aspect-w-4 aspect-h-3', // 4:3 aspect ratio
        },
        {
          src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Sample placeholder video
          type: 'video',
          text: 'Let’s Party!',
          aspectRatio: 'aspect-w-16 aspect-h-9', // 16:9 aspect ratio
        },
        {
          src: 'https://source.unsplash.com/random/250x250/?gift',
          type: 'image',
          text: 'Cheers!',
          aspectRatio: 'aspect-w-3 aspect-h-2', // 3:2 aspect ratio
        },
      ];

      setItems(randomItems);
    };

    fetchRandomItems();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-2 cursor-pointer bg-white filter hover:brightness-110 ${item.aspectRatio}`}
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={`Birthday Item ${index}`}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-full object-cover transition-transform duration-300"
              autoPlay
              loop
              muted
            />
          )}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 text-lg font-bold rounded-md opacity-0 transition-opacity duration-300 transform translate-y-2 hover:opacity-100 hover:translate-y-0">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirthdayGrid;
