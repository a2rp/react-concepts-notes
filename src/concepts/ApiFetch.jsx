import { useEffect, useState } from "react";

const ApiFetch = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch!");
                return res.json();
            })
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const codeExample = `
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => setPost(data))
    .catch(err => setError(err.message));
}, []);
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🌐 Fetching Data in React</h1>

            <p>
                React doesn’t come with built-in data fetching. Use JavaScript’s <code>fetch()</code> or a library like <code>axios</code>, typically inside a <code>useEffect</code> hook.
            </p>

            <h3>⚙️ Live Example:</h3>
            {loading && <p>⏳ Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {post && (
                <div style={{ background: "#eee", padding: "10px", borderRadius: "8px" }}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            )}

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default ApiFetch;
