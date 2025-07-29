const ReactRouter = () => {
    const codeExample = `
📦 Install React Router:
npm install react-router-dom

🧭 Basic Setup:

import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Profile = () => {
  const { username } = useParams();
  return <h1>Profile: {username}</h1>;
};

<BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/user/john">User</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/user/:username" element={<Profile />} />
  </Routes>
</BrowserRouter>
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🧭 React Router (Code Only)</h1>

            <p>
                React Router enables client-side routing using components like <code>Routes</code>, <code>Route</code>, and <code>Link</code>.
            </p>

            <ul>
                <li><code>BrowserRouter</code>: Wraps your app for routing</li>
                <li><code>Link</code>: Navigate without page reload</li>
                <li><code>useParams</code>: Access route variables like IDs or usernames</li>
            </ul>

            <h3>💻 Example Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default ReactRouter;
