
const QuoteCard = ({ quote, author, liked, onLike, fontSize, theme }) => {
  return (
    <div className={`quote-card ${theme}`}>
      <p className="quote-text" style={{ fontSize }}>{quote}</p>
      <p className="quote-author">— {author}</p>
      <button className="like-button" onClick={onLike}>
        {liked ? '💖' : '🤍'}
      </button>
    </div>
  );
};

export default QuoteCard;
