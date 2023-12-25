import "./NewsCard.css";

const NewsCard = ({ newsTitle, newsDate, newsBody }) => {
  return (
    <div className="newscard-main">
      <div className="newscard-title">{newsTitle}</div>
      <div className="newscard-date">{newsDate}</div>
      <div className="newscard-body">{newsBody}</div>
    </div>
  );
};

export default NewsCard;
