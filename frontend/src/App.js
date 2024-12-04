import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState(["Article One", "Article Two"]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "35d93ade08367b58d87f74bff1d3374087b265f2",
      },
    });
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return <h2>{article}</h2>;
      })}
    </div>
  );
}

export default App;
