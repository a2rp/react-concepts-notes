import React, { Component, useState } from "react";

// ❌ Buggy component that throws
const Buggy = () => {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("💥 Something broke!");
    }

    return <button onClick={() => setCrash(true)}>Crash Me 💣</button>;
};

// ✅ Error Boundary class
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Caught by Error Boundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <p style={{ color: "red" }}>⚠️ Something went wrong.</p>;
        }

        return this.props.children;
    }
}

const codeExample = `
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Logged:", error);
  }

  render() {
    if (this.state.hasError) return <p>Error UI</p>;
    return this.props.children;
  }
}

// Usage:
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>
`;

const ErrorBoundaries = () => {
    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🧱 Error Boundaries</h1>

            <p>
                Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and display a fallback UI.
            </p>

            <ul>
                <li>Only class components can be error boundaries</li>
                <li>Use <code>getDerivedStateFromError</code> and <code>componentDidCatch</code></li>
                <li>Use it to catch unexpected UI crashes gracefully</li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <ErrorBoundary>
                <Buggy />
            </ErrorBoundary>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default ErrorBoundaries;
