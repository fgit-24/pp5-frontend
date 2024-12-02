import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-primary"
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-primary"
      >
        Decrease
      </button>
    </div>
  );
}

export default ReducerHook;
