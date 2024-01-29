import { useEffect, useState } from "react";
import latestNewsService from "../latestNewsService";
import "./LatestNews.css";
import NewsCard from "./NewsCard/NewsCard";
import { Slide, JackInTheBox } from "react-awesome-reveal";

const LatestNews = () => {
  const [latestNewsDetails, setLatestNewsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    latestNewsService.getAll().then((data) => {
      setLatestNewsDetails(data.data)
      setIsLoading(false)
    });
  }, []);

  return (
    <div className="latest-news-main">
      <JackInTheBox fraction={0.5} triggerOnce>
        <div className="latest-news-heading">LATEST NEWS</div>
      </JackInTheBox>
      {
        isLoading ? <div className="loading-container">
          <div className="loader"></div>
        </div> : <Slide direction="up" triggerOnce>
          <div className="latest-news-body">
            {latestNewsDetails.map((newsArticle) => {
              return (
                <NewsCard
                  id={newsArticle.id}
                  newsTitle={newsArticle.title}
                  newsDate={newsArticle.date}
                  newsBody={newsArticle.content}
                  admin={false}
                />
              );
            })}
          </div>
        </Slide>
      }
    </div>
  );
};

export default LatestNews;
