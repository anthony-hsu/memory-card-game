import PropTypes from "prop-types";

const Card = (props) => {
  const {
    currentScore,
    setCurrentScore,
    imgNumber,
    seen,
    setGameOver,
    setSeen,
  } = props;
  const imgLocation = `/images/${imgNumber}.png`;

  const handleClick = () => {
    let newSeen = [];
    if (seen.includes(imgNumber)) {
      // Clicked on a seen image
      setGameOver(true);
    } else {
      // Clicked on a new/valid image
      setCurrentScore(currentScore + 1);
      newSeen = [...seen, imgNumber];
    }
    setSeen(newSeen);
  };

  return (
    <div className="card">
      <img src={imgLocation} alt="emoji" onClick={handleClick}></img>
    </div>
  );
};

Card.propTypes = {
  currentScore: PropTypes.number,
  setCurrentScore: PropTypes.func,
  imgNumber: PropTypes.number,
  seen: PropTypes.bool,
  setGameOver: PropTypes.func,
  setSeen: PropTypes.func,
};

export default Card;
