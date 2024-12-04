import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles/", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Token 35d93ade08367b58d87f74bff1d3374087b265f2",
      },
    })
      .then((resp) => resp.json())
      .then((result) => {
        setArticles(result)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {articles.map(article => {
        return (
        <div key = {article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
        )
      })}
    </div>
  );
}

export default App;
