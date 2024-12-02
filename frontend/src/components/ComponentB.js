import { MyContext } from "../App";

const ComponentB = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => {
          return <h2>{data}</h2>;
        }}
      </MyContext.Consumer>
      ;
    </div>
  );
};

export default ComponentB;
