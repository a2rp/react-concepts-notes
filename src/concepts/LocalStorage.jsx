import { useEffect, useState } from "react";

const LocalStorage = () => {
    const [count, setCount] = useState(0);

    // 🧠 Load from localStorage when component mounts
    useEffect(() => {
        const saved = localStorage.getItem("my-count");
        if (saved) {
            setCount(Number(saved));
        }
    }, []);

    // 💾 Save to localStorage on count change
    useEffect(() => {
        localStorage.setItem("my-count", count);
    }, [count]);

    const codeExample = `
useEffect(() => {
  const saved = localStorage.getItem("my-count");
  if (saved) setCount(Number(saved));
}, []);

useEffect(() => {
  localStorage.setItem("my-count", count);
}, [count]);
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>💾 Local Storage in React</h1>

            <p>
                You can persist data across page reloads using <code>localStorage</code> and <code>useEffect</code>.
            </p>

            <h3>⚙️ Live Counter:</h3>
            <p>Count: <strong>{count}</strong></p>
            <button onClick={() => setCount((c) => c + 1)}>➕</button>{" "}
            <button onClick={() => setCount((c) => c - 1)}>➖</button>{" "}
            <button onClick={() => setCount(0)}>Reset</button>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default LocalStorage;
