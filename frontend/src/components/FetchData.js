import React, { useState, useEffect } from "react";

function FetchData() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((result) => {
        setArticles(result);
      });
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <h1 key={article.id}>{article.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default FetchData;
