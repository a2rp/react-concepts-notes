import { useRef, useState } from "react";

const ControlledVsUncontrolled = () => {
    const [controlledValue, setControlledValue] = useState("");
    const uncontrolledRef = useRef(null);

    const handleControlledChange = (e) => {
        setControlledValue(e.target.value);
    };

    const handleUncontrolledRead = () => {
        alert(`Uncontrolled Input Value: ${uncontrolledRef.current.value}`);
    };

    const codeExample = `
const [controlledValue, setControlledValue] = useState("");
const uncontrolledRef = useRef(null);

// Controlled Input
<input value={controlledValue} onChange={handleControlledChange} />

// Uncontrolled Input
<input ref={uncontrolledRef} />
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px",
            }}
        >
            <h1>🎛️ Controlled vs Uncontrolled Components</h1>

            <p>
                In React, form inputs can be:
                <ul>
                    <li><strong>Controlled</strong> – value is managed via <code>useState</code></li>
                    <li><strong>Uncontrolled</strong> – value is accessed via a <code>ref</code></li>
                </ul>
            </p>

            <h3>⚙️ Controlled Input:</h3>
            <input
                type="text"
                value={controlledValue}
                onChange={handleControlledChange}
                placeholder="Controlled"
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <p>Value: <strong>{controlledValue}</strong></p>

            <h3>⚙️ Uncontrolled Input:</h3>
            <input
                type="text"
                ref={uncontrolledRef}
                placeholder="Uncontrolled"
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <button onClick={handleUncontrolledRead}>Read Value</button>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default ControlledVsUncontrolled;
