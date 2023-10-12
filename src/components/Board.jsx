import { useState, useEffect } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import PropTypes from "prop-types";

const Board = (props) => {
  const { seen, setSeen, setGameOver, currentScore, setCurrentScore } = props;
  const numCards = 12;

  const getNewCards = (n) => {
    const newCards = [];
    for (let i = 0; i < n; i++) {
      newCards.push({ id: uniqid(), image: Math.ceil(20 * Math.random()) });
    }
    return newCards;
  };

  useEffect(() => {
    const newCards = getNewCards(numCards);
    setCards(newCards);
  }, [seen]);

  const [cards, setCards] = useState([]);

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          imgNumber={card.image}
          setCards={setCards}
          setGameOver={setGameOver}
          seen={seen}
          setSeen={setSeen}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  seen: PropTypes.bool,
  setSeen: PropTypes.func,
  setGameOver: PropTypes.func,
  currentScore: PropTypes.number,
  setCurrentScore: PropTypes.func,
};

export default Board;
