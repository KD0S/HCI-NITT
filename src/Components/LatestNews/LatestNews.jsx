import "./LatestNews.css";
import NewsCard from "./NewsCard/NewsCard";

const LatestNews = () => {
  return (
    <div className="latest-news-main">
      <div className="latest-news-heading">LATEST NEWS</div>
      <div className="latest-news-body">
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
        />
        <NewsCard
          newsTitle="IEEE Xplore Conference Proceedings, IIT-Delhi"
          newsDate="2023"
          newsBody="Kannadasan K, Haresh M V, Ambati Rami Reddy, B. Shameedha Begum,
        “BCIRecog: AN Optimized BCI System for Imagined Speech Recognition”,
        IEEE 14th International Conference on Computing, Communication and
        Networking Technologies, IIT Delhi, 2023"
        />
      </div>
    </div>
  );
};

export default LatestNews;
