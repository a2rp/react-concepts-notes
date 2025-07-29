const Message = ({ sender, content }) => {
    return (
        <div style={{ padding: "0.5rem", border: "1px solid #ccc", margin: "0.5rem 0" }}>
            <p><strong>{sender}:</strong> {content}</p>
        </div>
    );
};

const Props = () => {
    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>📨 Props in React</h1>

            <p>
                <strong>Props</strong> (short for "properties") are used to pass data from one component to another, usually from a parent to a child.
            </p>

            <h3>🔧 Why Props?</h3>
            <ul>
                <li>Enable reusable and dynamic components</li>
                <li>Allow data to flow downward in the component tree</li>
                <li>Immutable – props cannot be changed by the child</li>
            </ul>

            <h3>💡 Example:</h3>
            <pre>
                {`<Message sender="Alice" content="Hello there!" />`}
            </pre>

            <h3>⚙️ Live Example:</h3>
            <Message sender="Alice" content="Hello there!" />
            <Message sender="Bob" content="Props are awesome!" />
            <Message sender="System" content="Let's go React!" />

            <h3>📌 Note:</h3>
            <p>
                Props are read-only. If you need to change data inside a component, use <code>state</code> instead.
            </p>
        </div>
    );
};

export default Props;
