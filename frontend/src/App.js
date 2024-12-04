import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import ArticleDetails from "./components/ArticleDetails";

function App() {

  const [articles, setArticles] = useState([]);

  const token = localStorage.getItem('mytoken')

  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles/", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Token ${token}`,
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

        <Route path="/article/:slug" element = {
          < ArticleDetails />
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
