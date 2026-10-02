const JSX = () => {
    const name = "React Learner";

    const showGreeting = () => {
        return <p style={{ color: "#b4b4b4" }}>Welcome, {name}!</p>;
    };

    return (
        <>
            <div
                style={{
                    marginBottom: "50px",
                    borderBottom: "1px solid #222",
                    paddingBottom: "50px"
                }}
            >
                <h1>🔤 JSX in React</h1>

                <p>
                    JSX stands for <strong>JavaScript XML</strong>. It's a syntax extension for JavaScript that looks like HTML.
                    JSX makes it easy to describe the UI structure directly in JavaScript code.
                </p>

                <h3>🔧 Why Use JSX?</h3>
                <ul>
                    <li>More readable and expressive</li>
                    <li>Integrates HTML-like syntax with JavaScript logic</li>
                    <li>Used by all modern React apps</li>
                </ul>

                <h3> Example:</h3>
                <pre>
                    {`const element = <h1>Hello JSX!</h1>;`}
                </pre>

                <p>
                    This gets compiled into:
                </p>

                <pre>
                    {`React.createElement('h1', null, 'Hello JSX!');`}
                </pre>

                <h3> Live JSX Example:</h3>
                <div>{showGreeting()}</div>
            </div>
        </>
    );
};

export default JSX;
