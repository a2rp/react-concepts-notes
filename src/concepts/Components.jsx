import { Component } from "react";

const FunctionalComponent = () => {
    return <p>👋 Hello from Functional Component!</p>;
};

class ClassComponent extends Component {
    render() {
        return <p>📦 Hello from Class Component!</p>;
    }
}

const Components = () => {
    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🧱 Components in React</h1>

            <p>
                In React, components are the building blocks of the UI. They can be defined using:
            </p>

            <ul>
                <li><strong>Functional Components</strong> – Modern and preferred way using functions</li>
                <li><strong>Class Components</strong> – Older way using ES6 classes</li>
            </ul>

            <h3>🧪 Functional Component Example:</h3>
            <pre>
                {`const Hello = () => {
  return <h2>Hello!</h2>;
}`}
            </pre>

            <h3>📦 Class Component Example:</h3>
            <pre>
                {`class Hello extends React.Component {
  render() {
    return <h2>Hello!</h2>;
  }
}`}
            </pre>

            <h3>⚙️ Live Examples:</h3>
            <FunctionalComponent />
            <ClassComponent />

            <h3>📚 Which one to use?</h3>
            <p>
                Functional components are now the standard, especially with Hooks like <code>useState</code> and <code>useEffect</code>.
            </p>
        </div>
    );
};

export default Components;
