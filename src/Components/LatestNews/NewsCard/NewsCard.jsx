import "./NewsCard.css";
import { useNavigate } from "react-router-dom";
import latestNewsService from "../../latestNewsService";

const NewsCard = ({
  id,
  newsTitle,
  newsDate,
  newsBody,
  admin,
  latestNewsDetails,
  setLatestNewsDetails,
}) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    latestNewsService.remove(id);
    navigate(0);
  };

  return (
    <div className="newscard-main">
      <div className="newscard-title">{newsTitle}</div>
      <div className="newscard-date">{newsDate}</div>
      <div className="newscard-body">{newsBody}</div>
      {admin ? (
        <button className={`icons-alt`} onClick={handleDelete}>
          X
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewsCard;
