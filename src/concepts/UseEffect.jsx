import { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("🛎 Effect ran! Count is", count);
        document.title = `Count: ${count}`;

        return () => {
            console.log("♻️ Cleanup before next effect or unmount");
        };
    }, [count]);

    const codeExample = `
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran! Count is", count);
    document.title = \`Count: \${count}\`;

    return () => {
      console.log("Cleanup before next effect or unmount");
    };
  }, [count]);

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
                paddingBottom: "50px",
            }}
        >
            <h1>🔁 useEffect Hook</h1>

            <p>
                The <code>useEffect</code> hook lets you run side effects in functional components, like:
            </p>
            <ul>
                <li>⏳ Fetching data</li>
                <li>🧹 Setting up intervals or subscriptions</li>
                <li>📦 Interacting with localStorage or document title</li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default UseEffect;
