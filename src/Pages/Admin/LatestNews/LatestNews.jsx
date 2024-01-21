import "./LatestNews.css";
import { useEffect, useState } from "react";
import latestNewsService from "../../../Components/latestNewsService";
import NewsCard from "../../../Components/LatestNews/NewsCard/NewsCard";
import Alert from "../../../Components/Alert/Alert";
import { AdminHeader } from "../../../Components/AdminHeader/AdminHeader";

const LatestNewsAdmin = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [error, setError] = useState(false);
  const [notif, setNotif] = useState("success");
  const [message, setMessage] = useState("");
  const [latestNewsDetails, setLatestNewsDetails] = useState(null);

  useEffect(() => {
    latestNewsService.getAll().then((data) => {
      setLatestNewsDetails(data.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newsArticle = {
      title: newsTitle,
      date: newsDate,
      content: newsContent,
    };

    latestNewsService
      .create(newsArticle)
      .then((data) =>
        setLatestNewsDetails(latestNewsDetails.concat(data.data))
      );

    setError(true);
    setNotif("success");
    setMessage("Added Successfully");
    setTimeout(() => {
      setError(false);
    }, 3000);
    return;
  };

  return (
    <div className="admin-member-body">
      <AdminHeader></AdminHeader>
      <div className="admin-member-container">
        <div>
          {error ? <Alert type={notif} message={message}></Alert> : null}
        </div>
        <div className="form-wrapper">
          <div className="form-container">
            <div className="form-text">Add News</div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-data">
                  <input
                    type="text"
                    required
                    placeholder=""
                    onChange={(e) => setNewsTitle(e.target.value)}
                  />
                  <div className="underline"></div>
                  <label>Title</label>
                </div>
                <div className="input-data">
                  <input
                    type="text"
                    required
                    placeholder=""
                    onChange={(e) => setNewsDate(e.target.value)}
                  />
                  <div className="underline"></div>
                  <label>Date</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <input
                    type="text"
                    required
                    placeholder=""
                    onChange={(e) => setNewsContent(e.target.value)}
                  />
                  <div className="underline"></div>
                  <label>Content</label>
                </div>
              </div>
              <div className="submit-row">
                <button className="login-btn" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="members">
          {latestNewsDetails
            ? latestNewsDetails.map((newsArticle) => (
                <NewsCard
                  id={newsArticle.id}
                  newsTitle={newsArticle.title}
                  newsDate={newsArticle.date}
                  newsBody={newsArticle.content}
                  admin={true}
                  latestNewsDetails
                  setLatestNewsDetails
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAdmin;
