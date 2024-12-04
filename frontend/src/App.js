import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";

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
      < Navbar />
      < ArticleList articles = {articles}/>
    </div>
  );
}

export default App;
