import PropTypes from "prop-types";

function Header(props) {
  const { currentScore, highScore } = props;
  return (
    <div>
      <h1 className="title">Memory Game</h1>
      <div className="score-container">
        <div className="current-score score-row">
          <h3 style={{textAlign: "right"}}>Current Score:</h3>
          <h3 style={{textAlign: "left"}}>{currentScore}</h3>
        </div>
        <div className="high-score score-row">
          <h3 style={{textAlign: "right"}}>High Score:</h3>
          <h3 style={{textAlign: "left"}}>{highScore}</h3>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  currentScore: PropTypes.number,
  highScore: PropTypes.number,
};

export default Header;
