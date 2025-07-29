import { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const codeExample = `
import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
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
            <h1>🔍 useRef Hook</h1>

            <p>
                <code>useRef()</code> returns a mutable ref object whose <code>.current</code> property persists across renders.
            </p>
            <ul>
                <li>📌 Accessing DOM elements directly</li>
                <li>🧠 Holding non-stateful values</li>
                <li>⏱ Avoiding re-renders like state does</li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <input
                ref={inputRef}
                type="text"
                placeholder="Click the button to focus me"
                style={{ padding: "5px", marginRight: "10px" }}
            />
            <button onClick={handleFocus}>Focus Input</button>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default UseRef;
