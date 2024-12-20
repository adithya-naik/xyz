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
    <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-80" />
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
    className="glass-card p-4 sm:p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
    role="article"
  >
    <img
      src={contributor.image}
      alt={`${contributor.name}'s profile`}
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white mb-3 sm:mb-4 object-cover"
      loading="lazy"
    />
    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{contributor.name}</h4>
    <p className="text-blue-200 mb-1 sm:mb-2 text-sm sm:text-base">{contributor.role}</p>
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

  const developer = {
    name: 'Adithya Naik',
    role: 'Developer and Designer',
    image: '/api/placeholder/150/150',
    description: 'Lead Developer and UI/UX Designer for the website.'
  };

  const contributors = [
    { 
      name: 'Alex', 
      role: 'Made with Love', 
      image: '/api/placeholder/150/150'
    },
    { 
      name: 'Eesh', 
      role: 'Made with Love', 
      image: '/api/placeholder/150/150'
    }
  ];

  const getStarCount = useCallback(() => {
    if (windowWidth < 640) return { large: 10, medium: 20, small: 30 };
    if (windowWidth < 1024) return { large: 15, medium: 30, small: 45 };
    return { large: 20, medium: 40, small: 60 };
  }, [windowWidth]);

  const starCount = getStarCount();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B0B2E] via-[#1B1B4B] to-[#0B0B2E] overflow-hidden">
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
          <section className="mb-0 sm:mb-12 md:mb-16 text-center">
            <div className="glass-card max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
              <div className="flex flex-col items-center">
                <div className="relative mb-4 sm:mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow" />
                  <img
                    src={developer.image}
                    alt={`${developer.name}'s profile`}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{developer.name}</h1>
                <p className="text-lg sm:text-xl text-blue-200 mb-2 sm:mb-4">{developer.role}</p>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl px-4">{developer.description}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
              Fascinatedly Made With Love By
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
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