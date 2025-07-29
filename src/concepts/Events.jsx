import { useState } from "react";

const Events = () => {
    const [name, setName] = useState("");

    const handleClick = () => {
        alert("Button clicked!");
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const codeExample = `
import { useState } from "react";

const Events = () => {
  const [name, setName] = useState("");

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} placeholder="Type your name" />
      <button onClick={handleClick}>Click Me</button>
      <p>Hello, {name}</p>
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
            <h1>🎯 Event Handling in React</h1>

            <p>
                React handles events like clicks, input changes, etc. using camelCase event names like <code>onClick</code>, <code>onChange</code>, etc.
            </p>

            <h3>🧪 Common Events:</h3>
            <ul>
                <li><code>onClick</code> – when a button or element is clicked</li>
                <li><code>onChange</code> – when input or select value changes</li>
                <li><code>onSubmit</code> – when a form is submitted</li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Type your name"
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <button onClick={handleClick}>Click Me</button>
            <p>Hello, {name}</p>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default Events;
