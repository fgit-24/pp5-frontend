import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


function ArticleDetails() {
    const params = useParams()
    const [article, setArticle] = useState({})
    
    const token = localStorage.getItem('mytoken')

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/articles/${params.slug}/`, {
            method: "GET",
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : `Token ${token}`,
            },
          })
          .then(resp => resp.json())
          .then(result => setArticle(result))
          .catch(error => console.log(error))
    }, [params.slug])

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <h6>
        Published {article.published} by <i>{article.author}</i>
      </h6>

      <br/>

      <p>{article.description}</p>
    </div>
  );
}

export default ArticleDetails