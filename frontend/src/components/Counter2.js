import { useState } from "react";

const Counter2 = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const [info, setInfo] = useState({ name: "", email: "" });

  const [articles, setArticles] = useState([
    "Article One",
    "Article Two",
    "Article Three",
  ]);

  const addArticle = () => {
    setArticles([...articles, "New Article"]);
  };

  return (
    <div>
      <h1>{text}</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setText("Increase")}>Increase</button>
      <button onClick={() => setText("Decrease")}>Decrease</button>

      <br />
      <br />

      <h2>Name is: {info.name}</h2>
      <h2>Name is: {info.email}</h2>

      <input
        type="text"
        className="form-control"
        placeholder="Please enter name"
        value={info.name}
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
      />

      {articles.map((article) => {
        return <h3>{article}</h3>;
      })}

      <input
        type="text"
        className="form-control"
        placeholder="Please enter password"
        value={info.passsword}
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
      />

      <button onClick={addArticle} className="btn btn-primary">
        Add Article
      </button>
    </div>
  );
};

export default Counter2;
