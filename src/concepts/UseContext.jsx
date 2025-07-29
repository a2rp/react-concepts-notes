import { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext();

// 2️⃣ Create Provider Component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3️⃣ Child Component using context
const ThemedBox = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const boxStyle = {
        background: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "15px"
    };

    return (
        <div style={boxStyle}>
            <p>Current theme: <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

const codeExample = `
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedBox = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};
`;

const UseContext = () => {
    return (
        <div
            style={{
                marginBottom: "50px",
                borderBottom: "1px solid #222",
                paddingBottom: "50px"
            }}
        >
            <h1>🌐 useContext Hook</h1>

            <p>
                <code>useContext</code> allows you to consume data from a React Context — a global-like store for state across components.
            </p>

            <h3>🔗 Why use it?</h3>
            <ul>
                <li>Share global data (like theme, auth, language)</li>
                <li>Avoid "prop drilling"</li>
                <li>Cleaner architecture for large apps</li>
            </ul>

            <h3>⚙️ Live Example:</h3>
            <ThemeProvider>
                <ThemedBox />
            </ThemeProvider>

            <h3>💻 Code:</h3>
            <pre>{codeExample}</pre>
        </div>
    );
};

export default UseContext;
