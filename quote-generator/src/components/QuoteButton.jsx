
const QuoteButton = ({ onClick, label }) => (
  <button className="quote-button" onClick={onClick}>
    {label}
  </button>
);

export default QuoteButton;
