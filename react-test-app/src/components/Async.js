import React from "react";
import { useState, useEffect } from "react";

const Async = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-06-18&sortBy=publishedAt&apiKey=4173cfd47ca442d68b7023d714717997"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
