import { useState, useEffect } from "react";

export default function RedLightGreenLight() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [isLost, setIsLost] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    if (isRed) {
      setIsGameStarted(false);
      setIsLost(true);
      if (currentScore > topScore) {
        setTopScore(currentScore);
        setCurrentScore(0);
      }
    } else {
      setCurrentScore((prevScore) => prevScore + 1);
    }
  };

  useEffect(() => {
    const timer = Math.floor(Math.random() * 2000);
    setTimeout(() => {
      if (isGameStarted && isRed) {
        setIsRed(false);
      } else if (isGameStarted) {
        setIsRed(true);
      }
    }, timer);
  }, [isRed, isGameStarted]);

  return (
    <div className="game-container">
      {isGameStarted ? (
        <div>
          <h1>Current Score: {currentScore}</h1>
          <div
            className="square"
            style={{ backgroundColor: isRed ? "red" : "green" }}
            onClick={handleClick}
          ></div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsGameStarted(true);
            setIsLost(false);
            setCurrentScore(0);
          }}
        >
          Start Game
        </button>
      )}
      <h1>High Score: {topScore}</h1>
      {isLost && <h1>GAME OVER </h1>}
    </div>
  );
}
