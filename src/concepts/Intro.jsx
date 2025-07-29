const Intro = () => {
    return (
        <div style={{ marginBottom: "100px" }}>
            <h1>⚛️ What is React?</h1>
            <p>
                React is an open-source JavaScript library created by Facebook for building fast, interactive user interfaces. It's component-based and declarative, which makes complex UI easier to manage.
            </p>

            <h3>🚀 Key Features:</h3>
            <ul>
                <li>Component-Based Architecture</li>
                <li>Declarative UI</li>
                <li>Virtual DOM for high performance</li>
                <li>Reusable Logic via Hooks</li>
            </ul>

            <h3>📦 React in Action:</h3>
            <p>You can build reusable components like this simple greeting:</p>

            <pre>
                {`function Greeting() {
  return <h2>Hello from React!</h2>;
}`}
            </pre>

            <h3>📚 Why Learn React?</h3>
            <p>
                It's the most popular front-end library used by top companies. It helps build SPAs (Single Page Applications)
                efficiently with great developer experience.
            </p>
        </div>
    );
};

export default Intro;
