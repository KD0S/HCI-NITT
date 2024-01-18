import "./NewsCard.css";
import { Slide } from "react-awesome-reveal";

const NewsCard = ({ newsTitle, newsDate, newsBody }) => {
  return (
    // <Slide direction="up" triggerOnce>
      <div className="newscard-main">
        <div className="newscard-title">{newsTitle}</div>
        <div className="newscard-date">{newsDate}</div>
        <div className="newscard-body">{newsBody}</div>
      </div>
    // </Slide>
  );
};

export default NewsCard;
