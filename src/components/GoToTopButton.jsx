import { useEffect, useState } from "react";

const GoToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    padding: "10px 15px",
                    fontSize: "16px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    zIndex: 1000,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                }}
            >
                ↑ Top
            </button>
        )
    );
};

export default GoToTopButton;
