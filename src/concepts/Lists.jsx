const users = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Tester" },
];

const Lists = () => {
    const codeExample = `
const users = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Tester" },
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name} - {user.role}
      </li>
    ))}
  </ul>
);
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px",
            }}
        >
            <h1>📋 Rendering Lists in React</h1>

            <p>
                React makes it easy to render multiple items using the JavaScript <code>.map()</code> function.
            </p>

            <h3>📌 Why Keys Matter:</h3>
            <ul>
                <li>Keys help React identify which items changed</li>
                <li>They improve performance and prevent bugs during re-renders</li>
                <li>Use a unique and stable key (like <code>id</code>)</li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - <em>{user.role}</em>
                    </li>
                ))}
            </ul>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default Lists;
