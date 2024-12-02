import React, { useState, useEffect } from "react";

function FetchData() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return;
  <>
    <FetchData />
  </>;
}

export default FetchData;
