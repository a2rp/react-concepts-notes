import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";

const Home = () => <h3>🏠 Welcome to the Home Page</h3>;
const About = () => <h3>ℹ️ This is the About Page</h3>;
const Profile = () => {
    const { username } = useParams();
    return <h3>👤 Profile for user: <strong>{username}</strong></h3>;
};

const codeExample = `
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

<BrowserRouter>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/user/ash">User</Link>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/user/:username" element={<Profile />} />
  </Routes>
</BrowserRouter>
`;

const ReactRouter = () => {
    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🧭 React Router (v6)</h1>

            <p>
                React Router is the standard library for routing in React. It enables navigation between components via URLs.
            </p>

            <h3>⚙️ Live Example:</h3>

            <BrowserRouter>
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <Link to="/">🏠 Home</Link>
                    <Link to="/about">ℹ️ About</Link>
                    <Link to="/user/aashish">👤 Profile</Link>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user/:username" element={<Profile />} />
                </Routes>
            </BrowserRouter>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default ReactRouter;
