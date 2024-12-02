// import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import ClassA from "./components/ClassA";
// import StateExample from "./components/StateExample";
import MapFunc from "./components/MapFunc";

function App() {
  return (
    <>
      <FirstComponent name="Florian" lastname="LastName" />
      <ClassA email="email@email.com" />
      {/* <StateExample /> */}
      <MapFunc names={["Python", "Java", "C#", "C++"]} />
    </>
  );
}

export default App;
