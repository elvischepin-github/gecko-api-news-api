import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import "../styles/NewsBlock.css";

function NewsBlock() {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const NewsAPI = process.env.REACT_APP_NEWS_API;
  const url = `https://newsapi.org/v2/everything?q=crypto&apiKey=${NewsAPI}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    async function getApiData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setNewsData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      }
    }
    getApiData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {newsData && newsData.articles && newsData.articles.length > 0 ? (
        newsData.articles.slice(1, 21).map((article) => (
          <div className="NewsBlock" key={uuid()}>
            <h2>{article.title}</h2>
            <b>{article.author}</b>
            <i>{new Date(article.publishedAt).toLocaleDateString()}</i>
            <p>{article.description || "No description available"}</p>
            {article.url ? (
              <a href={article.url}>Link</a>
            ) : (
              <p>No link available</p>
            )}

            <br />
            <div className="urlToImageContainter">
              <img
                src={article.urlToImage || "src/assets/no-image.jpg"}
                alt="image"
              />
            </div>
          </div>
        ))
      ) : (
        <div className="NewsBlock">
          <h2>Title</h2>
          <b>Author</b>
          <i>Date</i>
          <p>Description</p>
          <a href="#">Link</a>
          <br />
          <div className="urlToImageContainter">
            <img src="/src/assets/no-image.jpg" alt="image" />
          </div>
        </div>
      )}
    </>
  );
}

export default NewsBlock;
