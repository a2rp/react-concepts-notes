import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    const codeExample = `
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1> useState Hook</h1>

            <p>
                <code>useState</code> is the most basic React Hook. It allows you to store and update local component state.
            </p>

            <h3> What it does:</h3>
            <ul>
                <li>Preserves values across re-renders</li>
                <li>Triggers re-renders when updated</li>
                <li>Used for UI interactivity like toggling, counting, inputs, etc.</li>
            </ul>

            <h3> Live Counter Example:</h3>
            <p>Current Count: <strong>{count}</strong></p>
            <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <h3> Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default UseState;
