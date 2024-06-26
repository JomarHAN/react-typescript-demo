import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetType = {
  type: "reset";
};

const initialState: StateType = { count: 0 };

const reducer = (state: StateType, action: ActionType | ResetType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count to {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        + 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        - 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
