const Card = ({ title, children }) => {
    return (
        <div
            style={{
                border: "2px solid #555",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px"
            }}
        >
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    );
};

const Composition = () => {
    const codeExample = `
const Card = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

<Card title="User Info">
  <p>Name: John Doe</p>
  <p>Role: Admin</p>
</Card>
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>📦 Component Composition</h1>

            <p>
                React promotes composition over inheritance. This means you build components that are flexible by accepting
                <code>children</code> and customizing what's rendered inside.
            </p>

            <h3>⚙️ Live Example:</h3>
            <Card title="📘 React Developer">
                <p>Name: Ashish Ranjan</p>
                <p>Level: Intermediate</p>
            </Card>

            <Card title="🔧 System Info">
                <p>CPU: Intel i5</p>
                <p>RAM: 16GB</p>
            </Card>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default Composition;
