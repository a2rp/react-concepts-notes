import React, { lazy, Suspense, useState } from "react";

// Lazy load a component
const LazyComponent = lazy(() => import("./LazyHello"));

const LazyLoading = () => {
    const [show, setShow] = useState(false);

    const codeExample = `
const LazyComponent = lazy(() => import("./LazyHello"));

<Suspense fallback={<p>Loading...</p>}>
  <LazyComponent />
</Suspense>
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px",
            }}
        >
            <h1>🧩 Code Splitting & Lazy Loading</h1>

            <p>
                <strong>Code splitting</strong> means breaking your app into smaller chunks so only what's needed is loaded. This improves performance.
            </p>

            <ul>
                <li><code>React.lazy()</code> loads components on demand</li>
                <li><code>Suspense</code> displays fallback while loading</li>
            </ul>

            <button onClick={() => setShow(true)}>Load Component</button>

            <br /><br />

            {show && (
                <Suspense fallback={<p>⏳ Loading...</p>}>
                    <LazyComponent />
                </Suspense>
            )}

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default LazyLoading;
