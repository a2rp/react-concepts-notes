import { useState } from "react";

// ✅ Custom Hook
const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
};

// ✅ Component using the hook
const CounterBox = () => {
    const { count, increment, decrement, reset } = useCounter(5);

    return (
        <div style={{ border: "1px solid #aaa", padding: "10px", marginTop: "10px" }}>
            <p>📦 Count: <strong>{count}</strong></p>
            <button onClick={increment}>➕</button>{" "}
            <button onClick={decrement}>➖</button>{" "}
            <button onClick={reset}>🔄</button>
        </div>
    );
};

const codeExample = `
const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initial);
  return { count, increment, decrement, reset };
};

const MyComponent = () => {
  const { count, increment } = useCounter();
  return <button onClick={increment}>{count}</button>;
};
`;

const CustomHooks = () => {
    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🪄 Custom Hooks</h1>

            <p>
                A <strong>custom hook</strong> is a JavaScript function whose name starts with <code>use</code> and which can call other hooks.
            </p>

            <ul>
                <li>♻️ Reuse stateful logic across components</li>
                <li>🧼 Keeps components clean and readable</li>
                <li>🔧 Can encapsulate things like counters, forms, toggles, etc.</li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <CounterBox />

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default CustomHooks;
