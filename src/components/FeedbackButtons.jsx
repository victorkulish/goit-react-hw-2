import PropTypes from "prop-types";

function FeedbackButtons({ onFeedback }) {
  return (
    <div className="feedback-buttons">
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
    </div>
  );
}

// Валідація props
FeedbackButtons.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
