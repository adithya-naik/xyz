import React, { useEffect, useState, useCallback, memo } from 'react';

// Memoized Star component for better performance
const Star = memo(({ size, top, left, delay }) => (
  <div
    className="absolute animate-twinkle"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
    }}
    aria-hidden="true"
  >
    {/* <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-80" /> */}
    <div 
      className="absolute inset-0 bg-white"
      style={{
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    />
  </div>
));

Star.displayName = 'Star';

// Memoized ShootingStar component
const ShootingStar = memo(() => {
  const style = {
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    width: '4px',
    height: '4px',
    animationDuration: `${0.6 + Math.random() * 0.8}s`,
    animationDelay: `${Math.random() * 5}s`,
  };

  return <div className="absolute bg-white rounded-full animate-shooting-star" style={style} aria-hidden="true" />;
});

ShootingStar.displayName = 'ShootingStar';

// Contributor card component
const ContributorCard = memo(({ contributor }) => (
  <div 
    className="glass-card p-4 sm:p-6 flex items-center text-center transform hover:scale-105 transition-all duration-300"
    role="article"
  >
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white mb-3 sm:mb-4 bg-gray-300 flex items-center justify-center">
      {/* Placeholder for image - now just a circle */}
      <span className="text-white text-2xl">{contributor.name[0]}</span>
    </div>
    <div className="ml-4">
      <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{contributor.name}</h4>
      <p className="text-blue-200 mb-1 sm:mb-2 text-sm sm:text-base">{contributor.role}</p>
    </div>
  </div>
));

ContributorCard.displayName = 'ContributorCard';

const DeveloperAndContributors = () => {
  const [shootingStars, setShootingStars] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);

  // Initialize window width after mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 150);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShootingStars(prev => {
        const newStars = [...prev, Date.now()];
        if (newStars.length > 3) return newStars.slice(1);
        return newStars;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

 
  const contributors = [
    { 
      name: 'Alekhya', 
      role: 'Alex',
    },
    { 
      name: 'Eesha', 
      role: 'Eesh',
    },
    { 
      name: 'Adithya', 
      role: '.',
    }
  ];

  const getStarCount = useCallback(() => {
    if (windowWidth < 640) return { large: 10, medium: 20, small: 30 };
    if (windowWidth < 1024) return { large: 15, medium: 30, small: 45 };
    return { large: 20, medium: 40, small: 60 };
  }, [windowWidth]);

  const starCount = getStarCount();

  return (
    <div className="relative bg-gradient-to-b from-[#0B0B2E] via-[#1B1B4B] to-[#0B0B2E] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {Object.entries(starCount).map(([size, count]) =>
          [...Array(count)].map((_, i) => (
            <Star 
              key={`${size}-${i}`}
              size={size === 'large' ? 3 : size === 'medium' ? 2 : 1}
              top={Math.random() * 100}
              left={Math.random() * 100}
              delay={Math.random() * 3}
            />
          ))
        )}
        {shootingStars.map(key => (
          <ShootingStar key={key} />
        ))}
      </div>

      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-500 blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-1/2 h-1/2 bg-blue-500 blur-[100px] animate-pulse" />
      </div>

      <main className="relative z-10 py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
              Fascinatedly Made With Love By
            </h2>
            <div className="flex justify-center space-x-8 overflow-x-auto">
              {contributors.map((contributor, index) => (
                <ContributorCard key={contributor.name} contributor={contributor} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DeveloperAndContributors;
