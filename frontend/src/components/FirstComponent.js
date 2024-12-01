function FirstComponent(props) {
  function clickMe() {
    alert("Iam inside a functional component");
  }

  return (
    <di className="container mt-5">
      <h2>My Name is {props.name}</h2>
      <button className="btn btn-success" onClick={clickMe}>
        Click Me
      </button>
    </di>
  );
}
export default FirstComponent;
