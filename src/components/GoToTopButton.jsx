import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const GoToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            title="Scroll to top"
            style={{
                position: "fixed",
                right: "24px",
                bottom: "24px",
                width: "42px",
                height: "42px",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                background: "#171717",
                border: "1px solid #3a3a3a",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 1000,
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
        >
            <FaArrowUp aria-hidden="true" />
        </button>
    );
};

export default GoToTopButton;
