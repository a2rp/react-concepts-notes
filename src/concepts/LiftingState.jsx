import { useState } from "react";

// Child 1: Input
const InputComponent = ({ onNameChange }) => {
    return (
        <input
            type="text"
            placeholder="Type your name"
            onChange={(e) => onNameChange(e.target.value)}
            style={{ padding: "5px", marginRight: "10px" }}
        />
    );
};

// Child 2: Display
const DisplayComponent = ({ name }) => {
    return <p>Your name is: <strong>{name}</strong></p>;
};

const codeExample = `
const [name, setName] = useState("");

<InputComponent onNameChange={setName} />
<DisplayComponent name={name} />

// InputComponent uses props to send input value up
// DisplayComponent uses props to show shared value
`;

const LiftingState = () => {
    const [name, setName] = useState("");

    return (
        <>

            <div
                style={{
                    marginBottom: "50px",
                    borderBottom: "1px solid #222",
                    paddingBottom: "50px",
                }}
            >
                <h1> Lifting State Up</h1>

                <p>
                    Sometimes, two sibling components need to share data. In such cases, you “lift” the shared state to their closest common parent and pass data via props.
                </p>

                <h3>⚙️ Live Example:</h3>
                <InputComponent onNameChange={setName} />
                <DisplayComponent name={name} />

                <h3>💻 Code:</h3>
                <pre>{codeExample}</pre>
            </div >
        </>
    );
};

export default LiftingState;
