import { MyContext } from "../App";
import { useContext } from "react";

const ComponentB = () => {
  const data = useContext(MyContext);
  return <h2>{data}</h2>;
};

export default ComponentB;
