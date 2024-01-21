import { useEffect, useState } from "react";
import latestNewsService from "../latestNewsService";
import "./LatestNews.css";
import NewsCard from "./NewsCard/NewsCard";
import { Slide, JackInTheBox } from "react-awesome-reveal";

const LatestNews = () => {
  const [latestNewsDetails, setLatestNewsDetails] = useState([]);

  useEffect(() => {
    latestNewsService.getAll().then((data) => {
      setLatestNewsDetails(data.data);
    });
  }, []);

  return (
    <div className="latest-news-main">
      <JackInTheBox fraction={0.5} triggerOnce>
        <div className="latest-news-heading">LATEST NEWS</div>
      </JackInTheBox>
      <Slide direction="up" triggerOnce>
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
          {/* <NewsCard
            newsTitle="IEEE Xplore Conference Proceedings, IIT-Delhi"
            newsDate="2023"
            newsBody="Kannadasan K, Haresh M V, Ambati Rami Reddy, B. Shameedha Begum,
        “BCIRecog: AN Optimized BCI System for Imagined Speech Recognition”,
        IEEE 14th International Conference on Computing, Communication and
        Networking Technologies, IIT Delhi, 2023"
          />
          <NewsCard
            newsTitle="IEEE Xplore Conference Proceedings, IIT-Delhi"
            newsDate="2023"
            newsBody="Kannadasan K, Haresh M V, Ambati Rami Reddy, B. Shameedha Begum,
        “BCIRecog: AN Optimized BCI System for Imagined Speech Recognition”,
        IEEE 14th International Conference on Computing, Communication and
        Networking Technologies, IIT Delhi, 2023"
          />
          <NewsCard
            newsTitle="IEEE Xplore Conference Proceedings, IIT-Delhi"
            newsDate="2023"
            newsBody="Kannadasan K, Haresh M V, Ambati Rami Reddy, B. Shameedha Begum,
        “BCIRecog: AN Optimized BCI System for Imagined Speech Recognition”,
        IEEE 14th International Conference on Computing, Communication and
        Networking Technologies, IIT Delhi, 2023"
          />
          <NewsCard
            newsTitle="IEEE Xplore Conference Proceedings, IIT-Delhi"
            newsDate="2023"
            newsBody="Kannadasan K, Haresh M V, Ambati Rami Reddy, B. Shameedha Begum,
        “BCIRecog: AN Optimized BCI System for Imagined Speech Recognition”,
        IEEE 14th International Conference on Computing, Communication and
        Networking Technologies, IIT Delhi, 2023"
          /> */}
        </div>
      </Slide>
    </div>
  );
};

export default LatestNews;
