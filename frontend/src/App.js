import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";

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
      <Routes>
        <Route path="/" element = {<Login/>}></Route>
        <Route path="/articles" element = {
        < ArticleList articles = {articles}/>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
