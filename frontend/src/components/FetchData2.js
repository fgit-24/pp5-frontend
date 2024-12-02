import { useState, useEffect } from "react";

const initialState = {
  loading: true,
  article: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        article: action.payload,
        error: "",
      };
    case "FAIL":
      return {
        loading: false,
        article: {},
        error: "Error in data fetching",
      };
  }
};

function FetchData2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((resp) => resp.json())
      .then((result) => {
        dispatch({ type: "SUCCESS", payload: result });
      })
      .catch((error) => {
        dispatch({ type: "FAIL" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.article.body}
      {state.error ? state.error : none}
    </div>
  );
}

export default FetchData2;
