import { useState } from "react";

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

    const codeExample = `
import { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>
      {isLoggedIn && <p>You now have access to your dashboard.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
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
            <h1>🔀 Conditional Rendering</h1>

            <p>
                React allows us to render different UI based on conditions using standard JavaScript expressions like:
            </p>

            <ul>
                <li><strong>if / else</strong> (used inside logic)</li>
                <li><strong>ternary operators</strong>: <code>{`condition ? A : B`}</code></li>
                <li><strong>logical &&</strong>: <code>{`condition && A`}</code></li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <h2>{isLoggedIn ? "✅ Welcome Back!" : "🚪 Please Log In"}</h2>
            {isLoggedIn && <p>You now have access to your dashboard.</p>}
            <button onClick={toggleLogin}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default ConditionalRendering;
