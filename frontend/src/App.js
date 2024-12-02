// import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import ClassA from "./components/ClassA";
// import StateExample from "./components/StateExample";
import MapFunc from "./components/MapFunc";
import Forms from "./components/Forms";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import ComponentA from "./components/ComponentA";
import Counter from "./components/Counter";

export const MyContext = React.createContext();

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
