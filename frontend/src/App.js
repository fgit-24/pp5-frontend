// import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import ClassA from "./components/ClassA";

function App() {
  return (
    <>
      <FirstComponent name="Florian" lastname="LastName" />
      <ClassA email="email@email.com" />
    </>
  );
}

export default App;
