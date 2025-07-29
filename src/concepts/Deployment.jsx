const Deployment = () => {
    const codeExample = `
📦 Option 1: GitHub Pages (static hosting)
- npm install gh-pages --save-dev
- Add to package.json:
  "homepage": "https://yourusername.github.io/repo"
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
- Run: npm run deploy

🌐 Option 2: Netlify (drag-and-drop or Git connected)
- Build command: npm run build
- Publish directory: dist/ or build/
- Handles routing via _redirects file

⚡ Option 3: Vercel (one-click, Git-based CI)
- Best for Next.js but supports CRA/Vite
- Auto preview deploys per push
`;

    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🚀 Deployment Recap</h1>

            <p>
                React apps are typically deployed using static hosting platforms. These serve the built output of your app (<code>dist/</code> or <code>build/</code> folder).
            </p>

            <ul>
                <li><strong>GitHub Pages</strong> – Free, great for portfolios & docs</li>
                <li><strong>Netlify</strong> – Fast CI/CD, drag-drop deploys</li>
                <li><strong>Vercel</strong> – Best for Next.js, also supports Vite/React</li>
            </ul>

            <h3>🗂 Important Tips:</h3>
            <ul>
                <li>Set <code>base</code> in <code>vite.config.js</code> for GitHub Pages</li>
                <li>Add <code>_redirects</code> for Netlify if using React Router</li>
                <li>Always push <code>dist</code> or <code>build</code>, not source files</li>
            </ul>

            <h3>📄 Example Configs:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default Deployment;
