import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetails() {
    const params = useParamas()
    const [article, setArticle] = useState({})
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/articles/", {
            method: "GET",
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : "Token 35d93ade08367b58d87f74bff1d3374087b265f2",
            },
          })
    }, [])

  return (
    <div></div>
  )
}

export default ArticleDetails