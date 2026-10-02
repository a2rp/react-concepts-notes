import { useReducer } from "react";

//  Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const codeExample = `
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset": return { count: 0 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

<button onClick={() => dispatch({ type: "increment" })}>+</button>
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px",
            }}
        >
            <h1>⚖️ useReducer Hook</h1>

            <p>
                <code>useReducer</code> is a more powerful alternative to <code>useState</code> when you have complex state transitions or want to centralize state logic.
            </p>

            <h3> When to use it:</h3>
            <ul>
                <li>⛓ Multiple related state changes</li>
                <li> More control over update logic</li>
                <li>🔄 Easier testing + scaling (like Redux)</li>
            </ul>

            <h3> Live Example:</h3>
            <p>Count: <strong>{state.count}</strong></p>
            <button onClick={() => dispatch({ type: "increment" })}>➕</button>{" "}
            <button onClick={() => dispatch({ type: "decrement" })}>➖</button>{" "}
            <button onClick={() => dispatch({ type: "reset" })}>🔄</button>

            <h3> Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default UseReducer;
