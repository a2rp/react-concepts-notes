import { useCallback, useMemo, useState } from "react";

// Heavy calculation
const slowSquare = (num) => {
    console.log("📉 Expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += num * num;
    }
    return result;
};

const UseCallbackMemo = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    // 🧠 useMemo: caches the result
    const squared = useMemo(() => slowSquare(count), [count]);

    // 🧠 useCallback: caches the function
    const handleInput = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const codeExample = `
const squared = useMemo(() => slowSquare(count), [count]);

const handleInput = useCallback((e) => {
  setInputValue(e.target.value);
}, []);
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px",
            }}
        >
            <h1>⚡ useCallback & useMemo</h1>

            <p>
                These hooks help you <strong>optimize performance</strong> by preventing unnecessary computations and re-renders.
            </p>

            <ul>
                <li><code>useMemo</code> → caches the return value of a function</li>
                <li><code>useCallback</code> → caches the function itself</li>
            </ul>

            <h3>⚙️ Live Example:</h3>

            <p>Count: <strong>{count}</strong></p>
            <p>Slow Squared Value: <strong>{squared}</strong></p>
            <button onClick={() => setCount(count + 1)}>➕ Increment Count</button>

            <br /><br />
            <input
                type="text"
                placeholder="Typing won't trigger slow calc"
                onChange={handleInput}
                style={{ padding: "5px" }}
            />
            <p>Input: {inputValue}</p>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default UseCallbackMemo;
