import React, { useState } from 'react';
import Welcome from './components/Welcome';
import CardContainer from './components/CardContainer';

function App() {
  const [showCards, setShowCards] = useState(false);

  const handleBirthdayWishComplete = () => {
    setShowCards(true); // Show the card container after birthday wish is shown
  };

  return (
    <div>
      <Welcome onBirthdayWishComplete={handleBirthdayWishComplete} />
      {showCards && <CardContainer />}  {/* Show cards after birthday wishes */}
    </div>
  );
}

export default App;
