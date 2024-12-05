import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import ArticleDetails from "./components/ArticleDetails";
import { useNavigate } from "react-router-dom";
import AddArticle from "./components/AddArticle";
import Register from "./components/Register";
import UpdateArticle from './components/UpdateArticle'


function App() {

  const [articles, setArticles] = useState([]);
  const [editArticle, setEditedArticle] = useState('')

  const token = localStorage.getItem('mytoken')
  
  let navigate = useNavigate()

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
  }, [token])


  useEffect(() => {
    if(!token) {
      navigate('/')
      return;
    }
  
    navigate('/articles')

  }, [token])


  const insertedArticle = (article) => {
    const new_article = [...articles, article]
    setArticles(new_article)
  }

  const updatedData = (article) => {
    const new_articles = articles.map(myarticle => {
      if(myarticle.slug === article.slug) {
        return article
      } else {
        return myarticle
      }
    })

    setArticles(new_articles)
  }

  const updateBtn = (article) => {
    setEditedArticle(article)

  }

  return (
    <div>
      < Navbar />
      <Routes>
        <Route path="/" element = {<Login/>}></Route>
        
        <Route path="/articles" element = {
        < ArticleList articles = {articles}/>
        }></Route>

        <Route path="/article/:slug" element = {
          < ArticleDetails updateBtn = {updateBtn}/>
        }></Route>

        <Route path="/add" element = {
          < AddArticle insertedArticle = {insertedArticle}/>
        }></Route>

        <Route path="/register" element = {
          <Register/>
        }></Route>

        <Route path='/update' element = {
          <UpdateArticle article = {editArticle} updatedData = {updatedData}/>
        }></Route>
      
      </Routes>
    </div>
  );
}

export default App;
