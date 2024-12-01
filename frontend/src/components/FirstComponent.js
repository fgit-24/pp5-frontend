function FirstComponent(props) {
  function clickMe() {
    alert("Iam inside a functional component");
  }

  return (
    <div>
      <h2>My Name is {props.name}</h2>
      <button onClick={clickMe}>Click Me</button>
    </div>
  );
}
export default FirstComponent;
