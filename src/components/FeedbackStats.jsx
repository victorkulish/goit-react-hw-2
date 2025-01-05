import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total
    ? Math.round((feedback.good / total) * 100)
    : 0;

  return (
    <div className="feedback-stats">
      <h2>Статистика:</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}

// Валідація props
FeedbackStats.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackStats;
