// SubChild that needs the data
const SubChild = ({ user }) => {
    return (
        <p>
            👤 Username: <strong>{user}</strong>
        </p>
    );
};

// Child that passes it down
const Child = ({ user }) => {
    return (
        <div style={{ paddingLeft: "20px", borderLeft: "2px solid #aaa" }}>
            <p>📦 Child Component</p>
            <SubChild user={user} />
        </div>
    );
};

// Parent holding the data
const PropDrilling = () => {
    const userName = "AshishR";

    const codeExample = `
const SubChild = ({ user }) => <p>{user}</p>;

const Child = ({ user }) => (
  <div>
    <SubChild user={user} />
  </div>
);

const Parent = () => {
  const userName = "AshishR";
  return <Child user={userName} />;
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
            <h1>🔁 Prop Drilling</h1>

            <p>
                Prop drilling means passing data through multiple intermediate components just to reach a deeply nested child.
                It's common but quickly gets messy in large apps.
            </p>

            <h3>⚙️ Live Example:</h3>
            <div style={{ paddingLeft: "10px" }}>
                <p>🧑 Parent Component</p>
                <Child user={userName} />
            </div>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>

            <h3>💡 Real Fix (Later):</h3>
            <p>
                Instead of drilling, use <code>useContext</code> or global state (like Redux or Zustand).
            </p>
        </div>
    );
};

export default PropDrilling;
