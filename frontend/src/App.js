// import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import ClassA from "./components/ClassA";
// import StateExample from "./components/StateExample";
import MapFunc from "./components/MapFunc";
import Forms from "./components/Forms";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/first" element={<ClassA />}></Route>
        <Route path="/second" element={<Forms />}></Route>
        <Route path="/third" element={<FirstComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
