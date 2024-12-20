import React, { useState, useEffect, useRef } from "react";
import Welcome from "./components/Welcome";
import CardContainer from "./components/CardContainer";
import SwipeableCardList from "./components/SwipeableCardList";
import Memories from "./components/Memories";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";
import BirthdayGrid from './components/BirthdayGrid';
import DeveloperAndContributors from './components/DeveloperAndContributors';

// Custom cursor component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [clickEffects, setClickEffects] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);

      const newEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setClickEffects(prev => [...prev, newEffect]);

      setTimeout(() => {
        setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <div 
        className={`fixed w-6 h-6 rounded-full pointer-events-none z-[60] mix-blend-difference transition-transform duration-150 ${
          clicked ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
          backgroundColor: '#0000FF',
          boxShadow: '0 0 20px rgba(0, 0, 255, 0.5)',
        }}
      />
      {clickEffects.map(effect => (
        <div
          key={effect.id}
          className="fixed pointer-events-none z-[60] text-blue-600 font-bold text-lg animate-click-effect"
          style={{
            left: effect.x,
            top: effect.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          AnuDeepthi ✨
        </div>
      ))}
    </>
  );
};

const FloatingEmoji = ({ emoji, delay }) => {
  const randomX = Math.random() * 100;
  const randomDuration = 15 + Math.random() * 10;
  
  return (
    <div
      className="fixed text-4xl animate-float select-none pointer-events-none z-50"
      style={{
        left: `${randomX}%`,
        animation: `float ${randomDuration}s infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {emoji}
    </div>
  );
};

const Balloon = ({ x, y, color, onFinish }) => {
  const [bursting, setBursting] = useState(false);

  useEffect(() => {
    const burstTimeout = setTimeout(() => {
      setBursting(true);
      setTimeout(onFinish, 500);
    }, Math.random() * 1000);

    return () => clearTimeout(burstTimeout);
  }, [onFinish]);

  return (
    <div
      className={`absolute transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 ${
        bursting ? "scale-150 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div
        className="w-12 h-16 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const [balloons, setBalloons] = useState([]);

  const componentsRef = useRef([]);

  useEffect(() => {
    if (showComponents) {
      const createEmoji = () => ({
        id: Math.random(),
        emoji: Math.random() > 0.5 ? '🙂‍↕' : '🙂‍↔',
        delay: Math.random() * 2,
      });

      setEmojis(Array.from({ length: 6 }, createEmoji));

      const interval = setInterval(() => {
        setEmojis((prev) => {
          const newEmojis = [...prev];
          const replaceIndex = Math.floor(Math.random() * newEmojis.length);
          newEmojis[replaceIndex] = createEmoji();
          return newEmojis;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [showComponents]);

  const components = [
    { component: <CardContainer />, name: "Card Container" },
    { component: <Memories />, name: "Memories" },
    { component: <SwipeableCardList />, name: "Swipeable Cards" },
    { component: <Carousel />, name: "Circular Swipe Carousel" },
    { component: <Slider />, name: "Slider" },
    { component: <BirthdayGrid />, name: "Birthday Grid" },
    { component: <DeveloperAndContributors />, name: "Developer And Contributors" },
  ];

  const handleBirthdayWishComplete = () => {
    setShowWelcome(false);
    setShowTransition(true);
  };

  useEffect(() => {
    if (showTransition) {
      // Initialize balloons
      const initialBalloons = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      }));
      setBalloons(initialBalloons);

      const timer = setTimeout(() => {
        setShowTransition(false);
        setShowComponents(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showTransition]);

  const handleBalloonFinish = (id) => {
    setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 relative overflow-hidden cursor-none">
      <CustomCursor />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)] animate-pulse"></div>

      {showComponents &&
        emojis.map(({ id, emoji, delay }) => (
          <FloatingEmoji key={id} emoji={emoji} delay={delay} />
        ))}

      {showWelcome ? (
        <div className="h-screen">
          <Welcome onBirthdayWishComplete={handleBirthdayWishComplete} />
        </div>
      ) : showTransition ? (
        <div className="flex items-center justify-center h-screen relative">
          {/* Balloons */}
          {balloons.map((balloon) => (
            <Balloon
              key={balloon.id}
              x={balloon.x}
              y={balloon.y}
              color={balloon.color}
              onFinish={() => handleBalloonFinish(balloon.id)}
            />
          ))}
          {/* Celebration Message */}
          <div className="text-4xl font-bold text-white animate-bounce px-4">
            Let's celebrate!
          </div>
        </div>
      ) : (
        showComponents && (
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {components.map((comp, index) => (
                <section
                  key={index}
                  ref={(el) => {
                    componentsRef.current[index] = el;
                  }}
                  className="relative scroll-mt-16"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6 md:mb-8 lg:mb-10 px-4 drop-shadow-lg">
                    {comp.name}
                  </h2>
                  <div className="rounded-lg overflow-hidden shadow-xl backdrop-blur-sm bg-white/10">
                    {comp.component}
                  </div>
                </section>
              ))}
            </div>
            <div className="h-16 md:h-24"></div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
